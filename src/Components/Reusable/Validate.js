import React from "react";

//Validation of email..........Loading
const Validate = (element) => {
    let error =[true, ''];

    if(element.validation.required){
        const valid = element.value.trim() !== '';
        const message = `${!valid ? "This field is required":""}`;
        error = !valid ? [valid, message] : error;
    }
    
    return error;
}

export default Validate;

