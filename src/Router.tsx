import React from 'react';
import {BrowserRouter, Redirect,Route} from 'react-router-dom';
import TravelClubDetailContainer from "./club/ui/logic/TravelClubDetailContainer";
import ClubListMainContainer from "./club/ui/logic/ClubListMainContainer";

class Routes extends React.PureComponent {
  render(){
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/" render={() => <Redirect exact from="/" to="/clubs" />} />
        <Route exact path="/clubs" component={ClubListMainContainer}/>
        <Route exact path="/clubs/detail" component={TravelClubDetailContainer}/>
      </BrowserRouter>
    );
  }
}
export default Routes;
