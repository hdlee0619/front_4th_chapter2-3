import { forwardRef } from "react"
import type { ComponentPropsWithRef } from "react"

export const CardHeader = forwardRef<HTMLDivElement, ComponentPropsWithRef<"div">>(({ className, ...props }, ref) => (
  <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
))
CardHeader.displayName = "CardHeader"
