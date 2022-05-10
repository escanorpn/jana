/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';


import { MDBCard, MDBCardBody, MDBIcon} from "mdbreact";

import Nav0 from './Nav0';
import Banner0 from './Banner0';
import Banner3 from './Banner3';
import Content5 from './Content5';
import Content0 from './Content0';
import Content1 from './Content1';
import Content3 from './Content3';
import Footer0 from './Footer0';
import './static/style';

import {
  Nav00DataSource,
  Banner00DataSource,
  Banner30DataSource,
  Content50DataSource,
  Content00DataSource,
  Content10DataSource,
  Content30DataSource,
  Footer00DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      // <Banner3
      //   id="Banner3_0"
      //   key="Banner3_0"
      //   dataSource={Banner30DataSource}
      //   isMobile={this.state.isMobile}
      
      // />,
   
      // <Content5
      // style={{backgroundColor:"#fff"}}
      //   id="Content5_0"
      //   key="Content5_0"
      //   dataSource={Content50DataSource}
      //   isMobile={this.state.isMobile}
      // />,  


    //   <Content1
    //   id="Content1_0"
    //   key="Content1_0"
    //   dataSource={Content10DataSource}
    //   isMobile={this.state.isMobile}
    // />,
      <Banner0
      id="Banner0_0"
      key="Banner0_0"
      dataSource={Banner00DataSource}
      isMobile={this.state.isMobile}
     
    />,
    
      // <Content3
      //   id="Content3_0"
      //   key="Content3_0"
      //   dataSource={Content30DataSource}
      //   isMobile={this.state.isMobile}
      // />,

//       <MDBCard style={{ width:"95%",maxWidth: "700px",marginRight: "auto",marginLeft: "auto",marginTop: "2px",}}  className="text-center">
 
//       <MDBCardBody>
//       <b><u><h3 className="my-4 pb-2" style={{color:"black"}}>Contact information</h3></u></b>
//       <MDBCard color="white" text="black" className="text-center" >
        
// <MDBCardBody className="contact text-center h-100 white-text" >
// <br/>
//               <ul className="text-lg-left list-unstyled ml-4">
//                 <li>
//                   <p style={{color:"black"}}>
//                     <MDBIcon icon="map-marker-alt" className="pr-2" />
//                     Address:&nbsp; P.O BOX 44394-00100,G.P.O-Nairobi3rd Floor,<br/> Kantaria Hse Muindi Mbingu Street.
//                   </p>
//                 </li><br/>
//                 <li>
//                   <p style={{color:"black"}}>
//                     <MDBIcon icon="phone" className="pr-2" />Phone:&nbsp;+254790175798.
//                   </p>
//                 </li><br/>
//                 <li>
//                   <p style={{color:"black"}}>
//                     <MDBIcon icon="envelope" className="pr-2" />
//                     Email:&nbsp;info@lmgexhibitions.com
//                     <br/>or<br/>&nbsp;
// atemi@lmgexhibitions.com
//                   </p>
//                 </li><br/>
//                 <li>
//                   <p style={{color:"black"}}>
//                     <MDBIcon icon="globe" className="pr-2" />
//                     website:&nbsp; www.lmgexhibitions.com
//                   </p>
//                 </li>
//               </ul>
//               <hr className="hr-light my-4" />
//               {/* <ul className="list-inline text-center list-unstyled">
//                 <li className="list-inline-item">
//                   <a href="#!" className="p-2 fa-lg w-ic">
//                     <MDBIcon fab icon="twitter" />
//                   </a>
//                 </li>
//                 <li className="list-inline-item">
//                   <a href="#!" className="p-2 fa-lg w-ic">
//                     <MDBIcon fab icon="linkedin-in" />
//                   </a>
//                 </li>
//                 <li className="list-inline-item">
//                   <a href="#!" className="p-2 fa-lg w-ic">
//                     <MDBIcon fab icon="instagram" />
//                   </a>
//                 </li>
//               </ul> */}
//             </MDBCardBody>
//      </MDBCard>
//              </MDBCardBody>
//            </MDBCard>,
      //      ,
      // <Footer0
      //   id="Footer0_0"
      //   key="Footer0_0"
      //   dataSource={Footer00DataSource}
      //   isMobile={this.state.isMobile}
      // />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
   
      </div>
    );
  }
}
