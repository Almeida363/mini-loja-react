import React, { useState } from 'react';

// --- IMPORTAÇÕES DE ESTILO (A "ROUPA" DO PROJETO) ---
import "primereact/resources/themes/lara-light-blue/theme.css";     // Tema visual moderno
import "primereact/resources/primereact.min.css";                  // Base dos componentes
import "primeicons/primeicons.css";                                // Ícones (carrinho, plus, etc)
import "/node_modules/primeflex/primeflex.css";                   // Sistema de colunas e margens

// --- IMPORTAÇÕES DOS NOSSOS COMPONENTES ---
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForms';

function App() {
  // Criamos o estado 'products' que vai guardar nossa lista de aquarelas/produtos.
  // Começa como um array vazio [].
  const [products, setProducts] = useState([]);

  // Função que recebe um novo produto do formulário e coloca na lista
  const addProduct = (newProduct) => {
    // Usamos o 'spread operator' (...) para manter os antigos e adicionar o novo no topo
    setProducts([newProduct, ...products]); 
  };

  return (
    // 'surface-ground' dá um fundo cinza claro profissional, 'p-5' é o espaçamento
    <div className="p-5 surface-ground min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl mb-5 text-primary font-bold">
          <i className="pi pi-palette mr-2"></i> {/* Ícone de paleta de cores */}
          Ateliê de Aquarela & Cia
        </h1>
        
        {/* Passamos a função de adicionar como uma "prop" chamada onAddProduct */}
        <ProductForm onAddProduct={addProduct} />
        
        {/* Passamos a lista e a função de atualizar para o componente de listagem */}
        <ProductList products={products} setProducts={setProducts} />
      </div>
    </div>
  );
}

export default App;
