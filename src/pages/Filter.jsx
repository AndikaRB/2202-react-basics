/* eslint-disable array-callback-return */
import { useState } from "react"

const Filter = () => {
  const [fruits, setFruits] = useState([
    "Jeruk",
    "Leci",
    "Apel",
    "Mangga",
    "Salak",
    "Pisang",
    "Buah Naga",
  ])
  const [inputFilter, setInputFilter] = useState("") // untuk yang kita ketik
  const [currentFilter, setCurrentFilter] = useState("") // untuk simpen filter
  const [inputAddFruit, setInputAddFruit] = useState("")

  const renderFruits = () => {
    return fruits.map((val) => {
      if (val.toLowerCase().includes(currentFilter.toLowerCase())) {
        return <li>{val}</li>
      }
    })
  }

  const filterBtnHandler = () => {
    setCurrentFilter(inputFilter)
  }

  const addFruitBtnHandler = () => {
    if (inputAddFruit) {
      // 1. Copy array
      // 2. Tambahin item
      // 3. Timpa array state dengan array baru
      let newFruits = [...fruits]
      newFruits.push(inputAddFruit)
      setFruits(newFruits)
      setInputAddFruit("")
    } else {
      alert("Input masih kosong")
    }
  }

  return (
    <div>
      <h1>Filter Page</h1>
      <input
        type="text"
        onChange={(event) => setInputFilter(event.target.value)}
      />
      <button onClick={filterBtnHandler}>Filter</button>
      <br />
      <input
        type="text"
        onChange={(event) => setInputAddFruit(event.target.value)}
        value={inputAddFruit}
      />
      <button onClick={addFruitBtnHandler}>Add Fruit</button>
      <ul>{renderFruits()}</ul>
    </div>
  )
}

export default Filter

