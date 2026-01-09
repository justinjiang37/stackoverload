import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:200%_100%]",
        className
      )}
      {...props}
    />
  )
}

function SkeletonText({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <Skeleton
      className={cn("h-4 w-full rounded", className)}
      {...props}
    />
  )
}

function SkeletonTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <Skeleton
      className={cn("h-6 w-3/5 rounded", className)}
      {...props}
    />
  )
}

function SkeletonAvatar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <Skeleton
      className={cn("h-12 w-12 rounded-full", className)}
      {...props}
    />
  )
}

function SkeletonCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <Skeleton
      className={cn("h-48 w-full rounded-xl", className)}
      {...props}
    />
  )
}

export { Skeleton, SkeletonText, SkeletonTitle, SkeletonAvatar, SkeletonCard }
