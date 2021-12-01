import ListItemStacked from "@/ItemStacked.vue"
import Button from '@grixu/button'
import Avatar from '@grixu/avatar'
import IconTrash from '~icons/heroicons-solid/trash'
import IconFolderOpen from '~icons/heroicons-solid/folder-open'

export default {
	component: ListItemStacked,
	title: "List/ItemStacked",
	args: {
		headerText: "Attachment",
		text: "Lorem ipsum dolor amat asum",
		date: "21.04.21",
	},
	argTypes: {
		item: {
			table: {
				category: "Props",
			},
			description: "An object which is bind in every scoped slot",
		},
		header: {
			table: {
				category: "Scoped Slots",
			},
		},
		avatar: {
			table: {
				category: "Scoped Slots",
			},
		},
		default: {
			table: {
				category: "Scoped Slots",
			},
		},
		buttons: {
			table: {
				category: "Scoped Slots",
			},
		},
	},
	parameters: {
		docs: {
			description: {
				component: "Component designed to display data from objects in stacked list elements.",
			},
		},
	},
}

const Template = (args) => ({
	components: { ListItemStacked, IconTrash, Button, Avatar },
	setup() {
		const item = {
			header: args.headerText,
			text: args.text,
		}
		return { item }
	},
	template: `<ListItemStacked :item="item">
		<template #header="{ item }">
			<span class="text-lg">{{ item.header }}</span>
		</template>
		<template #avatar>
			<Avatar class="h-12 w-12" img="https://www.polskieprzetwornice.pl/sklep/img/avatar3.png" />
		</template>
		<template #default="{ item }">
			{{ item.text }}
		</template>
		<template #buttons>
			<Button with-icon>
				<template #icon>
					<IconTrash class='h-8 w-8 fill text-primary-darker hover:text-primary-regular'></IconTrash>
				</template>
			</Button>
		</template>
	</ListItemStacked>`,
})

export const ExampleOne = Template.bind({})

const TemplateTwo = args => ({
	components: { ListItemStacked, IconTrash, IconFolderOpen, Button, Avatar },
	setup() {
		const item = {
			header: args.headerText,
			text: args.text,
			date: args.date,
		}
		return { item }
	},
	template: `<ListItemStacked :item="item">
		<template #header="{ item }">
			<span class="text-2xl">{{ item.header }}</span>
				<br/>
		 <small>{{ item.date }}</small>
		</template>
		<template #avatar>
			<Avatar class="h-16 w-16 self-start" img="https://www.polskieprzetwornice.pl/sklep/img/avatar3.png" />
		</template>
		<template #default="{ item }">
			 {{ item.text }}
		</template>
		<template #buttons>
			<div class="flex gap-x-2 h-10">
				<IconFolderOpen class="h-10 w-10 fill text-success" />
				<IconTrash class="h-10 w-10 fill text-error" />
			</div>
		</template>
	</ListItemStacked>`,
})

export const ExampleTwo = TemplateTwo.bind({})
