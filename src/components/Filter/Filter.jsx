import React from 'react'
import styles from "./Filter.module.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionDetails } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';


const Filter = () => {
  return (
    <div className={styles.filterWrapper}>
         <h1>Search Results</h1>
        <div className={styles.filterOptions}>
        <Accordion className={styles.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          BRAND

        </AccordionSummary>

        <AccordionDetails>
        <Checkbox  />  Mango
        <br />
        <Checkbox  /> H & M  
        </AccordionDetails>

        </Accordion >


        <Accordion className={styles.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          PRICE RANGE

        </AccordionSummary>

        <AccordionDetails>
        <Checkbox  />  Under 500
        <br />
        <Checkbox  />  1000 to 3000
        </AccordionDetails>

        </Accordion>


        <Accordion className={styles.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         RATINGS

        </AccordionSummary>

        <AccordionDetails>
      
        <Checkbox  /> <Rating name="read-only" value={5} readOnly />
        <br />
        <Checkbox  /> <Rating name="read-only" value={4} readOnly /> 
        <br />
        <Checkbox  /> <Rating name="read-only" value={3} readOnly />
        <br />
        <Checkbox  /> <Rating name="read-only" value={2} readOnly />
        <br />
        <Checkbox  /> <Rating name="read-only" value={1} readOnly />
        </AccordionDetails>

        </Accordion>
        </div>

    </div>
  )
}

export default Filter
