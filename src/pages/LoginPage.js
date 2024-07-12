import React from 'react'
import Background from '../components/Background';
import { Login} from '../components/Main';

const LoginPage = () => {
  return (
      <Background>
        <div className=" py-[120px]">
            <Login />
        </div>
      </Background>
  );
}

export default LoginPage
