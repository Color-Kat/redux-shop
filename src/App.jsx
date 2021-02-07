import './App.scss';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Loader from './components/loader/Loader';
import ProductPage from './components/productsPage/ProductPage';

function App() {
    return (
        <div className="App">
            <Loader />
            <Header />
            <main>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/products/:id"
                            render = {props => <ProductPage {...props} /> }
                        />
                    </Switch>
                </div>
            </main>
        </div>
    );
}

export default App;
