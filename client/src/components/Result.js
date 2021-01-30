import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

const Result = ({ match: { params: { id } } }) => {
    const [result, setResult] = useState([]);
    const count = result.reduce((acc) => acc + 1, 0);

    const resultSearched = (i) => {
        axios.get(`http://localhost:5000/search/${id}`)
            .then((res) => {
                console.log('res.data :>> ', res.data);
                setResult(res.data);
            })
            .catch((err) => {
                console.log('ERR: ', err);
            })
    }

    useEffect(() => {
        resultSearched();
    }, [id]);


    if (result.length) return (
        <div className='search-rst'>
            <h1>{count} results for "{id}"</h1>
            <div className="real-rs">
                {
                    result.map((product, i) => {
                        return <div key={i}>
                            <Link to={`/product/${product.id}`}>
                                <div className="cs" >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxyNuxOaTyWrmMetxV9omtQiqxZBWPzVHuQ&usqp=CAU" alt={`${product.name}`} />
                                    <h2>{product.name}</h2>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
    return (
        <div className="search-rs">
            <h2>Sorry, we couldn't find any results for "{id}"</h2>
            <h3>Try adjusting your search. Here are some ideas:</h3>
            <li>Make sure all words are spelled correctly</li>
            <li>Try different search terms</li>
            <li>Try more general search terms</li>
        </div>
    )
}

export default Result


