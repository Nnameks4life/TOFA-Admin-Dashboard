import React, {useEffect, useState } from "react";
// import { useFetch } from '../../../useFetch'
import { axios } from '../../components/baseUrl'
import {applicantDatatabless} from './DummyData';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Disputes = () => {


  const [disputes, setDisputes] = useState([]);
  const [viewDisputes, setViewDisputes] = useState([]);


  const getData = async () => {
    try {
      axios.get("/dispute").then((response) => {
        console.log(response.data);
        setDisputes(response.data.data);
      });
    } catch (error) {
      console.log(error.response.data.erros);
    }
  };

  //  const {data, loading, error} = useFetch("/order")

  //  if (loading) return <h1>LOADING ....</h1>

  //  if (error) console.log(error)

  const showDetails = (disputeID) => { 
    axios.get(`/dispute/${disputeID}`).then((response) => {
      setViewDisputes(response.data.data)
    });
};

  useEffect(() => {
    getData()
  }, [])

  useEffect(()=>{
    //initialize datatable
$(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable();
     } ,1000);
});
},[])

  return (
    <>
      {/* <!-- main wrapper --> */}
      <div className="dashboard-main-wrapper">
        <Navbar/>
        <Sidebar/>
        {/* <!-- wrapper  --> */}
        <div className="dashboard-wrapper">
          <div className="container-fluid dashboard-content">
            {/* <!-- pageheader --> */}
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="page-header" style={{ textAlign: "left" }}>
                  <h2 className="pageheader-title">DISPUTES</h2>
                </div>
              </div>
            </div>
            {/* <!-- end pageheader --> */}

            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card">
                  <div className="card-header" style={{ textAlign: "left" }}>
                    <h5 className="mb-0 font-bold">All Disputes</h5>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <div
                        id="example wrapper"
                        className="dataTables_wrapper dt_bootstrap4"
                      >
                        <div className="row">
                          <div
                            className="col-sm-12 md-6"
                            style={{ textAlign: "left" }}
                          >
                            <div className="dt-buttons my-3">
                              <button
                                className="btn btn-outline-light buttons-copy buttons-html5"
                                tabIndex="0"
                                aria-controls="example"
                                type="button"
                              >
                                <span>Copy</span>
                              </button>
                              <button
                                className="btn btn-outline-light buttons-excel buttons-html5"
                                tabIndex="0"
                                aria-controls="example"
                                type="button"
                              >
                                <span>Excel</span>
                              </button>
                              <button
                                className="btn btn-outline-light buttons-pdf buttons-html5"
                                tabIndex="0"
                                aria-controls="example"
                                type="button"
                              >
                                <span>PDF</span>
                              </button>
                              <button
                                className="btn btn-outline-light buttons-print"
                                tabIndex="0"
                                aria-controls="example"
                                type="button"
                              >
                                <span>Print</span>
                              </button>
                              <button
                                className="btn btn-outline-light buttons-collection dropdown-toggle buttons-colvis"
                                tabIndex="0"
                                aria-controls="example"
                                type="button"
                                aria-haspopup="true"
                              >
                                <span>Column Visibility</span>
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div className="container">
                        <table
                          id="example"
                          className="table table-hover table-bordered"
                          style={{ width: "100%", textAlign: "left" }}
                        >
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Full Name</th>
                              <th>Dispute</th>
                              <th>phoneNumber</th>
                              <th>Country</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {applicantDatatabless.map((item) => {
                              return (
                                <tr key={item.id}>
                                  <td>{item.id}</td>
                                  <td>{item.fullName}</td>
                                  <td>{item.country}</td>
                                  <td>{item.phoneNumber}</td>
                                  <td>{item.productTraded}</td>
                                  
                                 
                                  <td><button
                                      onClick={(e) => showDetails(item.id)}
                                      type="button"
                                      className="btn btn-primary" 
                                    >
                                      view
                                    </button>


                                    {/* <button
                                      onClick={(e) => showDetails(item.id)}
                                      type="button"
                                      className="btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal"
                                    >
                                      view
                                    </button>
                                   
                                  
                                    <div
                                      className="modal fade"
                                      id="exampleModal"
                                      tabIndex="-1"
                                      aria-labelledby="exampleModalLabel"
                                      aria-hidden="true"
                                    >
                                      <div className="modal-dialog">
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h5
                                              className="modal-title"
                                              id="exampleModalLabel"
                                            >
                                              Product Information
                                            </h5>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              data-bs-dismiss="modal"
                                              aria-label="Close"
                                            ></button>
                                          </div>
                                          <div align='right'>
                                       
                       
                                          </div>
                                          <div className="d-flex ">
                                          <div className="modal-body">Product Name: {viewProduct.productName}</div>
                                          <div className="modal-body">Category: {viewProduct.subCategory}</div>
                                          <div className="modal-body">Minimum Price: {viewProduct.minPricePerUnit}</div>
                                          </div>
                                          <div className="d-flex">
                                          <div className="modal-body">Maximum Price Per Unit: {viewProduct.maxPricePerUnit}</div>
                                          <div className="modal-body">Currency: {viewProduct.currency}</div>
                                          </div>
                                          <div className="d-flex">
                                          <div className="modal-body">Supply Capacity: {viewProduct.supplyCapacity}</div>
                                          <div className="modal-body">Minmum Duration: {viewProduct.minDuration}</div>
                                          </div>
                                          <div className="mx-auto">
                                          <div className="modal-body">Subcategory: {viewProduct.subCategory}</div>
                                          </div>
                                          <div className="modal-footer">
                                            <button
                                              type="button"
                                              className="btn btn-secondary"
                                              data-bs-dismiss="modal"
                                            >
                                              Close
                                            </button>
                                            
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                     */}
                                    
                                    
                                  </td>
                                  
                                </tr>
                              );
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
        </div>
        {/* <!-- end main wrapper --> */}
      </div>
    </>
  );
};

export default Disputes;
