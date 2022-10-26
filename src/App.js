import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Weather App</p>
        <Weather />
      </header>
      <br />
      <footer>
        Coded by Lsanches, open-sourced at{" "}
        <a
          href="https://github.com/LSSanches/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
