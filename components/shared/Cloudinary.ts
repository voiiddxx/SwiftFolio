
import axios from 'axios';

const uploadDataonCloudinary = async (datatoUpload : any) => {
    try {
        if(datatoUpload!=null){
          let formdata = new FormData();
          formdata.append("file" , datatoUpload[0]);
          formdata.append("upload_preset" , "pdrcp1le");
          const response = await axios.post("https://api.cloudinary.com/v1_1/dwkmxsthr/upload" , formdata ,);
          return response.data.url;
        }
        else{
            throw new Error("No File selected");
        }
    } catch (error) {
        console.log(error);
        
    }
}


export default uploadDataonCloudinary