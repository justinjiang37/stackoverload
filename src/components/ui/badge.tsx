import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md px-2.5 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-colors duration-200",
  {
    variants: {
      variant: {
        default:
          "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 [a&]:hover:bg-blue-200 dark:[a&]:hover:bg-blue-900/70",
        secondary:
          "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 [a&]:hover:bg-gray-300 dark:[a&]:hover:bg-gray-600",
        accent:
          "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300 [a&]:hover:bg-orange-200 dark:[a&]:hover:bg-orange-900/70",
        success:
          "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 [a&]:hover:bg-green-200 dark:[a&]:hover:bg-green-900/70",
        warning:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 [a&]:hover:bg-yellow-200 dark:[a&]:hover:bg-yellow-900/70",
        destructive:
          "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 [a&]:hover:bg-red-200 dark:[a&]:hover:bg-red-900/70",
        outline:
          "border border-gray-300 dark:border-gray-600 bg-transparent text-gray-700 dark:text-gray-300 [a&]:hover:bg-gray-100 dark:[a&]:hover:bg-gray-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
