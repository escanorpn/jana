import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { MDBIcon,MDBCard, MDBCardBody, MDBCol, MDBRow} from "mdbreact";
import { getChildrenToRender } from './utils';
import { enquireScreen } from 'enquire-js';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});


class Content8 extends React.PureComponent {
  getDelay = (e, b) => (e % b) * 100 + Math.floor(e / b) * 100 + b * 100;
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      pad:"0px",
      
      
    };
    if(!isMobile){
      this.setState({
        pad:"70px"
      })
    }
  }
  getBlockChildren = (item, i) => {
    const children = item.children;
    const delay = this.props.isMobile ? i * 50 : this.getDelay(i, 24 / item.md);
    const liAnim = {
      y: 30,
      opacity: 0,
      type: 'from',
      ease: 'easeOutQuad',
      delay,
    };
  
    return (
      <TweenOne component={Col} animation={liAnim} key={i.toString()} {...item} style={{width:"100%",maxWidth:"450px",marginLeft:this.state.pad,marginRigt:"auto"}}>

         <MDBCard color="white lighten-1" style={{boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)"}} text="black" className="text-center">
        <MDBCardBody>
        <div {...children} style={{maxWidth:"7777px",marginLeft:"auto",marginRight:"auto"}} >
          {/* <div className="image-wrapper" {...children.img}>
            <img src={children.img.children} alt="img" />
          </div> */}
          <h2 {...children.title}>{children.title.children}</h2>
          <p style={{whiteSpace:"pre-wrap"}} {...children.content}>{children.content.children}</p>
        </div>
        </MDBCardBody>
        </MDBCard>
      </TweenOne>
    );
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const children = dataSource.block.children.map(this.getBlockChildren);

    if(!isMobile){
      this.setState({
        pad:"70px"
      })
    }
  
    return (
      <div {...props} {...dataSource.wrapper}>
     
     <div {...dataSource.page}>
      <MDBCard color="white lighten-1" style={{marginLeft:"auto",marginRight:"auto",boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)"}} text="black" className="text-center">
        <MDBCardBody>
        
          <div {...dataSource.titleWrapper} style={{marginLeft:"auto",marginRight:"auto"}}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim type="bottom" key="img">
              <Row {...dataSource.block} key="img">
                {children}
              </Row>
            </QueueAnim>
          </OverPack>
      
        </MDBCardBody>
        </MDBCard>
        
        <MDBCard color="white lighten-1" style={{boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)",maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"72px"}} text="black" className="text-center">
        <MDBCardBody style={{color:"#697b8c"}}>
          <h5 style={{}}>History</h5>
          <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nulla, lacinia nec varius id, tempor sed dolor. Sed eget tincidunt lacus, eu tempus nibh. Praesent lacinia ex a magna varius porta. Morbi ultrices posuere varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec eget justo semper magna venenatis sagittis sed sed lorem. Praesent lobortis nisi ac justo facilisis condimentum. Praesent felis dui, auctor sit amet lectus vitae, tincidunt auctor mi.</p>
        
        </MDBCardBody>
        </MDBCard>
<div style={{marginTop:"72px",maxWidth:"900px",marginLeft:"auto",marginRight:"auto",}}>
        <MDBCard color="white lighten-1" style={{boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)",maxWidth:"400px",marginLeft:"auto",marginRight:"auto",float:"left"}} text="black" className="text-center">
        <MDBCardBody style={{color:"#697b8c"}}>
          <h5 style={{}}>Head Teacher</h5>
          <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nulla, lacinia nec varius id, tempor sed dolor. Sed eget tincidunt lacus, eu tempus nibh. Praesent lacinia ex a magna varius porta. Morbi ultrices posuere varius. </p>
        
        </MDBCardBody>

        </MDBCard>   
         <MDBCard color="white lighten-1" style={{boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)",maxWidth:"400px",marginLeft:"auto",marginRight:"auto",float:"right"}} text="black" className="text-center">
        <MDBCardBody style={{color:"#697b8c"}}>
          <h5 style={{}}>Deputy Head Teacher</h5>
          <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nulla, lacinia nec varius id, tempor sed dolor. Sed eget tincidunt lacus, eu tempus nibh. Praesent lacinia ex a magna varius porta. Morbi ultrices posuere varius. .</p>
        
        </MDBCardBody>
        </MDBCard>
  </div>
        </div>
      </div>
    );
  }
}

export default Content8;
