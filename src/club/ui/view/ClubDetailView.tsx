import * as React from "react";
import TravelClubModel from "../../model/TravelClubModel";
import {Button, Container, Header, Icon, Input, Modal} from "semantic-ui-react";
import travelClubService from "../../present/logic/travelClubService";

interface Props {
  club : TravelClubModel|any;
  updateTravelClub(key:string, value:string):boolean;
  modifyTravelClub(key:string, value:string):void;
}

class ClubDetailView extends React.Component<Props> {
  render(){
    //    
    const {club,updateTravelClub,modifyTravelClub} = this.props;
    const membershipList =   club.membershipList ? club.membershipList : [];
    console.log("In View")
      console.log(membershipList);

    const list:any[] = [];
    for(const membership of membershipList){
        list.push(
            <tr key={membership.memberEmail}>
                <td>{membership.memberEmail}</td>
                <td>{membership.joinDate}</td>
                <td>{membership.role}</td>
            </tr>
        )
    }

    return (
      <div className='text-center margin-center wid-80'>
        <div className='text-center margin-center wid-100'>
          <div className='text-center wid-50 dp-inline-block'>
              <small>클럽이름</small>  <a id='modName' onClick={()=>{
                const modal = document.getElementById('nameMod');
                if(modal instanceof Modal) modal.setState({open:true});
          }}>수정</a>
              <div className="height-50">{club.name?club.name:'없음'}</div>
          </div>
          <div className='text-center wid-30 dp-inline-block'>
              <small>창단일</small>
              <div className="height-50">{club.foundationTime?club.foundationTime:'없음'}</div>
          </div>
            <div className='text-center wid-20 dp-inline-block'>
                <small>회원수</small>
                <div className="height-50">{membershipList.length}</div>
            </div>
        </div>
        <div className='text-center margin-center wid-100  height-100'>
            <small>클럽소개</small> <a>수정</a>
            <div>{club.intro}</div>
        </div>
        <div className='text-center margin-center wid-100  height-500'>

            <table className='text-center margin-center wid-100 '>
                <caption>회원리스트</caption>
                <thead>
                    <tr>
                        <th>아이디</th><th>가입일</th><th>Role</th>
                    </tr>
                </thead>
                {list}
            </table>
        </div>
          <div className='text-center margin-center wid-100'>
              <fieldset>
                  <legend>Danger Zone</legend>
                  <Button>클럽 삭제</Button>
              </fieldset>
          </div>


          <Modal id='nameMod' trigger={document.getElementById('modName')} basic size="small">
              <Header icon="archive" content="클럽 등록하기" />
              <Modal.Content>
                  <form id='regForm' className='text-center'>
                      <Input className='wid-80 gap dp-block' placeholder='클럽이름(10글자 이하)'
                             onChange={e =>{
                                 // if(!updateTravelClubCdo('name', e.currentTarget.value)){
                                 //     e.currentTarget.value=e.currentTarget.value.substring(0,10);
                                 // }
                             }}></Input>
                      <Input className='wid-80 gap dp-block' placeholder='소개글(10글자 이상)'
                             onChange={e => {
                                 // if(!updateTravelClubCdo('intro', e.currentTarget.value)){
                                 //     e.currentTarget.style.color='red';
                                 // }else{
                                 //     e.currentTarget.style.color='green';
                                 // }
                             }}></Input>
                      <Input className='wid-80 gap dp-block' placeholder='단장 이메일'
                             onChange={e=>{
                                 // updateTravelClubCdo('presidentEmail', e.currentTarget.value);
                             }}></Input>
                  </form>
              </Modal.Content>
              <Modal.Actions>
                  <div className='text-center'>
                      <Button color="green" inverted onClick={e => {
                          // registerClub();
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

export default ClubDetailView;
