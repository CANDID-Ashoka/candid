import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Scrollspy from 'react-scrollspy';
import Title from './screens/title';

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
    </div>
  );
}

export default App;
