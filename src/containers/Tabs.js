import React, { useState } from 'react'
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader,
  CSwitch,
  CFormGroup,
  CInput
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable';
import Search from '../views/dashboard/carte/Search';
import Legende from '../views/legende/Legende';
import About from '../views/about/About';

const Tabs = () => {
  const [active, setActive] = useState(0)
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
  const [sliderValue, setSliderValue] =useState(1);

  return (
    <CRow>
      <CCol >
        {/* <CCard> */}
          {/* <CCardHeader >
            <h3>GeoTechMap</h3>
          </CCardHeader> */}
          <hr/>
          <CCardBody>
            <CTabs activeTab={active} onActiveTabChange={idx => setActive(idx)}>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>
                    {/* <CIcon name="cil-calculator" /> */}
                    <CIcon name="cil-magnifying-glass" />
                    { active === 0 && ' Recherche'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-chart-pie"  />
                    { active === 1 && ' Légende'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-italic"/>
                    {/* <CIcon name="cil-chart-pie"/> */}
                    { active === 2 && ' À propos'}
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                  <Search />
                </CTabPane>
                <CTabPane>
                 <Legende />
                </CTabPane>
                <CTabPane>
                 <About />
                </CTabPane>
              </CTabContent>
            </CTabs>

          {/* <hr />
            <CFormGroup row>
                  <CCol tag="label" sm="7" className="col-form-label">
                    Recherche à partir d'un point
                  </CCol>
                  <CCol sm="3">
                    <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      shape="pill"
                    />
                  </CCol>
                </CFormGroup>
                <CInput type="range" id="yearRange" name="yearRange" min={1} max={500} 
                value={sliderValue}
                onChange={ (e) => setSliderValue(e.target.value) } step="1"  /> {sliderValue} km */}
          </CCardBody>
        {/* </CCard> */}
      </CCol>
    </CRow>
  )
}

export default Tabs
