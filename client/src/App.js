import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import AboutPage from './pages/AboutPage';
import BlogArticle from './pages/BlogArticle';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProductListings from './pages/ProductListings';
import ProductPage from './pages/ProductPage';
import './styles/app.css';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);

  const openLoginForm = () => {
    if (showSignInForm === true) {
      setShowSignInForm(false);
      setShowLoginForm(!showLoginForm);
    } else {
      setShowLoginForm(!showLoginForm);
    }
  };

  const openSignInForm = () => {
    if (showLoginForm === true) {
      setShowLoginForm(false);
      setShowSignInForm(!showSignInForm);
    } else {
      setShowSignInForm(!showSignInForm);
    }
  };

  const closeLoginForm = () => {
    if (showLoginForm === true) {
      setShowLoginForm(false);
    }
  };

  const closeSignInForm = () => {
    if (showSignInForm === true) {
      setShowSignInForm(false);
    }
  };
  return (
    <div id="app" className="app">
      <Header
        showLoginForm={showLoginForm}
        openLoginForm={openLoginForm}
        showSignInForm={showSignInForm}
        openSignInForm={openSignInForm}
      />
      <LoginPage
        showLoginForm={showLoginForm}
        closeLoginForm={closeLoginForm}
      />
      <SignUpPage
        showSignInForm={showSignInForm}
        closeSignInForm={closeSignInForm}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/products" component={ProductListings} />
        <Route path="/products/:id" component={ProductPage} />
        <Route path="/blog/:id" component={BlogArticle} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
