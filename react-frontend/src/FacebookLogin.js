import React from 'react';

export default class FacebookLogin extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         usuer: "null"
      };

   }

   componentDidMount() {
    window.fbAsyncInit = function() {
        window.FB.init({
          appId      : '{your-app-id}',
          cookie     : true,
          xfbml      : true,
          version    : '{api-version}'
        });
          
        window.FB.AppEvents.logPageView();   
          
      };
    
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
   }

   login = () => {
       window.FB.login(
           response => { this.statusChangeCallback(response)}
       );
   }

   statusChangeCallback(response) {
       console.log('statusChangeCallback', response);
       if (response.status === 'connected') {
           this.apiCall();
       } else if (response.status === 'not_authorized') {
            console.log('Logged into Facebook, but not the app.')
       } else {
           console.log('Not logged into Facebook or app')
       }
   }

   apiCall() {
       window.FB.api('/me', function(response) {
           console.log(JSON.stringify(response));
           console.log('Logged in as: ' + response.name);
           console.log('full response is: ' + response)

           this.setState({
               user: response.name,
           })
       }.bind(this));
   }
      

   render() {
      return (
         <div>
             <img src={window.facebook} title="facebook login" alt="facebook" onClick={this.login} />
             <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-auto-logout-link="false" data-use-continue-as="false"></div>
         </div>
      );
   }
};