import { icons } from '../assets/icons'

const IconButton = ({
  icon = 'trash',
  variant = 'primary',
  disabled = false,
  onClick,
  className = '',
  title,
  ...props
}) => {
  const Icon = icons[icon]

  const baseStyles = 'p-1.5 rounded-md transition-colors focus:outline-none inline-flex items-center justify-center font-sans font-medium text-[13px] leading-4'

  const variantStyles = {
    primary: 'text-text-primary hover:bg-primary-hover active:bg-primary-active',
    secondary: 'text-text-primary hover:bg-secondary-hover active:bg-secondary-active border border-border',
    ghost: 'text-text-primary hover:bg-ghost-hover active:bg-ghost-active',
    danger: 'text-danger hover:bg-danger-hover active:bg-danger-active',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${disabled ? 'opacity-32 cursor-not-allowed' : ''}
        ${className}
      `}
      title={title}
      {...props}
    >
      <Icon className="w-4 h-4" />
    </button>
  )
}

export default IconButton 