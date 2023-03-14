import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
function App() {
  return (
    <div className='px-[20px] md:px-[70px] lg:px-[130px]'>
        <Header/>
        <Hero/>
    </div>
  );
}

export default App;
