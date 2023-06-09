import React, { useState } from 'react';

const pugImage = "https://img.freepik.com/fotos-gratis/cao-pug-isolado-em-um-fundo-branco_2829-11409.jpg";
const gifImage = "https://gifs.eco.br/wp-content/uploads/2022/04/gifs-do-cachorro-lambendo-a-tela-1.gif";

function HomePage() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState({});

  async function handleSearchAddress(e) {
    e.preventDefault();
  
    // Verifica se o cep contém apenas números
    if (!/^[0-9]+$/.test(cep)) {
      alert('CEP inválido. Digite apenas números.');
      return;
    }
  
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();
  
    if (data.erro) {
      alert('CEP inválido');
      return;
    }
  
    setAddress(data);
  }

  return (
     <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
       <div>
        <h1>Bem vindo ao Sistema de Buscas de CPF</h1>
      <p>Bem vindo ao Sistema de Buscas de CPF, Nós usamos os pugzinhos para buscar os cpf's </p>
    </div>
      <img src={gifImage} alt="Cachorro lambendo a tela" style={{ width: '60%' }} />
      <h1 style={{ marginBottom: '1.5rem' }}>Busca de Endereço</h1>
      <form onSubmit={handleSearchAddress}>
        <input
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            border: 'none',
            backgroundColor: '#0070f3',
            color: '#fff',
            marginLeft: '0.5rem',
            cursor: 'pointer',
          }}
        >
          Buscar
        </button>
      </form>
      {address.cep && (
        <div style={{ marginTop: '2rem', textAlign: 'left' }}>
          <p>
            <strong>CEP:</strong> {address.cep}
          </p>
          <p>
            <strong>Logradouro:</strong> {address.logradouro}
          </p>
          <p>
            <strong>Bairro:</strong> {address.bairro}
          </p>
          <p>
            <strong>Cidade:</strong> {address.localidade}
          </p>
          <p>
            <strong>Estado:</strong> {address.uf}
          </p>
          <p> CEP ENCONTRADO AU !</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
