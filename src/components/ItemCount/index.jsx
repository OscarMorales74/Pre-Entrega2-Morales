import React, { useState, useEffect } from 'react'
import '../../app.css'

//SE USA USEEFFECT PARA CADA VAZ QUE CAMBIE EL VALOR INITIAL EL CONTADOR SE RESETEE Y NA HAYA QUE ACTUALIZARLO
export const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className='counter'>
            <button disabled={count <= 0} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;