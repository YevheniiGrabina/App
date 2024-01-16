import React from 'react';
import { Link } from 'react-router-dom';
import css from './MobileMenu.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import burgerclose from 'images/burderclose.png';


const MobileMenu = ({ closeMobileMenu }) => {
 
  const handleBrandsClick = () => {
    closeMobileMenu(); // Закрыть мобильное меню
  };

  return (
    <div className={css.Burgermenu}>
       <img className={css.burgerClose} src={burgerclose} alt="меню" width={350} height={30} onClick={closeMobileMenu}/>
      <h1 className={css.menuTitle}>МЕНЮ</h1>
        
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
           <Typography> <Link  to="/App">Головна</Link></Typography>
        </AccordionSummary>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Магазин</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link to="/brands" onClick={handleBrandsClick}>
              Бренди
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Оплата і доставка</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           доставка
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Контакти</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Телефон
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div >
      
  );
};

export default MobileMenu;

