import React from 'react';
interface Props {
    fontSize?: number;
    lineHeight?: number;
    letterSpacing?: number;
    fontWeight?: number;
    color?: string;
    opacity?: number;
    children?: any;
}
declare const Text: React.FC<Props>;
export default Text;
