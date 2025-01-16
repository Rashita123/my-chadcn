import { FC, ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
}
declare const Button: FC<ButtonProps>;

export { Button as default };
