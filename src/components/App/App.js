import './App.css';
import Recounter from "./MainView"
import sakiewka2 from "../images/sakiewka2.jpg"


function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        <p>
          Przelicznik monatarny Warhammer.
        </p>
        <img 
        className='sakiweka'
        src={sakiewka2} 
        alt="sakiewka"/>
        <Recounter />
        
      </header>
    </div>
  );
}

export default App;
