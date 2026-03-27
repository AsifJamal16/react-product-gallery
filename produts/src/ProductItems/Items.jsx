import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './items.css'
const Items = () => {
  const [productsItems, setProducts] = useState([]);
  useEffect(() => {
    userproducts();
  }, []);
  async function userproducts() {
    const url = "https://dummyjson.com/products";
    let response = await fetch(url);
    response = await response.json();
    setProducts(response.products);
    //console.log(productsItems);
  }
  return (
    <>
      <div className="Container">
        <h1 className="PageTitle">Ansari Product Shop</h1>
        <div className="userPortion">
          {productsItems.map((item) => (
            <div className="productCard" key={item.id}>


              <div className="leftSection">
                <img src={item.images[0]} className="proImg" alt="" />
                <h1>{item.title}</h1>
                <h2>{item.returnPolicy}</h2>
                <p>{item.description}</p>
                <p>Category:{item.category}</p>
                <p>Price:{item.price}</p>
                <p>Discount:{item.discountPercentage}%</p>
                <p>Rating:{item.rating} out of 5</p>
                <p>{item.brand}</p>
                <div className="warrantySection">
                  <p>{item.warrantyInformation}</p>
                  <p>{item.shippingInformation}</p>
                  <p>{item.availabilityStatus}</p>
                </div>
              </div>

              <div className="rightSection">
                <img src={item.thumbnail} alt="" />
                <div className="ratingSection">
                  {item.reviews ? (
                    item.reviews.map((review, index) => (
                      <div className="rev" key={index}>
                        <p>{review.rating}</p>
                        <p>{review.comment}</p>
                        <p>{review.date}</p>
                        <p>{review.reviewerName}</p>
                        <p>{review.reviewerEmail}</p>
                      </div>
                    ))
                  ) : (
                    <p>No reviews</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Items;
