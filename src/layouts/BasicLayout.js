import React from 'react'

import Menu from '../components/Menu';

// children indica que será una etiqueta con hijos
const BasicLayout = ( {children, menuColor, neon, handler} ) => {

    return (
        <>
            <Menu menuColor={menuColor} neon={neon} handler={handler} />      
            {children}
        </>
    )
}

export default BasicLayout;