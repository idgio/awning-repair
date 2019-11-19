import React, { Component } from 'react'
import DetailsCreateRequestLayout from '../components/detailsCreateRequestLayout'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

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
    selectedValanceType: 0,
    quantity: "",
    lacebar: "",
    disable: false,
    framing: 10
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
    this.setState({ disable: true });
    let awningArray = [this.state.width, this.state.drop, this.state.valance, this.state.projection, this.state.quantity, this.state.lacebar, this.state.framing, this.state.files, this.state.selectedFabric, this.state.selectedFabricSrc, Date.now()];
    
    this.props.handleAwningArray(awningArray);
    this.props.handleFilesArray(this.state.files);
    this.setState({ 
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
      disable: false,
      framing: 10, 
    });
    
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
  };
   
    render(){
        
        return(
            <DetailsCreateRequestLayout {...this.state} onClose={this.handleClose} onOpen={this.handleClickOpen} handleChange={this.handleChange} handleClickOpenInner={this.handleClickOpenInner} handleCloseInner={this.handleCloseInner} handleChangeFabric={this.handleChangeFabric} handleSaveandClose={this.handleSaveandClose} handleChangeFiles={this.handleChangeFiles} cols={this.props.width} />
        )
    }
}
export default withWidth()(DetailsCreateRequest)