import React from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap'
// import axios from 'axios';

class DeleteList extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            id: null
        }
    }

    componentDidMount() {
        this.setState({ id: this.props.id });
    }

    deleteList() {
       if(this.props.id != null) {
            // console.log(process.env);
            // axios.post(`${process.env.REACT_APP_API_URL}/list/delete/${this.props.id}`);
       }
    }

    render() {
        var popover = (
            <Popover id="popover-basic">
              <Popover.Content>
                <h4 className="title text-danger">Delete List</h4>
                <h5 className="text-danger mb-3">List deletion can't be undone, this list will be removed from our databases, forever!</h5>
                <Button
                    type="button"
                    className="btn btn-lg btn-danger btn-block text-white"
                    onClick={this.deleteList}
                >
                    Confirm list deletion
                </Button>
              </Popover.Content>
            </Popover>
        );

        return (
            <OverlayTrigger trigger="focus" placement="bottom" overlay={popover}>
                <Button className="btn btn-danger float-right">Delete</Button>
            </OverlayTrigger>
        )
    }

}

export default DeleteList;