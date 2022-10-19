import {ButtonHTMLAttributes, HtmlHTMLAttributes, ReactNode} from 'react';
import {Slot} from '@radix-ui/react-slot';
import {clsx} from 'clsx';
import React from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({children, asChild, ...props}: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

  return (
    <Comp 
      className={clsx(
          'py-4 px-3 bg-cyan-600 font-semibold outline-none rounded text-white w-full hover:bg-cyan-300 hover:text-black',
        )}
      {...props}
      >
        {children}
    </Comp>
    )
}