import './login.css';
import logo from '../UI/icons/logo.svg';
import arrow from '../UI/icons/arrowRight.svg';

const Login = () => {

    // create a funtion to send the username to the server
    const sendUsername = () => {
        console.log('clicked');
        // get the username from the input field
        const username = document.querySelector('.proj-username input').value;
        // send the username to the server
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="login-page">
            <div className="proj-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className='proj-txt'>
                <h1 className='txt'>Keep your tasks on track!</h1>
            </div>
            <div className='proj-username'>
                <input className='user-input' type="text" placeholder="Enter your name" />
                <button className='logn-btn' onClick={sendUsername}><img src={arrow} alt='logn-btn'></img></button>
            </div>
        </div>
    );
}

export default Login;