import ClubMembership from "./ClubMembership";

export default class TravelClubModel{
  usid : string = '';
  name : string = '';
  intro : string = '';
  foundationTime : number = 0;
  boardId : string = '';

  membershipList : ClubMembership[]=[];

  constructor(travelClub:TravelClubModel|null){
    if(travelClub){
      Object.assign(this,travelClub);
      if(travelClub.membershipList){
        this.membershipList = travelClub.membershipList.map(membership => new ClubMembership(membership));
      }
    }
  }
}
