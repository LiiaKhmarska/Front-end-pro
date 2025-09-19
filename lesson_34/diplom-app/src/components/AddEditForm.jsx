import { Link, useNavigate,useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Box, Button, Typography, TextField,Container } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { addSchema } from '../helpers/helperFormValidate'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addGoods, editGoods } from '../store/goodsSlice'
import { useSelector } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';
import { Header } from "./Header";


export function AddEditForm() {
    const path = useLocation().pathname;
    const params = useParams();
    const category = params.categoryTitle;    
    const actionItem = params.action;
    const goodId = actionItem.slice(actionItem.indexOf(':') + 1);   
    const dispatch = useDispatch();
    const goodsList = useSelector(selectGoods);
    const navigate = useNavigate();
    

    
    let initialStateFormFields = {};
    if (actionItem === 'add' || !goodsList) {
        initialStateFormFields = {
            type: '',
            title: '',
            price: '',
            quantity: '',
            description: ''     
        }
    } else {
        const editedItem = goodsList.find((item) =>item.id===goodId);        
        initialStateFormFields = {
            id: editedItem.id,
            type: editedItem.type,
            title: editedItem.title,
            price: editedItem.price,
            quantity: editedItem.quantity,
            description: editedItem.description
        }
    }

    const {
        handleSubmit,
        values,
        handleChange,
        handleBlur,
        errors,
        touched,
    } = useFormik({

        initialValues: initialStateFormFields,
        onSubmit: (values, action) => {           
            if (actionItem === 'add') {
                values.id = Date.now().toString();
                const request = JSON.stringify(values);
                dispatch(addGoods({category, request}));

            } else {
                const request = JSON.stringify(values);
                dispatch(editGoods({category, request, goodId}));
               }
            action.resetForm();      
            navigate(path.slice(0, path.lastIndexOf('/')));
            },
            validationSchema: addSchema
      })
    
    

    return (
        <>
        <Header/>
        <Container sx={{ width: '90%', m: '15px auto', textAlign: 'center' }}>
            <Box sx={{my:2,  textAlign:'start', display:'flex', justifyContent:'space-around'}}>
                    <Link to='/'><Button variant="contained"><ArrowBackIosIcon /> На головну</Button></Link>
                    <Link to={'/'+category}>
                        <Button variant="contained"> <ArrowBackIosIcon />До категорії</Button>
                    </Link>
                </Box>             

            <Box component='form' onSubmit={handleSubmit} noValidate sx={{ m: '5px auto', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h3" sx={{ mb: 3 }}> {actionItem === 'add' ? 'Додавання товару' : 'Редагування товару'}</Typography>
                {actionItem !== 'add' &&
                <Box sx={{width:'100%', display:'flex', justifyContent:'space-between', alignItems: 'flex-start'}}>
                    <Typography variant='h5'>Aртікул</Typography>
                    <TextField  id='id' label='Aртікул' required  sx={{width:'80%', mb:1}} defaultValue={goodId} disabled name='id' onChange={handleChange} onBlur={handleBlur} />
                </Box> }
                <Box sx={{width:'100%', display:'flex', justifyContent:'space-between', alignItems: 'flex-start', position:'relative'}}>
                    <Typography variant='h5'>Категорія</Typography>
                    <TextField  id='type' label='Категорія' required  sx={{width:'80%', mb:1}} value={values.type} name='type' onChange={handleChange} onBlur={handleBlur} />
                    {errors.type && touched.type && (<span style={{ color: "#f00", position:'absolute', bottom:'10px' }} > {errors.type}</span>)}
                </Box>
                <Box sx={{width:'100%', display:'flex', justifyContent:'space-between', alignItems: 'flex-start', position:'relative'}}>
                    <Typography variant='h5'>Назва</Typography>
                    <TextField  id='title' label='Назва' required  sx={{width:'80%', mb: 1 }} value={values.title} name='title' onChange={handleChange} onBlur={handleBlur} />
                    {errors.title && touched.title && (<span style={{ color: "#f00", position:'absolute', bottom:'10px' }} > {errors.title}</span>)}
                </Box>
                 <Box sx={{width:'100%', display:'flex', justifyContent:'space-between', alignItems: 'flex-start', position:'relative'}}>
                    <Typography variant='h5'>Ціна</Typography>
                    <TextField id='price' label='Ціна' required sx={{ width: '80%', mb: 1 }} value={values.price} name='price' onChange={handleChange} onBlur={handleBlur} />
                    {errors.price && touched.price && (<span style={{ color: "#f00", position:'absolute', bottom:'10px' }} > {errors.price}</span>)}
                </Box>
                 <Box sx={{width:'100%', display:'flex', justifyContent:'space-between', alignItems: 'flex-start', position:'relative'}}>
                    <Typography variant='h5'>Кількість</Typography>
                    <TextField id='quantity' label='Кількість' required sx={{ width: '80%', mb: 1 }} value={values.quantity} name='quantity' onChange={handleChange} onBlur={handleBlur} />
                     {errors.quantity && touched.quantity && (<span style={{ color: "#f00", position:'absolute', bottom:'10px' }} > {errors.quantity}</span>)}
                </Box>
                 <Box sx={{width:'100%', display:'flex', justifyContent:'space-between', alignItems: 'flex-start', position:'relative'}}>
                    <Typography variant='h5'> Опис </Typography>
                    <TextField id='description' label='Опис' required multiline rows={3} sx={{ width: '80%', mb: 1 }} value={values.description} name='description' onChange={handleChange} onBlur={handleBlur} />
                  {errors.description && touched.description && (<span style={{ color: "#f00", position:'absolute', top:'30px' }} > {errors.description}</span>)}
                </Box>            
                    <Button type='submit' variant='contained' color="success" sx={{ mt: 3, width: '30%', p: 2 }}>
                    {actionItem === 'add'?' Додати товар до БД' :'Внести зміни до БД'}
                </Button>           
        </Box>
    </Container>
    </>
    )
}