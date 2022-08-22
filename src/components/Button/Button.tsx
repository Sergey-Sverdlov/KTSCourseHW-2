// @ts-nocheck
import {Loader} from "../Loader/Loader";
import classNames from "classnames";
import {isDisabled} from "@testing-library/user-event/dist/utils";
export enum ButtonColor {
    /** Основная, акцентная кнопка */
    primary = 'primary',
    /** Второстепенная кнопка */
    secondary = 'secondary'
}

export type ButtonProps = React.PropsWithChildren<{
    /**
     * Если true, то внутри кнопки вместе с children отображается компонент Loader
     * Также кнопка должна переходить в состояние disabled
     * По умолчанию - false
     */
    loading?: boolean;
    /** Цвет кнопки, по умолчанию -  ButtonColor.primary*/
    color?: ButtonColor;
}> & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({loading, children, onClick, color = 'primary', className, disabled = false, ...rest}) => {
    let isDisabled = false;
    if (loading || disabled) {
        isDisabled = true;
    }
    let classnames = classNames('button',
        {'button_color-primary': color == 'primary'},
        {'button_color-secondary': color == 'secondary'}, className,
        {'button_disabled': isDisabled})

    return (
            <button  data-testid='button' {...rest} onClick={onClick} className={classnames} disabled = {isDisabled}>
                {children}
                {loading && <Loader />}
            </button>
    )
}