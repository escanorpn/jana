import React from "react";
import Autosuggest from 'react-autosuggest';
// import theme from './theme.css'

import { Form,Input, Button,Icon, Upload, message ,InputNumber,Breadcrumb} from 'antd';

import { MDBCard, MDBCardBody, MDBCol, MDBRow,MDBIcon} from "mdbreact";
import {Link } from "react-router-dom";

const languages = 
[{"name":"Spoons","id":"3798"},{"name":"Weed Trimmer Blades & Spools","id":"3950"},{"name":"Weed Trimmer Spool Covers","id":"3951"},{"name":"Fishing Reel Replacement Spools","id":"4997"},{"name":"Septic Tank & Cesspool Treatments","id":"2182"},{"name":"Ear Picks & Spoons","id":"2914"},{"name":"Measuring Cups & Spoons","id":"3740"},{"name":"Slotted Spoons","id":"3766"},{"name":"Spoon Rests","id":"3770"}];

const theme = {
  container: {
    position: 'relative',
  
  },
  input: {
     width:"100%" ,
    height: 30,
    padding: '10px 20px',
    // fontWeight: 300,
    // fontSize: 16,
    border: '1px solid #aaa',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  inputFocused: {
    outline: 'none'
  },
  inputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  suggestionsContainer: {
    display: 'none'
  },
  suggestionsContainerOpen: {
    display: 'block',
    position: 'absolute',
    top: 51,
    width: "100%",
    maxHeight:"400px",
    overflow:"auto",
    fontFamily: 'Helvetica, sans-serif',
    border: '1px solid #aaa',
    backgroundColor: '#fff',
    // fontWeight: 300,
    // fontSize: 16,
    color:"black",
    alignContent: 'left',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    zIndex: 2
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  suggestion: {
    cursor: 'pointer',
    padding: '10px 20px'
  },
  suggestionHighlighted: {
    backgroundColor: '#ddd'
  }
};
const axios = require('axios');
function getMatchingLanguages(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }
  
  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
}

/* ----------- */
/*    Utils    */
/* ----------- */

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* --------------- */
/*    Component    */
/* --------------- */

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span style={{textAlign:"left"}}>{suggestion.name}</span>
   
  );
}

class About1 extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      isLoading: false,
      rs:"",
      fileList: [],
    uploading: false,
      info:"",
      url:"http://192.168.0.100/nw/kq/api.php?apicall=",
      url1:"http://192.168.0.100/nw/kq/api1.php?apicall="
      // url:"http://192.168.0.100/nw/kq/api.php?apicall="
      // url:"http://192.168.173.1/nw/kq/api.php?apicall="
      // url:"http://localhost/nw/kq/api.php?apicall=
    };
    
    this.lastRequestId = null;
  }
  


  fData=(filter)=> {
    var values="s="+filter;
    //  console.log("_4 received: "+f4);
     axios({
       method: 'post',
       url: this.state.url+'search5',
       data: values,
       config: { headers: {'Content-Type': 'multipart/form-data' }}
   })
   .then((response) => {
   
     if(response.data.error){
       console.log("_4err "+response.data.message);
       }else{
         var Result=response.data._p;
         if(typeof Result!="undefined"& Result!=null){ this.setState({
          suggestions:Result
              })
            }
       
       console.log("_4Result: "+JSON.stringify(Result)); 
       }
   })
   .catch(function (response) {
       console.log("_4error"+response)
   });
   }

   f1Data=(r,c)=> {
    var values="r="+encodeURIComponent(r)+"&&c="+c;
     axios({
       method: 'post',
       url: this.state.url+'search4',
       data: values,
       config: { headers: {'Content-Type': 'multipart/form-data' }}
   })
   .then((response) => {
   
     if(response.data.error){
       console.log("_4err "+response.data.message);
       }else{

         var rs1=response.data.rs;
         var num=response.data.num;
         var mid=response.data.mid;
         if(typeof mid!="undefined"& mid!=null){
          this.props.form.setFieldsValue({
            mCategory: mid,
      });
         }
     
         console.log("num= "+num, "rs= "+rs1);
         this.setState({
          rs:rs1
             })
         if(num>1){
             this.setState({
          info:"subcategories found."
              })
         }else{
          this.setState({
            info:" "
                })
           }
       
       }
   })
   .catch(function (response) {
       console.log("_4error"+response)
   });
   }

  loadSuggestions(value) {
    // Cancel the previous request
    if (this.lastRequestId !== null) {
      clearTimeout(this.lastRequestId);
    }
    
    this.setState({
      isLoading: true
    });
    
    // Fake request
    this.lastRequestId = setTimeout(() => {
      this.setState({
        isLoading: false,
        suggestions: getMatchingLanguages(value)
      });
      this.fData(value);
    
    }, 1000);
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });

    let obj = this.state.suggestions.find(o => o.name === newValue);

      if(typeof obj!="undefined"& obj!=null){
        console.log(obj.id);
        this.f1Data(newValue,obj.id);
      }

      console.log("newv=",newValue)
  };
    
  onSuggestionsFetchRequested = ({ value }) => {
    this.loadSuggestions(value);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) =>{
    //Here you do whatever you want with the values
    console.log(suggestionValue); //For example alert the selected value
};
handleUpload = () => {
  const { fileList } = this.state;
  const formData = new FormData();
  fileList.forEach(file => {
    formData.append('files', file);
  });
  this.setState({
    uploading: true,
  });
  console.log(formData.files);
}

handleSubmit = e => {
  e.preventDefault();
  const { fileList } = this.state;
 
  // console.log(formData.values());
  this.props.form.validateFields((err, fieldsValue) => {
    if (err) {
      return;
    }
    const values = {
      fieldsValue
    };

    console.log('Received values of form: ', values);
    const formData = new FormData();
    formData.append('name', fieldsValue.mName);
    fileList.forEach(file => {
      formData.append('files[]', file);
    });
    this.setState({
      uploading: true,
    });
console.log( formData);
    axios({
      method: 'post',
      url:this.state.url1+"product",
      data:  formData.name,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
  })
  .then((response) => {
    this.setState({
      uploading: false,
    });
    if(response.data.error){
      console.log("error "+response.data.message);
      }else{
        this.setState({
          redirect: true
       });
      
      console.log("success "+response.data.message);
      }

  })
  .catch(function (response) {
      //handle error
      console.log("error"+response)
  });

  });
};
mPchange=(value)=>{
  console.log('changed', value);
}
  render() {
    const { value, suggestions, isLoading } = this.state;
    const { getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const inputProps = {
      placeholder: "Type to load suggestions. Try a more specific name",
      value,
      onChange: this.onChange
    };
    const status = (isLoading ? 'Loading...' : this.state.info);
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <div style={{width:"95%",height:"100%",maxWidth:"1000px",marginLeft:"auto",marginRight:"auto",}}>
      
      <MDBCard color="white lighten-1" style={{height:"100%"}} text="black" className="text-center">
  <MDBCardBody >
<MDBCard color="white" text="black" className="text-center" >
      <MDBCardBody>
    <Breadcrumb>
      <Breadcrumb.Item >
      <MDBIcon icon="user-circle" className="cyan-text"/>
        <Link to="/pi" className="text-justify">&nbsp;Profile&nbsp;</Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item >
      <MDBIcon icon="warehouse"className="cyan-text" />
        <Link to="/geo">&nbsp;Shop</Link>
      </Breadcrumb.Item>
      
      <Breadcrumb.Item >
      <MDBIcon icon="gifts"className="" />
        <Link to="/product">&nbsp;Products</Link>
      </Breadcrumb.Item>
  </Breadcrumb>
  </MDBCardBody>
  </MDBCard>
  <br/>
  <div style={{boxShadow:  "rgba(234, 236, 236, 0.13) 0px 20px 20px 0px"}}>
      <i class="fas fa-quote-left " ></i>&nbsp;Here you can post products for  people to see.&nbsp;<i class="fas fa-quote-right"></i><br/><br/>
      </div>
      <br/>
    <MDBRow >
  
  <MDBCol md="12" className="mb-4">
    <MDBCard color="white" text="black"  style={{maxWidth:""}}>
      <MDBCardBody>
        <Form layout="vertical"onSubmit={this.handleSubmit}>
  <br/>
          <MDBRow >
<MDBCol md="6">

<Form.Item label={"Name" 
        }>{getFieldDecorator('mName', {
          rules: [{ required: false, message: 'Enter the name of the product', whitespace: true }],
        })(<Input />)}
        </Form.Item>

<br />

        
<div>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Select File
          </Button>
        </Upload>
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
      </div>
      <br/>
</MDBCol> 
<MDBCol md="6" >   

<Form.Item label={"Price" 
        }>{getFieldDecorator('mPrice', {
          rules: [{ type: 'number', required: false, message: 'Enter the price of the product', whitespace: true }],
        })(  <InputNumber
         
          formatter={value => `Ksh ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\Ksh\s?|(,*)/g, '')}
          
          onChange={this.mPchange}
          style={{width:"100%"}}        />)}
        </Form.Item>

<br /> 
<div style={{color:"black"}}>
{this.state.rs}
</div>


          <Form.Item label={"Category" 
          
        }>{getFieldDecorator('mCategory', {
          rules: [{ required: false, message: 'Select a category', whitespace: true }],
        })(      <div> <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={this.onSuggestionSelected}
          inputProps={inputProps}
          // onSuggestionSelected={this.props.value}
          theme={theme}
          /><Input style={{display:"none"}}></Input></div> )}
        </Form.Item>

<br />
</MDBCol>  
      <Form.Item
      style={{marginLeft:"auto",marginRight:"auto"}}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> 
      </MDBRow>
    </Form>
    </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBCardBody>
 </MDBCard>

    </div>
    );
  }
}

//export default App;

const product = Form.create({ name: 'time_related_controls' })(About1);
export default product;