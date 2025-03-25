const Input = ({
  title = 'Label',
  placeholder,
  value,
  onChange,
  disabled = false,
  additionalText,
  caption,
  error,
  className = '',
  type = 'text',
  maxLength,
  onBlur,
  onFocus,
  ...props
}) => {
  // Обработчик изменений для числового инпута
  const handleChange = (e) => {
    if (type === 'number') {
      const value = e.target.value;
      // Разрешаем пустую строку или числа
      if (value === '' || /^\d*\.?\d*$/.test(value)) {
        onChange?.(e);
      }
    } else {
      onChange?.(e);
    }
  };

  // Обработчик потери фокуса
  const handleBlur = (e) => {
    if (type === 'number' && e.target.value) {
      // Форматируем число при потере фокуса
      const formattedValue = parseFloat(e.target.value).toString();
      e.target.value = formattedValue;
    }
    onBlur?.(e);
  };

  // Обработчик получения фокуса
  const handleFocus = (e) => {
    onFocus?.(e);
  };

  return (
    <div className="flex flex-col gap-1">
      {title && (
        <label className={`
          text-p-small-semibold 
          text-text-primary
          ${disabled ? 'opacity-32' : ''}
        `}>
          {title}
        </label>
      )}
      
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          disabled={disabled}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`
            w-full px-3 py-2 
            rounded-lg
            border ${error ? 'border-danger' : 'border-border'}
            bg-paper ${disabled ? 'bg-paper-disable' : ''}
            transition-colors
            outline-none
            text-p-small
            text-text-primary
            placeholder:text-text-placeholder
            placeholder:text-p-small
            hover:border-border-hover
            focus:border-border
            focus:ring-1
            focus:ring-focus
            focus:ring-offset-1
            disabled:opacity-32 
            disabled:cursor-not-allowed
            [appearance:textfield]
            [&::-webkit-outer-spin-button]:appearance-none
            [&::-webkit-inner-spin-button]:appearance-none
            ${additionalText ? 'pr-16' : ''}
            ${className}
          `}
          {...props}
        />
        
        {additionalText && (
          <div className={`
            absolute right-2 top-1/2 -translate-y-1/2 
            text-p-small text-text-tertiary
            ${disabled ? 'opacity-32' : ''}
          `}>
            {additionalText}
          </div>
        )}
      </div>

      {error && (
        <span className="text-p-small text-danger">
          {error}
        </span>
      )}

      {!error && caption && (
        <span className={`
          text-p-small 
          text-text-tertiary
          ${disabled ? 'opacity-32' : ''}
        `}>
          {caption}
        </span>
      )}
    </div>
  )
}

export default Input 