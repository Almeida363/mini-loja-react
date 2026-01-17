import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog'; // Importamos a janela modal

const ProductCard = ({ product }) => {
    // Estado para controlar se a janela de detalhes está aberta ou fechada
    const [visible, setVisible] = useState(false);

    // O topo do card com a imagem
    const header = (
        <img 
            alt={product.title} 
            src={product.image} 
            style={{ height: '220px', width: '100%', objectFit: 'cover' }} 
            className="border-round-top" 
        />
    );

    return (
        <div className="h-full">
            <Card 
                title={<div className="text-xl font-bold text-900 truncate">{product.title}</div>}
                subTitle={<span className="text-primary font-bold text-lg">R$ {product.price}</span>}
                header={header} 
                className="h-full shadow-2 hover:shadow-5 transition-all transition-duration-300 border-none"
            >
                <div className="flex gap-2 mt-2">
                    {/* Ao clicar, mudamos o estado 'visible' para true */}
                    <Button 
                        label="Ver Detalhes" 
                        icon="pi pi-search" 
                        className="p-button-outlined flex-1" 
                        onClick={() => setVisible(true)} 
                    />
                    <Button icon="pi pi-shopping-cart" className="p-button-primary" />
                </div>
            </Card>

            {/* JANELA DE DETALHES (Só aparece quando visible é true) */}
            <Dialog 
                header="Informações do Produto" 
                visible={visible} 
                style={{ width: '90vw', maxWidth: '500px' }} 
                onHide={() => setVisible(false)} // Fecha ao clicar no X ou fora
            >
                <div className="flex flex-column align-items-center">
                    <img src={product.image} alt={product.title} className="w-full border-round mb-3 shadow-2" />
                    <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                    <h3 className="text-primary text-xl mb-3">R$ {product.price}</h3>
                    <p className="line-height-3 text-700 text-center">
                        {product.description}
                    </p>
                    <Button label="Fechar" icon="pi pi-times" className="mt-4 p-button-text" onClick={() => setVisible(false)} />
                </div>
            </Dialog>
        </div>
    );
};

export default ProductCard;
