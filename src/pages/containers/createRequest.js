import React, { Component } from 'react'
import CreateRequestLayout from '../components/createRequestLayout'
import MainStepper from '../components/mainStepper'
import DetailsCreateRequestLayout from './detailsCreateRequest'

let myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFmYzliYWIwMWJjODE0MjE5NTM3ZDYzMjNiMGFiYmIzODAyYWZhNzNmYWM1ZGU5MDg1NjA0MDZhZTgwYzFiMjM1NzE1ZTNkZTYwMzc5Yjg5In0.eyJhdWQiOiIxIiwianRpIjoiMWZjOWJhYjAxYmM4MTQyMTk1MzdkNjMyM2IwYWJiYjM4MDJhZmE3M2ZhYzVkZTkwODU2MDQwNmFlODBjMWIyMzU3MTVlM2RlNjAzNzliODkiLCJpYXQiOjE1NDM2MTQzNDUsIm5iZiI6MTU0MzYxNDM0NSwiZXhwIjoxNTc1MTUwMzQ1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.mdqxa0HrBHMj0fros1hq0wurivLRdtvGIYo8Ll29uqU2_LANeVAbzRwvCmXh553bIBUFOaM5WDSzVgLUCvgW_au5VamZRy7_H6tUSxbdpEtxx-x0vqm3q0dsC7N9FlXxwu6p7oE1PsxwdzTim5rn7qX44DTkCyYeqC4U4yAMo69xluYLtFJ0GVQ_IeYag8aofc2Q3QTJsWa-tdsmKR-2vfGza2WPgYLaSqpgqx1bZl7fX8mK3JjdkSl3IKmGmVwgafU7wuymaBklLhKER3_K5IshEgE-pzsoEgDU7-pFnxaJF0iGJXSHtZnRMVGVDhUiG7enoJbKaku8r7QlpXyHB_jKvjCrErkIjKVQVaxmP67T_npVkabzedpEzutDIVCdoSKCw_IaEdyNd_a_VLCJOInGlznQljp--YCleVvRO_r1iXFC1QPKuaW3JiVYUeEcOyiUmyNsTTd1seHxU8ueb7r2gaH_FabPec3mZwHjBKLEnILJXQohw3GhB7rgUxHg5lQG4W8MAl3_ZpWFAnCrWF-_LyFNo5dRaoIHkubyCgIBN2ipkTq77JIeqEiYFvZjHR7ZgmqvozO8pOifOdcROVbCGdMRIvdSQ9n7AmnkneictXrWtjOSo511r5HzXm18fCi6fs6HZUK3tLqZDk-WHskP7uFEUn34CRZv_eqEYNM');
    myHeaders.append('Accept', 'application/json');
    
// const myInit = { method: 'POST',
//               headers: myHeaders,
//               mode: 'cors',
//               cache: 'no-cache' };
const userSettings = [45,50,55,60,65,70,75,80]
const scallopSetting = 2.5

class CreateRequest extends Component {
    state = {
        name: '',
        email: '',
        company: '',
        phone: '(   )    -    ',
        city: '',
        state: '',
        zip: '',
        shippingAddress: '',
        framing: 0,
        hasValance: true,
        quantityItem: 1,
        widthInch: "",
        panels: 0,
        drop: "",
        valanceD: "",
        valanceDim: "",
        selectedFabric: "",
        selectedFabricSrc: "",
        valance: 0,
        selectedValanceType: 1,
        projection: "",
        sendFiles: [],
        loading: false,
        completed: 0,
        openAfterDone: false,
        total: 0,
        pipeType: false,
        frameType: false,
        curveType: false,
        lacedType: false,
        heldType: false,
        selectedFrameType: 0,
    };
    
     componentWillMount() {
       this.props.goBackToInitial()
       
     }
    handleChange = name => event => {
        //const typeValance = event.target.value
        this.setState({
          [name]: event.target.value,
        },() => {
        if((name === 'widthInch' || name === 'drop' || name === 'projection' || name === 'valanceD' || name === 'valance' )  && this.state.widthInch !== "" && this.state.drop !== "" && this.state.projection !== "" )
        {
          let fixValance  = this.state.valance === 'My awning has a scallop across the bottom of my soft valance' ? 1 : 0
         
          //console.log(this.state.hasValance)
          let fWidth = this.state.widthInch/12
          let fDrop = this.state.drop/12
          let fProjection = this.state.projection/12
          let fValance = this.state.hasValance ? this.state.valanceD/12 : 0
          let ftotalDrop = fValance + fDrop
          let lfProjection =  fWidth + (fProjection*2)
          let pGD = fWidth * fProjection
          let pDG = fWidth * ftotalDrop
          
          let greatherValueP = pGD > pDG ? pGD : pDG;
          let greatherValue = fProjection > ftotalDrop ? fProjection : ftotalDrop
          let scallopAggregate = lfProjection*scallopSetting*fixValance
          
          if(greatherValue >= 9)
          {
            let price = (greatherValueP * 8)+scallopAggregate
            this.setState({
              total: price,
            })
          }
          else
          {
            let price = (userSettings[Math.ceil(greatherValue)-1] * fWidth) + scallopAggregate
            this.setState({
              total: price,
            })
          }
        }
      });
        
     };
    handleCloseAfterDone =() => {
        this.setState({
          openAfterDone: false,
        });
     };
     handleToogleChange = name => event => {
     this.setState({ [name]: event.target.checked },() => {
       if( this.state.widthInch !== "" && this.state.drop !== "" && this.state.projection !== "" )
       {
          let fixValance  = this.state.valance === 'My awning has a scallop across the bottom of my soft valance' ? 1 : 0
          let fWidth = this.state.widthInch/12
          let fDrop = this.state.drop/12
          let fProjection = this.state.projection/12
          let fValance = this.state.hasValance ? this.state.valanceD/12 : 0
          let ftotalDrop = fValance + fDrop
          let lfProjection =  fWidth + (fProjection*2)
          let pGD = fWidth * fProjection
          let pDG = fWidth * ftotalDrop
          
          let greatherValueP = pGD > pDG ? pGD : pDG;
          let greatherValue = fProjection > ftotalDrop ? fProjection : ftotalDrop
          let scallopAggregate = lfProjection*scallopSetting*fixValance
          
          if(greatherValue >= 9)
          {
            let price = (greatherValueP * 8)+scallopAggregate
            this.setState({
              total: price,
            })
          }
          else
          {
            let price = (userSettings[Math.ceil(greatherValue)-1] * fWidth) + scallopAggregate
            this.setState({
              total: price,
            })
          }
       }
     });
       
      
    };
     //----------------------------------------------
   handleClickSave = () => {
      //this.setState({openAfterDone: true,});
      //console.log(this.state);
      var data = new FormData();
      var item_id = 0;
      data.append("name", this.state.name);
      data.append("email", this.state.email);
      data.append("company", this.state.company);
      data.append("phone", this.state.phone);
      data.append("city", this.state.city);
      data.append("state", this.state.state);
      data.append("zip", this.state.zip);
      data.append("shippingAddress", this.state.shippingAddress);
      
      if(this.state.awnings.length > 0)
      {
          this.setState({ completed: 10, loading: true, });
          console.log(10)
          data.append("awnings", JSON.stringify(this.state.awnings));
          fetch("https://dev.thecanvasmart.com/awning-repair/api/requests", {
            method: 'POST', 
            body: data, 
            headers:myHeaders
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then((response) =>{
            item_id = response
            this.setState({ completed: 25 });
          })
          .then(()=>{
            if(this.state.sendFiles.length > 0)
            {
                var localFiles = []
                this.state.sendFiles.forEach((files) => {
                  if(files.length > 0)
                  {
                      files.forEach((element) => {
                        localFiles.push(element);
                      })
                  }
                })
                localFiles.forEach((element, index) => {
                  var data = new FormData();
                  data.append("file", element);
                  data.append("item_id", item_id);
                  fetch("https://dev.thecanvasmart.com/awning-repair/api/fabrics", {
                    method: 'POST', 
                    body: data, 
                    headers:myHeaders
                  }).then(res => res.json())
                  .catch(error => console.error('Error:', error))
                  .then(response =>{
                    this.setState({ completed: (((index+1)*75)/localFiles.length)+25 });
                    console.log(response)
                    console.log((((index+1)*75)/localFiles.length)+25)
                    if((((index+1)*75)/localFiles.length)+25 == 100){
                      this.setState({ 
                        name: '',
                        email: '',
                        company: '',
                        phone: "",
                        city: '',
                        state: '',
                        zip: '',
                        awnings: [],
                        sendFiles: [],
                        shippingAddress: '',
                        openAfterDone: true,
                        loading: false,
                      });
                    }
                  });
                })
            
            }
          })
          
          
      }
      
      
      
    };
    
    //----------------------------
    handleAddToCart = () => {
    
    let awningArray = [
      this.state.framing, //0
      this.state.widthInch, //1
      this.state.drop, //2
      this.state.projection, //3
      this.state.valanceD, //4
      this.state.valance, //5
      this.state.valanceDim, //6
      this.state.selectedValanceType, //7
      this.state.selectedFabric, //8
      this.state.selectedFabricSrc, //9
      this.state.quantityItem, //10
      this.state.total, //11
      Date.now(), //12
      this.state.panels //13
    ];
    
    this.props.handleAwningArray(awningArray);
    this.setState({ 
      framing: 0,
      hasValance: true,
      quantityItem: 1,
      widthInch: "",
      panels: 0,
      drop: "",
      valanceD: "",
      valanceDim: "",
      selectedFabric: "",
      selectedFabricSrc: "",
      valance: 0,
      selectedValanceType: 1,
      projection: "",
      total: 0,
    });
    
  };
    //----------------------------
    handleFilesArray = (filesR) =>{
      console.log(filesR)
      this.setState({
        sendFiles: filesR,
      });
    };
    //---------------------------------
    handleAwningDelete = id => {
        this.setState(state => {
          const awnings = state.awnings.filter((item, j) => id !== j);
          const sendFiles = state.sendFiles.filter((item, j) => id !== j);
    
          return {
            awnings,
            sendFiles,
          };
        });    
    }
    //------
     handleChangeFabric = src => event => {
    this.setState({
        selectedFabric : event.target.value,
        selectedFabricSrc: src,
      });
      
  };
    
    render(){
      
        return(
            // <CreateRequestLayout {...this.state} handleChange={this.handleChange} DetailsCreateRequestLayout={DetailsCreateRequestLayout} handleClickSave={this.handleClickSave} handleAwningArray={this.handleAwningArray} handleAwningDelete={this.handleAwningDelete} handleFilesArray={this.handleFilesArray} handleCloseAfterDone={this.handleCloseAfterDone}/>
            
            <MainStepper  handleChange={this.handleChange}  handleFilesArray={this.handleFilesArray}  handleChangeFabric={this.handleChangeFabric} handleToogleChange={this.handleToogleChange} handleAddToCart={this.handleAddToCart} {...this.state }/>
        )
    }
}
export default CreateRequest