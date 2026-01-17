import React, { useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = ({ products, setProducts }) => {
    
    useEffect(() => {
        // Buscamos produtos da API para não começar com a loja vazia
        axios.get('https://fakestoreapi.com/products?limit=8')
            .then(res => {
                // Mapeamos os dados para transformar roupas/eletrônicos em itens de arte
                const artData = res.data.map((item, index) => ({
                    ...item,
                    title: `Material de Arte #${item.id}`,
                    // Usamos imagens reais de arte do Unsplash
                    image: `https://images.unsplash.com/photo-1513364776144-60967b0f800f?sig=${index}&w=500`,
                    description: "Este é um produto de alta qualidade, selecionado especialmente para artistas que buscam perfeição em suas obras de aquarela e técnicas mistas."
                }));
                setProducts(artData);
            })
            .catch(err => console.error("Erro ao carregar API", err));
    }, [setProducts]);

    return (
        <div className="grid mt-2">
            {products.map(item => (
                <div key={item.id} className="col-12 sm:col-6 lg:col-3 p-2">
                    <ProductCard product={item} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;
