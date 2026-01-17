import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const ProductForm = ({ onAddProduct }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Math.random(),
            title: title,
            price: price,
            // Imagem de um estojo de tintas profissional
            image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500',
            description: 'Item cadastrado manualmente. Ideal para técnicas de pintura fluida e detalhamento artístico.'
        };
        onAddProduct(newProduct);
        setTitle('');
        setPrice('');
    };

    return (
        <div className="surface-card p-4 shadow-2 border-round-xl mb-5 border-top-3 border-primary">
            <h3 className="mt-0 mb-4 text-900 font-bold"><i className="pi pi-plus-circle mr-2"></i>Novo Item no Acervo</h3>
            <form onSubmit={handleSubmit} className="p-fluid grid">
                <div className="field col-12 md:col-5">
                    <label className="font-semibold text-700">Nome do Produto</label>
                    <InputText placeholder="Ex: Pincel Redondo nº 10" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="field col-12 md:col-4">
                    <label className="font-semibold text-700">Preço (R$)</label>
                    <InputText placeholder="Ex: 89.90" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div className="field col-12 md:col-3 flex align-items-end">
                    <Button type="submit" label="Cadastrar Agora" icon="pi pi-check" className="p-button-raised" />
                </div>
            </form>
        </div>
    );
};

export default ProductForm;
