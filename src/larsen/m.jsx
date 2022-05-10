// import * as React from 'react';
// import Masonry from 'react-masonry-component';
// import { MDBCard, MDBCardBody, MDBNavLink,MDBCardTitle,MDBCardText,MDBBtn,MDBCol} from "mdbreact";

// import { enquireScreen } from 'enquire-js';
// let isMobile;
// enquireScreen((b) => {
//   isMobile = b;
// });
 
// const murl="http://192.168.0.100/nw/img/";
// const masonryOptions = {
//     transitionDuration: 0
// };

// const imagesLoadedOptions = { background: '.my-bg-image-el' }
// const theData = [
//   {
//     img: murl+"a.jpg",
//     txt: 'Grilled salmon cubes with vegetables',
//     t1:"We also provide conference backdrops and audio visal installations."
// }
// ,
// {
//   img: murl+"b.jpg",
//   txt: 'Grilled salmon cubes with vegetables',
//   t1:"Salmon with deep fried vegetables and a touch of batter "
// },
// {
//   img: murl+"c.jpg",
//   txt: 'Grilled salmon cubes with vegetables',
//   t1:"Salmon with deep fried vegetables and a touch of batter "
// },
// { img: murl+"d.jpg",
// txt:'Grilled salmon cubes with vegetables',
// t1:"Salmon with deep fried vegetables and a touch of batter "
// },
// {
//   img: murl+"e.jpg",
// txt: 'Grilled salmon cubes with vegetables',
// t1:"Salmon with deep fried vegetables and a touch of batter "
// },
// {
//   img: murl+"f.jpg",
// txt: 'thanksgiving-dinner',
// t1:"Salmon with deep fried vegetables and a touch of batter "
// }
// ]
// class Services extends React.Component {
 
 
//     render() {
//         const childElements = theData.map((e,i)=>{
//            return (
//                 // <li className="image-element-class">
//                 //   {e.txt}
//                 //     <img src={e.img}/>
//                 // </li>

//       <MDBCard  style={{ width:"99%",maxWidth: "400px",marginRight: "72px",marginLeft: "",marginTop: "32px",cursor:"pointer"}}>

//         <img className="img-fluid" style={{maxWidth: "887px",width:"100%",}} src={e.img}  />
//         <MDBCardBody>
//           <h5>{e.txt}</h5>
//           <br/>
//           <MDBCardText>
//           {e.t1}
//           </MDBCardText>
          
//           <MDBNavLink to={{pathname:"/more",
//                 state: { url:e.img,H:e.txt,d:e.t1,C:"459"}
//                 }} >
//           <MDBBtn color="light-blue" size="sm" >
//                      read more
//                    </MDBBtn>
//             </MDBNavLink>
//         </MDBCardBody>
     
//       </MDBCard>
                 
//             );
//         });
      
//         return (<div style={{maxWidth:"",marginLeft:"auto",marginRight:"auto",paddingTop:"52px",}}>

//     <MDBCard style={{ width:"95%",maxWidth: "1400px",marginRight: "auto",marginLeft: "auto",marginTop: "2px",boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)"}} className="text-center">
//       <MDBCardBody>

//       <h4>Dishes offered</h4>
  
  
//  {isMobile ? (      <Masonry
//                 className={'my-gallery-class'} // default ''
//                 elementType={'div'} // default 'div'
//                 options={masonryOptions} // default {}
//                 disableImagesLoaded={false} // default false
//                 updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
//                 imagesLoadedOptions={imagesLoadedOptions} // default {}
                
//                 style={{ maxWidth:"1000px",marginLeft:"-12px",marginRight:"auto",marginBottom: "22px"}} 
//             >
//                 {childElements}
               
//         </Masonry>
//       ) : (      <Masonry
//         className={'my-gallery-class'} // default ''
//         elementType={'div'} // default 'div'
//         options={masonryOptions} // default {}
//         disableImagesLoaded={false} // default false
//         updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
//         imagesLoadedOptions={imagesLoadedOptions} // default {}
        
//         style={{ maxWidth:"1000px",marginLeft:"auto",marginRight:"auto",marginBottom: "22px"}} 
//     >
//         {childElements}
       
// </Masonry>
//       )}


//         </MDBCardBody>
//       </MDBCard>
// </div>
        
//         );
//     }
// }
// export default Services;

import React from 'react'
import axios from 'axios';

class FileUpload extends React.Component{

    constructor(){
        super();
        this.state = {
            selectedFile:'',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
          })
    }

    submit(){
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        console.warn(this.state.selectedFile);
        let url = "http://localhost/nw/up/upload.php";

        axios.post(url, data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            console.warn(res);
        })

    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br /><br />

                            <h3 className="text-white">React File Upload - Nicesnippets.com</h3>
                            <br />
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="text-white">Select File :</label>
                                    <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-6">
                                    <button type="submit" className="btn btn-dark" onClick={()=>this.submit()}>Save</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )  
    }
}

export default FileUpload;