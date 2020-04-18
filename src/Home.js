import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import App from './App.js';
import BlogPost from './components/BlogPost.js';
import Product from './components/Product.js';
import BlogDetail from './components/BlogDetail.js';
import Hooks from './components/Hooks.js';
import index from './components/bwa/index.js';
import Dashboard from './components/bwa/Dashboard.js';
import ManageWisata from './components/bwa/components/ManageWisata.js';
import Customers from './components/bwa/components/Customers.js';
import AccountSettings from './components/bwa/components/AccountSettings.js';
import TicketSales from './components/bwa/components/TicketSales.js';

const Home = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={BlogPost} />
        <Route path="/blog-detail/:id" component={BlogDetail} />
        <Route  path="/app" component={App} />
        <Route  path="/product" component={Product} />
        <Route path="/hooks" component={Hooks}/>
        <Route path="/bwa" component={index}/>
        <Route path="/accountsettings" component={AccountSettings}/>
        <Route path="/customers" component={Customers}/>
        <Route path="/managewisata" component={ManageWisata}/>
        <Route path="/ticketsales" component={TicketSales}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route  path="/home" component={() => 
        <Redirect path="/" />} />
        <Route component={BlogPost} />
    </Switch>
</BrowserRouter>
)



export default Home;