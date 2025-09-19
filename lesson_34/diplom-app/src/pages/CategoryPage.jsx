import { useSelector } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Button, Accordion,AccordionActions,AccordionDetails, AccordionSummary, Typography, Box} from '@mui/material';
import { GoodsInfo } from './GoodsInfo';
import { Link, useLocation  } from "react-router-dom";
import {DeleteWarning} from '@components'
import { useState } from 'react';
import { selectUser } from '../store/userSlice';



export function CategoryPage({setUpdate}) {
    const [warning, setWarning] = useState(false);
    const category = useLocation().pathname;    
    const login = useSelector(selectUser);   

    const goodsList = useSelector(selectGoods);
    if (!goodsList) return;   


    
 
    return (
        <Box sx={{ width: '80%', m: '10px auto', }} >
        {goodsList.map((item) =>(
            <Accordion key={item.id}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id={item.id}
                    sx={{backgroundColor:'#def1f5f6'}}
                >
                    <Typography component="span" variant='h5'>{item.type}. {item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <GoodsInfo good={ item} />
                </AccordionDetails>
                <AccordionActions>
                    <Box sx={{width:'50%', m:'10px auto', display:'flex', justifyContent: 'space-between'}}>
                        <Button variant="outlined" color="error" disabled={!login } onClick={()=>setWarning(true)}>Видалити</Button>
                        {warning &&
                            <DeleteWarning
                                setWarning={setWarning}
                                setUpdate={setUpdate}
                                goodId={item.id} category={category} />}    
                        <Link to={category + '/edit:' + item.id }>
                            <Button variant="outlined" color='success' disabled={!login } >Редагувати</Button>
                        </Link>
                    </Box>
                </AccordionActions>
            </Accordion>
        ))}
        </Box>
    )
}