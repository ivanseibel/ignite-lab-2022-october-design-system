import { useState } from 'react'
import './styles/global.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  )
}
