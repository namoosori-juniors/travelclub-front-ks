import * as React from "react";
import TravelClubModel from "../../model/TravelClubModel";
import {Button, Input,Modal,Header,Icon} from "semantic-ui-react";

interface Props{
  clubs : TravelClubModel[];
  onKeyUpSearch(clubName:string): void;
  showClubDetail(clubId:string): void;
  registerClub(): void;
  updateTravelClubCdo(key:string, value:string):boolean;
}

class ClubListView extends React.Component<Props> {

  render(){
    //    
    const {clubs, onKeyUpSearch,showClubDetail,registerClub, updateTravelClubCdo} = this.props;
    const list:any[] = [];

    for(const club of clubs){
      const dateTime = new Date(club.foundationTime).toDateString();
      list.push(
        <tr key={club.usid} data-key={club.usid} onClick={e=>showClubDetail(e.currentTarget.dataset.key?e.currentTarget.dataset.key:'')}>
          <td >{club.name}</td><td>{club.intro}</td><td>{dateTime}</td>
        </tr>);
    }


    return (
      <div className='text-center margin-center wid-80'>
        <div>
          <input className='wid-80 gap' type='text' placeholder ='검색할 클럽 이름을 입력하세요' onKeyUp={(e)=>onKeyUpSearch(e.currentTarget.value)}/>
        </div>
        <table className="wid-100 gap">
          <thead>
            <tr>
              <th>클럽명</th><th>클럽 소개</th><th>창단일</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>    
        </table>

          <Modal trigger={<Button>클럽 등록하기</Button>} basic size="small">
              <Header icon="archive" content="클럽 등록하기" />
              <Modal.Content>
                  <form id='regForm' className='text-center'>
                      <Input className='wid-80 gap dp-block' placeholder='클럽이름(10글자 이하)'
                             onChange={e =>{
                                 if(!updateTravelClubCdo('name', e.currentTarget.value)){
                                     e.currentTarget.value=e.currentTarget.value.substring(0,10);
                                 }
                             }}></Input>
                      <Input className='wid-80 gap dp-block' placeholder='소개글(10글자 이상)'
                              onChange={e => {
                                  if(!updateTravelClubCdo('intro', e.currentTarget.value)){
                                      e.currentTarget.style.color='red';
                                  }else{
                                      e.currentTarget.style.color='green';
                                  }
                              }}></Input>
                      <Input className='wid-80 gap dp-block' placeholder='단장 이메일'
                             onChange={e=>{
                                 updateTravelClubCdo('presidentEmail', e.currentTarget.value);
                             }}></Input>
                  </form>
              </Modal.Content>
              <Modal.Actions>
                  <div className='text-center'>
                      <Button color="green" inverted onClick={e => {
                          registerClub();
                      }}>
                          <Icon name="checkmark" /> 등록하기
                      </Button>
                  </div>
              </Modal.Actions>
          </Modal>

      </div>
    );

  }


}

export default ClubListView;
