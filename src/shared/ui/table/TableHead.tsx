import { forwardRef } from "react"
import type { ComponentPropsWithRef } from "react"

export const TableHead = forwardRef<HTMLTableCellElement, ComponentPropsWithRef<"th">>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={`h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
      {...props}
    />
  ),
)
TableHead.displayName = "TableHead"
