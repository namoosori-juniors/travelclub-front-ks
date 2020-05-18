import React from 'react';
import TravelClubModel from "../../model/TravelClubModel";
import {Table} from "semantic-ui-react";


interface Props {
    club:TravelClubModel;
    onRowClicked:(clubId:string) => void;
}

class ClubListTableRowView extends React.Component<Props>{
    render() {
        const {club,onRowClicked} = this.props;
        const dateTime = new Date(club.foundationTime).toDateString();

        return (
            <Table.Row onClick={()=>onRowClicked(club.usid)} >
                <Table.Cell>{club.name}</Table.Cell>
                <Table.Cell>{club.intro}</Table.Cell>
                <Table.Cell>{dateTime}</Table.Cell>
            </Table.Row>
        );
    }
}

export default ClubListTableRowView;