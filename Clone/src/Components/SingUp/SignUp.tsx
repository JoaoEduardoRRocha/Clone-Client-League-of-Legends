import axios from 'axios';
import React, { useState } from 'react';
import "./SignUp.scss";

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    axios.post('http://localhost:9000/api/auth/signup', {
      username: username,
    }).then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <>
      <section className='section-container'>
        <div className='section-container__login'>
          <div className='section-container__auth'>
            <img src="./../../assets/logo-clone-games.svg" alt="Logo Clone Games" />

            <h1 className='section-container__sign-up'>Sign Up</h1>
            <p className='section-container__phrase-choose-username'>Choose your unique username</p>
            <input 
              className='section-container__input-username' 
              type="username" 
              value={username} 
              placeholder='USERNAME' 
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
            />

            <div className='section-container__username-conditions'>
              <p className='section-container__username-conditions-align'>At least 8 characters long</p>
              <p className='section-container__username-conditions-align'>Only lowercase letters</p>
              <p className='section-container__username-conditions-align'>No spaces</p>
            i</div>
          </div>

          <form typeof="submit" onSubmit={(event) => event.preventDefault()}>
            <button 
              className='section-container__btn-login'
              onClick={() => (handleSubmit())}
            >
              <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="52" height="52" rx="16" fill="#F5F5F5" />
                <path d="M36.3667 25.3666C36.2873 25.1621 36.1684 24.9752 36.0167 24.8166L27.6833 16.4833C27.5279 16.3279 27.3435 16.2047 27.1404 16.1206C26.9374 16.0365 26.7198 15.9932 26.5 15.9932C26.0562 15.9932 25.6305 16.1695 25.3167 16.4833C25.1613 16.6387 25.038 16.8232 24.9539 17.0262C24.8698 17.2293 24.8265 17.4469 24.8265 17.6667C24.8265 18.1105 25.0028 18.5361 25.3167 18.85L30.8167 24.3333H18.1667C17.7246 24.3333 17.3007 24.5089 16.9882 24.8215C16.6756 25.134 16.5 25.558 16.5 26C16.5 26.442 16.6756 26.8659 16.9882 27.1785C17.3007 27.4911 17.7246 27.6666 18.1667 27.6666H30.8167L25.3167 33.15C25.1605 33.3049 25.0365 33.4893 24.9518 33.6924C24.8672 33.8955 24.8237 34.1133 24.8237 34.3333C24.8237 34.5533 24.8672 34.7712 24.9518 34.9743C25.0365 35.1774 25.1605 35.3617 25.3167 35.5166C25.4716 35.6729 25.6559 35.7969 25.859 35.8815C26.0621 35.9661 26.28 36.0096 26.5 36.0096C26.72 36.0096 26.9379 35.9661 27.141 35.8815C27.3441 35.7969 27.5284 35.6729 27.6833 35.5166L36.0167 27.1833C36.1684 27.0248 36.2873 26.8379 36.3667 26.6333C36.5334 26.2275 36.5334 25.7724 36.3667 25.3666Z" fill="#919191" />
              </svg>
            </button>
          </form>

          <div className='section-container__already-register'>
            <p>Already have an account? sign in</p>
          </div>
          <p className='section-container__text'>
            This app is made by João Eduardo
            and Matheus Mattana, two League
            fans who have no connection to
            the original product
          </p>
        </div>

        <div className='section-container__wallpeaper'>
          p
        </div>
      </section>
    </>
  );
};

export default SignUp;
