import "./App.css";
import GridList from "./components/Layout/GridList/GridList";
import CardOne from "./components/Card/CardOne"
import CardTwo from "./components/Card/CardTwo"
import {movies, actors} from './data/data'

function App() {
  return (
    <div className="App">
      <GridList items={movies}><CardOne /></GridList>
      <GridList items={actors}><CardTwo /></GridList>
    </div>
  );
}

export default App;
