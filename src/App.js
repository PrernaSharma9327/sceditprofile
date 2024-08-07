import React from 'react';
import ProfileForm from './components/ProfileForm';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f4f4f9;
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ProfileForm />
    </div>
  );
};

export default App;
