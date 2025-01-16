import { FC } from 'react';

interface AvatarProps {
    className?: string;
    imgSource: string;
    size?: 'sm' | 'md' | 'lg';
}
declare const Avatar: FC<AvatarProps>;

export { Avatar as default };
