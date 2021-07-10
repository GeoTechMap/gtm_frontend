import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader,

} from './index';
import {
  CCol,
  CRow
} from '@coreui/react';
import Search from '../views/dashboard/carte/Search';
import Tabs from './Tabs';

const TheLayout = () => {

  return (
    <>
        <CRow className="d-flex justify-content-center" >
        <div style={{   textAlign: 'center'}} >
          <h1>GeoTechMap</h1>
          <p>Un outil d'aide à la décision dans le domaine géotechnique.</p>
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
