import React, { useState, useEffect } from "react";
import { Card, Col, Button, Typography } from "antd";
import { Select } from "antd";
import {
  ShoppingCartOutlined,
  StarOutlined,
  CloseCircleOutlined,
  CloseCircleFilled,
  StarFilled,
} from "@ant-design/icons";

import { useSelector, useDispatch } from "react-redux";
import {
  addSelectProduct,
  deleteSelectProduct,
  makePrimaryProduct,
} from "../../Redux/actions/product_action";

const { Option } = Select;
const { Meta } = Card;
const { Text, Link } = Typography;

const CardComponent = (props) => {
  const { datas, product } = props;
  console.log("product", product);

  const [loading, setLoading] = useState(true);
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products) || datas;

  const handleProductByBrand = (event) => {
    console.log(event);
    setBrand(event);
    setLoading(false);
  };

  const handleProductByName = (event) => {
    console.log("Event",event)
    setName(event);
    let cardData = datas.find(
      (data) => data.Name === event && data.Brand == brand
    );
console.log("CardDaata",cardData)
    dispatch(addSelectProduct(cardData));
    setBrand(null);
    setName(null);
  };

  const handleProductRemove = (id) => {
    console.log(id);
    dispatch(deleteSelectProduct(id));
  };

  const MakePrimaryProduct = () => {
    dispatch(makePrimaryProduct(product));
  };

  const BrandArray = [...new Set(datas.map((data, index) => data.Brand))];
  const BrandOption = BrandArray.map((name, index) => (
    <Option value={name} key={index}>
      {name}
    </Option>
  ));

  console.log("BrandOption",BrandArray,BrandOption,products ,datas)
  const ProductNameArray = products?.map((item) => item.Name);

  const NameArray = datas
    .filter((data) => {
      return data.Brand == brand;
    })
    .map((data) => data.Name);
console.log("hii NameArray",datas
.filter((data) => {
  return data.Brand == brand;
}),NameArray,ProductNameArray);

  const ProductNameOption = NameArray.filter((data) => {
    if (ProductNameArray.indexOf(data) == -1) {
      return data;
    }
  });
console.log("hii2",ProductNameOption)
  const NameOption = ProductNameOption?.map((name, index) => (
    <Option value={name} key={index}>
      {name}
    </Option>
  ));

  return (
    <>
      {product !== undefined ? (
        <Col span={5} className="cards">
          <Card
            headStyle={{}}
            key={0}
            extra={[
              <Button
                className="button"
                style={{
                  backgroundColor: "#f0f0f0",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  fontSize: "1.5rem",
                  color: "#000000",
                  border: "none",
                  
                  
                }}
                size="large"
                icon={
                  products.indexOf(product) == 0 ? (
                    <StarFilled />
                  ) : (
                    <StarOutlined />
                  )
                }
                onClick={MakePrimaryProduct}
              />,
              <Button
                className="button"
                style={{
                  backgroundColor: "#f0f0f0",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  fontSize: "1.2rem",
                  color: "#000000",
                  border: "none",
                }}
                size="large"
                shape="circle"
                icon={<CloseCircleFilled />}
                onClick={() => handleProductRemove(product.id)}
              />,
            ]}
            bordered={true}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                style={{ height: 160 }}
                src={product.image || "./images/3.jpeg"}
              />
            }
            actions={[
              <ShoppingCartOutlined
                key="shopping"
                style={{
                  color: "white",
                  padding: 10,
                  alignContent: "center",
                  background: "#001529",
                }}
              >
                Add
              </ShoppingCartOutlined>,
            ]}
          >
            <Text style={{ width: 300 }} strong>
              <h5>{product.Name}</h5>
              <p>{product.Brand} </p>
            </Text>
          </Card>
        </Col>
      ) : (
        // ))
        <Col span={5} className="cards">
          <Card title="" style={{ width: 300 }}>
            <p>
              <div
                className="Space"
                style={{ width: 250, height: 160, backgroundColor: "#D0D0D0" }}
              >
                {" "}
              </div>
            </p>

            <p>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Choose Brand"
                optionFilterProp="children"
                onChange={handleProductByBrand}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                value={brand || "Choose Brand"}
              >
                {BrandOption}
              </Select>
            </p>
            <p>
              <Select
                showSearch
                loading={loading}
                style={{ width: 200 }}
                placeholder="Choose Name"
                optionFilterProp="children"
                onChange={handleProductByName}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                value={name || "Choose Name"}
              >
                {NameOption}
              </Select>
            </p>
          </Card>
        </Col>
      )}
    </>
  );
};

export default CardComponent;
