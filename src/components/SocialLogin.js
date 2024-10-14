import React from 'react'

const SocialLogin = () => {
  return (
    <div className="social-login">
        <button className="social-button"> Continue with google
          <img src="./googleicon.png" alt="google" className="social-icon"/>
        </button>

        <button className="social-button"> Continue with phone
        <img src="./phoneicon.png" alt="phone" className="social-icon"/>
        </button>
      </div>
  )
}

export default SocialLogin
