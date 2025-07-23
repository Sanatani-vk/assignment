import {BrowserRouter, Routes , Route, Link} from 'react-router';
import Movies from './Movies.jsx'
import './App.css'
import Header from './components/Header.jsx'
import Explore from './pages/Explore'
import Upcoming from './pages/Upcoming'
import Latest from './pages/Latest'
import Home from './pages/Home.jsx'
import Error from './pages/Error';
import MovieHome from './components/MovieHome';
import Footer from './components/Footer.jsx';
function App() {

  return (
    <>

    <BrowserRouter>
        <Header/>

      <Routes>
        <Route path="/" element={<MovieHome/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/latest" element={<Latest/>}/>
        <Route path="/upcoming" element={<Upcoming/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App;