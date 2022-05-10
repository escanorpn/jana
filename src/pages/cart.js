import React from 'react';
import {MDBBtn,MDBNavbarBrand,MDBNavLink} from "mdbreact";
import Table from 'rc-table';
import Animate from 'rc-animate';
import 'rc-table/assets/index.css';
import 'rc-table/assets/animation.css';

const AnimateBody = props => <Animate transitionName="move" component="tbody" {...props} />;

class cart extends React.Component {
  
   
  constructor(props) {
    super(props);
 

    this.columns = [
      { title: 'Title', dataIndex: 'a', key: 'a', width: 20 },
      { id: '123', title: 'QTY', dataIndex: 'b', key: 'b', width: 100 },
      { title: 'Price', dataIndex: 'c', key: 'c', width: 200 },
      {
        title: 'Operations',
        dataIndex: '',
        key: 'd',
        render: (text, record) => (
          <a onClick={e => this.onDelete(record.key, e)} href="#">
            Delete
          </a>
        ),
      },
    ];
    
    this.state = {
      data: [],
      H:this.props.location.state.H,
      Q:this.props.location.state.Q,
      P:this.props.location.state.P,
    };
   this.onAdd()
  
  }

  componentDidMount(){
    this.onAdd()
  }

  onDelete(key, e) {
    console.log('Delete', key);
    e.preventDefault();
    const data = this.state.data.filter(item => item.key !== key);
    this.setState({ data });
  }

  onAdd() {
  
    const data = [...this.state.data];
  //  localStorage.setItem("md",data)
   data.push({
      a: this.state.H,
      b: this.state.Q,
      c: "Ksh "+this.state.P,
      key: Date.now(),
    });
    // localStorage.setItem("md",JSON.stringify(data))
    // var md=localStorage.getItem("md");
    // var md1=JSON.parse(md);
    // console.log(md1);
    this.setState({data});
   // alert(this.state.H);
  }

  render() {
    return (
      <div style={{ margin: 20,maxWidth:"80%",marginLeft: "10%", }}>
        <h2 className="text-center">Checkout</h2>
        <br/>
        {/* <p onClick={() => this.onAdd()}>添加</p> */}
        <Table
          columns={this.columns}
          data={this.state.data}
          components={{
            body: { wrapper: AnimateBody },
          }}
        />

        
        <br/>  <br/>
         

        <MDBNavLink to={{pathname:"/forms", }} >
        <MDBBtn color="light-blue" size="sm" style={{boxShadow:" 0 2px 0px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)",marginRight: "27%",width:"50%",marginLeft: "20%",}}
            href="/forms">
            pay
            </MDBBtn>
             </MDBNavLink>

      </div>
    );
  }
}

export default cart;
