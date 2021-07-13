import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import ContainerComponent from './components/container-component';
import BlogDetailsComponent from './components/blog-details-component';
import ErrorBoundary from './components/error-boundary-component';

function App() {
  return (
    <BrowserRouter>
        <ErrorBoundary>
            <Route exact path="/" component={ContainerComponent}/>
            <Route path="/blog/:id" component={BlogDetailsComponent}/>
        </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
