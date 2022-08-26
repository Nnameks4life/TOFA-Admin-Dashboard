import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import ReactHTMLTableToExcel from "react-html-table-to-excel";


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'country', headerName: 'Country', width: 130 },
    { field: 'phoneNumber', headerName: 'phoneNumber', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'productTraded', headerName: 'ProductTraded', width: 130 },
    { field: 'fullName', headerName: 'fullName', width: 130 },
    
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    // {
    //   field: 'fullName',
    //   headerName: 'fullName',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];
  
  const rows = [
    { id: 1, country: 'Nigeria', fullName: 'Jon Snow', age: 35, email:"myemail@.com", productTraded:'cashew', phoneNumber:'08037085988' },
    { id: 2, country: 'Mali', fullName: 'Cersei Lannister', age: 42, email:"myemail@.com", productTraded:'cashew', phoneNumber:'08037085988' },
    { id: 3, country: 'Togo', fullName: 'Jaime Lannister', age: 45, email:"myemail@.com", productTraded:'cashew', phoneNumber:'08037085988' },
    { id: 4, country: 'Ghana', fullName: 'Arya Stark', age: 16, email:"myemail@.com", productTraded:'cashew', phoneNumber:'08037085988' },
    { id: 5, country: 'Nigeria', fullName: 'Daenerys Targa', age: 29, email:"myemail@.com", productTraded:'cashew', phoneNumber:'08037085988' },
    { id: 6, country: 'Mali', fullName: 'Danny young', age: 150, email:"myemail@.com", productTraded:'cashew', phoneNumber:'08037085988' },
    { id: 7, country: 'Gabon', fullName: 'Ferrara laco', age: 44, email:"myemail@.com", productTraded:'cashew', phoneNumber:'08037085988' },
    { id: 8, country: 'Ghana', fullName: 'Rossini peter', age: 36, email:"myemail@.com", productTraded:'cashew', phoneNumber:'08037085988' },
    { id: 9, country: 'Nigeria', fullName: 'Harvey wilfred', age: 65, email:"myemail@.com", productTraded:'cashew', phoneNumber:'08037085988' },
    { id: 10, country: 'Togo', fullName: 'Rossini pedro', age: 36, email:"myemail@.com", productTraded:'cashew', phoneNumber:'08037085988' },
    { id: 11, country: 'Mali', fullName: 'Harvey gandi', age: 65, email:"myemail@.com", productTraded:'cashew', phoneNumber:'08037085988' },
  ];

  export default function DataTable() {

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
                   Applications
                  </h2>
                </div>
              </div>
              {/* <div
                className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                align="right"
              >
                <a href="/createbanner" className="btn btn-dark">
                  Create New Banner
                </a>
              </div> */}
            </div>
            {/* <!-- end pageheader --> */}
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card">
                  <h4 className="card-header font-bold" style={{textAlign:'left'}}>Applicants</h4>
                  <div className="card-body">
                  <div style={{ height: 400, width: '100%', margi:'auto' }}>
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
      <DataGrid
      id="test-table-xls"
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
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


























// import React, { useState } from "react";
// // import { useFetch } from '../../../useFetch'
// // import { axios } from '../../components/baseUrl'
// import Navbar from "../../components/navbar/Navbar";
// import Sidebar from "../../components/sidebar/Sidebar";

// const Applicants = () => {
//   const [search, setSearch] = useState();

//   //  const {data, loading, error} = useFetch("/order")

//   //  if (loading) return <h1>LOADING ....</h1>

//   //  if (error) console.log(error)

//   return (
//     <>
//       {/* <!-- main wrapper --> */}
//       <div className="dashboard-main-wrapper">
//         <Navbar />
//         <Sidebar />
//         {/* <!-- wrapper  --> */}
//         <div className="dashboard-wrapper">
//           <div className="container-fluid dashboard-content">
//             {/* <!-- pageheader --> */}
//             <div className="row">
//               <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
//                 <div className="page-header" style={{ textAlign: "left" }}>
//                   <h2 className="pageheader-title">Application Overview</h2>
//                 </div>
//               </div>

//               {/* <div
//                 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
//                 align="right"
//               >
//                 <a href="/createproduct" className="btn btn-dark">
//                   Create Products
//                 </a>
//               </div> */}
//             </div>
//             {/* <!-- end pageheader --> */}

//             <div className="row">
//               <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                 <div className="card">
//                   <div className="card-header" style={{ textAlign: "left" }}>
//                     <h5 className="mb-0 font-bold">All Application</h5>

//                     {/* <p>This example shows DataTables and the Buttons extension being used with the Bootstrap 4 framework providing the styling.</p> */}
//                   </div>
//                   <div className="card-body">
//                     <div className="table-responsive">
//                       <div
//                         id="example wrapper"
//                         className="dataTables_wrapper dt_bootstrap4"
//                       >
//                         <div className="row">
//                           <div
//                             className="col-sm-12 md-6"
//                             style={{ textAlign: "left" }}
//                           >
//                             <div className="dt-buttons">
//                               <button
//                                 className="btn btn-outline-light buttons-copy buttons-html5"
//                                 tabindex="0"
//                                 aria-controls="example"
//                                 type="button"
//                               >
//                                 <span>Copy</span>
//                               </button>
//                               <button
//                                 className="btn btn-outline-light buttons-excel buttons-html5"
//                                 tabindex="0"
//                                 aria-controls="example"
//                                 type="button"
//                               >
//                                 <span>Excel</span>
//                               </button>
//                               <button
//                                 className="btn btn-outline-light buttons-pdf buttons-html5"
//                                 tabindex="0"
//                                 aria-controls="example"
//                                 type="button"
//                               >
//                                 <span>PDF</span>
//                               </button>
//                               <button
//                                 className="btn btn-outline-light buttons-print"
//                                 tabindex="0"
//                                 aria-controls="example"
//                                 type="button"
//                               >
//                                 <span>Print</span>
//                               </button>
//                               <button
//                                 className="btn btn-outline-light buttons-collection dropdown-toggle buttons-colvis"
//                                 tabindex="0"
//                                 aria-controls="example"
//                                 type="button"
//                                 aria-haspopup="true"
//                               >
//                                 <span>Column Visibility</span>
//                               </button>
//                             </div>
//                           </div>

//                           <div className="d-flex justify-content-end my-2">
//                             <input
//                               type="search"
//                               className="form-control form-control-sm d-flex justify-content-end"
//                               placeholder
//                               aria-controls="example"
//                               style={{ width: "200px" }}
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       <table
//                         id="example"
//                         className="table table-striped table-bordered second"
//                         style={{ width: "100%", textAlign: "left" }}
//                       >
//                         <thead>
//                           <tr>
//                             <th> Name</th>

//                             <th>Location</th>
//                             <th>Quantity</th>
//                             <th>Date</th>
//                             <th>Amount</th>
//                             <th>Specification</th>
//                             <th>Category</th>
//                             <th>Sub Category</th>
//                             <th>Action</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td>Tiger Nixon</td>
//                             <td>Edinburgh</td>
//                             <td>61</td>
//                             <td>2011/04/25</td>
//                             <td>$320,800</td>
//                             <td>Tiger Nixon</td>
//                             <td>System Architect</td>
//                             <td>Edinburgh</td>
//                             <td>
//                               <a href="edit-faq.html">View</a> |
//                               <a href="#">Delete</a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>Garrett Winters</td>

//                             <td>Tokyo</td>
//                             <td>63</td>
//                             <td>2011/07/25</td>
//                             <td>$170,750</td>
//                             <td>Tiger Nixon</td>
//                             <td>System Architect</td>
//                             <td>Edinburgh</td>
//                             <td>
//                               <a href="edit-faq.html">View</a> |
//                               <a href="#">Delete</a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>Ashton Cox</td>

//                             <td>San Francisco</td>
//                             <td>66</td>
//                             <td>2009/01/12</td>
//                             <td>$86,000</td>
//                             <td>Tiger Nixon</td>
//                             <td>System Architect</td>
//                             <td>Edinburgh</td>
//                             <td>
//                               <a href="edit-faq.html">View</a> |
//                               <a href="#">Delete</a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>Cedric Kelly</td>

//                             <td>Edinburgh</td>
//                             <td>22</td>
//                             <td>2012/03/29</td>
//                             <td>$433,060</td>
//                             <td>Tiger Nixon</td>
//                             <td>System Architect</td>
//                             <td>Edinburgh</td>
//                             <td>
//                               <a href="edit-faq.html">View</a> |
//                               <a href="#">Delete</a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>Airi Satou</td>

//                             <td>Tokyo</td>
//                             <td>33</td>
//                             <td>2008/11/28</td>
//                             <td>$162,700</td>
//                             <td>Tiger Nixon</td>
//                             <td>System Architect</td>
//                             <td>Edinburgh</td>
//                             <td>
//                               <a href="edit-faq.html">View</a> |
//                               <a href="#">Delete</a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>Brielle Williamson</td>

//                             <td>New York</td>
//                             <td>61</td>
//                             <td>2012/12/02</td>
//                             <td>$372,000</td>
//                             <td>Tiger Nixon</td>
//                             <td>System Architect</td>
//                             <td>Edinburgh</td>
//                             <td>
//                               <a href="edit-faq.html">View</a> |
//                               <a href="#">Delete</a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>Herrod Chandler</td>

//                             <td>San Francisco</td>
//                             <td>59</td>
//                             <td>2012/08/06</td>
//                             <td>$137,500</td>
//                             <td>Tiger Nixon</td>
//                             <td>System Architect</td>
//                             <td>Edinburgh</td>
//                             <td>
//                               <a href="edit-faq.html">View</a> |
//                               <a href="#">Delete</a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>Rhona Davidson</td>

//                             <td>Tokyo</td>
//                             <td>55</td>
//                             <td>2010/10/14</td>
//                             <td>$327,900</td>
//                             <td>Tiger Nixon</td>
//                             <td>System Architect</td>
//                             <td>Edinburgh</td>
//                             <td>
//                               <a href="edit-faq.html">View</a> |
//                               <a href="#">Delete</a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>Colleen Hurst</td>

//                             <td>San Francisco</td>
//                             <td>39</td>
//                             <td>2009/09/15</td>
//                             <td>$205,500</td>
//                             <td>Tiger Nixon</td>
//                             <td>System Architect</td>
//                             <td>Edinburgh</td>
//                             <td>
//                               <a href="edit-faq.html">View</a> |
//                               <a href="#">Delete</a>
//                             </td>
//                           </tr>

//                           <tr>
//                             <td>Haley Kennedy</td>

//                             <td>London</td>
//                             <td>43</td>
//                             <td>2012/12/18</td>
//                             <td>$313,500</td>
//                             <td>Tiger Nixon</td>
//                             <td>System Architect</td>
//                             <td>Edinburgh</td>
//                             <td>
//                               <a href="edit-faq.html">View</a> |
//                               <a href="#">Delete</a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>Tatyana Fitzpatrick</td>

//                             <td>London</td>
//                             <td>19</td>
//                             <td>2010/03/17</td>
//                             <td>$385,750</td>
//                             <td>Tiger Nixon</td>
//                             <td>System Architect</td>
//                             <td>Edinburgh</td>
//                             <td>
//                               <a href="edit-faq.html">View</a> |
//                               <a href="#">Delete</a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>Michael Silva</td>

//                             <td>London</td>
//                             <td>66</td>
//                             <td>2012/11/27</td>
//                             <td>$198,500</td>
//                             <td>Tiger Nixon</td>
//                             <td>System Architect</td>
//                             <td>Edinburgh</td>
//                             <td>
//                               <a href="edit-faq.html">View</a> |
//                               <a href="#">Delete</a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>Paul Byrd</td>

//                             <td>New York</td>
//                             <td>64</td>
//                             <td>2010/06/09</td>
//                             <td>$725,000</td>
//                             <td>Tiger Nixon</td>
//                             <td>System Architect</td>
//                             <td>Edinburgh</td>
//                             <td>
//                               <a href="edit-faq.html">View</a> |
//                               <a href="#">Delete</a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>Gloria Little</td>

//                             <td>New York</td>
//                             <td>59</td>
//                             <td>2009/04/10</td>
//                             <td>$237,500</td>
//                             <td>Tiger Nixon</td>
//                             <td>System Architect</td>
//                             <td>Edinburgh</td>
//                             <td>
//                               <a href="edit-faq.html">View</a> |
//                               <a href="#">Delete</a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>Bradley Greer</td>

//                             <td>London</td>
//                             <td>41</td>
//                             <td>2012/10/13</td>
//                             <td>$132,000</td>
//                             <td>Tiger Nixon</td>
//                             <td>System Architect</td>
//                             <td>Edinburgh</td>
//                             <td>
//                               <a href="edit-faq.html">View</a> |
//                               <a href="#">Delete</a>
//                             </td>
//                           </tr>

//                           <tr>
//                             <td>Donna Snider</td>

//                             <td>New York</td>
//                             <td>27</td>
//                             <td>2011/01/25</td>
//                             <td>$112,000</td>
//                             <td>Tiger Nixon</td>
//                             <td>System Architect</td>
//                             <td>Edinburgh</td>
//                             <td>
//                               <a href="edit-faq.html">View</a> |
//                               <a href="#">Delete</a>
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <!-- end main wrapper --> */}
//       </div>
//     </>
//   );
// };

// export default Applicants;
