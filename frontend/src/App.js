import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home'
import Team from './screens/Team'

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/candid' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team/>}/>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;