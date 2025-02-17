import React from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
  label: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  outline?: boolean
  small?: boolean
  icon?: IconType 
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, outline, small, icon}) => {
  return (
    <div>
      {label}
    </div>
  )
}

export default Button