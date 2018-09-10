import React, { Component } from 'react';
import { userService } from '../_services';
import { UserActions } from "../UserActions";


export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            user: {
                firstName: "",
                lastName: "",
                UID: Math.floor(Math.random() * 900000) + 100000,
                PID: "",
                owner: "",
                location: "",
                state: ""
            },
            update: false,
            didUpdate: false,
            view: false,
            create: false,
            deleteObj: {
                deleting: false,
                UID: ""
            }
        };
        this.handleCreateUser = this.handleCreateUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.baseState = this.state;
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { user, update } = this.state;
        this.setState(this.baseState);
        const response = update ? userService.update(user) : userService.register(user);
        response.then(res => this.getAll());
    }
    getAll() {
        userService.getAll()
            .then(result => {
                const results = JSON.parse(result);
                this.setState({ users: results.users });
            });
    }
    componentDidMount() {
        this.getAll();
    }

    handleGetByUser = (user) => {
        this.setState({ user: user, view: true, create: false, update: false });
    }

    handleCreateUser(e) {
        this.setState({...this.baseState, create: true});
    }

    handleUpdateUser(user) {
        this.setState({ update: true, user: user, view: false, create: false });
    }

    handleDeleteUser(UID) {
        this.setState({ deleteObj: { deleting: true, UID } });
        userService.delete(UID).then(result => {
            if (result) {
                this.getAll();
                this.setState({ deleteObj: { deleting: false, UID: "" } });
            }
        });
    }

    render() {
        const { users, user, deleteObj, view, create, update, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <div>
                    <div>
                        <div>
                            <h3>{!create ? 'User List' : 'Create User'}</h3>
                            {
                                <ul>
                                    {!create && users.map((userData, index) => {
                                        return <li key={index}>
                                            {userData.firstName + ' ' + userData.lastName}
                                            {
                                                <span> - <a onClick={this.handleGetByUser.bind(this, userData)}>View</a>
                                                    {
                                                        <span> - <a onClick={() => this.handleUpdateUser(userData)}>Update</a></span>
                                                    }
                                                    {
                                                        (deleteObj.deleting && deleteObj.UID === userData.UID) ? <em> - Deleting...</em>
                                                            : <span> - <a onClick={() => { this.handleDeleteUser(userData.UID) }}>Delete</a></span>
                                                    }
                                                </span>
                                            }
                                        </li>
                                    })}
                                </ul>
                            }
                        </div>
                        <div>
                            <div>
                                {view && <UserActions user={user} disabled={view} />}
                            </div>
                        </div>
                        {!create && <span> For Registering a User click on <a align="left" onClick={this.handleCreateUser}>Create</a> </span>}
                    </div>
                </div>
                {create && <UserActions user={user} submitted={submitted} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />}
                {update && <UserActions user={user} update={update} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />}
            </div >
        );
    }
}
