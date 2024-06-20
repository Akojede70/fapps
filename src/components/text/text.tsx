import React from "react";
import { createTheme } from '@mui/material/styles';
// import styles from './text.module.scss'

interface LENDSQRTextProps {
    children: React.ReactNode;
    weight?: string;
    size?: string;
    color?: string;
    width?: string | number;
    lHeight?: string;
    lSpacing?: string;
    onClick?: () => void;
    isLink?: boolean;
    textOverflow?: string;
    underline?: boolean;
    borderColor?: string;
    align?: 'left' | 'center' | 'right';
    extrastyles?: React.CSSProperties;
    inline?: boolean;
    textStroke?: string;
}

const LENDSQRText: React.FC<LENDSQRTextProps> = ({
    children,
    weight = '400',
    size = '18px',
    color = '#252525',
    width,
    lHeight = '18px',
    lSpacing = '1px',
    onClick,
    isLink,
    textOverflow,
    underline,
    borderColor,
    align = 'left',
    extrastyles,
    inline = true,
    textStroke,
    ...props
}) => {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
    });

    return (
        <p
            //   className={styles.body} 

            style={{
                fontFamily: 'Manrope',
                fontSize: size,
                fontWeight: weight,
                color,
                textOverflow,
                WebkitTextStrokeColor: textStroke,
                lineHeight: lHeight,
                letterSpacing: lSpacing,
                textAlign: align,
                textDecorationThickness: '1.5px',
                cursor: isLink ? 'pointer' : 'auto',
                textDecoration: underline ? 'underline' : 'none',
                textDecorationStyle: 'solid',
                display: inline ? width ? 'block' : 'inline' : 'block',
                width,
                ...extrastyles,
            }}
            onClick={onClick}
            {...props}
        >
            {children}
        </p>
    );
};

export default LENDSQRText;
