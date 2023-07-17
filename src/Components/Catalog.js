import React from 'react'
import "../CSS/Catalog.css"
import Product from './Product'
const Catalog = () => {
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