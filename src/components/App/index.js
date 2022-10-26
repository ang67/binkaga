import logo from '../../assets/images/logo.svg';
import './App.css';
import SearchButton from '../SearchButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sufez avec une pleine conscience du mondee qui vous entoures
        </p>

      </header>

      <div className='App-body'>
        <div className='search-zone'>
          <SearchButton />
        </div>

      </div>


    </div>
  );
}

export default App;
