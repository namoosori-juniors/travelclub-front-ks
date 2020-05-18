import React from 'react';
import {RouteComponentProps} from 'react-router';
// import {Button, Container, Header, Icon, Input, Modal} from 'semantic-ui-react';
import ClubListSearchBar from "../view/ClubListSearchBar";
import ClubListTableView from "../view/ClubListTableView";
import {inject, observer} from "mobx-react";
import autobind from "autobind-decorator";
import {TravelClubService} from "../../present/logic/travelClubService";
import ClubRegisterModalContainer from "./ClubRegisterModalContainer";

interface Props extends RouteComponentProps{
    travelClubService:TravelClubService
    // clubs:TravelClubModel[]
}

// interface State {
//     keyword:string;
// }


@inject('travelClubService')
@observer
@autobind
class ClubListMainContainer extends React.Component<Props>{

    constructor(props:Props) {
        super(props);
        // this.state = {keyword:''};
        this.props.travelClubService.findClubsByName('',true);
    }

    onSearchBarTyped(keywordInput:string){
        console.log("on Search")
        this.props.travelClubService.findClubsByName(keywordInput,true);
    }

    onRowClicked(clubId:string){
        console.log("onRow")
        const{travelClubService, history} =this.props;
        travelClubService.findClubById(clubId);
        history.push('/clubs/detail')
    }

    registerClub(){

    }


    render() {
        const {clubs} = this.props.travelClubService;

        return (
            <div className='text-center margin-center wid-80'>
                <ClubListSearchBar onSearchBarTyped={this.onSearchBarTyped}/>
                <div className='text-center  margin-center gap wid-80'>
                    <ClubListTableView clubs={clubs} onRowClicked={this.onRowClicked}/>
                </div>
                <ClubRegisterModalContainer travelClubService={this.props.travelClubService}/>
            </div>
        );
    }
}
export default ClubListMainContainer;