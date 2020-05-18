import * as React from "react";
import TravelClubModel from "../../model/TravelClubModel";
import {Table} from "semantic-ui-react";
import ClubListTableHeaderView from "./ClubListTableHeaderView";
import ClubListTableRowView from "./ClubListTableRowView";

interface Props{
    clubs:TravelClubModel[]
    onRowClicked:(clubId:string) => void;
}

class ClubListTableView extends React.Component<Props> {

    render(){
        const {clubs, onRowClicked} = this.props;
        return (
            <Table celled inverted selectable>
                <ClubListTableHeaderView/>
                <Table.Body>
                    {
                        clubs.length &&
                            clubs.map(club =><ClubListTableRowView club={club} onRowClicked={onRowClicked}/> )
                    }
                </Table.Body>
            </Table>
        );
  }
}

export default ClubListTableView;
