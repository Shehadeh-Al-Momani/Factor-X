import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import './Product.css';

const Product = ({ match: { params: { id } } }) => {
    const [oneProduct, setProduct] = useState({});
    const { category, created_at, delivery, description, img_url, price, newprice, product, quantity, seller } = oneProduct;
    const getProduct = () => {
        axios
            .get(`http://localhost:5000/product/${id}`)
            .then((res) => {
                setProduct(...res.data)
            })
            .catch((err) => {
                console.log('ERR: ', err);
            });
    };

    useEffect(() => {
        getProduct()
    }, [id])

    return (
        <div className="super_container">
            <div className="single_product">
                <div className="container-fluid" style={{ backgroundColor: '#fff', padding: '11px' }}>
                    <div className="row">
                        <div className="col-lg-2 order-lg-1 order-2">
                            <ul className="image_list">
                                <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg" alt="" /></li>
                                <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_2.jpg"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_2.jpg" alt="" /></li>
                                <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_3.jpg"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_3.jpg" alt="" /></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 order-lg-2 order-1">
                            <div className="image_selected"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg" alt="" /></div>
                        </div>
                        <div className="col-lg-6 order-3">
                            <div className="product_description">
                                <div className="h3">{product} </div>
                                <div className="h6 text-capitalize">{seller}</div>
                                <hr className="singleline" />
                                <div className="h5">{category}</div>
                                <div>{description}</div>
                                <div> <span className="product_price">$ {newprice}</span> <strike className="product_discount"> <span style={{ color: 'black' }}>$ {price}</span></strike> </div>
                                <div> <span className="product_saved">You Saved:</span> <span style={{ color: 'black' }}>$ {price - newprice}</span></div>
                                <div>{new Date(created_at).getFullYear()}</div>
                                <hr className="singleline" />
                                <div> <span className="product_info">Factor X starts at $ 2. No Cost Factor X Available<span><br /> <span className="product_info">Warranty: 6 months warranty<span><br /> <span className="product_info">7 Days easy return policy<span><br /> <span className="product_info">7 Days easy return policy<span><br /> </span></span></span></span></span></span></span></span></div>
                                <hr className="singleline" />
                                <div className="btn btn-success"> Delivery $ {delivery}</div>
                                <div className="row">
                                    <div className="col-xs-6"> <button type="button" className="btn btn-primary shop-button">Add to Cart</button> <button type="button" className="btn btn-success shop-button">Buy Now</button>
                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



 export default Product

 