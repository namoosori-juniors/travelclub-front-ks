import axios from "axios";
import TravelClubModel from "../../model/TravelClubModel";


class TravelClubApi{
  URL = 'http://127.0.0.1:9003/clubs';

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
  
}

export default new TravelClubApi();
