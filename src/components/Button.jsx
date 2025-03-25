const Button = ({ 
  children, 
  variant = 'primary',
  onClick,
  href,
  target = '_self',
  disabled = false,
  className = '',
  icon = null,
  iconPosition = 'left'
}) => {
  const baseStyles = 'px-2 py-2 rounded-md transition-colors focus:outline-none inline-flex items-center justify-center button-text'
  
  const variants = {
    CTA: 'bg-cta text-cta-contrast',
    primary: 'bg-primary text-primary-contrast',
    secondary: 'bg-secondary text-secondary-contrast border border-border',
    danger: 'bg-danger text-danger-contrast',
    ghost: 'bg-ghost text-ghost-contrast'
  }

  const hoverStyles = {
    CTA: 'hover:bg-cta-hover',
    primary: 'hover:bg-primary-hover',
    secondary: 'hover:bg-secondary-hover hover:border-border-hover',
    ghost: 'hover:bg-ghost-hover',
    danger: 'hover:bg-danger-hover'
  }

  const activeStyles = {
    CTA: 'active:bg-cta-active',
    primary: 'active:bg-primary-active',
    secondary: 'active:bg-secondary-active active:border-border-active',
    ghost: 'active:bg-ghost-active',
    danger: 'active:bg-danger-active'
  }

  const focusStyles = {
    CTA: 'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
    primary: 'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
    secondary: 'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
    ghost: 'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
    danger: 'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-danger'
  }

  const commonProps = {
    className: `
      ${baseStyles}
      ${variants[variant]}
      ${!disabled && hoverStyles[variant]}
      ${!disabled && activeStyles[variant]}
      ${!disabled && focusStyles[variant]}
      ${disabled ? 'opacity-30 cursor-not-allowed' : ''}
      ${className}
    `,
    disabled
  }

  if (href && !disabled) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        {...commonProps}
      >
        {iconPosition === 'left' && icon}
        <span className="px-2">{children}</span>
        {iconPosition === 'right' && icon}
      </a>
    )
  }

  return (
    <button
      onClick={disabled ? undefined : onClick}
      {...commonProps}
    >
      {iconPosition === 'left' && icon}
      <span className="px-2">{children}</span>
      {iconPosition === 'right' && icon}
    </button>
  )
}

export default Button 