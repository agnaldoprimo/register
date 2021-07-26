import React, { useState } from 'react';

const arrData = [];
let newArr = [];

export default function FrmProduct() {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');

    return (
        <>
            <form

                onSubmit={(e) => {

                    e.preventDefault();

                    const dataForm = new FormData(e.target);

                    const txtName = dataForm.get('txtName');
                    const txtQuantity = dataForm.get('txtQuantity');
                    const txtDescription = dataForm.get('txtDescription');

                    const arrDataForm = {
                        name: txtName,
                        quantity: txtQuantity,
                        description: txtDescription
                    };

                    arrData.push(arrDataForm);
                    newArr = arrData;

                    if (localStorage.getItem('lsDataProduct')) {
                        const listStorage = JSON.parse(localStorage.getItem('lsDataProduct'));

                        if (listStorage !== '') {
                            newArr = [...listStorage, arrDataForm];
                        }
                    }

                    const arrList = newArr.map((item) => {
                        return {
                            name: item.name,
                            quantity: item.quantity,
                            description: item.description
                        }
                    }
                    )

                    localStorage.setItem('lsDataProduct', JSON.stringify(arrList));

                    setName('');
                    setQuantity('');
                    setDescription('');
                }}>

                <div className="columns">
                    <div className="field column is-8">
                        <label className="label">Nome</label>
                        <div className="control">
                            <input className="input" required type="text" placeholder="Nome" name="txtName"
                                value={name}
                                onChange={((e) => setName(e.target.value))}
                            />
                        </div>
                    </div>
                    <div className="field column is-4">
                        <label className="label">Quantidade</label>
                        <input className="input" required type="number" placeholder="Quantidade" name="txtQuantity"
                            value={quantity}
                            onChange={((e) => setQuantity(e.target.value))}
                        />
                    </div>
                </div>
                <div className="columns">
                    <div className="field column is-12">
                        <label className="label">Descrição</label>
                        <div className="control">
                            <textarea className="textarea" required placeholder="Descrição" name="txtDescription"
                                value={description}
                                onChange={((e) => setDescription(e.target.value))}
                            ></textarea>
                    </div>
                </div>
                </div>
            <button type="submit" className="column is-4 is-offset-4 button is-block is-info is-large is-fullwidth">Cadastrar</button>
        </form>
        </>
    );

}