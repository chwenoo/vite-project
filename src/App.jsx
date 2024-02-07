import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import Button from './components/button/Button'
import { MainTitle } from './components/mainTitle/MainTitle'
import Count from './components/pages/count/Count'
// import Login from './components/pages/login/Login'
import Parent from './components/pages/parent'
import ToDo from './components/pages/todo/ToDo'
import Blog from './components/pages/Blog'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import { Link } from 'react-router-dom'
import Nav from './components/pages/Nav'
import { userContext } from './store/userContext'
// import SwitchTheme from './components/switchTheme/SwitchTheme'

function App() {
  const userName = 'admin'
  return (
    <userContext.Provider value={userName} >
      <BrowserRouter>
      <Nav/>
        {/* <nav>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/blog'>Blog</Link>
        </nav> */}
        <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/blog' element={<Blog/>} />
        </Routes>
          {/* <MainTitle title="title1"/>
        <MainTitle secondTitle="title2"/>
        <Button/>
          <Parent/>
        <SwitchTheme/>
        <Login/> 
           */}
        <ToDo/>
      </BrowserRouter>
      <Count/>
    </userContext.Provider>
  )
}

export default App
