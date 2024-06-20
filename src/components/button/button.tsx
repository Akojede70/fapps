import React, { FC } from 'react';
import styles from './Button.module.css';
import { COLORS } from '../../assets/styles/color';

interface FormButtonProps {
    width: 'full' | 'medium' | 'small';
    label: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    bgColor?: string;
    borderColor?: string;
    textColor?: string;
    type?: 'button' | 'submit' | 'reset';
}

const FormButton: FC<FormButtonProps> = ({
    width,
    label,
    onClick,
    disabled,
    bgColor,
    borderColor,
    textColor,
    type = 'submit',
}) => {
    return (
        <>
            {width === 'full' ? (
                <div className={styles.button_container}>
                    <button
                        style={{ color: textColor ? textColor : COLORS.white, backgroundColor: bgColor }}
                        type={type}
                        disabled={disabled}
                        className={styles.button_full}
                        onClick={onClick}
                    >
                        <span className={styles.button_text}>{label}</span>
                    </button>
                </div>
            ) : width === 'medium' ? (
                <div className={styles.button_container}>
                    <button
                        style={{ color: textColor ? textColor : COLORS.white, backgroundColor: bgColor }}
                        type={type}
                        disabled={disabled}
                        className={styles.button_medium}
                        onClick={onClick}
                    >
                        <span className={styles.button_text}>{label}</span>
                    </button>
                </div>
            ) : (
                width === 'small' && (
                    <div className={styles.button_container}>
                        <button
                            style={{ color: textColor ? textColor : COLORS.white, backgroundColor: bgColor }}
                            type={type}
                            disabled={disabled}
                            className={styles.button_small}
                            onClick={onClick}
                        >
                            <span className={styles.button_text}>{label}</span>
                        </button>
                    </div>
                )
            )}
        </>
    );
};

export default FormButton;
