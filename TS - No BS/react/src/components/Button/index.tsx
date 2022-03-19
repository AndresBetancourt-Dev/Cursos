import { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent } from 'react'
import styles from "./styles.module.css"

/**
 * 
 * Detailed HTML Props
 */
const Button: FunctionComponent<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement & { title: string }>, HTMLButtonElement>> = ({ children, title, style, ...rest }) => {
    return <button className={styles.button} {...rest} style={{ ...style }}>{title ?? children}</button>
}

export default Button