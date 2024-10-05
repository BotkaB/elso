
import './App.css';
import Kartya from './Kartya';

function App() {
  
  const ember={
    nev:"Jenőőőőőőő",
    kor: 35
}
  return (
    <div className="App">
      <header className="App-header">
      Elso App
      </header>
      <article>
        <p>
         
        <Kartya obj={ember} />
        

        </p>
      </article>
      <footer>Botka Bianka</footer>
    </div>
  );
}

export default App;
