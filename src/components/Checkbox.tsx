import {ReactNode} from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import React from 'react';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
    return (
        <CheckboxPrimitive.Root
            className='h-6 w-6 p-[2px] bg-gray-100 rounded flex items-center justify-center'
            {...props}
        >
            <CheckboxPrimitive.Indicator asChild>
            <Check weight='bold' className='h-5 w-5 '/>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        )
    }