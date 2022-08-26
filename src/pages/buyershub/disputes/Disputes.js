import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Disputes = () => {

  return (
    <>
      {/* <!-- main wrapper --> */}
      <div className="dashboard-main-wrapper">
        {/* <!-- navbar --> */}
        <Navbar />

        {/* <!-- left sidebar --> */}
        <Sidebar />

        {/* <!-- wrapper  --> */}
        <div className="dashboard-wrapper">
          <div className="container-fluid dashboard-content">
            {/* <!-- pageheader --> */}
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="page-header" style={{textAlign:'left'}}>
                  <h2 className="pageheader-title">
                   Disputes
                  </h2>
                </div>
              </div>
              {/* <div
                className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                align="right"
                
              >
                <a href="/editfaq" className="btn btn-dark">
                  New FAQ
                </a>
              </div> */}
            </div>
            {/* <!-- end pageheader --> */}
            <div className="row" style={{textAlign:'left'}}>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card">
                  <h5 className="card-header font-bold" style={{textAlign:'left'}}>All Disputes</h5>
                  <div className="card-body">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Disputes</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>I am yet to receive payment from supply made  </td>
                         
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>I have some outstanding invoices that are yet to be paid</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>
   
      </div>
     
    </>
  );
};

export default Disputes;
