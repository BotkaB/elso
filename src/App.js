
import './App.css';

import { lista } from './adatlista';
import Kartyak from './components/kartyak';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        Elso App
      </header>
      <article>
       

          <Kartyak lista={lista} />


      
      </article>
      <footer>Botka Bianka</footer>
    </div>
  );
}

export default App;
