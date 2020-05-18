import axios from "axios";
import TravelClubModel from "../../model/TravelClubModel";
import TravelClubCdoModel from "../../model/TravelClubCdoModel";


class TravelClubApi{
  // URL = 'http://127.0.0.1:9003/clubs';
  URL = process.env.REACT_APP_API_URL + '/clubs';

  findClubsByName(name :string, foundationTimeDescending :boolean){
    if(!name) name = '';
    if(foundationTimeDescending == null) foundationTimeDescending = true;
    console.log("LOG - API INVOED   " + this.URL + `?name=${name}&foundationTimeDescending=${foundationTimeDescending}`)

    return axios.get<TravelClubModel[]>(this.URL + `?name=${name}&foundationTimeDescending=${foundationTimeDescending}`)
      .then(response => response && response.data);
  }

  findClubById(clubId :string){
    if(!clubId) return null;
    console.log("LOG - API INVOED   " + this.URL + `/${clubId}`)

    return axios.get<TravelClubModel>(this.URL  + `/${clubId}`)
      .then(response => response && response.data);
  }

  registerClub(travelClubCdo :TravelClubCdoModel){
    if(!travelClubCdo) return null;
    console.log("LOG - API INVOED   ")

    return axios.post<TravelClubModel>(this.URL ,travelClubCdo)
        .then(response => response && response.data);
  }

  modifyClub(clubId:string, nameValueList:any){
    if(!clubId) return null;
    console.log("LOG - API INVOED   ")

    return axios.put<string>(this.URL +`/${clubId}`,nameValueList)
        .then(response => response && response.data);
  }

  removeClub(clubId:string){
    if(!clubId) return null;
    console.log("LOG - API INVOED   ")

    return axios.delete<void>(this.URL +`/${clubId}`)
        .then(response => response && response.data);
  }
  
}

export default new TravelClubApi();
