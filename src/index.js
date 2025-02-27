import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import '@fontsource/roboto-mono'; // npm install @fontsource/roboto-mono
Kommunicate.init("1c849271b7e990b238dbb289ea41a5e92")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  
  <BrowserRouter>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </BrowserRouter>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
