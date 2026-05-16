import React, { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  function handleIncrease() {
    setCount(count + 1)
  }

  function handleDecrease() {
    setCount(count - 1)
  }

  function handleReset() {
    setCount(0)
  }

  return (
    <div className="container">
      <h1>Simple Counter App</h1>

      <h2>Count: {count}</h2>

      {count >= 5 && (
        <p className="goal-message">Goal Reached!</p>
      )}

      <div className="button-group">
        <button className="btn increase" onClick={handleIncrease}>Increase</button>
        <button className="btn decrease" onClick={handleDecrease}>Decrease</button>
        <button className="btn reset" onClick={handleReset}>Reset</button>
      </div>

      <div className="message-section">
        <h2>Custom Message</h2>

        <input
          type="text"
          placeholder="Type something..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="text-input"
        />

        <p className="display-message">Your message: {message}</p>
      </div>
    </div>
  )
}

export default App