import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import ssss from './pictures/android.jpg'
const Home = () => {
    const [products, setProducts] = useState([]);

    const getAllProducts = () => {
        axios
            .get('http://localhost:5000/products')
            .then((res) => {
                console.log('res.data :>> ', res.data);
                setProducts(res.data)
            })
            .catch((err) => {
                console.log('ERR: ', err);
            });
    };

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
            <div>
                <div className="container-fluid  pt-1">
                    <div className="row align-items-center">
                        {
                            products.map((e, i) => {
                                let date = new Date(e.created_at).getFullYear();
                                return <div className="col-md-3" key={i} >
                                    <Link className='text-decoration-none text-dark' to={`/product/${e.id}`}>
                                        <div className="card border pt-3 bg-light" >
                                            <div> <img className="card-img-top" src={ssss} alt="Card image" /></div>
                                            <div className="card-body">
                                                <div> <div className="d-inline-block text-truncate text-dark ">$</div> <span class="h6">{e.price}</span></div>
                                                <div className="h6 text-capitalize">{e.product}</div>
                                                <div className="small text-capitalize">{e.seller}</div>
                                                <div className="small text-capitalize">{e.category}</div>
                                                <div className="small">{date}</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
    )
}

export default Home
