import React from "react";
import Animation from "./Animation";
import FormGroup from "./FormGroup";
import Grid from "@material-ui/core/Grid";


const Group = () => {
    return(
        <Grid container>
            <Grid item sm style={{ background: "#A9A9A9", padding: 200, marginTop:100, marginLeft: 130}}>
                <Animation />
            </Grid>
            <Grid item sm style={{ background: "#B0C4DE", padding: 200, marginTop:100}}> 
               <FormGroup />
            </Grid>
        </Grid>
    )
}
export default Group;