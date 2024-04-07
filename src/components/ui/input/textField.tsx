import { ComponentPropsWithoutRef, useState } from 'react'

import { Close } from '@/assets/icons/components/close'
import { EyeOutline } from '@/assets/icons/components/eyeOutline'
import { Search } from '@/assets/icons/components/search'

import s from './textField.module.scss'

type VariantInput = 'default' | 'password' | 'search'

type InputType = {
  error?: string
  onClearClick?: () => void
  variant?: VariantInput
} & ComponentPropsWithoutRef<'input'>

export const TextField = (props: InputType) => {
  const { className, error, onClearClick, placeholder, value, variant = 'default', ...rest } = props

  const searchVariant = variant === 'search'
  const passwordVariant = variant === 'password'

  const inputID = crypto.randomUUID()

  const initialInputType = !passwordVariant ? 'text' : 'password'

  const [inputType, setInputType] = useState(initialInputType)

  const isShowClearButton = searchVariant && onClearClick && value && !error

  const onShowPassword = () => {
    if (passwordVariant) {
      setInputType(state => (state === 'password' ? 'type' : 'password'))
    }
  }

  return (
    <div className={`${s.container} ${className}`}>
      <div className={`${s.textFieldContainer} ${searchVariant ? s.searchVariant : ''}`}>
        {searchVariant && (
          <span className={`${s.iconSearch} ${!value ? s.iconSearchDev : ''}`}>
            <Search size={'20px'} />
          </span>
        )}

        <input
          className={`${s.input} ${error ? s.error : ''} ${value && s.inputActive}
            ${passwordVariant ? s.passwordVariant : ''} 
            `}
          id={inputID}
          {...rest}
          placeholder={placeholder}
          type={inputType}
          value={value}
        />
        {!searchVariant && <label htmlFor={inputID}>{placeholder}</label>}

        {passwordVariant && (
          <button className={s.buttonIcon} onClick={onShowPassword}>
            <EyeOutline size={'20px'} />
          </button>
        )}

        {isShowClearButton && (
          <button className={s.buttonIcon} onClick={onClearClick}>
            <Close size={'16px'}></Close>
          </button>
        )}
      </div>

      {error && <div className={s.errorMessage}>{error}</div>}
    </div>
  )
}
