import React from 'react';
import { useField } from 'formik';

export const SearchTextField = ({label, type, options, ...props}) => {
    const [ field] = useField(props);
    // console.log(options)
    return (
        <div  >
            <label><strong></strong></label>
            <input 
            className={`form-control shadow-none`}
            {...field} {...props}
            />
            {/* <ErrorMessage component="div" name={field.name} style={{position: "absolute", color:"red", fontSize: ".6rem"} }/> */}
        </div>
    )
}