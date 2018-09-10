import React from 'react';

export class UserActions extends React.Component {

    render() {
        const { user, update, submitted, disabled } = this.props;
        this.handleChange = this.props.handleChange;
        this.handleSubmit = this.props.handleSubmit;
        return (
            <div>
                {!submitted && <div className="col-md-6 col-md-offset-4">
                    <h5>{update ? "Update User" : disabled ? "User Details" : "Register"}</h5>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className={'form-group'}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" disabled={disabled ? "disabled" : ""} name="firstName" value={user.firstName} onChange={this.handleChange} />
                        </div>
                        <div className={'form-group'}>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" disabled={disabled ? "disabled" : ""} name="lastName" value={user.lastName} onChange={this.handleChange} />
                        </div>
                        <div className={'form-group'}>
                            <label htmlFor="UID">UID</label>
                            <input type="text" className="form-control" disabled={"disabled"} name="UID" defaultValue={user.UID} />
                        </div>
                        <div className={'form-group'}>
                            <label htmlFor="PID">PID</label>
                            <input type="text" className="form-control" disabled={disabled ? "disabled" : ""} name="PID" value={user.PID} onChange={this.handleChange} />
                        </div>
                        <div className={'form-group'}>
                            <label htmlFor="owner">Owner</label>
                            <input type="text" className="form-control" disabled={disabled ? "disabled" : ""} name="owner" value={user.owner} onChange={this.handleChange} />
                        </div>
                        <div className={'form-group'}>
                            <label htmlFor="location">Location</label>
                            <input type="text" className="form-control" disabled={disabled ? "disabled" : ""} name="location" value={user.location} onChange={this.handleChange} />
                        </div>
                        <div className={'form-group'}>
                            <label htmlFor="state">State</label>
                            <input type="text" className="form-control" disabled={disabled ? "disabled" : ""} name="state" value={user.state} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            {!disabled && <button className="btn btn-primary">{!update ? "Create" : "Update"}</button>}
                        </div>
                    </form>
                </div>
                }
            </div>
        )
    }
}