import { NavLink } from "react-router-dom";
import { Stack, Button} from '@mui/material';


export function Navigation() {
    const hoverStyle = {'&:hover': {
        backgroundColor: 'white',
        color: 'indigo'
    }}
    return (
        

        <Stack direction='row' spacing={2} sx={{marginLeft: 'auto'}}>
            <Button color='inherit' sx={hoverStyle}><NavLink to='/'>Home</NavLink></Button>
                    <Button color='inherit' sx={hoverStyle}><NavLink to='/todo'>TODO-list</NavLink></Button>
                    <Button color='inherit' sx={hoverStyle}><NavLink to='/swapi'>Swapi</NavLink></Button>
                    {/* <Button color='inherit'><NavLink to='/contacts'>Contacts</NavLink></Button> */}
                </Stack>
        
    )
}