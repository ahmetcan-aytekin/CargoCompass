import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from './Redux/ConfigureStore';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store =configureStore();
root.render(
    <Provider store={store}>
       <App> </App>
    </Provider>
 );

reportWebVitals();