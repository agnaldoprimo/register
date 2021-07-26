import React from 'react';
import Navbar from '../../components/navbar';
import FrmCustomer from '../../components/customer';

export default function PageCustomer() {
    return (
        <>
            <Navbar />
            <div className="hero-body">
                <div className="container has-text-left">
                    <div className="column is-12">
                        <h3 className="title has-text-black">Cadastro</h3>
                        <hr className="login-hr" />
                    </div>
                    <div className="box">
                        <FrmCustomer />
                    </div>
                </div>
            </div>
        </>
    );
}