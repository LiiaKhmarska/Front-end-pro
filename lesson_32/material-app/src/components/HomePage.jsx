import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import {Header} from './Header'
import { Box, List, ListItem } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export function HomePage() {
     const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
      <>
          <Header />
          <Box sx={{ mx: 10, mt: 5 }}>
              <Typography variant='h4' sx={{mb:3}}>Something like a resume</Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            My details
          </Typography>
                      <Typography component="span" sx={{ color: 'text.secondary' }}>
                          My data and contacts
                      </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign: 'left', ml:10}}>
                My birthday: January, 08, 19...year. Capricorn <br />
                address: Dnipro, Honchara avenu <br/>
                e-mail: liia.khmarska@gmail.com <br/>
                tel: 0672641561
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            Education 
          </Typography>
          <Typography component="span" sx={{ color: 'text.secondary' }}>
           Education and Courses
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
                      <Typography sx={{ textAlign: 'left', ml: 10 }}>
                          <List>
                             <ListItem> <CheckIcon />SHEI Ukrainian State University of Chemical Technology </ListItem>
                              <ListItem><CheckIcon />Department of Inorganic Chemistry</ListItem>
                              <ListItem><CheckIcon />1997- 2002 Master of Chemical Technology and Engineering "Industrial Ecology and Environmental Protection"</ListItem>
                              <ListItem><CheckIcon />Candidate of chemical sciences, Associate Professor, Department of Inorganic Chemistry </ListItem>
                              <ListItem><CheckIcon/>Computer School Hillel, QA Manual – 2021-2022</ListItem>
                          </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                Work Experience
            </Typography>
          <Typography component="span" sx={{ color: 'text.secondary' }}>
            My work experience and career
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                <List>
                    <ListItem> <CheckIcon />September 2005 – February 2022: SHEI Ukrainian State University of Chemical Technology. Associate Professor, candidate of chemical sciences, scientific secretary of the Department 
</ListItem>
                    <ListItem> <CheckIcon />March 2022 - until now: PrivatBank, software tester, developer</ListItem>
                              
           </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            Soft Skills
                      </Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: 'left', ml: 10 }}>
           Ability to quickly switch between diverse and complex projects and technical environments. Stress tolerance, the ability to work with a large, non-constructively minded audience. Systematic work with the development, analysis and adaptation of versatile data in order to form a unified scientific work. Sense of purpose, decompositional approach to solving complex, long-term tasks that exceed the competences at the start of the project. Responsible, not inclinabled to procrastinate. 
          </Typography>
        </AccordionDetails>
      </Accordion>
              </Box>
    </>
  );
}
