import ListItem from '../../components/ListItem'
import { icons } from '../../assets/icons'

export default {
  title: 'Components/ListItem',
  component: ListItem,
  decorators: [
    (Story) => (
      <div style={{ width: '256px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(icons),
      description: 'Иконка для отображения',
    },
    text: {
      control: 'text',
      description: 'Текст элемента списка',
    },
    selected: {
      control: 'boolean',
      description: 'Выбран ли элемент',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключен ли элемент',
    },
    onClick: {
      action: 'clicked',
      description: 'Обработчик клика',
    },
  },
}

// Базовый вариант
export const Default = {
  args: {
    icon: 'trash',
    text: 'List item',
  },
}

// С выбранным состоянием
export const Selected = {
  args: {
    icon: 'trash',
    text: 'Selected item',
    selected: true,
  },
}

// Отключенное состояние
export const Disabled = {
  args: {
    icon: 'trash',
    text: 'Disabled item',
    disabled: true,
  },
}