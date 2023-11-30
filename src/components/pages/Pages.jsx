import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../blog/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import { RealEstateForm} from "../common/header/RealEstateForm"

import Login from "../common/header/Login"
import Signup from "../common/header/Signup"

import RecentCard from "../home/recent/RecentCard"
import PropertyDetails from './PropertyDetails'; // Update the path

const Pages = () => {
  return (
    <>
      <Router>
        <Header /> 
      
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/RealEstateForm' component={RealEstateForm} />
         
          {/* <Route path="/" exact component={Login} /> */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/recent" component={RecentCard} /> 
            <Route   path="/property/:id" component={PropertyDetails} />

            </Switch>
        
        <Footer />
      </Router>
    </>
  )
}

export default Pages
