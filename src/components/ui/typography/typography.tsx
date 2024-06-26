import { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

type Variant =
  | 'body1'
  | 'body2'
  | 'caption'
  | 'captionLink'
  | 'error'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'link'
  | 'overline'
  | 'sub1'
  | 'sub2'
  | 'subLink'

type Theme = 'dark' | 'light'

export type Props<T extends ElementType = 'div'> = {
  as?: T
  className?: string
  theme?: Theme
  variant?: Variant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'div'>(
  props: Props<T> & ComponentPropsWithoutRef<T>
) => {
  const { as: Component = 'div', className, theme = 'dark', variant = 'h1', ...rest } = props

  const classNames = {
    typographyStyles: clsx(theme === 'dark' ? s.className : s.light, s[variant], className),
  }

  return (
    <>
      <Component className={classNames.typographyStyles} {...rest} />
    </>
  )
}