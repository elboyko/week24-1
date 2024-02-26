import Rate from './Components/Rate/Rate'
import './App.css'
import "./Components/Rate/Rate.module.css"
import rates from "./Components/Rate/rates.json"

function App() {
  return (
    <>
      <div className="container">
        <div className="inner">
          {rates.map(item => <Rate key={item.id} color={item.color} cost={item.cost} speed={item.speed} />)}
        </div>
      </div>
    </>
  )
}

export default App
