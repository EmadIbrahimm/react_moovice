import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch
} from 'react-router-dom';
import Discover from './components/Discover';
import Popular from './components/Popular';
import DiscoverBattle from './components/DiscoverBattle';
import MyList from './components/MyList';
import PopularBattle from './components/PopularBattle';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
        <nav>
          <ul>
            <li><Link to ="/">This week</Link></li>
            <li><Link to ="/battle">This week battle</Link></li>
            <li><Link to ="/popular/">Popular</Link></li>
            <li><Link to ="/Popular-battle/">Popular-battle</Link></li>
            <li><Link to ="/my-List/">My list</Link></li>
          </ul>
        </nav>
        <Switch>
        <Router path="/battle">
            <DiscoverBattle />

          </Router>
          <Router path="/Popular">
            <Popular />

          </Router>
          <Router path="popular-battle">
            <PopularBattle />

          </Router>
          <Router path="this-week">
            <MyList/>

          </Router>

          <Router path="/">
            <Discover />
          </Router>

        </Switch>
      </div>

      </Router>
      

    );
  }
}
export default App;