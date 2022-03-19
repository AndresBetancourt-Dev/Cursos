import { Dispatch } from 'react'
import { Styles } from '../../react-app-env'
import { ActionType, TodoType } from './types'

const TodoItem = ({ todo, dispatch, styles }: { todo: TodoType, dispatch: Dispatch<ActionType>, styles?: Styles }) => {
    return (
        <div className={styles?.todoItem}>
            {todo.text}
            <button className={[styles?.button, styles?.remove].join(" ")} onClick={() => dispatch({
                type: 'REMOVE',
                id: todo.id
            })}>Remove</button>
        </div>
    )
}

export default TodoItem