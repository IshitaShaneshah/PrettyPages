import React, { useEffect, useState } from 'react'
import "../CSS/Catalog.css"
import Product from './Product'
import axios from 'axios'
const Catalog = () => {
    const [bookData, setBookData] = useState([])
    const getData = async()=>{
        const response = await axios.get("http://localhost:3100/api/v2/bookAdd")
        setBookData(response);
        console.log(bookData)
    }
    useEffect(()=>{
        getData();
    })
  return (
    <div className='catalog'>
        <div className='container'>
            <h2 className='catalog-title'>Our Products</h2>
            <div className='row justify-content-center'>
                <div className='col-xl-3 col-lg-4 col-sm-6'>
                    <Product/>
                </div>
                <div className='col-xl-3 col-lg-4 col-sm-6'>
                    <Product/>
                </div>
                <div className='col-xl-3 col-lg-4 col-sm-6'>
                    <Product/>
                </div>
                <div className='col-xl-3 col-lg-4 col-sm-6'>
                    <Product/>
                </div>
                <div className='col-xl-3 col-lg-4 col-sm-6'>
                    <Product/>
                </div>
                <div className='col-xl-3 col-lg-4 col-sm-6'>
                    <Product/>
                </div>
                <div className='col-xl-3 col-lg-4 col-sm-6'>
                    <Product/>
                </div>
                <div className='col-xl-3 col-lg-4 col-sm-6'>
                    <Product/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Catalog