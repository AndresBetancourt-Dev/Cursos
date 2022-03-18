import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import './App.css';

const Heading = ({ title }: { title: string }) => {
  return <h2>{title}</h2>
}

const Box = ({ children }: { children: React.ReactNode }) => {
  return (<div style={{
    padding: '1rem',
    fontWeight: 'bold'
  }}>{children}</div>)
}

/**
 * 
 * Defines children as well as a return type
 */
const BoxFunctionComponent: React.FunctionComponent = ({ children }) => {
  return (<div style={{
    padding: '1rem',
    fontWeight: 'bold'
  }}>{children}</div>)
}

const List: React.FunctionComponent<{ items: string[], onClick?: (item: string) => void }> = ({ items, onClick }) => {
  return <ul>
    {items.map((item, index) => (
      <li key={index} onClick={() => onClick?.(item)}>{item}</li>
    ))}
  </ul>
}

interface Payload {
  text: string
}

interface Todo {
  id: number;
  done: boolean;
  text: string;
}

type ActionType = | {
  type: "ADD", text: string
} | {
  type: "REMOVE", id: number
}

function App() {

  const [payload, setPayload] = useState<Payload | null>(null);
  const textRef = useRef<HTMLInputElement>(null);

  const [todos, dispatch] = useReducer((state: Todo[], action: ActionType) => {
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
  }, [] as Todo[])

  useEffect(() => {
    fetch('/data.json').then((response) => response.json()).then(data => setPayload(data))
  }, [])

  const onListClick = useCallback((item: string) => {
    alert(item)
  }, []);

  const onAddTodo = useCallback(() => {
    if (textRef.current) {
      dispatch({
        type: 'ADD',
        text: textRef.current!.value
      })
      textRef.current.value = "";
    }
  }, []);

  return (
    <div >
      <Heading title="Introduction" />
      <Box>
        Pepito perez
      </Box>
      <List items={['Julio', 'Sanchez', 'Cristo']} onClick={onListClick} />
      <Box>
        {JSON.stringify(payload)}
      </Box>
      <Heading title="Todos" />
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch({
            type: 'REMOVE',
            id: todo.id
          })}>Remove</button>
        </div>
      ))}
      <div>
        <input type="text" ref={textRef} />
        <button onClick={() => onAddTodo()}>Add</button>
      </div>
    </div>
  );
}

export default App;
