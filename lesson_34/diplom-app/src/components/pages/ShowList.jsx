import { useSelector } from 'react-redux';
import { selectGoods } from '../../store/goodsSlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Button, Accordion,AccordionActions,AccordionDetails, AccordionSummary, Typography, Box} from '@mui/material';
import {GoodDescribe} from './GoodDiescribe'

export function ShowList() {

    
    const goodsList = useSelector(selectGoods);
    if (!goodsList) return;
    
        

    return (
        <Box sx={{ width: '80%',m: '10px auto', }}>
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
                        <GoodDescribe good={ item} />
                </AccordionDetails>
                    <AccordionActions>
                        <Box sx={{width:'50%', m:'10px auto', display:'flex', justifyContent: 'space-between'

}}>
          <Button variant="outlined" color="error">Видалити</Button>
          <Button variant="outlined" color='success'>Редагувати</Button>
          </Box>

        </AccordionActions>
      </Accordion>
            ))}
            

        </Box>
    )
}