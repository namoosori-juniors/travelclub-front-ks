import * as React from "react";
import TravelClubModel from "../../model/TravelClubModel";
import {Table} from "semantic-ui-react";
import ClubListTableHeaderView from "./ClubListTableHeaderView";
import ClubListTableRowView from "./ClubListTableRowView";

interface Props{
    // keyword:string
    clubs:TravelClubModel[]
    onRowClicked:Function;
}

class ClubListTableView extends React.Component<Props> {

    render(){
        const rowList = [];
        for(const clubEl of this.props.clubs){
            rowList.push(
                <ClubListTableRowView club={clubEl} onRowClicked={this.props.onRowClicked}/>
                )
        }
        return (
            <Table celled inverted selectable>
                <ClubListTableHeaderView/>
                <Table.Body>
                    {rowList}
                </Table.Body>
            </Table>
        );

  }


}

export default ClubListTableView;
