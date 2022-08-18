import React, { useState } from "react";
import "../styles/TicketData.css";
import TicketForm from "./TicketForm";
import Moment from "moment";

function TicketData({ filterData }) {
  const [createForm, setCreateForm] = useState(false);
  const [showData, setShowdata] = useState(false);
  const [listData, setlistData] = useState([]);
  const [state, setState] = useState({
    ticketTitle: "",
    ticketDescription: "",
    date: "",
    customerName: "",
  });

  const {
    ticketTitle,
    ticketDescription,
    date,
    customerName,
    ticketStatus,
    ticketName,
    ticketNumber,
    staffName,
    ticketTask,
  } = state;

  const handleCreate = () => {
    setCreateForm(createForm ? false : true);
  };
  const handleChange = (ticketTitle) => (e) => {
    setState({
      ...state,
      [ticketTitle]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setlistData([
      ...listData,
      {
        ticketTitle,
        ticketDescription,
        date,
        customerName,
        ticketStatus,
        ticketName,
        ticketNumber,
        staffName,
        ticketTask,
      },
    ]);

    setShowdata(true);
    setCreateForm(false);

    setState({
      ticketTitle: "",
      ticketDescription: "",
      date: "",
      customerName: "",
      ticketStatus: "",
      ticketName: "",
      ticketNumber: "",
      staffName: "",
      ticketTask: "",
    });
  };

  const currentDate = Moment(new Date()).format("YYYY-DD-MM");

  return (
    <div className="main_form">
      <div className="filter_button">
        <button onClick={handleCreate} className="new_ticket">
          New ticket
        </button>
      </div>
      <div className="form_container">
        {createForm && (
          <div className="form_box">
            <form onSubmit={handleSubmit} className="filter_form">
              <div>
                <input
                  onChange={handleChange("ticketNumber")}
                  className="filter_input"
                  type={"text"}
                  placeholder={"Ticket number"}
                />
              </div>
              <div className="input_container">
                <input
                  onChange={handleChange("ticketTitle")}
                  className="filter_input"
                  type={"text"}
                  placeholder={"Enter title"}
                />
              </div>
              <div>
                <input
                  onChange={handleChange("ticketStatus")}
                  className="filter_input"
                  type={"text"}
                  placeholder={"Ticket status"}
                />
              </div>
              <div>
                <input
                  onChange={handleChange("ticketDescription")}
                  className="filter_input"
                  type={"text"}
                  placeholder={"Ticket description"}
                />
              </div>
              <div>
                <input
                  onChange={handleChange("ticketName")}
                  className="filter_input"
                  type={"text"}
                  placeholder={"Customer name"}
                />
              </div>
              <div>
                <input
                  min={currentDate}
                  onChange={handleChange("date")}
                  className="filter_input"
                  type={"date"}
                />
              </div>
              <div>
                <input
                  onChange={handleChange("ticketTask")}
                  className="filter_input"
                  type={"text"}
                  placeholder={"Number of tasks"}
                />
              </div>
              <div>
                <input
                  onChange={handleChange("staffName")}
                  className="filter_input"
                  type={"text"}
                  placeholder={"Staff name"}
                />
              </div>
              <div className="filter_create">
                <button className="create_ticket">create</button>
              </div>
            </form>
          </div>
        )}

        {showData && <TicketForm filterData={filterData} listData={listData} />}
      </div>
    </div>
  );
}

export default TicketData;
