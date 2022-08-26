import React from 'react'
// import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

const NewCommodity = () => {
  
 
   
  return (
        <>
    {/* <!-- main wrapper --> */}
    <div className="dashboard-main-wrapper">
        {/* <!-- navbar --> */}
       <Navbar/>

        {/* <!-- left sidebar --> */}
        <Sidebar/>
        


        {/* <!-- wrapper  --> */}
        <div className="dashboard-wrapper">
        <div>

        <form className="mx-5 my-5">
            <div className="d-flex justify-content-between">
              <h2> Create Commodity Insight</h2>
              {/* <Link to="/commodityInsight">
                <button className="btn btn-primary m-3">Show Commodity</button>
              </Link> */}
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" align="right">
                        <a href="/commodityInsight" className="btn btn-dark">Show Commodity</a>
                    </div>
            </div>

            <div className="row" style={{textAlign:'left'}}>
              <div className="col-4 mb-3">
                <label className="form-label">Commodity Name:</label>
                <input
                 
                  name="productName"
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  
                />
              </div>
              <div className="col-4 mb-3">
                <label className="form-label">Price</label>
                <input
                  
                  name="price"
                  type="number"
                  className="form-control"
                  aria-describedby="emailHelp"
                
                />
              </div>
              <div className="col-4 mb-3">
                <label className="form-label">Origin</label>
                <input
               
                  name="currency"
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  
                />
              </div>
            </div>

            <div className="row" style={{textAlign:'left'}}>
              <div className="col-4 mb-3">
                <label className="form-label">Specification</label>
                <input
                  name="specification"
                 
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  
                />
              </div>
              <div className="col-4  mb-3">
                <label className="form-label">Status</label>
                <input
                  name="status"
                 
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                 
                />
              </div>
              <div className="col-4 mb-3">
                <label className="form-label">Country</label>
                <input
                  name="country"
              
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
               
                type="text"
                className="form-control"
                
              />
            </div>
            <div className="mb-3" style={{textAlign:'left'}}>
            {/* { file && <div>
               
            <img alt="not found" width={"250px"} src={URL.createObjectURL(file)} />
            </div>
          } */}
              <label className="form-label mx-2">Upload Product</label>
              <input
                type="file"
                id="img"
                name="fileName"
                accept="image/*"
                
              />
            </div>

            <div style={{textAlign:'start'}}>
            <button className="btn btn-dark" >Submit</button>
            </div>
          </form>
           
            </div>

            {/* <!-- footer --> */}
            {/* <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            Copyright © 2018 Concept. All rights reserved. Dashboard by <a href="https://colorlib.com/wp/">Colorlib</a>.
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="text-md-right footer-links d-none d-sm-block">
                                <a href="jav">About</a>
                                <a href="jav">Support</a>
                                <a href="jav">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  */}
            {/* <!-- end footer --> */}

        </div>
        {/* <!-- end main wrapper --> */}

    </div>
    {/* <!-- end main wrapper --> */}


    
  
</>
    
  )
}

export default NewCommodity;