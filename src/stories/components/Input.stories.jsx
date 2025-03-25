import Input from '../../components/Input'

export default {
  title: 'Components/Input',
  component: Input,
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
      description: 'Заголовок поля ввода',
    },
    placeholder: {
      control: 'text',
      description: 'Подсказка в поле ввода',
    },
    value: {
      control: 'text',
      description: 'Значение поля ввода',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключено ли поле ввода',
    },
    additionalText: {
      control: 'text',
      description: 'Дополнительный текст справа',
    },
    caption: {
      control: 'text',
      description: 'Подпись под полем ввода',
    },
    error: {
      control: 'text',
      description: 'Текст ошибки',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
      description: 'Тип поля ввода',
    },
    maxLength: {
      control: 'number',
      description: 'Максимальная длина текста',
    },
  },
}

// Базовый вариант
export const Default = {
  args: {
    title: 'Label',
    placeholder: 'Placeholder',
  },
}

// С заполненным значением
export const WithValue = {
  args: {
    title: 'Email',
    value: 'example@email.com',
    type: 'email',
  },
}

// С дополнительным текстом
export const WithAdditionalText = {
  args: {
    title: 'Price',
    value: '100',
    type: 'number',
    additionalText: 'USD',
  },
}

// С подписью
export const WithCaption = {
  args: {
    title: 'Password',
    type: 'password',
    caption: 'Must be at least 8 characters',
  },
}

// Отключенное состояние
export const Disabled = {
  args: {
    title: 'Input',
    value: 'Disabled value',
    disabled: true,
  },
}

// Без заголовка
export const WithoutTitle = {
  args: {
    title: '',
    placeholder: 'Without title',
  },
}

// С заголовком и подписью
export const WithTitleAndCaption = {
  args: {
    title: 'Username',
    placeholder: 'Enter username',
    caption: 'This will be your public display name',
  },
}

// С ошибкой
export const WithError = {
  args: {
    title: 'Email',
    type: 'email',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
  },
}

// С ограничением длины
export const WithMaxLength = {
  args: {
    title: 'Username',
    placeholder: 'Max 10 characters',
    maxLength: 10,
    caption: 'Enter up to 10 characters',
  },
}

// Числовой инпут
export const NumberInput = {
  args: {
    title: 'Amount',
    type: 'number',
    placeholder: 'Enter amount',
    caption: 'Only numbers allowed',
  },
} 