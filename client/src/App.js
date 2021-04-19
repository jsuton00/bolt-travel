import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import ViewportProvider from './containers/Viewport';
import { useViewportContext } from './hooks/useViewport';
import AboutPage from './pages/AboutPage';
import BlogArticle from './pages/BlogArticle';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProductListings from './pages/ProductListings';
import ProductPage from './pages/ProductPage';
import './styles/app.css';

const App = () => {
  return (
    <div id="app" className="app">
      <ViewportProvider>
        <Header />
      </ViewportProvider>
      <main className="main container-fluid">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/products" component={ProductListings} />
          <Route path="/products/:id" component={ProductPage} />
          <Route path="/blog/:id" component={BlogArticle} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
