import React, { useContext } from "react";
import {
  Card,
  CardInfo,
  GridLayout,
  Meta,
  ProductContainer,
  ProductImage,
} from "./Product.styled";
import AppContext from "../../Context";

const Product = () => {
  const { productList, loading, searchTerm, selectedOptions } =
    useContext(AppContext);

  const getPricingLabel = (option) => {
    if (option === 0) return "View Only";
    if (option === 1) return "Paid";
    if (option === 2) return "Free";
  };

  const filteredList = productList.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.creator.toLowerCase().includes(searchTerm.toLowerCase());

    const pricingLabel = getPricingLabel(item.pricingOption);

    const matchFilter =
      selectedOptions.length === 0 || selectedOptions.includes(pricingLabel);

    return matchSearch && matchFilter;
  });

  return (
    <ProductContainer>
      <GridLayout>
        {filteredList.map((item) => (
          <Card key={item.id}>
            <ProductImage src={item.imagePath} alt={item.title} />
            <CardInfo>
              <Meta>
                <div style={{color:"white", fontSize:"13px"}}>{item.title}</div>
                <div style={{color:"grey", fontSize:"13px"}}>{item.creator}</div>
              </Meta>
              <div style={{color:"white", fontSize:"17px", fontWeight:"500"}}>
                {getPricingLabel(item.pricingOption) === "View Only"
                  ? "View Only"
                  : getPricingLabel(item.pricingOption) === "Free"
                  ? "FREE"
                  : `$${item.price}`}
              </div>
            </CardInfo>
          </Card>
        ))}
      </GridLayout>
    </ProductContainer>
  );
};

export default Product;
