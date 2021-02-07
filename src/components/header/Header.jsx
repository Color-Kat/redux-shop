import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.scss';

export default class Header extends React.Component{
    // constructor (props) {
    //     super(props);
    // }

    render() {
        return (
            <header>
                <div className="title">Redux-store</div>
                <nav className="links">
                    <NavLink to="/" exact>Главная</NavLink>
                    <NavLink to="/cart">Корзина</NavLink>
                    <NavLink to="/liked">Избранное</NavLink>
                </nav>
            </header>
        )
    }
}
//  Header;