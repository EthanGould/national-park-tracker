import { useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ParksData from './data/ParksData.json';
import Header from './components/Header';
import ParkCard from './components/ParkCard';
import Park from './components/Park';
import './App.css';


function App() {

  // Sync initial state from past visits
  let SyncedParksData = ParksData;

  const syncHistory = () => {
    let history = localStorage.getItem('likesHistory');
    if (history) {
      history = JSON.parse(history);
      SyncedParksData = ParksData.map((park) => { return history.likes.includes(park.id) ? { ...park, isHearted: !park.isHearted} : park });
    }
  }

  syncHistory();

  const [parksData, setParksData] = useState(SyncedParksData);

  const heartPark = (id) => {
    setParksData(
      parksData.map((park) => { return park.id === id ? { ...park, isHearted: !park.isHearted} : park })
    );
    saveAction(id);
  }

  const saveAction = (id) => {
    let history = localStorage.getItem('likesHistory') || JSON.stringify({ likes: [] });
    history = JSON.parse(history);

    // Toggle "isHearted" state in DB
    if (!history.likes.includes(id)) {
      history.likes.push(id);
    } else {
      history.likes.splice(history.likes.indexOf(id), 1);
    }

    localStorage.setItem('likesHistory', JSON.stringify(history));
    syncHistory();
  }

  const filterResults = (query) => {
    resetState();
    setParksData(
      SyncedParksData.filter((park) => { return park.fullName.toLowerCase().includes(query.toLowerCase()) })
    );
  }

  const resetState = () => {
    setParksData(SyncedParksData);
  }

  return (
    <Router basename="/parks">
      <div className="App">
        <Switch>
          <Route path={"/:parkId"}>
            <Header onChange={filterResults} showSearch={false} minimal={true} resetState={resetState} />
            <Park parks={parksData} onHeart={heartPark} />
          </Route>
          <Route exact path={"/"}>
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
