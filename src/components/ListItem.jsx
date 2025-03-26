import { icons } from '../assets/icons'

const ListItem = ({
  icon = 'trash',
  text,
  selected = false,
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  const Icon = icons[icon]

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        p-2
        flex items-center gap-2
        rounded-lg
        text-p-small-semibold text-text-secondary
        bg-transparent
        hover:bg-list-item-hover
        ${selected ? 'bg-list-item-hover' : ''}
        ${disabled ? 'opacity-32 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      {...props}
    >
      <Icon className="w-[16px] h-[16px] text-icon-secondary" />
      <span className="truncate">{text}</span>
    </button>
  )
}

export default ListItem 