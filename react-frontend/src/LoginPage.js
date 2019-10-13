import React from 'react'
import FacebookLogin from './FacebookLogin';


class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {active: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('clicked')
        this.setState(state => ({
            active: false
        }));
    //    this.setState(state =>({
    //        active: !state.active
    //    }));
    }

    getStyle = () => {
        if (this.state.active === false) {
            return {
                top: '-880px'
            }
        } else {
            return {
                top: '0px'
            }
        }
    }


    render() {
        const responseFacebook = (response) => {
            console.log(response);
          }
        return (
            <div class="login-page" style={this.getStyle()}>
                <h1>Welcome to the Tech-Pack application</h1>
                <div class ="login-page-container">
                    <div class='left-section'>
                        <h2>Create Your own technical package</h2>
                    <img class='front-image' src="./static/front-image.jpg" alt='front'></img>
                    </div>
                <div class ="right-section">
                <h3>Please log in to fully utilize the app</h3>
                <div>
                <FacebookLogin />
                </div>
                <div>
                    <a>Login with Google</a>
                </div>
                <div>
                    <a>Create account:</a><br/>
                    <p>email:</p>
                    <input></input><br/>
                    <p>password:</p>
                    <input></input><br/>
                </div>
                <div>
                <h2>You can also Preview the app here:</h2>
                    <a onClick={this.handleClick}>CLICK</a>
                </div>
                </div>
                </div>
                <div class='login-button'>
                    <a>Log in</a>
                </div>
            </div>
        )
    }
}
export default LoginPage