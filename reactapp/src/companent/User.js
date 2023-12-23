import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
    render() {
        // Destructuring
        const { name, department, salary } = this.props;
        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline">{name}</h4>
                        <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Maaş: {salary}</p>
                        <p className="card-text">Department: {department}</p>
                    </div>
                </div>
            </div>
        );
    }
}

// defaultProps ve propTypes tanımlamalarını buraya alın
User.defaultProps = {
    name: "Bilgi Yok",
    salary: "Bilgi Yok",
    department: "Bilgi Yok",
};

User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    department: PropTypes.string.isRequired,
};

export default User;
