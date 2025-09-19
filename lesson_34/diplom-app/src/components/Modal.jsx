import { useEffect, useMemo } from "react";
import { createPortal } from 'react-dom'
import { Box } from '@mui/material';



const modalRootElement = document.querySelector('#modal');


export function Modal(props) {
    const {open, setOpen} = props
    const element = useMemo(() => document.createElement('div'), []);

    useEffect(() => {
        if (open) {
            modalRootElement.appendChild(element);

        return () => {
            modalRootElement.removeChild(element)
        }
        }
        
    })

    function onClose(event) {
        if (event.target.dataset.layout === 'layout') setOpen(false);
        return;
    }

    if (open) {
     return (
        createPortal(
            <Box sx={{
                position: 'fixed', top: 0, left: 0,
                width: '100vw', height: '100vh',
                overflow: 'hidden', background: 'rgba(0, 0, 0, 0.5)',
                display: 'flex', flexDirection: 'row',
                justifyContent: 'center', alignItems: 'center'
            }}
                onClick={onClose}
                data-layout='layout'
            >
                <Box>{props.children}</Box>
            </Box>, element)
    )   
    }

    return null;
    
}