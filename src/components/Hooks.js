import React, { useState } from 'react';
import Menu from './Menu';

const Hooks = () => {
    const [state, setState] = useState(0);
    return (
        <div style={{margin: '15px'}}>
            <Menu />
            <p>
                Hooks : {state}
            </p>
            <button onClick={() => setState(state + 1)}>Tambah</button>
        </div>
    )
}

export default Hooks;