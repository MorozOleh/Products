import React from 'react';
import {Route } from 'react-router-dom';
import Products from './components/Products'
import './App.scss';


export function App() {
  return (
    <Route
      path="/:id?"
      component={Products}
    />
  );
}
