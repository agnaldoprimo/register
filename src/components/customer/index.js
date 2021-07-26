import React from 'react';

export default function FrmCustomer() {
    return (
        <>
            <form>
                <div className="columns">
                    <div className="field column is-6">
                        <label className="label">Nome</label>
                        <div className="control">
                            <input className="input" type="text" required placeholder="Nome" name="txtname" value="" />
                        </div>
                    </div>
                    <div className="field column is-6">
                        <label className="label">E-mail</label>
                        <div className="control">
                            <input className="input" type="email" required placeholder="E-mail" name="txtemail" value="" />
                        </div>
                    </div>
                </div>

                <div className="columns">
                    <div className="field column is-4">
                        <label className="label">CEP</label>
                        <input type="text" className="input" value="" name="txtzipcode" id="txtzipcode" placeholder="CEP" maxlength="9" />
                    </div>
                    <div className="field column is-8">
                        <label className="label">Endereço</label>
                        <input type="text" className="input" value="" name="txtaddress" id="txtaddress" placeholder="Endereço" />
                    </div>
                </div>

                <div className="columns">
                    <div className="field column is-6">
                        <label className="label">Cidade</label>
                        <input type="text" className="input" value="" name="txtlocality" id="txtlocality" placeholder="Cidade" />
                    </div>
                    <div className="field column is-4">
                        <label className="label">Bairro</label>
                        <input type="text" className="input" value="" name="txtdistrict" id="txtdistrict" placeholder="Bairro" />
                    </div>
                    <div className="field column is-2">
                        <label className="label">Número</label>
                        <input type="text" className="input" value="" name="txtnumber" id="txtnumber" placeholder="Número" />
                    </div>
                </div>

                <div className="columns">
                    <div className="field column is-10">
                        <label className="label">Complemento</label>
                        <input type="text" className="input" value="" name="txtcomplement" id="txtcomplement" placeholder="Complemento" />
                    </div>
                    <div className="field column is-2">
                        <label className="label">Estado</label>
                        <input type="text" className="input" value="" name="txtstate" id="txtstate" placeholder="Estado" />
                    </div>
                </div>

                <button type="submit" className="column is-4 is-offset-4 button is-block is-info is-large is-fullwidth">Cadastrar</button>
            </form>
        </>
    );

}