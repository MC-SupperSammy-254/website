import React from 'react';
import  InstagramIcon  from '@mui/icons-material/Instagram';
import  FacebookIcon  from '@mui/icons-material/Facebook';

import  WhatsAppIcon  from '@mui/icons-material/WhatsApp';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>

      <div className='socialMedia'>
      <a href="https://instagram.com/mc_supersammy_254?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="nooperner noreferrer">
        <InstagramIcon />
        </a>

        <FacebookIcon />

        <a href="https://api.whatsapp.com/send?phone=254713831177" target="_blank"  rel="nooperner noreferrer">
        <WhatsAppIcon />
        </a>
        
      </div>

      <p>&copy; 2023 MC_Suppersammy_254. All rights reserved</p>
    
    </div>
  )
}

export default Footer
