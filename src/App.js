import React from 'react';
import './App.css';
import { Layout, Header, HeaderRow, Textfield, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom'

 


function App() {
    return (
        <div className="page-container">
            <Layout>
                <Header className="header-color" title="Title" scroll>
                    <HeaderRow title="Joe Bloggs Ceramics">
                        <Textfield
                            value=""
                            onChange={() => { }}
                            label="Search2"
                            expandable
                            expandableIcon="search"
                        />
                    </HeaderRow>
                    <HeaderRow>
                        <Navigation>
                            <Link to="/homePage">Home</Link>
                            <Link to="/projects">Items</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/cart">Cart</Link>
                            <Link to="/Mycart">MyCart</Link>
                            <Link to="/helpCenter">helpCenter</Link>
                        </Navigation>
                    </HeaderRow>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/homePage">Landing</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/Mycart">MyCart</Link>
                        <Link to="/helpCenter">helpCenter</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>
    );
}

export default App;
