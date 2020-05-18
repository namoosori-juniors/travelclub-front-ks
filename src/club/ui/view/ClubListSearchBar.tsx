import React from "react";
import {Input} from 'semantic-ui-react';

interface Props {
    // keyword:string;
    onSearchBarTyped:Function;
}

class ClubListSearchBar extends React.Component<Props>{
    constructor(props:Props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(keyword:string){
        this.props.onSearchBarTyped(keyword);
    }

    render() {
        const {onSearchBarTyped} = this.props;

        return (
            <Input className='wid-80 gap' size='big' placeholder='클럽 이름을 입력하세요'   onChange={e=>onSearchBarTyped(e.currentTarget.value)} />
        );
    }
}

export default ClubListSearchBar;