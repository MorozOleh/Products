import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './components/Products/Products'
import './App.scss';


export function App() {
  return (
    <Switch>
      <Route
        path="/"
        component={Products}
      />
    </Switch>
  );
}
