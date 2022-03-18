import { useCallback, useReducer, useRef } from 'react'
import { Heading } from '../Heading';
import AddTodo from './AddTodo';
import { ActionType, TodoType } from './types';
import styles from "./styles.module.css";
import UL from '../UL';
import { useAddTodo, useGetTodos, useRemoveTodo } from '../../hooks/useTodos';

const reducer = (state: TodoType[], action: ActionType) => {
    switch (action.type) {
        case 'ADD':
            return [...state, {
                id: state.length,
                text: action.text,
                done: false
            }];
        case 'REMOVE':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};

const initialState = [] as TodoType[]

const Todo = () => {
    const todos = useGetTodos();
    const addTodo = useAddTodo();
    const removeTodo = useRemoveTodo();

    const textRef = useRef<HTMLInputElement>(null);
    const onAddTodo = useCallback(() => {
        if (textRef.current) {
            addTodo(
                textRef.current!.value
            );
            textRef.current.value = "";
        }
    }, []);

    return (
        <div className={styles.container}>
            <Heading title="Todos" styles={styles} center />
            <div className={styles.todos}>
                <UL items={todos} render={(todo: TodoType) => (
                    <>
                        <div className={styles?.todoItem}>
                            {todo.text}
                            <button className={[styles?.button, styles?.remove].join(" ")} onClick={() => removeTodo(
                                todo.id
                            )}>Remove</button>
                        </div>
                    </>)}
                />
            </div>
            <AddTodo textRef={textRef} onAddTodo={onAddTodo} styles={styles} />
        </div>
    )
}

export default Todo