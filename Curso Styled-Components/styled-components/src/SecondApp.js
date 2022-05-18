import React from 'react'
import ComplexTitle from './components/ComplexTitle'
import Random from './components/Random'

const App = () => {
  return (
    <div style={{padding : '2em'}}>
      <ComplexTitle title={'more complex title'}/>
      <Random/>
    </div>
  )
}

export default App