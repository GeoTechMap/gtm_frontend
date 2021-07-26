import React, { useState, useEffect } from 'react'
import {
  CDataTable,
  CButton,
  CCollapse,
  CSelect,
  CPagination,
  CRow,
  CCol,
} from '@coreui/react'
import Test from "./Essai";
import ClipLoader from "react-spinners/ClipLoader";
import GtmTab from "../../containers/GtmNav";

// import { EssaiContext } from "../../EssaisContext";

  const Essais = () => {
    // const [globalData, setGlobalData] = useContext(EssaiContext);
  const [details, setDetails] = useState([])

  const toggleDetails = (index,id) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }

    setDetails(newDetails)
  }

  const fields = [
    { key: 'codeEssai', label:'Code', _style: { width: '2%'} },
    { key: 'nomTypeEssai', label:'Type d\'essai', _style: { width: '20%'} },
    { key: 'nomInstitution', label:'Institution', _style: { width: '20%'} },
    // { key: 'departement', label:'Département', _style: { width: '20%'} },
    // { key: 'adresse', label:'Adresse', _style: { width: '20%'} },
    { key: 'nomFichier', label:'Fichier', _style: { width: '20%'} },
    { key: 'dateRealisationEssai', label:'Date de réalisation', _style: { width: '10%'} },
    {
      key: 'show_details',
      label: 'Actions',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]

  // const onDelete = (id) => {
  //   if (window.confirm("Confirmer la suppression")) {
  //     const requestOptions = {
  //       method: 'DELETE'
  //     };
  //     fetch(`${process.env.REACT_APP_API_URL}/api/essais/`+id, requestOptions)
  //       .then(response => console.log(response))
  //     const newList = data.filter((item) => item.id !== id);
  //     setData(newList);
  //   } else {
      
  //   }
  // }

  
  const [data, setData] = useState([])
  useEffect(() => {
    setLoadingState(true);

    fetch(`${process.env.REACT_APP_API_URL}/api/essais/fetch_with_pagination?pageSize=5&pageNumber=0`)
      .then((response) => response.json())
      .then((json) => setData(json.essaiDetailsDto))
      .then(() => setLoadingState(false))
      .catch((error) => {
        console.log(error);
        setLoadingState(false);
      }); 

      fetch(`${process.env.REACT_APP_API_URL}/api/essais/count`)
      .then((response) => response.json())
      .then((json) => setTotalEssais(json))
      .catch((error) => {
        console.log(error);
      }); 
    
  }, []);

  const fetch_with_pagination = (pageSize, pageNumber) => {
    // console.log('fetch pagiination')
    fetch(`${process.env.REACT_APP_API_URL}/api/essais/fetch_with_pagination?pageSize=${pageSize}&pageNumber=${pageNumber > 0 ? pageNumber : 0}`)
    .then((response) => response.json())
    .then((json) => setData(json.essaiDetailsDto))
    .then(() => setLoadingState(false))
    .catch((error) => {
      console.log(error);
      setLoadingState(false);
    }); 
  }
  const [loadingState, setLoadingState] = useState(false);

 
    //  const getInstitutionOfActualUser = () =>{
    //   //   var idIns;
    //     fetch(`${process.env.REACT_APP_API_URL}/api/utilisateurs/search?username=${UserService.getUsername()}`)
    //   .then((response) => response.json())
    //   //   return idIns;   // The function returns the product of p1 and p2

    //   }
  
    const [pageSize, setPageSize] = useState(5)
    const [currentPage, setActivePage] = useState(0);
    const [totalEssais, setTotalEssais] = useState(0);

  return (
    <div>
< GtmTab />

          <a href="#" >   
            {/* <CButton variant="outline" color="success">Ajouter</CButton> */}
            <ClipLoader loading={loadingState} size={25} />
         </a>
         <CRow style={{float:'right'}}>
        <CCol > Essais par page
            <CSelect name=' Essais par page' onChange={(e)=>{
                setPageSize(parseInt(e.target.value));
                  fetch_with_pagination(e.target.value <= totalEssais ? e.target.value : totalEssais, 0);
              
              }}
              className={`form-control shadow-none `}>
                      <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
              </CSelect>
          </CCol>
          </CRow>
            
          <CDataTable
      items={data ? data : null}
      fields={fields}
      responsive
      outlined
      tableFilter
      itemsPerPage ={pageSize}
      hover
      sorter
      // footer
      // itemsPerPageSelect
      // pagination
      scopedSlots = {{
        'show_details':
          (item, index)=>{
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={()=>{toggleDetails(index,item.id)}}
                >
                  {details.includes(index) ? 'Cacher' : 'Voir'}
                </CButton>                          
              </td>
              )
          },
        
        'details':
            (item, index)=>{
              return (
              <CCollapse show={details.includes(index)}>
                <Test essai = {item} />
              </CCollapse>
            )
          }
      }}
    />
        <CPagination
      activePage={currentPage}
      pages={Math.floor(totalEssais/pageSize)}
      onActivePageChange={(pageNumber) =>{
        setActivePage(pageNumber);
        fetch_with_pagination(pageSize,pageNumber-1);
      } }
    ></CPagination>
    </div>
    
  )
    }
  export default Essais