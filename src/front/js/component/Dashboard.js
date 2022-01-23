import React from "react";
//import { Dashboard } from "./Dashboard";
//import { Table } from "./Table";

export const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Drivers
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Products
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1>Orders</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <h4 className="m-2 p-2">Filter by:</h4>
              <h5 className="m-2 p-2">North</h5>
              <h5 className="m-2 p-2">South</h5>
              <h5 className="m-2 p-2">Orlando</h5>
            </div>
          </div>
          <div className="d-flex flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
            <h2 className="m-2 p-2">All</h2>
            <h2 className="m-2 p-2">Open</h2>
            <h2 className="m-2 p-2">Close</h2>
          </div>
          {/* <Table /> */}
        </main>
      </div>
    </>
  );
};
