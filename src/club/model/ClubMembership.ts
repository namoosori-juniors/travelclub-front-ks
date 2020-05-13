export default class ClubMembership{
  clubId: string = '';
  memberEmail : string = '';
  role : string = '';
  joinDate : number =0;

  constructor(clubMembership :ClubMembership){
    if(clubMembership){
      Object.assign(this, clubMembership);
    }
  }
}
