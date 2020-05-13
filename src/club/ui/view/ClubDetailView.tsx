import * as React from "react";
import TravelClubModel from "../../model/TravelClubModel";
import {Button} from "semantic-ui-react";

interface Props {
  club : TravelClubModel|any;
  updateTravelClub(key:string, value:string):boolean;
  modifyTravelClub():void;
  removeTravelClub():void;
}
interface State {
    modNameFlag:boolean;
    modIntroFlag:boolean;
}

class ClubDetailView extends React.Component<Props, State> {

    constructor(props:Props) {
        super(props);
        this.state = {modNameFlag:false, modIntroFlag:false}
    }

  render(){
    //
    //   console.log(this.props.)
    const {club,updateTravelClub,modifyTravelClub,removeTravelClub} = this.props;
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

    const modNameInput:any = [];
    if(this.state.modNameFlag){
        modNameInput.push(
            <input type='text' onChange={e => {
                console.log(e.currentTarget.value);
                updateTravelClub('name',e.currentTarget.value);
            }
            } placeholder={club.name? club.name:'이름입력'}  />
        );
    }else{
        modNameInput.push(
            club.name? club.name:'none'
        )
    }
      const modIntroInput:any = [];
      if(this.state.modIntroFlag){
          modIntroInput.push(
              <textarea onChange={e => {
                  console.log(e.currentTarget.value);
                  updateTravelClub('intro',e.currentTarget.value);
              }
              } placeholder={club.intro? club.intro:'소개입력'}  />
          );
      }else{
          modIntroInput.push(
              club.intro? club.intro:'none'
          )
      }



    return (
      <div className='text-center margin-center wid-80'>
        <div className='text-center margin-center wid-100'>
          <div className='text-center wid-50 dp-inline-block'>
              <small>클럽이름</small>  <button id='modName' onClick={()=>{
                  if(this.state.modNameFlag){
                      this.setState({modNameFlag:false, modIntroFlag:this.state.modIntroFlag});
                      // @ts-ignore
                      document.getElementById('modName').innerHTML='수정';
                      modifyTravelClub();

                  }else{
                      this.setState({modNameFlag:true, modIntroFlag:this.state.modIntroFlag});
                      // @ts-ignore
                      document.getElementById('modName').innerHTML='저장';
                  }
          }}>수정</button>

              <div className="height-50" id='nameContainer'>{modNameInput}</div>
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
            <small>클럽소개</small> <button id='modIntro' onClick={()=>{
            if(this.state.modIntroFlag){
                this.setState({modNameFlag:this.state.modNameFlag, modIntroFlag:false});
                // @ts-ignore
                document.getElementById('modIntro').innerHTML='수정';
                modifyTravelClub();
            }else{
                this.setState({modNameFlag:this.state.modNameFlag, modIntroFlag:true});
                // @ts-ignore
                document.getElementById('modIntro').innerHTML='저장';
            }
        }}>수정</button>
            <div>{modIntroInput}</div>
        </div>
        <div className='text-center margin-center wid-100  height-500'>

            <table className='text-center margin-center wid-100 '>
                <caption>회원리스트</caption>
                <thead>
                    <tr>
                        <th>아이디</th><th>가입일</th><th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>

            </table>
        </div>
          <div className='text-center margin-center wid-100'>
              <fieldset>
                  <legend>Danger Zone</legend>
                  <Button onClick={e=>{
                      removeTravelClub();
                  }}>클럽 삭제</Button>
              </fieldset>
          </div>
      </div>
  );

  }
}



export default ClubDetailView;
