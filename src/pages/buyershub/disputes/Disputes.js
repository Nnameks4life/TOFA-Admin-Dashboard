import React, { useEffect, useState } from "react";
// import { useFetch } from '../../../useFetch'
import { axios } from "../../components/baseUrl";
import { applicantDatatabless } from "./DummyData";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
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
      setViewDisputes(response.data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    //initialize datatable
    $(document).ready(function() {
      setTimeout(function() {
        $("#example").DataTable();
      }, 1000);
    });
  }, []);

  return (
    <>
      {/* <!-- main wrapper --> */}
      <div className="dashboard-main-wrapper">
        <Navbar />
        <Sidebar />
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
                              <th className="text-center">Action</th>
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

                                  <td>
                                    {/* <button
                                      onClick={(e) => showDetails(item.id)}
                                      type="button"
                                      className="btn btn-primary" 
                                    >
                                      view
                                    </button> */}
                                    <div className="text-center">
                                    <button
                                      onClick={(e) => showDetails(item.id)}
                                      type="button"
                                      className="btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal"
                                    >
                                      view
                                    </button>
                                    </div>

                                    <div
                                      className="modal fade modal-width"
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
                                              TOFA Dispute Pipeline
                                            </h5>
                                            <button
                                              type="button"
                                              className="btn-close text-danger"
                                              data-bs-dismiss="modal"
                                              aria-label="Close"
                                             
                                            ></button>
                                          </div>
                                          
                                          <div className="modal-body px-2">
                                            <label>
                                              Customer Name:{" "}
                                            </label>
                                            <br />
                                            <p>Erhun Abbe</p>
                                          </div>
                                          <div className="modal-body px-2">
                                            <label>Date: </label>
                                            <p>
                                              Tuesday, November 30, 2021 2:00:19
                                              PM
                                            </p>
                                          </div>

                                          <div className=" modal-bodyb px-2">
                                            <label>Subject:</label>
                                            <p>Pending reversed money </p>
                                          </div>
                                          <div className="modal-body px-2">
                                            <label>Complaint:</label>
                                            <p>
                                              Commodo eget a et dignissim
                                              dignissim morbi vitae, mi. Mi
                                              aliquam sit ultrices enim cursus.
                                              Leo sapien, pretium duis est eu
                                              volutpat interdum eu non. Odio
                                              eget nullam elit laoreet. Libero
                                              at felis nam at orci venenatis
                                              rutrum nunc. Etiam mattis ornare
                                              pellentesque iaculis enim. Felis
                                              eu non in aliquam egestas
                                              placerat. Eget maecenas ornare
                                              venenatis lacus nunc{" "}
                                            </p>
                                          </div>

                                         
                                          <div className="modal-footer">
                                            <button
                                              type="button"
                                              className="btn btn-dark"
                                              data-bs-dismiss="modal"
                                            >
                                              Close
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
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
