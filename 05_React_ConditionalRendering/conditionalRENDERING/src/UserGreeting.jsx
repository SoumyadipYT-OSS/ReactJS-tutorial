import PropTypes from 'prop-types';

function UserGreeting(props) {

    const welcomeMessage = <h2 className='welcome-message'>
        Welcome, {props.username}!
    </h2>

    const loginPromt = <h2 className='login-prompt'>Welcome Guest, please log in</h2>

    return (
        props.isLoggedIn ?  welcomeMessage:loginPromt 
    );
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest'
}
export default UserGreeting;