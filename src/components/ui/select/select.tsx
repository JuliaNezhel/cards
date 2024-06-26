import React, { ComponentPropsWithoutRef } from 'react'

import { ArrowIosDown } from '@/assets/icons/components/arrow-ios-Down'
import { Typography } from '@/components/ui/typography/typography'
import * as SelectPrimitive from '@radix-ui/react-select'

import s from './select.module.scss'

type SelectType = {
  ariaLabel?: string
  label?: string
  placeholder?: string
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>

export const Select = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Root>, SelectType>(
  ({ ariaLabel, children, placeholder, ...props }, forwardedRef) => {
    return (
      <>
        {props.label && (
          <Typography as={'label'} className={s.label} variant={'body2'}>
            label{' '}
          </Typography>
        )}

        <SelectPrimitive.Root {...props}>
          <SelectPrimitive.Trigger
            aria-label={ariaLabel}
            className={s.selectTrigger}
            ref={forwardedRef}
          >
            <SelectPrimitive.Value placeholder={placeholder} />
            <SelectPrimitive.Icon className={s.selectIcon}>
              <ArrowIosDown />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              className={s.selectContent}
              collisionPadding={0}
              position={'popper'}
            >
              <SelectPrimitive.ScrollUpButton></SelectPrimitive.ScrollUpButton>
              <SelectPrimitive.Viewport className={s.selectViewport}>
                {children}
              </SelectPrimitive.Viewport>
              <SelectPrimitive.ScrollDownButton>
                <ArrowIosDown />
              </SelectPrimitive.ScrollDownButton>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </>
    )
  }
)

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Item className={s.selectItem} {...props} ref={forwardedRef}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
})
