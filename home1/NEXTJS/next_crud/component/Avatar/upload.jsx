import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import React,{useState} from 'react'
import "./upload.module.css"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getAvatar } from '../../Redux/actions/Action';
 
  function getBase64(dispatch,img, callback) {
  // const dispatch=useDispatch();
 
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    callback(reader.result)
   
let string=reader.result
  axios.post('http://localhost:5000/user/upload',{data:string})
.then(res=>{
  console.log(res)
  axios.get('http://localhost:5000/user/get')
  .then(res=>{
    console.log(res.data,"from useEfeect")
     dispatch(getAvatar(string,res.data[0]))
  })
  .catch((err) => console.log(err));
}) 
.catch((err) => console.log(err));

  });

  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

 
const UploadImage=()=>{
const dispatch=useDispatch()
  
 const [loading, setLoading] = useState(false)
 const [image, setImage] = useState(null)
 const handleChange = info => {
  if (info.file.status === 'uploading') {
    setLoading(true)
    return;
  }
  if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(dispatch,info.file.originFileObj, imageUrl =>{
      setLoading(false)
      setImage(imageUrl)
    }     
    );
  }
};

const uploadButton = (
  <div>
    {loading ? <LoadingOutlined /> : <PlusOutlined />}
    <div className="ant-upload-text">Upload</div>
  </div>
);
const  imageUrl  = image;
 return (
  <Upload
  name="avatar"
  listType="picture-card"
  className="avatar-uploader"
  showUploadList={false}
  beforeUpload={beforeUpload}
  onChange={handleChange}
>
  {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
</Upload>
 
      )


}
export default UploadImage