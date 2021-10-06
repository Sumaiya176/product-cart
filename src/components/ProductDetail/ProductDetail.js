import axios from 'axios';
import React, { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {productDetails, removeProducts} from '../../redux/actions/actions'
import { useParams } from 'react-router';

const ProductDetail = () => {
    const p = useSelector((state) => state.product );
    const { productId} = useParams();
    const dispatch = useDispatch();

    const singleProduct = async () => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log(err);
        })
        dispatch(productDetails(response.data))
    }

    useEffect(() => {
        if(productId && productId !=="") singleProduct();
        return () => {
            dispatch(removeProducts());
        }
    }, [productId]);

    return (
        <div>
            <div className="col-md-3 card0">   
                   <div className="card1">
                   <img className="img" src={p.image} alt="" srcset="" />
                    <h6 className="mt-4 ms-2">{p.title}</h6>
                    <button className="btn mt-3 ms-5 ps-5 btn-primary">Details</button>
                   </div>
                    </div>
        </div>
    );
};

export default ProductDetail;