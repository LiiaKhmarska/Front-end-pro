import { FormGroup } from './FormGroup';
import { UserInfo } from './UserInfo';
import {ClearUser} from './ClearUser'
import { Header } from '@components/Header';
import { Container } from '@mui/material';

export function Swapi() {
  
  return (
      <>
          <Header/>
          <h1 className="h1">SWAPI</h1>
          <Container style={{textAlign: 'left'}}>
            <FormGroup />
            <UserInfo />
            <ClearUser />
          </Container>
       
    </>
  );
}