import * as React from "react";
import TravelClubModel from "../../model/TravelClubModel";
import {Button, Icon, Input, Table} from "semantic-ui-react";

interface Props {
  club : TravelClubModel|any;
  updateTravelClub(key:string, value:string):boolean;
  modifyTravelClub():void;
  removeTravelClub():void;
}
interface State {
    modNameFlag:boolean;
    modIntroFlag:boolean;
    modNameValue:string;
    modIntroValue:string;
}

class ClubDetailView extends React.Component<Props, State> {

    constructor(props:Props) {
        super(props);
        this.state = {modNameFlag:false, modIntroFlag:false, modNameValue:'', modIntroValue:''}
    }

  render(){
    //
    const {club,updateTravelClub,modifyTravelClub,removeTravelClub} = this.props;

    const {modNameFlag, modIntroFlag, modNameValue,modIntroValue} = this.state;

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
        <div className='text-center margin-center wid-80 gap'>
        <Table inverted textAlign='center' >
            <Table.Body >
                <Table.Row>
                    <Table.Cell  width='6'>
                        <small>클럽이름</small>
                        {
                            modNameFlag &&
                                <Icon name='check circle outline' color='green' onClick={()=> {
                                    this.setState({modNameFlag: false, modIntroFlag: modIntroFlag});
                                    modifyTravelClub();
                                }}/> ||
                                <Icon name='setting' onClick={()=>this.setState(
                                {
                                    modNameFlag: true,
                                    modIntroFlag: modIntroFlag
                                })}/>
                        }
                        <div className="height-50 text-center" >
                        {
                            modNameFlag &&
                            <Input value={modNameValue ? modNameValue: (club.name?club.name : 'none')}  onChange={(e)=> {
                                console.log(e.currentTarget.value)
                                updateTravelClub('name',e.currentTarget.value);
                                this.setState({modNameValue:e.currentTarget.value})
                            }}/> ||
                            <h3>{club.name ? club.name : 'none'}</h3>
                        }
                        </div>

                    </Table.Cell>
                    <Table.Cell width='5'>
                        <small>창단일</small>
                        <div className="height-50"><h3>{club.foundationTime?new Date(club.foundationTime).toDateString():'없음'}</h3></div>
                    </Table.Cell>
                    <Table.Cell width='5'>
                        <small>회원수</small>
                        <div className="height-50"><h3>{membershipList.length}</h3></div>
                    </Table.Cell>
                </Table.Row>
                <Table.Row >
                    <Table.Cell colSpan='3' width='16'>
                        <small>클럽소개</small>
                        {
                            modIntroFlag &&
                            <Icon name='check circle outline' color='green' onClick={()=> {
                                this.setState({modNameFlag: modNameFlag, modIntroFlag: false});
                                modifyTravelClub();
                            }}/> ||
                            <Icon name='setting' onClick={()=>this.setState(
                                {
                                    modNameFlag: modNameFlag,
                                    modIntroFlag: true
                                })}/>
                        }
                        <div className="height-50 text-center" >
                        {
                            modIntroFlag &&
                            <Input value={modIntroValue ? modIntroValue: (club.intro?club.intro : 'none')}  onChange={(e)=> {
                                console.log(e.currentTarget.value)
                                updateTravelClub('intro',e.currentTarget.value);
                                this.setState({modIntroValue:e.currentTarget.value})
                            }}/> ||
                            <h3>{club.intro ? club.intro : 'none'}</h3>
                        }
                        </div>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell colSpan='3'>
                        <table className='text-center margin-center wid-100 '>
                            <caption><h3>회원리스트</h3></caption>
                            <thead>
                            <tr>
                                <th>아이디</th><th>가입일</th><th>Role</th>
                            </tr>
                            </thead>
                            <tbody>
                            {list}
                            </tbody>
                        </table>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>

            <Table.Footer>
                <Table.Row  >
                    <Table.HeaderCell colSpan='3' >
                        <div className='text-center'>
                            <fieldset className='border-red'>
                                <legend><h3 className='font-red'>Danger Zone</h3></legend>
                                <Button onClick={e=>{
                                    if(window.confirm('정말 삭제하시겠습니까?'))
                                    removeTravelClub();
                                }}>클럽 삭제</Button>
                            </fieldset>
                        </div>
                    </Table.HeaderCell>
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Footer>
        </Table>
        </div>

  );

  }
}



export default ClubDetailView;
