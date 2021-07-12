import React from 'react'
import { CFooter } from '@coreui/react'
import urgeo from '../assets/images/URGEO_LOGO_03.png';
import kayNouTek from '../assets/images/logo_kay_nou_tek.jpg';
import ueh from '../assets/images/ueh.jpeg';
import fds from '../assets/images/logoFDS.jpg';
import mbds from '../assets/images/logo_mbds.jpeg';
import gtm from '../assets/images/logo2.jpg';
import suisse from '../assets/images/suisse.png';
import uniq from '../assets/images/uniq.png';

const TheFooter = () => {
  return (
    <CFooter fixed={false} >
      <div class="d-flex flex-column">      
              <div style={{fontStyle: 'italic', display:"flex",  justifyContent: "center", flexWrap:"wrap" , marginTop:40}} >
                Une production : 
                      <img src={urgeo} width={"80px"} height={"30px"} style={{marginRight:10, marginTop:5}} />
                      <img src={mbds} width={"80px"} height={"30px"} style={{marginRight:10, marginTop:5}} />
                      <img src={ueh} width={"80px"} height={"30px"} style={{marginRight:10, marginTop:5}} />
                      <img src={fds} width={"80px"} height={"30px"} style={{marginRight:10, marginTop:5}} />
                Sponsor :  
                      <img src={kayNouTek} width={"40px"} height={"30px"} style={{marginRight:10, marginTop:5}} />
                Partenaires :  
                     <img src={uniq} width={"95px"} height={"30px"} style={{marginRight:10, marginTop:5}} />
                     <img src={gtm} width={"100px"} height={"30px"} style={{marginRight:10, marginTop:5}} />
                      <img src={kayNouTek} width={"40px"} height={"30px"} style={{marginRight:10, marginTop:5}} />
              </div>

              <div class="d-flex justify-content-start" style={{marginTop:15}}>
              <a href="#" target="_blank" rel="noopener noreferrer" style={{color:'#9e0059'}}>GeoTechMap</a>
              <span className="ml-1">&copy; 2021 Urgéo | MBDS | FDS-UEH</span>

              <div className="mfs-auto">
                <span className="mr-1">Powered by</span>
                <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer" style={{color:'#9e0059'}}>CoreUI for React</a>
              </div>
              </div>
      </div>
     
    </CFooter>
  )
}

export default React.memo(TheFooter)
