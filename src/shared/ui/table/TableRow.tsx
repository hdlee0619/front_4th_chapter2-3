import { forwardRef } from "react"
import type { ComponentPropsWithRef } from "react"

export const TableRow = forwardRef<HTMLTableRowElement, ComponentPropsWithRef<"tr">>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-14 ${className}`}
    {...props}
  />
))
TableRow.displayName = "TableRow"
