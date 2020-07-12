import React,{FC} from "react";
import Header from '../components/Header';
import TopMain from '../components/TopMain'
import DownLoadPage from './DownLoadPage'
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
        <Route exact path={"/"} component={TopMain}/>
        <Route exact path={"/search/:keyword"} component={ResultPage} />
        <Route exact path={"/download/:keyword"} component={DownLoadPage}/>
      </Switch>
    </Router>
  );
}

export default TopPage;