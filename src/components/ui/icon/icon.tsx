import iconSprite from '@/assets/img/icon-sprite.svg'

import s from '@/components/ui/input/textField.module.scss'

type IconPropsType = {
  iconId: string
  onClick?: () => void
}

export const Icon = (props: IconPropsType) => {
  const onclickHandler = () => {
    if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <span className={s.containerIcon} onClick={onclickHandler}>
      <svg
        fill={'white'}
        height={'100%'}
        viewBox={'0 0 24 24'}
        width={'100%'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <use xlinkHref={`${iconSprite}#${props.iconId}`} />
      </svg>
    </span>
  )
}
