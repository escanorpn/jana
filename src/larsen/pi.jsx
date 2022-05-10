
        
import React from "react";
import { Form, Breadcrumb,Icon, } from 'antd';
import { MDBCard, MDBCardBody} from "mdbreact";
import { BrowserRouter as Router,Route, Switch,Link } from "react-router-dom";



import geo from "./geo";
import grid from "./grid";
import product from "./product";

class pi1 extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
      redirect: false,
    };
  
   
render() {
  
  return (
<div>
<Router>
  <div className="flyout" style={{backgroundColor:"#fff"}}>
    <div style={{ marginTop: "0.5rem" }}>
    <MDBCard color="white" text="black" className="text-center" >
      <MDBCardBody>
    <Breadcrumb>
      <Breadcrumb.Item >
        <Icon type="user" />
        <Link to="/pi" className="text-justify">Profile</Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item >
        <Icon type="user" />
        <Link to="/geo">Shop</Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item >
        <Icon type="user" />
        <Link to="/product">Product</Link>
      </Breadcrumb.Item>
  </Breadcrumb>
  </MDBCardBody></MDBCard>
        <Switch>
        
        <Route exact path ="/pi"component={grid}/>
        <Route exact path ="/geo"component={geo}/>
        <Route exact path ="/product"component={product}/>
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
          </div>
        
        </div>
      </Router>
</div>
       );
            }}

const pi = Form.create({ name: 'time_related_controls' })(pi1);
export default pi;