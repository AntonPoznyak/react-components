import {
  ArrowRightIcon,
  ShareIcon,
} from '@heroicons/react/24/outline'
import Button from '../../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['CTA', 'primary', 'secondary', 'ghost', 'danger'],
    },
    disabled: {
      control: 'boolean',
    },
    href: {
      control: 'text',
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
  },
}

// Базовые варианты кнопок
export const Primary = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
}

export const Secondary = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

export const CTA = {
  args: {
    children: 'CTA Button',
    variant: 'CTA',
  },
}

export const Ghost = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
}

export const Danger = {
  args: {
    children: 'Danger Button',
    variant: 'danger',
  },
}

// Состояния кнопок
export const Disabled = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
}

// Кнопки с иконками
const iconClasses = 'w-4 h-4'

export const WithIconRight = {
  args: {
    children: 'Button with Icon',
    variant: 'primary',
    icon: <ArrowRightIcon className={iconClasses} />,
    iconPosition: 'right',
  },
}

export const WithIconLeft = {
  args: {
    children: 'Button with Icon',
    variant: 'primary',
    icon: <ShareIcon className={iconClasses} />,
    iconPosition: 'left',
  },
}

// Кнопки-ссылки
export const AsLink = {
  args: {
    children: 'Link Button',
    variant: 'primary',
    href: '#',
    icon: <ArrowRightIcon className={iconClasses} />,
    iconPosition: 'right',
  },
} 