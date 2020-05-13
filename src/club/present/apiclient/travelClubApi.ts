import axios from "axios";
import TravelClubModel from "../../model/TravelClubModel";
import TravelClubCdoModel from "../../model/TravelClubCdoModel";


class TravelClubApi{
  // URL = 'http://127.0.0.1:9003/clubs';
  URL = process.env.REACT_APP_API_URL + '/clubs';

  findClubsByName(clubName :string, descending :boolean){
    if(!clubName) clubName = '';
    if(descending == null) descending = true;
    console.log("LOG - API INVOED   " + this.URL + `?clubName=${clubName}&descending=${descending}`)

    return axios.get<TravelClubModel[]>(this.URL + `?clubName=${clubName}&descending=${descending}`)
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
  
}

export default new TravelClubApi();
