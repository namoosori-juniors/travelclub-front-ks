import { action, observable, runInAction } from 'mobx';
import travelClubApi from '../apiclient/travelClubApi';
import TravelClubModel from "../../model/TravelClubModel";
import TravelClubCdoModel from "../../model/TravelClubCdoModel";

export class TravelClubService{
  @observable
  travelClub : TravelClubModel | null = {} as TravelClubModel;

  @observable
  clubs : Array<TravelClubModel> = [];


  @observable
  travelClubCdo : TravelClubCdoModel= {} as TravelClubCdoModel;

  @action
  async findClubsByName(clubName : string, descending:boolean){
    const clubs = await travelClubApi.findClubsByName(clubName, descending);
    runInAction(() =>{
      this.clubs = clubs.map(club => new TravelClubModel(club));
    } )
    
  }

  @action
  async findClubById(clubId:string){
    const club =await travelClubApi.findClubById(clubId);
    runInAction(()=> this.travelClub = club);
  }


  @action
  async registerClub(){

    console.log('register club')
    console.log(this.travelClubCdo)
    await travelClubApi.registerClub(this.travelClubCdo);
  }

  @action
  async modifyClub(){
    const keyValueList = [];
    const clubId = this.travelClub?this.travelClub.id:'';

    if(this.travelClub){
      keyValueList.push({name:'name',value:this.travelClub.name}) ;
      keyValueList.push({name:'intro',value:this.travelClub.intro}) ;
    }

    await travelClubApi.modifyClub(clubId, {nameValueList:keyValueList});
  }

  @action
  async removeClub(){
    await travelClubApi.removeClub(this.travelClub?this.travelClub.usid:'');
  }


  @action
  setTravelClub(travelClub : TravelClubModel){
    if(travelClub) this.travelClub = travelClub;
  }

  @action
  clearTravelClub(){
    this.travelClub = {} as TravelClubModel;
  }

  @action
  setTravelClubCdo(travelClubCdo : TravelClubCdoModel){
    if(travelClubCdo) this.travelClubCdo = travelClubCdo;
  }

  @action
  clearTravelClubCdo(){
    this.travelClubCdo = {} as TravelClubCdoModel;
  }

  @action
  setClubs(clubs : TravelClubModel[]){
    if(clubs) this.clubs = clubs;
  }

  @action
  clearClubs(){
    this.clubs = [];
  }
}

export default new TravelClubService();
