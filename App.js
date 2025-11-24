import react from 'react';
import InputField from './components/InputField';

class App extends react.Component {
  render () {
    return (
      <div className = "login-container">
        <h2 className='form-title'>Log in with</h2>
       <div className='social-login'>
          <button className='social-button'>
            <img src='Facebook.jpg' alt='facebook' className='social-icon'/>
        </button>
        <button className='social-button'>
            <img src='telegram.png' alt='telegram' className='social-icon'/>
        </button>
        </div>
        
        <p className='separator'><span>or</span></p>

        <form action='#' className='login-form'>
          <InputField type="email" placeholder="Email address" icon="mail" />
          <InputField type="password" placeholder="Password" icon="lock" />

         
          <a href='#' className='forgot-pass-link'>Forgot Password?</a>

          <button className='login-button'>Log In</button>
        </form>

        <p className='signup-text'>Don't have an account? <a href='signup.js'>Signup now</a></p>
      </div>
    )
  }
}

  
       
  
  
  





export default App;
