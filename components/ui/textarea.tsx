import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
       "flex text-white flex-wrap w-full p-[10px] ",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
