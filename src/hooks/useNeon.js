import { useEffect } from 'react';


export const useNeon = ( neonBool) => {

    
    useEffect(() => {
        
        console.log(neonBool === true);
        const root = document.body;
        root.className = '';
        root.classList.add( neonBool === true ? 'bg__neon' : 'bg');

    }, [neonBool]);


}