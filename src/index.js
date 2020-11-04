import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';

const renderApp = () => {
  try {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById('root')
   	);
  } catch (error) {
    console.warn('Render exception!', error);
  }
};

if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    renderApp();
  });
}

renderApp();
