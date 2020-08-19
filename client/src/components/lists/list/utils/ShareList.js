import React from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap'
import Clipboard from 'react-clipboard.js';

class ShareList extends React.Component {

    render() {
        var popover = (
            <Popover id="popover-basic">
              <Popover.Content>
                <h4 className="title text-primary">Share List</h4>
                <h5 className="mb-3">Anyone you share this link with will have the same access to the list as you.</h5>
                <Clipboard
                    type="button"
                    className="btn btn-lg btn-info btn-block text-white" 
                    data-clipboard-text={`http://localhost:3000/lists/${this.props.id}`}
                >
                    Copy link to clipboard
                </Clipboard>
              </Popover.Content>
            </Popover>
        );

        return (
            <OverlayTrigger trigger="focus" placement="bottom" overlay={popover}>
                <Button className="btn btn-info float-right mr-2">Share</Button>
            </OverlayTrigger>
        )
    }

}

export default ShareList;