import React, { useState } from "react";
import TicketData from "./TicketData";

import "../styles/TicketFilter.css";

function TicketFilter() {
  const [filterData, setFilterData] = useState({
    filterTicketNumber: "",
    filterTicketName: "",
    filterDate: "",
    filterTicketType: "",
    filterStaffName: "",
  });
  const {
    filterTicketNumber,
    filterTicketName,
    filterDate,
    filterTicketType,
    filterStaffName,
  } = filterData;

  const handleFilter = (filter) => (e) => {
    setFilterData({
      ...filterData,
      [filter]: e.target.value,
    });
  };
  console.log(filterData);
  return (
    <div className="filer_main">
      <div className="filter_data_container">
        <div className="filter_box">
          <div className="filter_header">
            <p className="filter_heading">Filter </p>
            <a href="#" className="filter_comment">
              clear all filter
            </a>
          </div>
          <div className="filter_data">
            <div>
              <input
                onChange={handleFilter("filterTicketNumber")}
                className="filter_input"
                type={"text"}
                placeholder={"Ticketnumber"}
              />
            </div>
            <div>
              <input
                onChange={handleFilter("filterTicketName")}
                className="filter_input"
                type={"text"}
                placeholder={"Customername"}
              />
            </div>
            <div>
              <input
                onChange={handleFilter("filterDate")}
                className="filter_input"
                type={"Date"}
              />
            </div>
            <div>
              <input
                onChange={handleFilter("filterTicketType")}
                className="filter_input"
                type={"text"}
                placeholder={"Type"}
              />
            </div>
            <div>
              <input
                onChange={handleFilter("filterStaffName")}
                className="filter_input"
                type={"text"}
                placeholder={"Staff name"}
              />
            </div>
          </div>
        </div>
      </div>
      <TicketData filterData={filterData} />
    </div>
  );
}

export default TicketFilter;
