import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import ssss from './pictures/android.jpg'

const CategoryItems = (props) => {
	const { match: { params: { id } } } = props
	const [category, setCategory] = useState([]);
	useEffect(() => {
		axios.get(`http://localhost:5000/categories/${id}`)
			.then((res) => {
				setCategory(res.data);
			})
			.catch((err) => {
				console.log('ERR: ', err);
			});
	}, [id]);
	return (
		<div className='cardss'>
			<div className='all-cardss'>{props.categoryName}</div>
			{
				category.map((e, i) => {
					return <div key={i}>
						<div className='cards' key={i}>
							<Link to={`/product/${e.id}`}>
								<img src={ssss} alt={`${e.name}`} />
								<h2>{e.name}</h2>
							</Link>
						</div>
					</div>
				})
			}
		</div>
	);
};

export default CategoryItems;
