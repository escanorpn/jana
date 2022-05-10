import * as React from 'react';
import { MDBCard, MDBCardBody, } from "mdbreact";
import Texty from 'rc-texty';

const murl="http://lmgexhibitions.kilaqitu.com/img/";



class About extends React.Component {
 
 
    render() {

       
      
        return (
        <div style={{maxWidth:"",marginLeft:"auto",marginRight:"auto",paddingTop:"52px",background:"url(http://lmgexhibitions.kilaqitu.com/img/mb.png) no-repeat top fixed",
        backgroundSize: "cover"}}>
  <MDBCard style={{ width:"95%",maxWidth: "1400px",marginRight: "auto",marginLeft: "auto",marginTop: "2px",}}>
 
 <MDBCardBody>
 <MDBCard color="white" text="black" className="text-center" >
      <MDBCardBody>
      <h4><Texty type="mask-bottom">LMG EXHIBITIONS</Texty></h4>
  </MDBCardBody>
</MDBCard>
        </MDBCardBody>
      </MDBCard>
<br/><br/>
      <MDBCard style={{ width:"95%",maxWidth: "700px",marginRight: "auto",marginLeft: "auto",marginTop: "2px",}}  className="text-center">
 
 <MDBCardBody>
 <b><u>About us</u></b><br/><br/>
 <MDBCard color="white" text="black" className="text-center" >
      <MDBCardBody>
      <p>&nbsp;Le Meilleur Global exhibitions has been trading for many years now, becoming the supplier of choice for many exhibitions and Conferences in Kenya. We are well known in the industry and have an outstanding reputation for expertise in our field.  We have a wealth of experience and have worked in most of the big venues within Kenya.

</p>
<br/>
<p>
&nbsp;These enables us to assist organizers with the planning and execution of their events from registration, floor plan designing, signage, exhibitions stands including both customised and regular shell scheme, furniture extras hire and security  perspective</p>
  </MDBCardBody>
</MDBCard>
        </MDBCardBody>
      </MDBCard>
      <br/>
                   
      <MDBCard style={{ width:"100%",maxWidth: "802px",marginRight: "auto",marginLeft: "auto",}}>
 
        <MDBCardBody>
        <MDBCard color="white" text="black" className="text-center" >
      <MDBCardBody>
      <b><u>The team</u></b><br/><br/>
          
        <img className="img-fluid" style={{ width:"100%",maxWidth: "800px"}} src={murl+"abg.jpeg"}  />
        </MDBCardBody>
      </MDBCard>
        </MDBCardBody>
      </MDBCard>
</div>
        
        );
    }
}
export default About;