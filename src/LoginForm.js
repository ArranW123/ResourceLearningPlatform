import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import RTP from './Resource Teaching Platform/RTP';

class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            buttonDisable: false
        }
    }

    setInputValue(property, val){
        val = val.trim();
        if (val.length>12){
            return;
        }
        this.setState({
            [property]: val
        })
    }

    resetForm (){
        this.setState({
            username:'',
            password:'',
            buttonDisable: false
        })
    }

    async doLogin(){

        if (!this.state.username){
            return;
        }
        if (!this.state.password){
            return;
        }
        this.setState({
            buttonDisable: true
        })

        try {

            let res= await fetch('/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,

                })
            });

            let result = await res.json();
            if (result && result.success){
                RTP.isLoggedIn =true;
                RTP.username= result.username;    
            }

            else if ( result && result.success === false){
                this.resetForm();
                alert(result.msg);
            }
            
        }

        catch(e){
            console.log(e);
            this.resetForm();
        }

    }



  render() {
    return (
    <div className="loginForm">
        
        <h3 >
        RESOURCE LEARNING PLATFORM
        </h3>
       

       
         <InputField
            type='text'
            placeholder='Enter Email Address Or Username'
            value={this.state.username ? this.username : ''}
            onChange= { (val)=> this.setInputValue ('username', val)}
        />

        <InputField
            type='password'
            placeholder='Password'
            value={this.state.password ? this.password : ''}
            onChange= { (val)=> this.setInputValue ('password', val)}

        />

        <SubmitButton
            text='Login'
            disabled={ this.state.buttonDisabled}
            onClick= {()=> this.doLogin() }
        />

    </div>
    );
}

}
export default LoginForm;
