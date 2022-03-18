import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Box } from './components/Box/Box';
import { Heading } from './components/Heading';
import { Incrementer } from './components/Incrementer';
import { List } from './components/List';
import Todo from './components/Todo';
interface Payload {
  text: string
}

function App() {
  const [payload, setPayload] = useState<Payload | null>(null);
  const [value, setValue] = useState<number>(0)

  useEffect(() => {
    fetch('/data.json').then((response) => response.json()).then(data => setPayload(data))
  }, [])

  const onListClick = useCallback((item: string) => {
    alert(item)
  }, []);

  return (
    <div >
      <Heading title="Introduction" center />
      <Box>
        Pepito perez
      </Box>
      <List items={['Julio', 'Sanchez', 'Cristo']} onClick={onListClick} />
      <Box>
        {JSON.stringify(payload)}
      </Box>
      <Todo />
      <Incrementer value={value} setValue={setValue}
      />
    </div>
  );
}

export default App;
