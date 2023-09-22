
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary Web Application</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Sandra Garcia and is{" "}
            <a
              href="https://github.com/Garciasince00/dictionary-project"
              target="_blank"
            >
              open sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
