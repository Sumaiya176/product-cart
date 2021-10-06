import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setProducts} from '../../redux/actions/actions';
import './productList.css';
import {Link } from 'react-router-dom';

const ProductList = () => {
    const products = useSelector((state) => state.allProducts.products );
    const dispatch = useDispatch();
    
    const fetchProducts = async () => {
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log(err);
        })
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container">
        <div className="row justify-content-center">
            {
                products.map( p => {
                   return (
                   <div className="col-md-3 card0">
                       <Link to={`/product/${p.id}`}>
                   <div className="card1">
                   <img className="img" src={p.image} alt="" srcset="" />
                    <h6 className="mt-4 ms-2">{p.title}</h6>
                    <button className="btn mt-3 ms-5 ps-5 btn-primary">Details</button>
                   </div>
                   </Link>
                    </div>
                   )
                })
                
            }
           </div>
        </div>
    );
};

export default ProductList;