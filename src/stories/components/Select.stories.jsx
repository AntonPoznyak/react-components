import Select from '../../components/Select'
import { useState } from 'react'

export default {
  title: 'Components/Select',
  component: Select,
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
    title: {
      control: 'text',
      description: 'Заголовок селекта',
    },
    value: {
      control: 'text',
      description: 'Выбранное значение',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключен ли селект',
    },
    additionalText: {
      control: 'text',
      description: 'Дополнительный текст справа',
    },
    caption: {
      control: 'text',
      description: 'Подпись под селектом',
    },
    error: {
      control: 'text',
      description: 'Текст ошибки',
    },
    options: {
      control: 'array',
      description: 'Массив опций для выбора',
    },
    placeholder: {
      control: 'text',
      description: 'Текст плейсхолдера',
    },
    onChange: {
      action: 'changed',
      description: 'Обработчик изменения значения',
    },
  },
}

const defaultOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
]

// Базовый вариант
export const Default = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          args.onChange?.(e)
        }}
      />
    )
  },
  args: {
    title: 'Label',
    placeholder: 'Select option',
    options: defaultOptions,
  },
}

// С выбранным значением
export const WithValue = {
  render: (args) => {
    const [value, setValue] = useState('1')
    return (
      <Select
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          args.onChange?.(e)
        }}
      />
    )
  },
  args: {
    title: 'Select',
    options: defaultOptions,
  },
}

// С дополнительным текстом
export const WithAdditionalText = {
  render: (args) => {
    const [value, setValue] = useState('1')
    return (
      <Select
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          args.onChange?.(e)
        }}
      />
    )
  },
  args: {
    title: 'Category',
    options: defaultOptions,
    additionalText: 'items',
  },
}

// С подписью
export const WithCaption = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          args.onChange?.(e)
        }}
      />
    )
  },
  args: {
    title: 'Select',
    options: defaultOptions,
    caption: 'Choose one option from the list',
  },
}

// Отключенное состояние
export const Disabled = {
  render: (args) => {
    const [value, setValue] = useState('1')
    return (
      <Select
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          args.onChange?.(e)
        }}
      />
    )
  },
  args: {
    title: 'Select',
    options: defaultOptions,
    disabled: true,
  },
}

// Без заголовка
export const WithoutTitle = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          args.onChange?.(e)
        }}
      />
    )
  },
  args: {
    title: '',
    options: defaultOptions,
    placeholder: 'Without title',
  },
}

// С заголовком и подписью
export const WithTitleAndCaption = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          args.onChange?.(e)
        }}
      />
    )
  },
  args: {
    title: 'Select',
    options: defaultOptions,
    placeholder: 'Choose option',
    caption: 'This will be your selected option',
  },
}

// С ошибкой
export const WithError = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          args.onChange?.(e)
        }}
      />
    )
  },
  args: {
    title: 'Select',
    options: defaultOptions,
    error: 'Please select an option',
  },
} 