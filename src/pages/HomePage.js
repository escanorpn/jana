import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBModal,MDBCardTitle,MDBCardText,MDBCardGroup,MDBCardImage,MDBNavLink,MDBFooter,MDBDropdown,MDBDropdownItem,MDBDropdownToggle,MDBDropdownMenu,MDBInputSelect} from "mdbreact";
import DocsLink from "./../components/docsLink";

class FormsPage extends Component {
  

  state = {
    modal: false,
    
    url1:require("../assets/6.jpg"),
    url2:require("../assets/img/8.jpg"),
    url3:require("../assets/img/4.jpg"),
    url4:require("../assets/img/7.jpg"),
    url5:require("../assets/img/1.jpg"),
    url6:require("../assets/img/5.jpg"),
    url7:require("../assets/img/3.jpg"),
    url8:require("../assets/img/2.jpg"),

    upath:"http://192.168.43.22/nw/ibl/img/",
    _1:true,
    _2:true,
    _3:true,
    _4:true,
    _5:true,
    _6:true,
    _7:true,
    _8:true
    //women:this.props.location.state.women,
 
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  all = () => {
    this.setState({ _5:true});
    this.setState({ _6:true});
    this.setState({ _7:true});
    this.setState({ _8:true});
    
    this.setState({ _1:true});
    this.setState({ _2:true});
    this.setState({ _3:true});
    this.setState({ _4:true});
  }
  blazer = () => {
    this.setState({ _5:false});
    this.setState({ _6:true});
    this.setState({ _7:false});
    this.setState({ _8:false});
    
    this.setState({ _1:false});
    this.setState({ _2:false});
    this.setState({ _3:false});
    this.setState({ _4:false});
  }
  
  basic = () => {
    this.setState({ _5:true});
    this.setState({ _6:false});
    this.setState({ _7:true});
    this.setState({ _8:true});

    this.setState({ _1:false});
    this.setState({ _2:false});
    this.setState({ _3:false});
    this.setState({ _4:false});
  }
  
  jeans = () => {
    this.setState({ _1:false});
    this.setState({ _2:true});
    this.setState({ _3:true});
    this.setState({ _4:false});

    this.setState({ _5:false});
    this.setState({ _6:false});
    this.setState({ _7:false});
    this.setState({ _8:false});
  }
  
  Jacket = () => {
    this.setState({ _1:false});
    this.setState({ _2:false});
    this.setState({ _3:false});
    this.setState({ _4:true});

    this.setState({ _5:false});
    this.setState({ _6:false});
    this.setState({ _7:false});
    this.setState({ _8:false});
  }
  
  knit = () => {
    this.setState({ _1:true});
    this.setState({ _2:false});
    this.setState({ _3:false});
    this.setState({ _4:false});

    this.setState({ _5:false});
    this.setState({ _6:false});
    this.setState({ _7:false});
    this.setState({ _8:false});
  }
  getValue = value => {
    if(value<559){
        this.setState({ _6:false});
    }else{
        this.setState({ _6:true});
    }
    
    if(value<459){
        this.setState({ _5:false});
    }else{
        this.setState({ _5:true});
    }
    
    if(value<359){
        this.setState({ _8:false});
    }else{
        this.setState({ _8:true});
    }
    
    if(value<300){
        this.setState({ _7:false});
    }else{
        this.setState({ _7:true});
    }
    
    if(value<510){
      this.setState({ _1:false});
      this.setState({ _2:false});
      this.setState({ _3:false});
      this.setState({ _4:false});
  
  }else{

    if(value>510){
      this.setState({ _2:true});
    }else{
      
      this.setState({ _2:false});
    }
    if(value>570){
      this.setState({ _1:true});
    }else{
      this.setState({ _1:false});
    }
    if(value>599){
      this.setState({ _3:true});
    }else{
      this.setState({ _3:false});
    }
    if(value>799){
      this.setState({ _4:true});
    }else{
      this.setState({ _4:false});
    }
  }
  };
  render() {
    return (
      <MDBContainer className="mt-1" style={{marginLeft: "0px",}}>

        <MDBRow style={{position:"fixed",width:"100%",backgroundColor:"#1a2946",height:"90%",overflowY:"auto"}}>
          
          <MDBCol md="2" class="h-100 " style={{backgroundColor:"#",height:"90%"}}>

           <div  style={{height:"",position:"fixed",maxWidth:"",overflowY:"auto",paddingTop:"-100px",paddingLeft:"",paddingRight:"",color:"white"}}>
                  
        <MDBContainer>
            <MDBRow style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 16px 9px 0px, rgba(0, 0, 0, 0.12) 0px 2px 2px 0px",paddingLeft:"10px",marginLeft:"-22px"}}>
                <MDBCol md="8" >
                  <br/>
                Max price Ksh
                <MDBInputSelect
                 style={{width:"5px",boxShadow:" 0 2px 0px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)"}}
                  getValue={this.getValue}
                  min={300}
                  max={1500}
                  step={20}
                /> <br/>  
          
           
                </MDBCol>
                
            </MDBRow>
            <br/> 
            <div style={{backgroundColor:"",marginLeft:"-22px"}}>
            <MDBBtn  size="sm"color="" style={{boxShadow:" 0 2px 0px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)",marginBottom:"12px"}}
            
            onClick={() => this.all()}
            >All</MDBBtn>
             
             <MDBBtn  size="sm"color="" style={{boxShadow:" 0 2px 0px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)",marginBottom:"12px"}}
            onClick={() => this.knit()}
             >Knitwear</MDBBtn>
            
            <br/> 
            <MDBBtn  size="sm"color="" style={{boxShadow:" 0 2px 0px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)",marginBottom:"12px"}}
           onClick={() => this.jeans()}
            >Jeans</MDBBtn>
            
            <MDBBtn  size="sm"color="" style={{boxShadow:" 0 2px 0px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)",marginBottom:"12px"}}

            onClick={() => this.Jacket()}
            >Jackets</MDBBtn>
            <br/> 
           
            <MDBBtn  size="sm"color="" style={{boxShadow:" 0 2px 0px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)",marginBottom:"12px"}}
             onClick={() => this.blazer()}
            >Blazers</MDBBtn>

            <MDBBtn  size="sm"color="" style={{boxShadow:" 0 2px 0px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)",marginBottom:"12px"}}
            
            onClick={() => this.basic()}
            >Basics</MDBBtn>
     
            </div>
        </MDBContainer>
           </div>
          </MDBCol>
          <MDBCol md="10" style={{paddingTop: "1px",backgroundColor: "white",paddingBottom:"22px",}}>
         
  <MDBCardGroup deck className="" style={{paddingLeft:"15px",marginTop:"-32px",display: this.state.women ? "none":"",}}>
  <MDBCard  style={{width:"100%",maxWidth:"330px",maxHeight:"620px",display:this.state._5 ? "":"none"}}>
           
           <img src={this.state.url1} style={{ maxWidth:"100%",height:"90%",width:"100%" }}/>
                 <MDBCardBody >
                   <MDBCardText>
                   Basic Top with long sleeves
                   <br/>
                   KSH 459  
                   </MDBCardText>
     
                 <MDBNavLink to={{pathname:"/more",
         state: { url:this.state.url1,H:"Basic Top",d:"Round neck long sleeved shirt.",C:"459"}
         }} >
                   <MDBBtn color="light-blue" size="sm" >
                     read more
                   </MDBBtn>
                   </MDBNavLink>
                 </MDBCardBody>
               </MDBCard>
     
       <MDBCard  style={{maxWidth:"330px",maxHeight:"620px",display:this.state._6 ? "":"none"}}>
         <img src={this.state.url2} style={{ maxWidth:"100%",height:"90%",width:"100%" }}/>
           <MDBCardBody>
             <MDBCardText>
               Belted Plaid Blazer
               <br/>
               KSH 500  
             </MDBCardText>
     
             <MDBNavLink to={{pathname:"/more",
               state: { url: this.state.url2,H:"Belted Plaid Blazer",d:"Flowy blazer with lapel collar and long sleeves. Self belt. Chest patch pockets and welt pockets at hip. Front double-breasted button closure.",C:"500"} }} >
               <MDBBtn color="light-blue" size="sm" >
                read more
               </MDBBtn>
             </MDBNavLink>
           </MDBCardBody>
         </MDBCard>
     
       <MDBCard  style={{maxWidth:"330px",maxHeight:"620px",display:this.state._7 ? "":"none"}}>
         <img src={this.state.url3} style={{ maxWidth:"100%",height:"90%",width:"100%" }}/>
           <MDBCardBody>
             <MDBCardText>
             Tank Top
               <br/>
               KSH 300 
             </MDBCardText>
     
             <MDBNavLink to={{pathname:"/more",
               state: { url: this.state.url3,H:"Tank Top",d:"Flowy V-neck camisole with spaghetti straps.",C:"300"} }} >
               <MDBBtn color="light-blue" size="sm" >
                read more
               </MDBBtn>
             </MDBNavLink>
           </MDBCardBody>
         </MDBCard>
         
       <MDBCard style={{maxWidth:"330px",maxHeight:"620px",display:this.state._8 ? "":"none"}}>
         <img src={this.state.url4} style={{ maxWidth:"100%",height:"90%",width:"100%" }}/>
           <MDBCardBody>
             <MDBCardText>
             Oversized Textured Top
               <br/>
               KSH 359  
             </MDBCardText>
     
             <MDBNavLink to={{pathname:"/more",
               state: { url: this.state.url4,H:"Oversized Textured Top",d:"High collar top with short cuffed sleeves. Asymmetric hem with side slits.",C:"359"} }} >
               <MDBBtn color="light-blue" size="sm" >
                read more
               </MDBBtn>
             </MDBNavLink>
           </MDBCardBody>
         </MDBCard>
  </MDBCardGroup>

<br/><br/>
  <MDBCardGroup deck className="mt-3" style={{paddingLeft:"15px"}}>

  <MDBCard  style={{maxHeight:"",maxWidth:"330px",maxHeight:"620px",display:this.state._1 ? "":"none"}}>
    <img src={this.state.url5} style={{ maxWidth:"100%",height:"90%",width:"100%" }}/>
      <MDBCardBody>
        <MDBCardText>
        Perl Knit Swear
          <br/>
          KSH 570  
        </MDBCardText>

        <MDBNavLink to={{pathname:"/more",
          state: { url: this.state.url5,H:"Perl Knit Swear",d:"Purl-stitch knit sweater in a combination of textures. Ribbed trim.",C:"570"} }} >
          <MDBBtn color="light-blue" size="sm" >
           read more
          </MDBBtn>
        </MDBNavLink>
      </MDBCardBody>
    </MDBCard>

  <MDBCard  style={{maxHeight:"",width:"%",maxWidth:"330px",maxHeight:"620px",display:this.state._2 ? "":"none"}}>
    <img src={this.state.url6} style={{ maxWidth:"100%",height:"90%",width:"100%" }}/>
      <MDBCardBody>
        <MDBCardText>
        Ripped Jeans
          <br/>
          KSH 510
        </MDBCardText>

        <MDBNavLink to={{pathname:"/more",
          state: { url: this.state.url6,H:"Ripped Jeans",d:"Slim fit jeans with five pockets, washed effect, and rips on the legs. Zippered hem at in-seams. Front zip and metal button closure.",C:"510"} }} >
          <MDBBtn color="light-blue" size="sm" >
           read more
          </MDBBtn>
        </MDBNavLink>
      </MDBCardBody>
    </MDBCard>

  <MDBCard  style={{maxHeight:"",width:"%",maxWidth:"330px",maxHeight:"620px",display:this.state._3 ? "":"none"}}>
    <img src={this.state.url7} style={{ maxWidth:"100%",height:"90%",width:"100%" }}/>
      <MDBCardBody>
        <MDBCardText>
        Basic Slim Jeans
          <br/>
          KSH 599  
        </MDBCardText>

        <MDBNavLink to={{pathname:"/more",
          state: { url: this.state.url7,H:"Basic Slim Jeans",d:"Basic slim-fit jeans with five pockets. Two side pockets, two back pockets, and one coin pocket. Belt loops. Front hidden zipper and button closure.",C:"599"} }} >
          <MDBBtn color="light-blue" size="sm" >
           read more
          </MDBBtn>
        </MDBNavLink>
      </MDBCardBody>
    </MDBCard>
    
  <MDBCard  style={{maxHeight:"",width:"%",maxWidth:"330px",maxHeight:"620px",display:this.state._4 ? "":"none"}}>
    <img src={this.state.url8} style={{ maxWidth:"100%",height:"90%",width:"100%" }}/>
      <MDBCardBody>
        <MDBCardText>
        Faux Leather Perforated Jacket
          <br/>
          KSH 799    
        </MDBCardText>

        <MDBNavLink to={{pathname:"/more",
          state: { url: this.state.url8,H:"Faux Leather",d:"Faux leather perforated jacket with high collar and long sleeves. Two front zip pockets. Lined. Interior pocket. Front zip closure. Ribbed elastic hem and cuffs.",C:"799"} }} >
          <MDBBtn color="light-blue" size="sm" >
           read more
          </MDBBtn>
        </MDBNavLink>
      </MDBCardBody>
    </MDBCard>

  </MDBCardGroup>
  
          </MDBCol>
          
          <MDBFooter color="" style={{backgroundColor:"#213357",zIndex: "2",marginTop: "2px",width:"100%",paddingTop: "1px",}}>
            <p className="footer-copyright mb-0 py-3 text-center">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.MDBootstrap.com"> cladi.com </a>
            </p>
          </MDBFooter>
        </MDBRow>

      </MDBContainer>
    );
  }
}

export default FormsPage;
