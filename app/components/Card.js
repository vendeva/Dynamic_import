import React from 'react';
import '../styles/bootstrap.css';

export default class extends React.Component {
    render() {
        return (
            <div className="card-body">
                <h4 className="card-title">{this.props.title}</h4>
                <p className="card-text">{this.props.text}</p>                                                  
            </div>
        )
    }
}