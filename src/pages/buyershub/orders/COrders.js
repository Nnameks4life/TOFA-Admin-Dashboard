import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const COrders = () => {

 
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
              <h2> Create Order</h2>
              {/* <Link to="/commodityInsight">
                <button className="btn btn-primary m-3">Show Commodity</button>
              </Link> */}
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" align="right">
                        <a href="/orders" className="btn btn-dark">Show Order</a>
                    </div>
            </div>

            <div className="row" style={{textAlign:'left'}}>
              <div className="col-4 mb-3">
                <label className="form-label">Product Name:</label>
                <input
                 
                  name="productName"
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  
                />
              </div>
              <div className="col-4 mb-3">
                <label className="form-label">Payment Term</label>
                <input
                  
                  name="price"
                  type="number"
                  className="form-control"
                  aria-describedby="emailHelp"
                
                />
              </div>
              <div className="col-4 mb-3">
                <label className="form-label">Quantity</label>
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
                <label className="form-label">Port</label>
                <input
                  name="specification"
                 
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  
                />
              </div>
              <div className="col-4  mb-3">
                <label className="form-label">Shipping</label>
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

            <div className="mb-3" style={{textAlign:'left'}}>
              <label className="form-label">Product Requirement</label>
              <textarea
                name="description"
               
                type="text"
                className="form-control"
                
              />
            </div>
            {/* <div className="mb-3" style={{textAlign:'left'}}>
            
              <label className="form-label mx-2">Upload Product</label>
              <input
                type="file"
                id="img"
                name="fileName"
                accept="image/*"
                
              />
            </div> */}

            <div style={{textAlign:'left'}} >
            <button className="btn btn-dark" >Submit</button>
            </div>
          </form>
           
            </div>

           

        </div>
        {/* <!-- end main wrapper --> */}

    </div>

    </>
  )
}

export default COrders;