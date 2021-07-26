import React, { useState, useEffect } from 'react';

import SinglePagePDFViewer from "./single-page";
// import AllPagesPDFViewer from "./all-pages";
import "./styles.css";
import GtmTab from "../../../../containers/GtmNav";
// import ClipLoader from "react-spinners/ClipLoader";

const LoadFromBase64Example = ({match}) => {

    const [loadingState, setLoadingState] = useState(false);
    const [data, setData] = useState({})
    useEffect(() => {
        setLoadingState(true);
        fetch(`${process.env.REACT_APP_API_URL}/api/file/info?id=${match.params.id}`)
        .then(response => response.json())
        .then(data =>   {
            fetch(`${process.env.REACT_APP_FILE_SERVER_URL}/api/file/getfile`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                'Accept': 'application/json'},
                body: JSON.stringify({
                    nomFichier: data.nom,
                    hashNomFichier: data.hashNomFichier,
                    hashBase64:data.hashPdf
                })})
                .then(res => res.json())
                .then(res => setData(res))
                .catch((error) => {
                    console.error('Error:', error);
                  });
       return data;
     })
     .then(() => setLoadingState(false))
     .catch((error) => {
       console.log(error);
       setLoadingState(false);
     }); 
      
        
      
    }, []);
 
    return (
        // <div  >{console.log(globalData)}
        //     <embed src={`data:application/pdf;base64,${data.base64File}`}  
        //     type="application/pdf" width="100%" height="100%"></embed>
       
        // </div>
        <div className="App">
            <GtmTab />
            {/* <ClipLoader loading={loadingState} size={35} /> */}
            <SinglePagePDFViewer pdf={`data:application/pdf;base64,${data.base64File}`}  />
      </div>
  
    );
};

export default LoadFromBase64Example;