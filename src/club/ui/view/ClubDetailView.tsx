import * as React from "react";
import TravelClubModel from "../../model/TravelClubModel";
import {Button, Container, Input} from "semantic-ui-react";
import travelClubService from "../../present/logic/travelClubService";

interface Props {
  club : TravelClubModel|any;
}

class ClubDetailView extends React.Component<Props> {
  render(){
    //    
    const {club} = this.props;
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
              <small>클럽이름</small>  <a>수정</a>
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
      </div>
    );

  }


}

export default ClubDetailView;
