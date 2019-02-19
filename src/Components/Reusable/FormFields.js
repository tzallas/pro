import React from "react";
import Textfield from "@material-ui/core/TextField";


const FormFields = ({formdata, id, change}) => {
    const renderTemplate = () => {
        let formTemplate = null;
         
        switch(formdata.element){
            case("input"):
                formTemplate = (
                    <div>
                        <Textfield 
                            {...formdata.config}
                            value={formdata.value}
                            onChange={(event)=> change({event, id})}
                        />
                    </div>
                )    
            break;
            default:
            formTemplate = null;
        }
        return formTemplate;
    }

    return(
        <div>
            {renderTemplate()}
        </div>
    )
}

export default FormFields;