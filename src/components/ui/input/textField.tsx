import { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react'

import { Icon } from '@/components/ui/icon/icon'

import s from './textField.module.scss'

type VariantInput = 'default' | 'password' | 'search'

type InputType = {
  error?: string
  variant?: VariantInput
} & ComponentPropsWithoutRef<'input'>

export const TextField = (props: InputType) => {
  const { className = 'default', error, value, variant } = props

  const initialInputType = variant !== 'password' ? 'text' : 'password'

  const [inputType, setInputType] = useState(initialInputType)
  const [valueInput, setValueInput] = useState(value)

  const searchVariant = variant === 'search'
  const passwordVariant = variant === 'password'

  const onChangeHAndler = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e)
    }
    setValueInput(e.currentTarget.value)
  }

  const onClickShowPassword = () => {
    if (passwordVariant) {
      setInputType(state => (state === 'password' ? 'type' : 'password'))
    }
    if (searchVariant) {
      setValueInput('')
    }
  }
  let stylePadding = {}

  if (passwordVariant) {
    stylePadding = { paddingRight: '36px' }
  } else if (searchVariant) {
    stylePadding = { padding: '6px 36px' }
  }

  return (
    <div className={`${s.container} ${className}`}>
      <div className={`${s.inputContainer}`}>
        {searchVariant && (
          <span className={s.iconsearch}>
            <Icon iconId={'search-outline'} />{' '}
          </span>
        )}

        <input
          className={`${s.input} ${error ? s.error : ''}`}
          style={stylePadding}
          {...props}
          onChange={onChangeHAndler}
          type={inputType}
          value={valueInput}
        />

        {passwordVariant && (
          <button className={s.buttonIcon}>
            <Icon iconId={'eye-outline'} onClick={onClickShowPassword} />
          </button>
        )}

        {searchVariant && valueInput && !error && (
          <button className={s.buttonIcon}>
            <Icon iconId={'close'} onClick={onClickShowPassword} />
          </button>
        )}
      </div>
      {error && <div className={s.errorMessage}>{error}</div>}
    </div>
  )
}
