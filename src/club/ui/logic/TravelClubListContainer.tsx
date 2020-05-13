import * as React from 'react';
import {inject, observer} from 'mobx-react';
import autobind from 'autobind-decorator';
import {RouteComponentProps, withRouter} from 'react-router';
import {TravelClubService} from '../../present/logic/travelClubService';
import ClubListView from "../view/ClubListView";
import TravelClubModel from "../../model/TravelClubModel";
import ClubMembership from "../../model/ClubMembership";
import TravelClubCdoModel from "../../model/TravelClubCdoModel";

interface Props extends RouteComponentProps{
  travelClubService : TravelClubService
}

@inject('travelClubService')
@observer
@autobind
class TravelClubListContainer extends React.Component<Props> {

  constructor(props:Props){
      super(props);
      // this.setClub("",true);
      if(this.props.travelClubService !== undefined) this.props.travelClubService.findClubsByName('', true);
  }

  setClub(clubName:string, descending:boolean){
    if(this.props.travelClubService !== undefined) this.props.travelClubService.findClubsByName(clubName, descending);
  }

  onKeyUpSearch(clubName:string){
    this.setClub(clubName,true);
  }

  showClubDetail(clubId:string){
    this.props.travelClubService.findClubById(clubId);
    this.props.history.push('/clubs/detail')
  }

  updateTravelClubCdo(key:string, value:string){
    const targetClub = this.props.travelClubService.travelClubCdo?this.props.travelClubService.travelClubCdo:new TravelClubCdoModel();
    switch (key) {
      case 'name':
        if(value.length >10) return false;
        targetClub.name = value;
        break;
      case 'intro' :
        if(value.length <10) return false;
        targetClub.intro = value;
        break;
      case 'presidentEmail':
        targetClub.presidentEmail = value;
    }
    this.props.travelClubService.setTravelClubCdo(targetClub);
    return true;

  }

  registerClub(){
    this.props.travelClubService.registerClub();
    this.props.history.push('/');
  }

  render(){
    const list= this.props.travelClubService.clubs;
    return(
      <ClubListView clubs = {list}
                    registerClub = {this.registerClub}
                    onKeyUpSearch = {this.onKeyUpSearch}
                    showClubDetail =  {this.showClubDetail}
                    updateTravelClubCdo = {this.updateTravelClubCdo}
      />
    );
  }
}

export default TravelClubListContainer;
