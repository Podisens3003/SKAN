import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './Providers/AuthProvider';
import HistogramsProvider from './Providers/HistogramsProvider';
import DocumentsProvider from './Providers/DocumentsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <HistogramsProvider>
        <DocumentsProvider>
          <App />
        </DocumentsProvider>
      </HistogramsProvider>
    </AuthProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
