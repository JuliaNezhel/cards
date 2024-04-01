import { ComponentPropsWithoutRef } from 'react'

type InputType = {} & ComponentPropsWithoutRef<'input'>

export const Input = (props: InputType) => {
  return (
    <div {...props}>
      <input />
    </div>
  )
}
