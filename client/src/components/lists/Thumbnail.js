import React from 'react';
import { Link } from 'react-router-dom';

import Moment from 'react-moment';
import 'moment-timezone';

class Thumbnail extends React.Component {
    render() {
        return (
            
            <Link to={"/lists/" + this.props.id}>
                <div className="card shadow pt-3 mb-1 bg-white rounded">
                    <div className="card-body">
                        <div className="card-body">
                            <div className="card-title">
                                <mark> {this.props.name || 'List'}</mark><br/>
                            </div>
                            <div className="card-text text-muted">
                                <p>
                                    {this.props.items.length > 0 ? this.props.items.length + " items" : "empty" }
                                </p>
                                <p className="small">Created <Moment fromNow ago>{this.props.created}</Moment> ago</p>

                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

}

export default Thumbnail;
