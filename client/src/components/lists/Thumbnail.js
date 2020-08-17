import React from 'react';
import './list.css';
import { Link } from 'react-router-dom';

class Thumbnail extends React.Component {
    render() {
        return (
            
            <Link to={"/lists/" + this.props.id}>
                <div className="card shadow pt-3 mb-1 bg-white rounded">
                    <div className="card-body">
                        <div className="card-body">
                            <div className="card-title">
                                <markinfo>{this.props.name}</markinfo><br/>
                                <small>{this.props.id}</small>
                            </div>
                            <div className="card-text mt-4 mb-4">
                                <p className="small text-black">
                                    📝 {this.props.items} items
                                </p>
                            </div>
                            <p className="card-text">
                                <p className="text-muted small">Created on {this.props.created}</p>
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

}

export default Thumbnail;
