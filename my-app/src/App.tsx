import React from 'react';
import { Counter } from './features/counter/Counter';
import { Home } from './components/home/home';
import {Route, Switch} from 'react-router'
import { MonthStatistic } from './components/monthStatistic/monthStatistic';
import { Header } from './components/shared/header/header';
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/month-statistic" exact component={MonthStatistic} />


      </Switch>
      
    </div>
  );
}

export default App;
