import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ParksData from './data/ParksData.json';
import Home from './components/Home'
import Header from './components/Header';
import ParkCard from './components/ParkCard';
import Park from './components/Park';
import './App.css';


function App() {
  const [parksData, setParksData] = useState(ParksData);

  const heartPark = (id) => {
    setParksData(
      parksData.map((park) => { return park.id === id ? { ...park, isHearted: !park.isHearted} : park })
    );
  }

  const filterResults = (query) => {
    resetState();
    setParksData(
      ParksData.filter((park) => { return park.fullName.toLowerCase().includes(query.toLowerCase()) })
    );
  }

  const resetState = () => {
    setParksData(ParksData);
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/parks/:parkId">
            <Header onChange={filterResults} showSearch={false} minimal={true} resetState={resetState} />
            <Park parks={parksData} onHeart={heartPark} />
          </Route>
          <Route exact path="/parks">
            <Header onChange={filterResults} showSearch={true} resetState={resetState} />
            <ul className="park-cards__container container">
              {parksData.map((park) => ( <ParkCard key={park.id} park={park} onHeart={heartPark} /> ))}
            </ul>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
