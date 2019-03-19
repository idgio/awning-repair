import React, { Component } from 'react'
import DetailsCreateRequestLayout from '../components/detailsCreateRequestLayout'


class DetailsCreateRequest extends Component {
    state = {
    open: false,
    openInner: false,
    files: [],
    imageTitle: "",
    imageSrc: "",
    selectedFabric: "",
    selectedFabricSrc: "",
    width: "",
    drop: "",
    valance: "",
    projection: "",
    quantity: "",
    lacebar: "",
    framing: 10,
      };
  //----------------------------------------
  handleClickOpenInner = (image,e) => {
    this.setState({
      openInner: true,
      imageSrc: image.src,
      imageTitle: image.title,
    });
  };
  
  handleCloseInner = value => {
    this.setState({  openInner: false });
  };
  //----------------------------
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleSaveandClose = () => {
    this.setState({ open: false });
  };
  handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
      
   };
  handleChangeFabric = src => event => {
    this.setState({
        selectedFabric : event.target.value,
        selectedFabricSrc: src,
      });
      
  };
  handleChangeFiles = (filesR) =>{
    this.setState({
      files: filesR,
    });
    console.log(filesR)
  };
   
    render(){
        return(
            <DetailsCreateRequestLayout {...this.state} onClose={this.handleClose} onOpen={this.handleClickOpen} handleChange={this.handleChange} handleClickOpenInner={this.handleClickOpenInner} handleCloseInner={this.handleCloseInner} handleChangeFabric={this.handleChangeFabric} handleSaveandClose={this.handleSaveandClose} handleChangeFiles={this.handleChangeFiles} />
        )
    }
}
export default DetailsCreateRequest