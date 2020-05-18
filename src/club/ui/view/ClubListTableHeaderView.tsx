import React from 'react';
import {Table} from "semantic-ui-react";

class ClubListTableHeaderView extends React.Component{
    render() {
        return (
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ClubName</Table.HeaderCell>
                    <Table.HeaderCell>Intro</Table.HeaderCell>
                    <Table.HeaderCell>Foundation Day</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        );
    }
}

export default ClubListTableHeaderView;