import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home'
import Team from './screens/Team'
import Blog from './screens/Blog'
import Projects from './screens/Projects'
import Resources from './screens/Resources'

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/candid' element={<Home />} />
        <Route path='/candid/team' element={<Team/>}/>
        <Route path='/candid/blog' element={<Blog/>}/>
        <Route path='/candid/projects' element={<Projects/>}/>
        <Route path='/candid/resources' element={<Resources/>}/>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;