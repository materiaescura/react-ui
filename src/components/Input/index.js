import styles from '../Input/Styles.module.css'

const Input = (className, props) => <input type='text' className={`${styles.green} ${className || ''}`} {...props} />

export default Input