import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
 
class DropzoneAreaExample extends Component{
  constructor(props){
    super(props);
  }
  
  
  render(){
    const {handleChangeFiles } = this.props;
    return (
      <DropzoneArea 
          onChange={handleChangeFiles}
          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
      />
    )  
  }
} 
 
export default DropzoneAreaExample;