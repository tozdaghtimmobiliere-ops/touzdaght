import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'luxury';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    
    // Variant styles
    const variants = {
      default: "bg-primary text-white hover:bg-primary-dark shadow-sm",
      secondary: "bg-secondary text-primary hover:bg-secondary-light",
      outline: "border-2 border-border bg-transparent hover:bg-background-alt text-text-primary dark:text-white dark:border-white/10 dark:hover:bg-white/5",
      ghost: "hover:bg-background-alt hover:text-text-primary text-text-secondary dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5",
      luxury: "bg-gradient-to-r from-gold to-gold-dark text-white shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5"
    }

    // Size styles
    const sizes = {
      default: "h-11 px-6 py-2",
      sm: "h-9 rounded-md px-4",
      lg: "h-14 rounded-xl px-8 text-lg font-bold",
      icon: "h-10 w-10",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
