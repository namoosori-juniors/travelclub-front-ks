import * as React from 'react';
import {inject, observer} from 'mobx-react';
import autobind from 'autobind-decorator';
import {RouteComponentProps} from 'react-router';
import {TravelClubService} from '../../present/logic/travelClubService';
import ClubDetailView from "../view/ClubDetailView";
import TravelClubModel from "../../model/TravelClubModel";
import TravelClubCdoModel from "../../model/TravelClubCdoModel";

interface Props extends RouteComponentProps{
  travelClubService : TravelClubService
}

@inject('travelClubService')
@observer
@autobind
class TravelClubDetailContainer extends React.Component<Props> {

  constructor(props:Props){
      super(props);
  }

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


  render(){

    const travelClub = this.props.travelClubService.travelClub;
    console.log("In detail")
    console.log(travelClub)
    return(
      <ClubDetailView club = {travelClub}
                      updateTravelClub={this.updateTravelClub}
                      modifyTravelClub={this.updateTravelClub}
      />
    );
  }
}

export default TravelClubDetailContainer;
