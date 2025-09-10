import {TableContainer,Table , TableHead, TableBody, TableRow, TableCell  } from '@mui/material';

export function GoodDescribe({ good }) {
    let i = Math.floor(Math.random()*2025)
    return (
        <>
            <TableContainer>
                            <Table sx={{width:'95%', m:'10px auto',}} aria-label="los of goods">
                                <TableBody>
                        {Object.keys(good).map((item) => (
                            <TableRow key={i++} >
                                <TableCell sx={{fontSize:'1rem', fontWeight:'600'}}>{item}</TableCell>
                                <TableCell sx={{fontSize:'1rem'}}>{good[item]}</TableCell>
                            </TableRow>
                            ))}                                   
                             </TableBody>
                            </Table>
                        </TableContainer>
        </>
    )
}