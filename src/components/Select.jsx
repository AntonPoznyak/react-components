import { icons } from '../assets/icons'
import { useRef } from 'react'

const Select = ({
  title = 'Label',
  value,
  onChange,
  disabled = false,
  additionalText,
  caption,
  error,
  className = '',
  options = [],
  placeholder = 'Select option',
  ...props
}) => {
  const ChevronDown = icons.chevronDown
  const isEmpty = value === ''
  const selectedOption = options.find(option => option.value === value)
  const displayText = isEmpty ? placeholder : selectedOption?.label || ''
  const selectRef = useRef(null)

  const handleIconClick = () => {
    if (!disabled && selectRef.current) {
      selectRef.current.click()
    }
  }

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
      
      <div className="relative flex items-center w-full">
        <select
          ref={selectRef}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-full px-3 py-2 
            rounded-lg
            border ${error ? 'border-danger' : 'border-border'}
            bg-paper ${disabled ? 'bg-paper-disable' : ''}
            cursor-pointer
            transition-colors
            outline-none
            text-p-small
            text-transparent
            hover:border-border-hover
            focus:border-border
            focus:ring-1
            focus:ring-focus
            focus:ring-offset-1
            disabled:opacity-32 
            disabled:cursor-not-allowed
            appearance-none
            ${className}
          `}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className={`
          absolute inset-0
          flex items-center
          pointer-events-none
          ${disabled ? 'opacity-32' : ''}
        `}>
          <div className={`
            text-p-small
            ${isEmpty ? 'text-text-placeholder' : 'text-text-primary'}
            truncate
            flex-1
            min-w-0
            ml-3
            mr-2
            ${additionalText ? 'max-w-[calc(100%-3rem-16px-var(--additional-text-width,0px))]' : 'max-w-[calc(100%-3rem)]'}
          `}>
            {displayText}
          </div>

          <div className="flex items-center gap-2 mr-3">
            {additionalText && (
              <div 
                className="text-p-small text-text-tertiary"
                ref={el => {
                  if (el) {
                    document.documentElement.style.setProperty(
                      '--additional-text-width',
                      `${el.offsetWidth}px`
                    );
                  }
                }}
              >
                {additionalText}
              </div>
            )}
            
            <div className="cursor-pointer">
              <ChevronDown className={`w-4 h-4 text-icon-primary}`} />
            </div>
          </div>
        </div>
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

export default Select 