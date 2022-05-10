import * as React from 'react';
import Masonry from 'react-masonry-component';
import { MDBCard, MDBCardBody, MDBCardImage,MDBCardTitle,MDBCardText,MDBBtn,MDBCol} from "mdbreact";

import { enquireScreen } from 'enquire-js';
let isMobile;
let mbl1="";
const l1={ maxWidth:"1000px",marginLeft:"-12px",marginRight:"auto",marginTop:"72px",marginBottom: "22px"};
const l2={ maxWidth:"1000px",marginLeft:"-12px",marginRight:"auto",marginTop:"72px",marginBottom: "22px"};
enquireScreen((b) => {
  isMobile = b;
  if(isMobile){
    mbl1=l1
  }else{
    mbl1=l2
  }
 
});
 const mbl=mbl1;
const murl="http://lmgexhibitions.kilaqitu.com/img/";
const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }
const theData = [
 
  {img: murl+"ppp.jpeg",
  txt: ' AThe PPP Expo held in Dar es Salaam, Tanzania on 2019'
},
  {img: murl+"sne.jpeg",
  txt: 'Solar & Energy Expo July2019,KICC Recor Betteries stand Branding'
},
  {img: murl+"p15.jpg",
  txt: 'China Brand Home sinks comapny tand Design & Build , Build Expo Tanzania 2019'
},
  {img: murl+"fe.jpeg",
  txt: 'Future Enegery East Africa 2019, KICC'
},
{img: murl+"p9.jpeg",
  txt: ' Shell scheme, Enterprise India 2019,  KICC'
},
{img: murl+"p16.jpg",
  txt: 'Hero stand Design and Build, Enterprise India Kenya 2019.'
},
{
  img: murl+"p4.jpeg",
txt: 'Kenya International Trade Show 2019, KICC'
},

{ img: murl+"p3.jpeg",
  txt: 'Afriwood Kenya 2019, KICC'
},
{
  img: murl+"p8.jpeg",
  txt: 'Big 5 Construct Kenya 2019, KICC'
},
{ 
  img: murl+"p2.jpeg",
  txt: 'India Kenya Trade Expo 2018, KICC'
},
  {
      img: murl+"p1.jpeg",
      txt: 'Kenya Homes Expo 2018, KICC'
  },
  {
    img: murl+"p7.jpeg",
    txt: 'Build Expo Africa ,Kenya 2018, KICC',
    
  },

{img: murl+"p5.jpeg",
  txt: 'Magical Kenya Travel Expo 2017, KICC'
},
{img: murl+"p6.jpeg",
  txt: 'Indo-Africa B2B 2017,Kenya KICC'
}
]
class past extends React.Component {
 
 
    render() {
        const childElements = theData.map((e,i)=>{
           return (
                // <li className="image-element-class">
                //   {e.txt}
                //     <img src={e.img}/>
                // </li>
                
      <MDBCard style={{ width:"99%",maxWidth: "300px",marginRight: "12px",marginLeft: "19px",marginTop: "32px",}}>
 
        <img className="img-fluid" src={e.img}  />
        <MDBCardBody>
          <h5>{e.txt}</h5>
          <br/>
          <MDBCardText>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
                    
            );
        });
      
        return (<div style={{maxWidth:"",marginLeft:"auto",marginRight:"auto",paddingTop:"52px",}}>
  <MDBCard style={{ width:"95%",maxWidth: "1400px",marginRight: "auto",marginLeft: "auto",marginTop: "2px",}}>
 
 <MDBCardBody>
 <MDBCard color="white" text="black" className="text-center" >
      <MDBCardBody>
      <h4>Past events</h4>
  </MDBCardBody>
</MDBCard>
  
 {isMobile ? (      <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
                
                style={{ maxWidth:"1000px",marginLeft:"-12px",marginRight:"auto",marginBottom: "22px"}} 
            >
                {childElements}
               
        </Masonry>
      ) : (      <Masonry
        className={'my-gallery-class'} // default ''
        elementType={'div'} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
        
        style={{ maxWidth:"1000px",marginLeft:"auto",marginRight:"auto",marginBottom: "22px"}} 
    >
        {childElements}
       
</Masonry>
      )}


        </MDBCardBody>
      </MDBCard>
</div>
        
        );
    }
}
export default past;