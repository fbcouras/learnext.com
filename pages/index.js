import { useState } from 'react';

function Home() {
    return (
        <div className="body">
            <h1>Home 2</h1>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);
    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{ contador }</div>
            <button onClick={adicionarContador}>Adiciona Contador</button>
        </div>
    );
}

export default Home;
