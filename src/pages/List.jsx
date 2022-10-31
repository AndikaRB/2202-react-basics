import { Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const List = () => {
  const [counter, setCounter] = useState(0)

  // componentDidMount
  // Ketrigger setelah component mount pertama kali
  useEffect(() => {
    alert("Hello")
  }, [])

  // componentDidUpdate
  // Ketrigger setelah component mount pertama kali DAN
  // Ketrigger setelah component mengalami update (props / state)
  useEffect(() => {
    alert("Counter berubah menjadi " + counter)
  }, [counter])
  // tiap kali `counter` ada perubahan, function ter-execute

  // componentWillUnmount
  // Ketrigger sebelum component di-destroy
  useEffect(() => {
    return () => {
      alert("Goodbye")
    }
  }, [])

  return (
    <div>
      <h1>List Page</h1>
      <Button onClick={() => setCounter(counter + 1)}>Tambah</Button>
    </div>
  )
}

export default List

