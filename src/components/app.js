import React, { useState, useEffect } from "react"
import Result from "./result"
import { search } from "./api"
import "./styles.css"

const App = () => {
  const [results, setResults] = useState([])
  const [topic, setTopic] = useState("react")

  useEffect(() => {
    search(topic)
      .then((data) => {
        setResults(data)
      })
  }, [topic])
  return (
    <div className="App">
      <h1>{topic}</h1>
      <hr />
      <ul className="topicsList">
        {results.map((r) => (
          <Result key={r.id} item={r} setTopic={setTopic} />
        ))}
      </ul>
    </div>
  )
}

export default App