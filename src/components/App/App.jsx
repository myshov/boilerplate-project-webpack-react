import React from 'react';
import { hot } from 'react-hot-loader';
import Button from '../Button/Button';

import styles from './App.css';

function App() {
  return (
    <div className={styles.app}>
      <h1>App</h1>
      <div>
        <Button text="push" />
      </div>
    </div>
  );
}

export default hot(module)(App);
