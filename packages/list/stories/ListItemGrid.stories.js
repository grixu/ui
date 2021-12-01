import ListItemGrid from "../src/ItemGrid.vue"
import Button from '@grixu/button'
import Avatar from '@grixu/avatar'
import IconTrash from '~icons/heroicons-solid/trash'
import IconFolderOpen from '~icons/heroicons-solid/folder-open'

export default {
	component: ListItemGrid,
	title: "List/ItemGrid",
	args: {
		content: "Example content here",
		date: "21.04.21",
		fullname: "John Doe",
	},
	argTypes: {
		item: {
			type: {
				name: 'object',
				required: true
			},
			table: {
				category: "Props",
			},
			description: "An object which is bind in every scoped slot",
		},
		default: {
			table: {
				category: "Scoped Slots",
			},
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
		details: {
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

	decorators: [() => ({ template: '<div style="width: 350px;"><story/></div>' })],
	parameters: {
		docs: {
			page: null,
		},
	},
}

const Template = (args) => ({
	components: { ListItemGrid, Avatar, Button, IconTrash },
	setup() {
		const item = {
			fullname: args.fullname,
			content: args.content,
			date: args.date,
		}
		return { item }
	},
	template: `<ListItemGrid :item="item">
		<template #header="{ item }">{{ item.fullname}}</template>
		<template #default="{ item }">{{ item.content}}</template>
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
	</ListItemGrid>`,
})

export const ExampleOne = Template.bind({})

const TemplateTwo = (args) => ({
	components: { ListItemGrid, Avatar, Button, IconTrash, IconFolderOpen },

	setup() {
		const item = {
			fullname: args.fullname,
			content: args.content,
			date: args.date,
		}

		return { item }
	},

	template: `<ListItemGrid :item="item">
		<template #header="{ item }">
     	<h1 class="text-2xl">{{ item.fullname }}</h1>
		</template>
		<template #default="{ item }">
			<span class="text-gray">{{ item.content }}</span>
		</template>
	 	<template #avatar="{ item }">
      <Avatar class="h-12 w-12" :text="item.fullname" />
		</template>
	 	<template #buttons>
      <div class="ml-auto flex gap-x-3">
        <Button color="success" with-icon>
					<template #icon><IconFolderOpen /></template>
				</Button>
        <Button color="warning" with-icon>
					<template #icon><IconTrash /></template>
				</Button>
      </div>
	 	</template>
	</ListItemGrid>`,
})

export const ExampleTwo = TemplateTwo.bind({})
