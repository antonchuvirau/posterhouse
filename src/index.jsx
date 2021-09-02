import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/main.scss'
import { Provider } from 'react-redux'
import store from './redux/store';
import { BrowserRouter as Router } from "react-router-dom";
import { AppWithSidePanel } from './contexts/SidePanelContext';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AppWithSidePanel>
          <App />
        </AppWithSidePanel>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
