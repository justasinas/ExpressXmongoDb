import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
            fullName:'',
            username:'',
            email:'',
            password:''
        }
    }
    changeFullName(e) {
        this.setState({
            fullName:e.target.value
        })
    }
    changeUserName(e) {
        this.setState({
            username:e.target.value
        })
    }
    changeEmail(e) {
        this.setState({
            email:e.target.value
        })
    }
    changePassword(e) {
        this.setState({
            password:e.target.value
        })
    }
    render() {
        return (
            <div>
            <div className='container'>
                <div className='form-div'>
                    <form>
                        <input type="text" placeholder="Name" onChange={this.changeFullName} value={this.state.fullName} className='form-control form-group mt-2'/>
                        <input type="text" placeholder="Username" onChange={this.changeUserName} value={this.state.username} className='form-control form-group mt-2' />
                        <input type="email" placeholder="Email" onChange={this.changeEmail} value={this.state.email} className='form-control form-group mt-2' />
                        <input type="password" placeholder="Password" onChange={this.changePassword} value={this.state.password} className='form-control form-group mt-2' />
                        <button type="submit" className="btn btn-danger btn-block mt-2">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}
export default App;