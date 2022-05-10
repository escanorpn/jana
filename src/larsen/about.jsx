import * as React from 'react';
import Masonry from 'react-masonry-component';
import { MDBCard, MDBCardBody, MDBContainer,MDBCol,MDBRow,MDBCardText,} from "mdbreact";

import Banner3 from './Home3/Banner3';
import Footer2 from './Home3/Footer2';

import {Banner30DataSource_a, Footer20DataSource,} from './Home3/data.source';

import { enquireScreen } from 'enquire-js';
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
 
const murl="http://lmgexhibitions.kilaqitu.com/img/";
// const murl1="http://shuledigi.losenviskas.com/gg.png";

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }
const theData = [
  {
   
    txt: 'Curriculum',
    t1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nulla, lacinia nec varius id, tempor sed dolor.Praesent felis dui, auctor sit amet lectus vitae, tincidunt auctor mi."
}
,
{
  
  txt: 'Boarding',
  t1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nulla, lacinia nec varius id, tempor sed dolor.Praesent felis dui, auctor sit amet lectus vitae, tincidunt auctor mi. "
},
{
 
  txt: 'Meal plans',
  t1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nulla, lacinia nec varius id, tempor sed dolor.Praesent felis dui, auctor sit amet lectus vitae, tincidunt auctor mi."
},
{
 
  txt: 'Transportation',
  t1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nulla, lacinia nec varius id, tempor sed dolor.Praesent felis dui, auctor sit amet lectus vitae, tincidunt auctor mi."
}
]
const eca = [
  {
    img: murl+"ca.jpeg",
    txt: 'Music',
    t1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nulla, lacinia nec varius id, tempor sed dolor."
}
,
{
  img: murl+"p.jpeg",
  txt: 'Karate',
  t1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nulla, lacinia nec varius id, tempor sed dolor. "
},
{
  img: murl+"cs.jpeg",
  txt: 'Swimming',
  t1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nulla, lacinia nec varius id, tempor sed dolor."
},
{ img: murl+"es.jpeg",
txt: 'Arts',
t1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nulla, lacinia nec varius id, tempor sed dolor."
}
]
class Services extends React.Component {
 
 
    render() {
        const childElements = theData.map((e,i)=>{
           return (
                // <li className="image-element-class">
                //   {e.txt}
                //     <img src={e.img}/>
                // </li>
                
      <MDBCard style={{ width:"99%",maxWidth: "450px",marginRight: "12px",marginLeft: "12px",marginTop: "32px",}}>

        <MDBCardBody>
          <h5>{e.txt}</h5>
          <br/>
          <MDBCardText>
          {e.t1}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
                    
            );
        });
      
    //     const eca1 = eca.map((e,i)=>{
    //       return (
    //            // <li className="image-element-class">
    //            //   {e.txt}
    //            //     <img src={e.img}/>
    //            // </li>
               
    // //  <MDBCard style={{ width:"99%",maxWidth: "300px",marginRight: "12px",marginLeft: "12px",marginTop: "32px",}}>

    // //    <img className="img-fluid" style={{maxWidth: "287px",paddingLeft:"12px",paddingTop:"19px"}} src={murl1}  />
    // //    <MDBCardBody>
    // //      <h5>{e.txt}</h5>
    // //      <br/>
    // //      <MDBCardText>
    // //      {e.t1}
    // //      </MDBCardText>
    // //    </MDBCardBody>
    // //  </MDBCard>
                   
    //        );
    //    });
        return (

<div style={{maxWidth:"",marginLeft:"auto",marginRight:"auto",}}>
  
<Banner3
        id="Banner3_0"
        key="Banner3_0"
        dataSource={Banner30DataSource_a}
        isMobile={isMobile}
        style={{backgroundColor:"#0a151e"}}
      />

  <MDBCard style={{ width:"95%",maxWidth: "1400px",marginRight: "auto",marginLeft: "auto",marginTop: "72px",marginBottom:"72px",boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)"}} className="text-center">
    <MDBCardBody>
    <h5>Mission, Vision & Values</h5>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard color="white lighten-1" style={{maxWidth:"500px",marginLeft:"auto",marginRight:"auto",marginTop:"72px"}} text="black" className="text-center">
            <MDBCardBody style={{color:"#697b8c"}}>
              <h5 style={{backgroundColor:"#09141d",color:"white",padding:"12px",boxShadow:"4px 4px 11px 2px rgb(53 54 54 / 26%)"}}>Vision</h5>
              {/* <img className="img-fluid" style={{maxWidth: "399px",paddingTop:"19px"}} src={murl}  /> */}
              <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >To be the preferred engineering company to provide quality air conditioning and refrigeration service.</p>
            </MDBCardBody>
          </MDBCard>

            <MDBCard color="white lighten-1" style={{maxWidth:"500px",marginLeft:"auto",marginRight:"auto",marginTop:"72px"}} text="black" className="text-center">
            <MDBCardBody style={{color:"#697b8c"}}>
              <h5 style={{backgroundColor:"#09141d",color:"white",padding:"12px",boxShadow:"4px 4px 11px 2px rgb(53 54 54 / 26%)"}}>Core Values</h5>
              {/* <img className="img-fluid" style={{maxWidth: "399px",paddingTop:"19px"}} src={murl}  /> */}
              <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >
                Integrity: We are honest and have ethical principles.
                  <br/><br/>
                Passion: We enjoy coming to work every day and love what we do.
                  <br/><br/>
                Team work: We work together to achieve a common goal.
                  <br/><br/>
                Consistency: We are able to meet our expectation the first time and every time.
                  <br/><br/>
                  
                  </p>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
          <MDBCol md="6">
            <MDBCard color="white lighten-1" style={{maxWidth:"500px",marginLeft:"auto",marginRight:"auto",marginTop:"72px",marginBottom:"72px"}} text="black" className="text-center">
                <MDBCardBody style={{color:"#697b8c"}}>
                  <h5 style={{backgroundColor:"#09141d",color:"white",padding:"12px",boxShadow:"4px 4px 11px 2px rgb(53 54 54 / 26%)"}}>Mission</h5>
                  {/* <img className="img-fluid" style={{maxWidth: "399px",paddingTop:"19px"}} src={murl1}  /> */}
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >To be the leading refrigeration and air conditioning company. To provide the best engineering services to better the environment and satisfy our client's needs.
                  <br/><br/>
                  To clients: To provide timely and quality services whenever called upon. To satisfy a client's wants.
                  <br/><br/>
                  To employees: To provide a good, dynamic and challenging working environment for employees which ensures personal and professional growth.
                  <br/><br/>
                  To the community: To ensure safe working environment to the surrounding community and the country at large.
                  </p>
                  
                
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBCardBody>
  </MDBCard>

</div>
        
        );
    }
}
export default Services;