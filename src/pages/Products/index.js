import React from 'react';
import Navbar from '../../components/navbar';
import FrmProduct from '../../components/products';

export default function PageProduct() {
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
                        <FrmProduct />
                    </div>
                </div>
            </div>
        </>
    );
}