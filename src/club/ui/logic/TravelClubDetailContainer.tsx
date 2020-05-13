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

  constructor(props:Props){
      super(props);
  }

  // showClubDetail(clubId:string){
  //   this.props.travelClubService.findClubById(clubId);
  //
  // }


  render(){

    const travelClub = this.props.travelClubService.travelClub;
    console.log("In detail")
    console.log(travelClub)
    return(
      <ClubDetailView club = {travelClub} />
    );
  }
}

export default TravelClubDetailContainer;
