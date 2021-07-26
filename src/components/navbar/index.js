import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'

function Navbar() {
    return (
        <nav className="navbar is-danger">
            <div className="navbar-brand">
                <Link className='navbar-item' to={''}>
                    <img src={logo} alt="Logo" width="112" height="28" />
                </Link>
                <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link className='navbar-link' to={''}>Clientes</Link>
                        <div className="navbar-dropdown is-boxed">
                            <Link className='navbar-item' to={'/cadastro-cliente'}>Cadastro</Link>
                            <Link className='navbar-item' to={'/lista-cliente'}>Lista</Link>
                        </div>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link className='navbar-link' to={''}>Produtos</Link>
                        <div className="navbar-dropdown is-boxed">
                            <Link className='navbar-item' to={'/cadastro-produto'}>Cadastro</Link>
                            <Link className='navbar-item' to={'/lista-produto'}>Lista</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>);
}

export default Navbar;