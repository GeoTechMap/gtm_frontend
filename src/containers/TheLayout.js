import React from 'react'
import {
  TheContent,
  TheFooter,
} from './index';
import {
  CCol,
  CLink,
  CRow
} from '@coreui/react';
import Tabs from './Tabs';

const TheLayout = () => {

  return (
    <>
        <CRow className="d-flex justify-content-center" >
        <div style={{   textAlign: 'center'}} >
          <h1 style={{color:'#9e0059'}}>GeoTechMap</h1>
          <p>Un outil d'aide à la décision dans le domaine géotechnique !</p>
          <p>Cette carte montre les emplacements des essais géotechniques réalisés sur le territoire
            haïtien.
            Vous avez accès aux <CLink to="/liste"><strong style={{color:'#9e0059'}}>données géotechniques</strong></CLink> 
            effectuées par diverses entreprises évoluant dans ce domaine.<br />
            <strong style={{color:'#9e0059'}}>Les données de ce site ne remplacent en aucun cas les études géotechniques.</strong>
            </p>
        </div>
        </CRow>

        <CRow>
        <CCol xs="12" sm="12" md="3" style={{marginTop:'3%', marginLeft:10}}>
          <Tabs/>
        </CCol>

        <CCol xs="12" sm="6" md="8">
          {/* <div className="c-app c-default-layout"> */}
            {/* <TheSidebar/> */}
            <div className="c-wrapper">
              {/* <TheHeader/> */}
            
              {/* <div className="c-body"> */}
                <TheContent/>
              {/* </div> */}
              <TheFooter/>
            </div>
          {/* </div> */}
        </CCol>
        </CRow>
    </>

  
  )
}

export default TheLayout
