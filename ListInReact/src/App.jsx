import { useState } from "react"

function App () {
  const [items, setitems] = useState([])
  function addItems() {
    setitems(...items, {
      id: items.length,
      value: "Pen"
    })

  }
  return (
    <>
      <div>
        <ol>
          {items.map(item => (
              <li key={item.id}>{item.value}</li>
            ))
          }
        </ol>
        <button onClick={addItems}>Add Items</button>
      </div>
    </>
  )
}
export default  App