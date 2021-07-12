import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
  CButton,
  CButtonGroup
} from '@coreui/react'
import CIcon from '@coreui/icons-react';

// routes config
import routes from '../routes';


import Search from '../views/dashboard/carte/Search';


const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <h1     onClick={toggleSidebar}>okokokok</h1>
 
      
      {/* <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand> */}

      <CHeaderNav className="mr-auto">
        {/* <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/users">Users</CHeaderNavLink>
        </CHeaderNavItem> */}
        <div className="px-3">
          {/* <CHeaderNavLink>Settings</CHeaderNavLink> */}
          <CButtonGroup>
          <CLink 
              // className="c-subheader-nav-link" 
              aria-current="page" 
              to="/dashboard"
            >
            <CButton color="secondary"><CIcon size="sm" name="cil-location-pin" /><span className="mfs-2">Carte</span></CButton>
            </CLink>
            <CLink 
              // className="c-subheader-nav-link" 
              aria-current="page" 
              to="/liste"
            >
            <CButton color="secondary"><CIcon size="sm" name="cil-list-rich" /><span className="mfs-2">Liste</span></CButton>
            </CLink>
    
          </CButtonGroup>
        </div>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        {/* <TheHeaderDropdownNotif/>
        <TheHeaderDropdownTasks/>
        <TheHeaderDropdownMssg/>
        <TheHeaderDropdown/> */}
                <Search />  
               
            
                
           </CHeaderNav>


    </CHeader>
  )
}

export default TheHeader
