import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/AuthContext';

const Register = props => {
    const authContext = useContext(AuthContext);
    const { registerUser, error, clearErrors, isAuthenticated } = authContext;

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/');
        }

        if(error === 'User already exists') {
            setAlert(error, 'danger');
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { name, email, password, confirmPassword } = user;

    const onChange = event => setUser({ ...user, [event.target.name]: event.target.value });

    const onSubmit = event => {
        event.preventDefault();
        if(name === '' || email === '' || password === ''){
            setAlert('Please fill out each field appropriately', 'danger');
        } else if(confirmPassword !== password) {
            setAlert('Passwords do not match', 'danger');
        } else {
            registerUser({
                name,
                email,
                password
            });
        }
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} minLength="6"/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={onChange} />
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}
export default Register;