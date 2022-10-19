import {InputHTMLAttributes, ReactNode} from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import React from 'react';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

export interface TextInputIconProps {
  children: ReactNode;
}

TextInputIcon.displayName = 'TextInputIcon';

function TextInputRoot(props: TextInputRootProps) {

  return (
    <div className='flex items-center py-4 px-3 gap-3 rounded bg-gray-100 w-full outline-none focus-within:ring-2 ring-cyan-300'>
      {props.children}
    </div>
    )
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-black'>
      {props.children}
    </Slot>
  )
}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className='w-full flex-1 bg-transparent text-xs border-none outline-none'
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
}