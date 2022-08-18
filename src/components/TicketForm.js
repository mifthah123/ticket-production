import Moment from "moment";
import React, { useState } from "react";
import "../styles/TicketForm.css";

function TicketForm({ listData, filterData }) {
  const {
    filterTicketNumber,
    filterTicketName,
    filterDate,
    filterTicketType,
    filterStaffName,
  } = filterData;

  console.log("listdata", filterDate);

  return (
    <div className="ticket_form">
      <div className="data_box">
        {listData
          .reverse()
          .filter((value) => {
            if (
              filterTicketNumber == "" &&
              filterTicketName == "" &&
              filterDate == "" &&
              filterTicketType == "" &&
              filterStaffName == ""
            ) {
              return value;
            } else if (
              value.ticketNumber
                .toLowerCase()
                .includes(filterTicketNumber.toLowerCase()) &&
              value.ticketName
                .toLowerCase()
                .includes(filterTicketName.toLowerCase()) &&
              value.date.toString().includes(filterDate.toString()) &&
              value.ticketStatus
                .toLowerCase()
                .includes(filterTicketType.toLowerCase()) &&
              value.staffName
                .toLowerCase()
                .includes(filterStaffName.toLowerCase())
            ) {
              return value;
            }
          })
          .map((value, index) => (
            <div className="ticketdata">
              <div className="date_container">
                <p className="ticket_number">{value.ticketNumber}</p>

                <p className="date_month">{Moment(value.date).format("MMM")}</p>
                <p className="date_day">{Moment(value.date).format("DD")}</p>
                <p className="date year">{Moment(value.date).format("YYYY")}</p>
              </div>
              <div className="details_container">
                <div className="ticket_middle">
                  <p className="title">{value.ticketTitle}</p>
                  <p className="description">{value.ticketDescription}</p>
                  <p className="customer_name">{value.ticketName}</p>
                </div>
                <div className="details_bottom">
                  <p className="ticket_task">{value.ticketTask}</p>
                  <p className="staff_name">{value.staffName}</p>
                  <div>
                    <p className="ticket_status">{value.ticketStatus}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
}

export default TicketForm;
