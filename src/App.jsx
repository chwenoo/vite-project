import './App.css'
// import Button from './components/button/Button'
import { MainTitle } from './components/mainTitle/MainTitle'
import Count from './components/pages/count/Count'
// import Login from './components/pages/login/Login'
import Parent from './components/pages/parent'
import ToDo from './components/pages/todo/ToDo'
// import SwitchTheme from './components/switchTheme/SwitchTheme'

function App() {
  return (
    <div>
      {/* <MainTitle title="title1"/>
      <MainTitle secondTitle="title2"/>
      <Button/>
      <Parent/>
      <SwitchTheme/>
      <Login/> */}
      <ToDo/>
      {/* <Count/> */}
    </div>
  )
}

export default App
