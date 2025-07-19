import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './Pages/Homepage'
import Header from './Components/Header'
import PageFooter from './Components/PageFooter'
function App() {
  return (
    <div  style={{backgroundColor:"black", color:"white"}}>
      <Header></Header>
      <Outlet></Outlet>
      <PageFooter></PageFooter>
    </div>
  )
}

export default App
