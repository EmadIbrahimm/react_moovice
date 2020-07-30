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


class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
        <nav>
          <ul>
            <li><Link to ="/">discover</Link></li>
            <li><Link to ="/battle">This week</Link></li>
            <li><Link to ="/popular/">Popular</Link></li>
            <li><Link to ="/my-List/">My list</Link></li>
            <li><Link to ="/Popular-battle/">Popular-battle</Link></li>
          </ul>
        </nav>
        <Switch>
          <Router path="/dicover/">
            <Discover />
          </Router>
          <Router path="/Popular">
            <Popular />

          </Router>
          <Router path="popular-battle">
            <DiscoverBattle/>

          </Router>
          <Router path="this week">
            <MyList/>

          </Router>
        </Switch>
      </div>

      </Router>
      

    );
  }
}
export default App;