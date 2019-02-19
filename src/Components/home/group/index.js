import React from "react";
import Animation from "./Animation";
import FormGroup from "./FormGroup";
import Grid from "@material-ui/core/Grid";


const Group = () => {
    return(
        <Grid container>
            <Grid item sm style={{padding: 200}}>
                <Animation />
            </Grid>
            <Grid item sm style={{padding: 200}}> 
               <FormGroup />
            </Grid>
        </Grid>
    )
}
export default Group;