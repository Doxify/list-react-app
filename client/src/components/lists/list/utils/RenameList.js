import React from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap'
import axios from 'axios';

class RenameList extends React.Component {

    deleteList() {
       if(this.props.id != null) {
            // console.log(process.env);
            axios.post(`${process.env.REACT_APP_API_URL}/list/rename/${this.props.id}`);
       }
    }

    render() {
        var popover = (
            <Popover id="popover-basic">
              <Popover.Content>
                <h4 className="title text-warning">Rename List</h4>

              </Popover.Content>
            </Popover>
        );

        return (
            <OverlayTrigger trigger="focus" placement="bottom" overlay={popover}>
                <Button className="btn btn-warning mr-2 float-right text-white">Rename</Button>
            </OverlayTrigger>
        )
    }

}

export default RenameList;