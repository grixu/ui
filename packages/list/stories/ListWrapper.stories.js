import ListWrapper from "@/Wrapper.vue"
import Button from '@grixu/button'
import Avatar from '@grixu/avatar'
import IconTrash from '~icons/heroicons-solid/trash'
import IconFolderOpen from '~icons/heroicons-solid/folder-open'

const items = []
const wrapperItems = 9

for (let i = 0; i < wrapperItems; i++) {
	items.push({})
}

export default {
	component: ListWrapper,
	title: "List/Wrapper",
	args: {
		headerText: 'Jane Doe',
		date: new Date(),
		text: 'Lorem ipsum dolor it samet',
		layout: 'stack'
	},
	argTypes: {
		items: {
			table: {
				category: "Props",
			},
			description: "tablica z danymi po której iterujemy i jej obiekty przepuszczamy do propsami w dół do komponentów",
		},
		layout: {
			table: {
				category: "Props",
				defaultValue: { summary: 'stack' },
			},
			control: {
				type: 'select',
				options: ['stack', 'grid']
			},
			description: "String flag which controls how whole stack will be rendered as",
		},
	},
	parameters: {
		docs: {
			description: {
				component:
					"Wrapper component, which allows to display array of objects as a stack list or grid.",
			},
		},
	},
}

const GridContent = args => ({
	components: { ListWrapper, Button, Avatar, IconFolderOpen, IconTrash },
	setup () {
		const items = new Array(100).fill(1).map(() => {
			return {
				fullname: args.headerText,
				content: args.text,
				date: new Date(args.date.setHours(Math.random() * 100))
			}
		})
		return { items, layout: args.layout }
	},
	template: `<ListWrapper :layout="layout" :items='items'>
		<template #header="{ item }">{{ item.fullname }}</template>
		<template #default="{ item }">{{ item.content }}</template>
		<template #avatar="{ item }">
			<Avatar :text="item.fullname" />
		</template>
		<template #details="{ item }">{{ item.date }}</template>
		<template #buttons>
			<div class="ml-auto">
				<Button color="primary" with-icon>
					<template #icon>
						<IconTrash />
					</template>
				</Button>
			</div>
		</template>
	</ListWrapper>`,
})

export const Grid = GridContent.bind({})
Grid.args = { layout: 'grid' }

const StackContent = args => ({
	components: { ListWrapper, Button, Avatar, IconFolderOpen, IconTrash },
	setup() {
		const items = new Array(100).fill(1).map(() => {
			return {
				fullname: args.headerText,
				content: args.text,
				date: new Date(args.date.setHours(Math.random() * 100))
			}
		})
		return { items, layout: args.layout }
	},
	template: `<ListWrapper :layout="layout" :items='items'>
		<template #header="{ item }">
			<span class="text-2xl">{{ item.fullname }}</span>
			<br/>
			<small>{{ item.date }}</small>
		</template>
		<template #avatar>
			<Avatar class="h-16 w-16 self-start" img="https://www.polskieprzetwornice.pl/sklep/img/avatar3.png" />
		</template>
		<template #default="{ item }">
			{{ item.content }}
		</template>
		<template #buttons>
			<div class="flex gap-x-2 h-10">
				<IconFolderOpen class="h-10 w-10 fill text-success" />
				<IconTrash class="h-10 w-10 fill text-error" />
			</div>
		</template>
	</ListWrapper>`,
})

export const Stack = StackContent.bind({})
Stack.args = { layout: 'stack' }
