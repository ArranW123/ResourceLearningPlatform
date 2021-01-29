import React          from 'react';
import { observer }  from 'mobx-react';
import RTP            from './Resource Teaching Platform/RTP';
import LoginForm      from './LoginForm';
import InputField     from './InputField';
import SubmitButton   from './SubmitButton';
import './App.css';

class App extends React.Component {

  async componentDidMount() {
    try {

        let res = await fetch('/isLoggedIn', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        let result = await res.json();

        if (result && result.success) {
          RTP.loading= false;
          RTP.isLoggedIn = true;
          RTP.username = result.username;

        }

        else {
          RTP.loading= false;
          RTP.isLoggedIn = false;

        }
    

    }

    catch(e){
      RTP.loading= false;
          RTP.isLoggedIn = false;

    }
  }

  async doLogout() {
    try {

        let res = await fetch('/logout', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        let result = await res.json();

        if (result && result.success) {
          RTP.isLoggedIn = false;
          RTP.username = '';
        }

        

    }

    catch(e){
      console.log(e)

    }
  }

  render() {

    if (RTP.loading) {
      return (
      <div className="app">
        <div className= 'container'>
          Loading Please Wait....
          </div>
    </div>

      );
    }

    else {

      if (RTP.isLoggedIn)
      return (
        <div className="app">
          <div className= 'container'>
            Welcome {RTP.username}

            <SubmitButton
                text={'Log Out'}
                disabled={false}
                onClick={()=> this.doLogout() }
            />
            </div>
      </div>
  
        );

    }


    return (
        <div className="app">
          <div className= 'container'>
            <LoginForm />

          </div>

        </div>
    );
}

}
export default observer (App);
