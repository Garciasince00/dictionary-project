
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Sandra Garcia and is open sourced
          </small>
        </footer>
      </div>
    </div>
  );
}
