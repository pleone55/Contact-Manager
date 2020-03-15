import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import ContactContext from '../../context/contact/ContactContext';

const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user, loadUser } = authContext;

    const contactContext = useContext(ContactContext);
    const { clearContacts } = contactContext;

    useEffect(() => {
        loadUser();
        //eslint-disable-next-line
    }, []);

    const onLogout = () => {
        logout();
        clearContacts();
    }

    const authLinks = (
        <>
            <li>Welcome {user && user.name}</li>
            <li>
                <a onClick={onLogout} href="#!"><i className="fas fa-sign-out-alt"></i><span className="hide-sm">Logout</span></a>
            </li>
        </>
    );

    const guestLinks = (
        <>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    )
}
export default Navbar;