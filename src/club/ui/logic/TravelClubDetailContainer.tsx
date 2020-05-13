import * as React from 'react';
import {inject, observer} from 'mobx-react';
import autobind from 'autobind-decorator';
import {RouteComponentProps} from 'react-router';
import {TravelClubService} from '../../present/logic/travelClubService';
import ClubDetailView from "../view/ClubDetailView";
import TravelClubModel from "../../model/TravelClubModel";

interface Props extends RouteComponentProps{
  travelClubService : TravelClubService
}

@inject('travelClubService')
@observer
@autobind
class TravelClubDetailContainer extends React.Component<Props> {

  updateTravelClub(key:string, value:string){
    const targetClub = this.props.travelClubService.travelClub?this.props.travelClubService.travelClub:new TravelClubModel(null);
    switch (key) {
      case 'name':
        if(value.length >10) return false;
        targetClub.name = value;
        break;
      case 'intro' :
        if(value.length <10) return false;
        targetClub.intro = value;
        break;
    }
    this.props.travelClubService.setTravelClub(targetClub);
    return true;

  }

  modifyTravelClub(){
    this.props.travelClubService.modifyClub();
  }

  removeTravelClub(){
    this.props.travelClubService.removeClub();
    this.props.history.push('/');
  }

  render(){

    const travelClub = this.props.travelClubService.travelClub;
    console.log("In detail")
    console.log(travelClub)
    return(
      <ClubDetailView club = {travelClub}
                      updateTravelClub={this.updateTravelClub}
                      modifyTravelClub={this.modifyTravelClub}
                      removeTravelClub={this.removeTravelClub}
      />
    );
  }
}

export default TravelClubDetailContainer;
