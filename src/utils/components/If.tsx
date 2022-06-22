import { ReactNode } from 'react'

interface IfProps {
  condition: boolean
  thenValue: ReactNode
  elseValue?: ReactNode
}

export function If({ condition, thenValue, elseValue }: IfProps) {
  if (condition) {
    return <>{thenValue}</>
  }
  return <>{elseValue}</>
}