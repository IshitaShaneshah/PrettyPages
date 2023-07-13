import React from 'react'
import "../CSS/Catalog.css"
import Product from './Product'
const Catalog = () => {
  return (
    <div className='catalog'>
        <div className='container'>
            <h2 className='catalog-title'>Our Products</h2>
            <div className='row'>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <Product/>
                </div>
                {/* <div className='col-lg-3 col-md-4 col-sm-6'>
                    <Product/>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <Product/>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <Product/>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <Product/>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <Product/>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <Product/>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <Product/>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Catalog