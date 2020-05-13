import ClubMembership from "./ClubMembership";
import autobind from 'autobind-decorator';

@autobind
export default class TravelClubModel{
  usid : string = '';
  name : string = '';
  intro : string = '';
  foundationTime : number = 0;
  boardId : string = '';

  membershipList : Array<ClubMembership>=[];

  constructor(travelClub:TravelClubModel|null){
    if(travelClub){
      Object.assign(this,travelClub);
      if(travelClub.membershipList){
        this.membershipList = travelClub.membershipList.map(membership => new ClubMembership(membership));
      }
    }
  }
}
