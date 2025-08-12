import React from 'react'
import clex from 'clsx'

type Varient = 
    | "primary"
    | "light"
    | "action"
    | "success"
    | "secondary"
    | "danger"
    | "info"
    | "warning"

    type size = "sm" | "md" | "lg"

    type rounded = 
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"

    interface ButtonProps {
        childeren?: React.ReactNode
        variant?: Varient
        size?: size
        disabled?: boolean
        isLoading?: boolean
        onClick?: () => void
        rounded?: rounded
    }
export const Button : React.FC<ButtonProps> = ({
    childeren,
    variant= "primary",
    size= "md",
    disabled= false,
    isLoading= false,
    onClick= () => {},
    rounded= "md",
}) => {

    const baseStyle = "px-4 py-2 font-semibold transition hover:scale-x-105 hover: cursor-pointer";

    const variantStyles: Record<Varient, string>  = {
        primary: "bg-[#007BFF] text-white hover:bg-[#0056B3] text-shadow-gray-800",
        light: "bg-[#E9ECEF] text-[#495057] hover:bg-[#DEE2E6] text-shadow-gray-800",
        action: "bg-[#FD7E14] text-[#FFFFFF] hover:bg-[#E8590C] text-shadow-gray-800",
        success: "bg-[#20C997] text-[#FFFFFF] hover:bg-[#17A287] text-shadow-gray-800",
        secondary: "bg-[#6C757D] text-[#FFFFFF] hover:bg-[#5A6268] text-shadow-gray-800",
        danger: "bg-[#FF6B6B] text-[#FFFFFF] hover:bg-[#DE5E5E] text-shadow-gray-800",
        info: "bg-[#0077B6] text-[#FFFFFF] hover:bg-[#005089] text-shadow-gray-800",
        warning: "bg-[#FF9F1C] text-[#FFFFFF] hover:bg-[#D37B0F] text-shadow-gray-800"
    }

    const sizeStyles: Record<size, string> = {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg"
    }

    const  roundedStyles: Record<rounded, string> = {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        '2xl': "rounded-2xl",
        "3xl": "rounded-3xl",
    }
    
    return (
        <button
          onClick={onClick}
          disabled={ disabled || isLoading}
          className={clex(
            baseStyle,
            variantStyles[variant],
            sizeStyles[size],
            roundedStyles[rounded]
          )}
        >
            {childeren}
        </button>
    )
}