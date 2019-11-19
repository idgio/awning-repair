import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
 
class DropzoneAreaExample extends Component{
  constructor(props){
    super(props);
  }
  
  
  render(){
    const {handleChangeFiles, sendFiles } = this.props;
    return (
      <DropzoneArea 
          onChange={handleChangeFiles}
          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
          filesLimit={8}
          maxFileSize={700000}
          initialFiles={['https://trello-attachments.s3.amazonaws.com/5be5e81c7874d959cc052c0b/5dcaed3b61499439c61063a0/552248cbff93884e3a76eff161c27c7a/Scallops.jpg']}
          showPreviewsInDropzone = {false}
          showPreviews
          
      />
    )  
  }
} 
 
export default DropzoneAreaExample;