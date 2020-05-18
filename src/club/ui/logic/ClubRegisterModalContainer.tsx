import {Button, Header, Icon, Input, Modal} from "semantic-ui-react";
import React from "react";
import {inject, observer} from "mobx-react";
import autobind from "autobind-decorator";
import {TravelClubService} from "../../present/logic/travelClubService";
import TravelClubCdoModel from "../../model/TravelClubCdoModel";

interface Props {
    travelClubService:TravelClubService
}

interface State {
    open:boolean;
}

@inject('travelClubService')
@observer
@autobind
class ClubRegisterModalContainer extends React.Component<Props,State>{

    constructor(props:Props) {
        super(props);
        this.state = {
            open:false
        };
    }

    componentDidUpdate() {
        this.props.travelClubService.findClubsByName('',true);
        console.log("refresh")
    }

    onNameTyped(newValue:string, travelClubCdo:TravelClubCdoModel, dom:EventTarget&HTMLInputElement){
        if(newValue.length>10) dom.value=newValue.substring(0,10);
        travelClubCdo.name = dom.value;
        this.props.travelClubService.setTravelClubCdo(travelClubCdo);
    }

    onIntroTyped(newValue:string, travelClubCdo:TravelClubCdoModel, dom:any){
        if(newValue.length<10){
            dom.style.color='red';
            return false;
        }else{
            travelClubCdo.intro = newValue;
            this.props.travelClubService.setTravelClubCdo(travelClubCdo);
            dom.style.color='green';
            return true;
        }
    }

    onEmailTyped(newValue:string, travelClubCdo:TravelClubCdoModel, dom:EventTarget&HTMLInputElement){
        travelClubCdo.presidentEmail = newValue;
        return true;
    }

    render() {
        const {open} = this.state;
        const travelClubService = this.props.travelClubService;
        const travelClubCdo = travelClubService.travelClubCdo;
        let [introValid, emailValid] = [false,false];
        return (
            <div  className='text-center margin-center wid-80'>
                <Modal open ={open} trigger={<Button className='gap wid-80' onClick={e=>this.setState({open:true})}>클럽 등록하기</Button>} basic size="small">
                    <Header icon="archive" content="클럽 등록하기" />
                    <Modal.Content>
                        <form id='regForm' className='text-center'>
                            <Input className='wid-80 gap dp-block' placeholder='클럽이름(10글자 이하)'
                                   onChange={e =>{
                                        this.onNameTyped(e.currentTarget.value, travelClubCdo, e.currentTarget);
                                   }}></Input>
                            <Input className='wid-80 gap dp-block' placeholder='소개글(10글자 이상)'
                                   onChange={e => {
                                        introValid = this.onIntroTyped(e.currentTarget.value, travelClubCdo, e.currentTarget);
                                   }}></Input>
                            <Input className='wid-80 gap dp-block' placeholder='단장 이메일'
                                   onChange={e=>{
                                        emailValid = this.onEmailTyped(e.currentTarget.value, travelClubCdo, e.currentTarget);
                                   }}></Input>
                        </form>
                    </Modal.Content>
                    <Modal.Actions>
                        <div className='text-center'>
                            <Button color="green" inverted onClick={e => {
                                if(!introValid){
                                    alert('intro 는 10글자 이상이어야 합니다')
                                }else if(!emailValid){
                                    alert('email 형식이 올바르지 않습니다')
                                }else{
                                    travelClubService.registerClub().then(value =>this.setState({open:false}) );
                                }
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
export default ClubRegisterModalContainer;
