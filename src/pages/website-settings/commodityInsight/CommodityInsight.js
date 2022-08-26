import React, {  useEffect} from "react";
// import  { useReactToPrint } from 'react-to-print';
// import { useFetch } from "../../../useFetch";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import {datatabless} from './DummyData';
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import 'jquery/dist/jquery.min.js';
 
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 



const CommodityInsight = () => {
//   const { error, loading, data } = useFetch();
//   const [totalItems, setTotalItems] = useState(0)
//   const [currentPage, setCurrentPage] = useState()
//   const ITEMS_PER_PAGE = 50






useEffect(()=>{
    //initialize datatable
$(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable();
     } ,1000);
});
},[])


  return (
    <div>
      <>
        {/* <!-- main wrapper --> */}
        <div className="dashboard-main-wrapper">
          {/* <!-- navbar --> */}
          <Navbar />
          {/* <!-- end navbar --> */}

          {/* <!-- left sidebar --> */}
          <Sidebar />
          {/* <!-- end left sidebar --> */}

          {/* <!-- wrapper  --> */}
          <div className="dashboard-wrapper">
            <div className="container-fluid dashboard-content">
              {/* <!-- pageheader --> */}
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="page-header" style={{ textAlign: "left" }}>
                    <h2 className="pageheader-title">Commodities</h2>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                  align="right"
                >
                  <a href="/newcommodity" className="btn btn-dark">
                    New Commodity
                  </a>
                </div>
              </div>
              {/* <!-- end pageheader --> */}
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="card">
                    <h4
                      className="card-header font-bold"
                      style={{ textAlign: "left" }}
                    >
                      All Commodities
                    </h4>
                
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="card">
                    <div className="card-header" style={{ textAlign: "left" }}>
                      <h5 className="mb-0">
                        Data Tables - Print, Excel, CSV, PDF Buttons
                      </h5>
                      <p>
                        This example shows DataTables and the Buttons extension
                        being used with the Bootstrap 4 framework providing the
                        styling.
                      </p>
                    </div>
                    <div className="d-flex mx-2">
                        {/* <button className="mx-2">Excel</button> */}
                        <button>Copy</button>
                        <button className="mx-2">PDF</button>
                        <ReactHTMLTableToExcel
                            id="test-table-xls-button"
                            className="download-table-xls-button"
                            table="table-to-xls"
                            filename="tablexls"
                            sheet="tablexls"
                            buttonText="Excel"
                        />
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                          
                          <div className="container">
                        <table
                         id="example"
                          className="table table-hover table-bordered"
                          style={{ width: "100%", textAlign: "left" }}
                        >
                          <thead>
                            <tr>
                                <th>ID</th>
                              <th>Commodity Name</th>
                              <th>Country</th>
                              <th>Price</th>
                              <th>Origin</th>
                              <th>Specification</th>
                              <th>Description</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                         { datatabless.map((item) => {
                         return (
                      
                              <tr>
                                  <td>{item.id}</td>
                                  <td>{item.commodityname}</td>
                                  <td>{item.country}</td>
                                  <td>{item.price}</td>
                                  <td>{item.origin}</td>
                                  <td>{item.specification}</td>
                                  <td>{item.description}</td>
                                  <td>{item.status}</td>
                                
                              </tr>
                        
                          )
                        })}
                           
                           </tbody>
                        </table>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- footer --> */}
            <div className="footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    Copyright © 2018 Concept. All rights reserved. Dashboard by{" "}
                    <a href="https://colorlib.com/wp/">Colorlib</a>.
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
            </div>
            {/* <!-- end footer --> */}
          </div>
          {/* <!-- end main wrapper --> */}
        </div>
        {/* <!-- end main wrapper --> */}

        
      </>
    </div>
  );
};

export default CommodityInsight;
