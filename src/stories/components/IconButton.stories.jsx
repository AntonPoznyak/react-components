import {
  PencilIcon,
  TrashIcon,
  HeartIcon,
  ShareIcon,
  ArrowPathIcon,
  BookmarkIcon,
} from '@heroicons/react/24/outline'
import IconButton from '../../components/IconButton'

export default {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    disabled: {
      control: 'boolean',
    },
    href: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
  },
}

const iconClasses = 'w-4 h-4'

// Базовые варианты кнопок
export const Primary = {
  args: {
    icon: <PencilIcon className={iconClasses} />,
    variant: 'primary',
    title: 'Edit',
  },
}

export const Secondary = {
  args: {
    icon: <BookmarkIcon className={iconClasses} />,
    variant: 'secondary',
    title: 'Bookmark',
  },
}

export const Ghost = {
  args: {
    icon: <HeartIcon className={iconClasses} />,
    variant: 'ghost',
    title: 'Like',
  },
}

export const Danger = {
  args: {
    icon: <TrashIcon className={iconClasses} />,
    variant: 'danger',
    title: 'Delete',
  },
}

// Состояния кнопок
export const Disabled = {
  args: {
    icon: <PencilIcon className={iconClasses} />,
    variant: 'primary',
    disabled: true,
    title: 'Edit (Disabled)',
  },
}

// Кнопки-ссылки
export const AsLink = {
  args: {
    icon: <ShareIcon className={iconClasses} />,
    variant: 'primary',
    href: '#',
    title: 'Share Link',
  },
}