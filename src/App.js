import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App opacity-animation">
      <Home />
      <About />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
