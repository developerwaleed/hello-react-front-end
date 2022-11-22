import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Hello, Welcome!!</h1>
      <button type="button" onClick={() => { navigate('/greeting'); }}>View a greeting</button>
    </>
  );
}

export default Home;
