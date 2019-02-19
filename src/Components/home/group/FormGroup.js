import React from "react";
// import FormFields from "../../Reusable/FormFields";
//import Validate from "../../Reusable/Validate";
import Button from "@material-ui/core/Button";
import Textfield from "@material-ui/core/TextField";

class FormGroup extends React.Component {

    state = {
            groupName:{
                element:'input',
                value:'',
                config:{
                    name:'group _input',
                    type: 'text',
                    placeholder: 'Enter the Group name..'
                }
            }, members: [

                {name: {
                    element: 'input',
                    value: '',
                    config: {
                        name: 'name',
                        type: 'text',
                        placeholder: 'Enter your name..'
                    }
                },
                email: {
                    element: 'input',
                    value: '',
                    config: {
                        name: 'email',
                        type: 'email',
                        placeholder: 'Enter your email..'
                    }
                }}
            ] ,
            data:{}
    }

    submitForm(event){
        event.preventDefault();
        
    let dataToSubmit = this.state;
    console.log(dataToSubmit);
    this.setState({
        data: dataToSubmit
    },console.log(this.data))

        // for(let key in this.state){
        //     dataToSubmit[key] = this.state[key].value;
        // }
        // for(let key in this.state.members[0]){
        //     dataToSubmit[key] = this.state.members[0][key].value;
        // }
        // //SAVE THIS DATA TO FIREBASE   
        // console.log(dataToSubmit);
        // console.log("STORE DATA TO SERVER")
    }
    // submitForm(event){
    //     event.preventDefault();
        
    //     let dataToSubmit = this.state;
    //     console.log(dataToSubmit);

    //     for(let key in this.state){
    //         // if( key === "groupName"){
    //         //     dataToSubmit[key] = this.state[key].value;
    //         // }
    //         if( key === "members"){
    //             for(let i=0; i<this.state.members.length; i++){
    //                 for(let prop in this.state.members[i]){
    //                     // dataToSubmit[key] = this.state.members[i][prop].value;
    //                     console.log(this.state.members[i][prop].value);
    //                 }
    //             }
    //          }
    //     }
    //     for(let key in this.state.members[0]){
    //         dataToSubmit[key] = this.state.members[0][key].value;
    //     }
    //     SAVE THIS DATA TO FIREBASE   
    //     console.log(dataToSubmit);
    //     console.log("STORE DATA TO SERVER")
    // }


    //DO THE TWO UPDATES IN ONE
    updateForm = (event) =>{
        event.preventDefault();
        const newGroup = {...this.state.groupName};
        newGroup.value = event.target.value;
        this.setState({
            groupName: newGroup
        });
    }

    updateMembers = (event) =>{
        event.preventDefault();
        console.log(event.target.name);
        const newGroup = {...this.state}
        const newElement = {...newGroup.members[0][event.target.name]}

        newElement.value = event.target.value;
        newGroup.members[0][event.target.name] = newElement;
        this.setState({
           [event.target.name] : newGroup 
     })
    }

    addPerson(event){
        event.preventDefault();
        this.setState({
            members:[...this.state.members,   
             {name: {
                element: 'input',
                value: '',
                config: {
                    name: 'name',
                    type: 'text',
                    placeholder: 'Enter your name..'
                }
            },
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email',
                    type: 'email',
                    placeholder: 'Enter your email..'
                }
            }}]
        }, () => console.log(this.state, "CLICKED"))
    }
  
    render(){
        return(
            <div className="enroll_wrapper">
                <form onSubmit={(event) => this.submitForm(event)}>
                    <div className="enroll_title">
                        My League shall be called...
                    </div>
                    <div className="enroll_input">
                        <Textfield
                            {...this.state.groupName.config}
                            value={this.state.groupName.value}
                            onChange={this.updateForm} />
                    </div>
                    <hr></hr>
                    <div>
                        League Members
                    </div>
                    <div>
                        {this.state.members.map((member) => {
                            return (
                                <div>
                                    <div>
                                        <Textfield
                                            {...this.state.members[0].name.config}
                                            //value={this.state.members[0].name.value}
                                            onChange={this.updateMembers}
                                        />
                                    </div>
                                    <div>
                                        <Textfield
                                            {...this.state.members[0].email.config}
                                            //value={this.state.members[0].email.value}
                                            onChange={this.updateMembers}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <hr></hr>
                    <Button variant="contained" color="secondary" onClick={(event) => this.addPerson(event)}>Add Person..</Button>
                    <Button variant="contained" color="primary" onClick={(event) => this.submitForm(event)}>SAVE</Button>

                </form>
            </div>
        )
    }
}

export default FormGroup;