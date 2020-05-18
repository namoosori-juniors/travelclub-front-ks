import React from 'react';
import {Table} from "semantic-ui-react";

interface Props {

}

class ClubListTableHeaderView extends React.Component<Props>{
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