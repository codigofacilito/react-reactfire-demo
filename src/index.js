import React, { Component, Suspense } from 'react';
import { render } from 'react-dom';
import './style.css';

import {
  FirebaseAppProvider
} from 'reactfire';

import firebaseConfig from './firebaseConfig';

import 'firebase/performance';

import List from './list';

class App extends Component {

  render() {
    return (
      <FirebaseAppProvider firebaseConfig={ firebaseConfig }>
        <Suspense fallback={<p>Cargando...</p>} traceId={'load-app-trace'}>
          <List />
        </Suspense>
      </FirebaseAppProvider>      
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);
