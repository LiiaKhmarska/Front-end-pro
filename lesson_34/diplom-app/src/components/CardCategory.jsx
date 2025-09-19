import { Typography, Card, CardMedia, CardContent, CardActions, CardHeader, Button } from '@mui/material';
import { selectUser } from '../store/userSlice';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";


export function CardCategory({ cardContent,categoryTitle }) {

    const login = useSelector(selectUser);
            
    return (
        
                 <Card variant="outlined">
            <CardHeader title={cardContent.titleHeader} sx={{'& .MuiCardHeader-title': {
                    fontSize: '1rem'}}} align='center'>
                        </CardHeader>
                        <CardMedia sx={{m:0, p:0, height:'100%',}} component='img'
                        image={cardContent.image}
                        title={cardContent.titleImage}
                        />
                        <CardContent><Typography gutterBottom>
                            {cardContent.cardContent}
                        </Typography>
                        
                        </CardContent>
            <CardActions >
                {/*  */}
                    <NavLink to={`/${categoryTitle}`}>
                        <Button variant="contained" fullWidth sx={{ m: 1 }} disabled={!login}> Переглянути</Button>
                    </NavLink>
                        </CardActions>
                    </Card>
        
    )
}