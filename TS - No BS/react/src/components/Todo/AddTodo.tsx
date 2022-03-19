import { FunctionComponent, RefObject } from 'react'
import { Styles } from '../../react-app-env'

const AddTodo: FunctionComponent<{ textRef: RefObject<HTMLInputElement>, onAddTodo: () => void, styles?: Styles }> = ({ textRef, onAddTodo, styles = {} as Styles }) => {
    return (
        <div className={styles?.addTodo}>
            <input className={styles?.input} type="text" ref={textRef} />
            <button className={[styles?.button, styles?.add].join(" ")} onClick={() => onAddTodo()}>Add</button>
        </div>
    )
}

export default AddTodo