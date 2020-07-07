import React,{FC} from "react";
import Header from '../components/Header';
import TopMain from '../components/TopMain'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ResultPage from './ResultPage'


const TopPage: FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <TopMain />
        </Route>
        <Route path="/search/:keyword" exact>
          <ResultPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default TopPage;