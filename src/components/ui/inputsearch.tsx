import * as React from "react"
import Image from "next/image"
import Vector from "@/assets/Vector.svg"
import { cn } from "@/lib/utils"

function InputSearch({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <div className="relative flex items-center w-full">
      <input
        type={type}
        data-slot="input"
        placeholder="Search"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1  text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-white",
          className
        )}
        {...props}
      />
      <Image
        src={Vector}
        alt="Icon"
        width={20}
        height={20}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-[7px]"
      />
    </div>
  )
}

export {InputSearch  }
