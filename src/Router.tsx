import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import TravelClubListContainer from "./club/ui/logic/TravelClubListContainer";
import TravelClubDetailContainer from "./club/ui/logic/TravelClubDetailContainer";
class Routes extends React.PureComponent {
  render(){
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/" render={() => <Redirect exact from="/" to="/clubs" />} />
        <Route exact path="/clubs" component={TravelClubListContainer}/>
        <Route exact path="/clubs/detail" component={TravelClubDetailContainer}/>
      </BrowserRouter>
    );
  }
}
export default Routes;
