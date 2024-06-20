import { useState, FC, ChangeEvent, FocusEvent, CSSProperties } from 'react';
import { COLORS } from '../../assets/styles/color';
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md';
import styles from "./inputfield.module.scss"

interface InputFieldProps {
    name: string;
    placeholder?: string;
    type?: string;
    error?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    password?: boolean;
    required?: boolean;
    style?: CSSProperties;
    value?: string;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    min?: number;
    label?: string;
    ariaInvalid?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
    ariaDescribedby?: string;
    Inputref?: React.RefObject<HTMLInputElement>;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    readOnly?: boolean;
    toolTipId?: string;
    toolTip?: string;
}

const InputField: FC<InputFieldProps> = ({
    name,
    placeholder,
    type = 'text',
    error,
    onChange,
    password = false,
    required = false,
    style,
    value,
    onBlur,
    min,
    label,
    ariaInvalid,
    ariaDescribedby,
    Inputref,
    onFocus,
    readOnly = false,
    toolTipId,
    toolTip,
    ...props
}) => {
    const [hidePassword, setHidePassword] = useState(false);

    return (
        <div className="input_container">
            <div className="input_label">
                <label>{label}</label>
            </div>
            <div className="inputField_container">
                <input
                    type={password ? (hidePassword ? 'text' : 'password') : type}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    style={style}
                    onBlur={onBlur}
                    value={value}
                    onChange={onChange}
                    min={min}
                    aria-invalid={ariaInvalid}
                    autoComplete="off"
                    aria-describedby={ariaDescribedby}
                    ref={Inputref}
                    onFocus={onFocus}
                    readOnly={readOnly}
                    className="input_field"
                    {...props}
                />
                {password && (
                    <div
                        className="password_Icon"
                        onClick={() => {
                            setHidePassword(!hidePassword);
                        }}
                    >
                        {hidePassword ? (
                            <MdOutlineVisibility size={24} style={{ color: COLORS.primary }} />
                        ) : (
                            <MdOutlineVisibilityOff size={24} style={{ color: COLORS.menuIcon }} />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InputField;
