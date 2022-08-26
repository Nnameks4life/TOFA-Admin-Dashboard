import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Inquiries = () => {

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
                   Inquiries
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
                  <h5 className="card-header font-bold" style={{textAlign:'left'}}>All Inquiries</h5>
                  <div className="card-body">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Inquiries</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>I would like the payment document that are required for shipment </td>
                         
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Can I make payment in installments. Looking forward to your feedback.</td>
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

export default Inquiries;
