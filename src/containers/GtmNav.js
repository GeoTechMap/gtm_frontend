import React from 'react';
import {
  CLink,
  CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react';


const GtmTab = () => {
  return (
   <>
    <CLink aria-current="page" to="/dashboard" >
    <CButton color="dark" variant='outline' style={{marginRight:5}}><CIcon size="sm" name="cil-location-pin" /><span className="mfs-2">Carte</span></CButton>
    </CLink>
    <CLink aria-current="page" to="/liste">
    <CButton color="dark" variant='outline'><CIcon size="sm" name="cil-list-rich" /><span className="mfs-2">Liste</span></CButton>
    </CLink>
   </>
  )
}

export default GtmTab
