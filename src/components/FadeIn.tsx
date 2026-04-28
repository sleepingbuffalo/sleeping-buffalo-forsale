import type { ReactNode, HTMLAttributes } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  delay?: 0 | 1 | 2 | 3
  as?: 'div' | 'section' | 'article' | 'figure'
}

export default function FadeIn({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
  ...rest
}: Props) {
  const ref = useFadeIn<HTMLDivElement>()
  const delayClass = delay ? ` delay-${delay}` : ''
  return (
    <Tag
      ref={ref as never}
      className={`fade-in${delayClass} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
