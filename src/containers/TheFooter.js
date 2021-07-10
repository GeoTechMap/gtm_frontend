import React from 'react'
import { CFooter } from '@coreui/react'
import urgeo from '../assets/images/URGEO_LOGO_03.png';
import kayNouTek from '../assets/images/logo_kay_nou_tek.jpg';
import ueh from '../assets/images/ueh.jpeg';
import fds from '../assets/images/logoFDS.jpg';
import mbds from '../assets/images/logo_mbds.jpeg';

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div class="d-flex flex-column">      
              <div style={{display:"flex",  justifyContent: "center", flexWrap:"wrap" , marginTop:40}} >
                      <img src={urgeo} width={"100px"} height={"40px"} style={{marginRight:50}} />
                      <img src={kayNouTek} width={"60px"} height={"50px"} style={{marginRight:50}} />
                      <img src={ueh} width={"100px"} height={"50px"} style={{marginRight:50}} />
                      <img src={fds} width={"100px"} height={"50px"} style={{marginRight:50}} />
                      <img src={mbds} width={"100px"} height={"50px"} style={{marginRight:50}} />
              </div>

              <div class="d-flex justify-content-start">
              <a href="#" target="_blank" rel="noopener noreferrer">GeoTechMap</a>
              <span className="ml-1">&copy; 2021 Urgeo.</span>
              </div>
      </div>
     
    </CFooter>
  )
}

export default React.memo(TheFooter)
