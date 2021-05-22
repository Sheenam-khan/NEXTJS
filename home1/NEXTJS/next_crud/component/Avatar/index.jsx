import React, { useState, useEffect } from "react";
import { Avatar, Layout, Button, Table, Typography, Card } from "antd";
import { Popover } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addAvatar,getAvatar } from "../../Redux/actions/Action";
import axios from "axios";

const { Header, Content } = Layout;
const ColorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];

const Autoset = () => {
  const [visible, setVisible] = useState(false);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(users);
  // const data = datas.map((employee, index) => {
  //   employee.key = index;
  //   return employee;
  // });

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/get")
      .then((res) => {
        console.log(res.data[0], "from index useEfeect");
        dispatch(getAvatar(res.data[0]));
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(data);

  // const changeUser = () => {
  //   console.log(user)
  //   const index = UserList.indexOf(user);
  //   setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
  //   setColor(
  //     index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0]
  //   );
  // };

  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (visible) => {
    setVisible({ visible });
  };

  let user = users.currentUserReducer || {};
  const content = (
    <Card hover size="default">
      <p>Name:{user.name}</p>
      <Button type="primary" onClick={hide}>
        close
      </Button>
    </Card>
  );

  console.log(user.image,"image")
  const avatarImage = <img src={user ? user.image?.data?.data: null}></img>;
  console.log("avatarImage",avatarImage)
  const blob=new Blob([avatarImage])
  var reader = new FileReader();
reader.onload = function(event){
   var base64 =   event.target.result
};
const result=reader.readAsDataURL(blob);
// function _arrayBufferToBase64( buffer ) {
//   var binary = '';
//   var bytes = new Uint8Array( buffer );
//   var len = bytes.byteLength;
//   for (var i = 0; i < len; i++) {
//      binary += String.fromCharCode( bytes[ i ] );
//   }
//   return window.btoa( binary );
// }
  const profile = <span>Profile</span>;
  return (
    <div className="ml-auto" style={{ marginLeft: "1200px" }}>
      <Popover
        content={content}
        title={profile}
        placement="bottomRight"
        //trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}
      >
        {/* <Avatar> */}
          {/* </Avatar> */}
      </Popover>
      {/* <img src={this.domSanitizer.bypassSecurityTrustUrl(‘data:image/jpg;base64, ‘ + btoa(String.fromCharCode(...new Uint8Array(avatarImage))))}/> */}
      hii
      <img src={result}/>
    </div>
  );
};

export default Autoset;
