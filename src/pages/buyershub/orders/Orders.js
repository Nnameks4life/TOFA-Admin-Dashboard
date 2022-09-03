import React, { useState, useEffect } from "react";
// import { useFetch } from '../../../useFetch'
// import { axios } from '../../components/baseUrl'
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

import { datatabless } from "../../website-settings/commodityInsight/DummyData";
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import "jquery/dist/jquery.min.js";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { axios } from "../../components/baseUrl";

const Orders = () => {
  const [order, setOrder] = useState([]);
  const [viewOrder, setViewOrder] = useState([]);

  const getData = async () => {
    try {
      axios.get("/order").then((response) => {
        console.log(response.data);
        setOrder(response.data.data);
      });
    } catch (error) {
      console.log(error.response.data.erros);
    }
  };
  // const [search, setSearch] = useState();

  useEffect(() => {
    //initialize datatable
    $(document).ready(function() {
      setTimeout(function() {
        $("#example").DataTable();
      }, 1000);
    });
  }, []);

  const [status, setStatus] = useState("");

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  // const handleDelete = (orderID) => {
  //   axios.delete(`/order/${orderID}`).then((response) => {
  //     setViewOrder(response.data.data)
  //   });
  // };

  const showDetails = (orderID) => {
    axios.get(`/order/${orderID}`).then((response) => {
      setViewOrder(response.data.data);
    });
  };

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
                  <h2 className="pageheader-title">Order Overview</h2>
                </div>
              </div>

              <div
                className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                align="right"
              >
                <a href="/corders" className="btn btn-dark">
                  Create Order
                </a>
              </div>
            </div>
            {/* <!-- end pageheader --> */}
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                {/* <!-- widgets   --> */}
                <div className="row">
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-inline-block">
                          <h5 className="text-muted">Total Orders</h5>
                          <h2 className="mb-0"> 10,28,056</h2>
                        </div>
                        <div
                          className="float-right icon-circle-medium  icon-box-lg  bg-info-light mb-2"
                          style={{ textAlign: "center" }}
                        >
                          <i className="fa fa-eye fa-fw fa-sm text-info justify-content-center mt-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-inline-block">
                          <h5 className="text-muted">Total Transactions</h5>
                          <h2 className="mb-0"> $149.00</h2>
                        </div>
                        <div
                          className="float-right icon-circle-medium  icon-box-lg  bg-brand-light mb-2"
                          style={{ textAlign: "center" }}
                        >
                          <i className="fa fa-money-bill-alt fa-fw fa-sm text-brand mt-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-inline-block">
                          <h5 className="text-muted">Total Buyers</h5>
                          <h2 className="mb-0"> 24,763</h2>
                        </div>
                        <div
                          className="float-right icon-circle-medium  icon-box-lg  bg-primary-light mb-2"
                          style={{ textAlign: "center" }}
                        >
                          <i className="fa fa-user fa-fw fa-sm text-primary mt-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-inline-block">
                          <h5 className="text-muted">Partnerships</h5>
                          <h2 className="mb-0">14</h2>
                        </div>
                        <div
                          className="float-right icon-circle-medium  icon-box-lg  bg-secondary-light mb-2"
                          style={{ textAlign: "center" }}
                        >
                          <i className="fa fa-handshake fa-fw fa-sm text-secondary mt-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card">
                  <div className="card-header" style={{ textAlign: "left" }}>
                    <h4 className="mb-0 font-bold">All Orders</h4>

                    {/* <p>This example shows DataTables and the Buttons extension being used with the Bootstrap 4 framework providing the styling.</p> */}
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <div
                        id="example wrapper"
                        className="dataTables_wrapper dt_bootstrap4"
                      ></div>

                      <div className="container">
                        <table
                          id="example"
                          className="table table-hover table-bordered"
                          style={{ width: "100%", textAlign: "left" }}
                        >
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Cost</th>
                              <th>Country</th>
                              <th>IncoTerm</th>
                              <th>paymentTerm</th>
                              <th>ShippingType</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {order.map((item, index) => {
                              return (
                                <tr key={item.id}>
                                  {/* <td>{item.id}</td>
                                  <td>{item.price}</td>
                                  <td>{item.country}</td>
                                  <td>{item.origin}</td>
                                  
                                  <td>{item.description}</td>
                                  <td>{item.country}</td>
                                  <td>{item.specification}</td> */}

                                  <td>{index + 1}</td>
                                  <td>{item.cost}</td>
                                  <td>{item.country}</td>
                                  <td>{item.incoterm}</td>

                                  <td>{item.paymentTerm}</td>
                                  <td>{item.shippingType}</td>
                                  <td>{item.status}</td>
                                  <td>
                                    {/* <button
                                      type="button"
                                      className="btn btn-danger"
                                      data-dismiss="modal"
                                      onClick={() => handleDelete(item.id)}
                                    >
                                      delete
                                    </button>{" "}
                                    |{" "} */}
                                    <button
                                      onClick={(e) => showDetails(item.id)}
                                      type="button"
                                      className="btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal"
                                    >
                                      view{" "}
                                    </button>

                                    <div
                                      className="modal fade"
                                      id="exampleModal"
                                      tabIndex="-1"
                                      aria-labelledby="exampleModalLabel"
                                      aria-hidden="true"
                                    >
                                      <div className="modal-dialog modal-lg">
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
                                          {/* <div align='right'>
                                       <Link to='/editproduct'> 
                          <button
                            className="btn btn-success"
                            onClick={() =>
                              setToLocalStorage(
                                item.quantity,
                                item.country,
                                item.address,
                                item.paymentTerm,
                                item.grade,
                                item.specification,
                                
                                
                              )
                            }
                          >
                            Edit
                          </button>
                          </Link>
                       
                                          </div> */}

                                          <div className="modal-body px-2">
                                            <label>Cost: </label>
                                            <p>{viewOrder.cost}</p>
                                          </div>
                                          <div
                                            className="modal-body px-2 d-flex"
                                            style={{
                                              justifyContent: "space-between",
                                            }}
                                          >
                                            <div>
                                              <label>Buyers Id: </label>
                                              <p>{viewOrder.buyerID}</p>
                                            </div>
                                            <div>
                                              <label>Order Status</label>
                                              <select
                                                className="form-control"
                                                onChange={handleStatusChange}
                                                value={status}
                                                name="status"
                                                aria-describedby="Default select example"
                                                placeholder="select status"
                                              >
                                                <option>
                                                  ....Select Status
                                                </option>
                                                <option value="pending">
                                                  Pending
                                                </option>
                                                <option value="paid">
                                                  Confirmed Payment
                                                </option>
                                                <option value="paid">
                                                  Order Shipped
                                                </option>
                                                <option value="paid">
                                                  Delivered
                                                </option>
                                              </select>
                                            </div>
                                          </div>

                                          <div className="modal-body px-2">
                                            <label>Country: </label>
                                            <p>{viewOrder.country}</p>
                                          </div>

                                          <div className="modal-body px-2">
                                            <label>Created At: </label>
                                            <p>{viewOrder.createdAt}</p>
                                          </div>

                                          <div className="modal-body px-2">
                                            <label>Incoterm: </label>
                                            <p>{viewOrder.incoterm}</p>
                                          </div>
                                          <div className="modal-body px-2">
                                            <label>Note: </label>
                                            <p>{viewOrder.note}</p>
                                          </div>
                                          <div className="modal-body px-2">
                                            <label>order Number: </label>
                                            <p>{viewOrder.orderNumber}</p>
                                          </div>
                                          <div className="modal-body px-2">
                                            <label>payment Term: </label>
                                            <p>{viewOrder.paymentTerm}</p>
                                          </div>

                                          <div className="modal-body px-2 d-flex">
                                            Payment Status:
                                            {status === "pending" && (
                                              <div
                                                className="bg-success rounded-pill text-center mx-2"
                                                style={{
                                                  width: "75px",
                                                  height: "30px",
                                                }}
                                              >
                                                {" "}
                                                <p className="text-white pt-1">
                                                  Pending
                                                </p>{" "}
                                              </div>
                                            )}
                                            {status === "paid" && (
                                              <div
                                                className="bg-success rounded-pill text-center mx-2"
                                                style={{
                                                  width: "75px",
                                                  height: "30px",
                                                }}
                                              >
                                                {" "}
                                                <p className="text-white pt-1">
                                                  Paid
                                                </p>{" "}
                                              </div>
                                            )}
                                          </div>

                                          {/* <div className="modal-body px-2">
                                            <label>Port: </label>
                                            <p>
                                             {viewOrder.port}
                                            </p>
                                          </div> */}
                                          <div className="modal-body px-2">
                                            <label>Product ID: </label>
                                            <p>{viewOrder.productID}</p>
                                          </div>
                                          <div className="modal-body px-2">
                                            <label>Quantity Order: </label>
                                            <p>{viewOrder.quantityOrdered}</p>
                                          </div>
                                          <div className="modal-body px-2">
                                            <label>Shipping Type: </label>
                                            <p>{viewOrder.shippingType}</p>
                                          </div>
                                          <div className="modal-body px-2">
                                            <label>Status: </label>
                                            <p>{viewOrder.status}</p>
                                          </div>
                                          <div className="modal-body px-2">
                                            <label>UpdatedAt: </label>
                                            <p>{viewOrder.updatedAt}</p>
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
      {/* <!-- end main wrapper -->


    <!-- Optional JavaScript -->
    <!-- jquery 3.3.1 -->
    <script src="assets/vendor/jquery/jquery-3.3.1.min.js"></script>
    <!-- bootstap bundle js -->
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.js"></script>
    <!-- slimscroll js -->
    <script src="assets/vendor/slimscroll/jquery.slimscroll.js"></script>
    <script src="../assets/vendor/multi-select/js/jquery.multi-select.js"></script>
    <!-- main js -->
    <script src="assets/libs/js/main-js.js"></script>
    <!-- chart chartist js -->
    <script src="assets/vendor/charts/chartist-bundle/chartist.min.js"></script>
    <!-- sparkline js -->
    <script src="assets/vendor/charts/sparkline/jquery.sparkline.js"></script>
    <!-- morris js -->
    <script src="assets/vendor/charts/morris-bundle/raphael.min.js"></script>
    <script src="assets/vendor/charts/morris-bundle/morris.js"></script>
    <!-- chart c3 js -->
    <script src="assets/vendor/charts/c3charts/c3.min.js"></script>
    <script src="assets/vendor/charts/c3charts/d3-5.4.0.min.js"></script>
    <script src="assets/vendor/charts/c3charts/C3chartjs.js"></script>
    <script src="assets/libs/js/dashboard-ecommerce.js"></script>
    <!-- Data tables -->
    <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script src="assets/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js"></script>
    <script src="assets/vendor/datatables/js/buttons.bootstrap4.min.js"></script>
    <script src="assets/vendor/datatables/js/data-table.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.print.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.colVis.min.js"></script>
    <script src="https://cdn.datatables.net/rowgroup/1.0.4/js/dataTables.rowGroup.min.js"></script>
    <script src="https://cdn.datatables.net/select/1.2.7/js/dataTables.select.min.js"></script>
    <script src="https://cdn.datatables.net/fixedheader/3.1.5/js/dataTables.fixedHeader.min.js"></script>
    <!-- Form validation -->
    <script src="../assets/vendor/parsley/parsley.js"></script>
    <script>
    $('#form').parsley();
    </script>
     */}
    </>
  );
};

export default Orders;
