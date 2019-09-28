import React from "react";
import { Pie } from "react-chartjs-2";

/*
 Search is not completely implemented, the part remaining is for getting data from the backend API
 **/
const SearchSection = () => (
  <div className="card search">
    <div className="card-body">
      <h5 className="card-title">Search</h5>
      <form action="#" method="post">
        <div className="form-group">
          <label className="control-label mb-10">Customer Phone</label>
          <input type="number" name="customer_phone" className="form-control" />
        </div>
        <div className="form-group">
          <label className="control-label mb-10">Task Status</label>
          <select className="form-control select2" name="task_status">
            <option value="">---Select Task Status---</option>
            <option value="1|Assigned">Assigned</option>
            <option value="3|Completed">Completed</option>
            <option value="4|Deferred">Deferred</option>
            <option value="2|In Progress">In Progress</option>
          </select>
        </div>
        <div className="form-group">
          <label className="control-label mb-10 text-left">Date Assigned</label>
          <div className="input-group">
            <input type="text" className="form-control datepicker" defaultValue="12-02-2012" />
            <div className="input-group-addon">
              <i className="fa fa-calendar" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <a href="https://mpesa.mawingunetworks.com/customers/close-tasks-search" className="btn btn-default pull-right">
            <i className="fa fa-search" /> Close Search
          </a>
          <button type="submit" className="btn btn-warning pull-right">
            <i className="fa fa-search" />
            Search
          </button>
        </div>
      </form>
    </div>
  </div>
);

const Summary = props => {
  const {
    summary: { assigned = 0, inProgress = 0, completed = 0, deferred = 0 }
  } = props;

  return (
    <div className="row task-status mt-5">
      <div className="col-sm-3 bg-primary text-center">
        <span>Assigned</span>
        <div>{assigned}</div>
      </div>
      <div className="col-sm-3 bg-warning text-center">
        <span>In Progress</span>
        <div>{inProgress}</div>
      </div>
      <div className="col-sm-3 bg-success text-center">
        <span>Completed</span>
        <div>{completed}</div>
      </div>
      <div className="col-sm-3 bg-danger text-center">
        <span>Deferred</span>
        <div>{deferred}</div>
      </div>
    </div>
  );
};

export const Analysis = props => {
  const {
    summary: { assigned = 0, inProgress = 0, completed = 0, deferred = 0 }
  } = props;
  // Am setting completed to 1 for demonstrations purpose, the data key in the // dataset array should be updated to just read the value passed only
  const pending = assigned + inProgress + deferred;

  const data = {
    labels: ["Pending", "Completed"],
    datasets: [
      {
        data: [pending === 0 ? 1 : pending, completed === 0 ? 2 : completed],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(255, 205, 86)"],
        hoverBackgroundColor: ["rgb(255, 99, 132)", "rgb(255, 205, 86)"]
      }
    ]
  };

  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Daily Target</h5>
          <Pie data={data} />
          <Summary summary={props} />
        </div>
      </div>

      <SearchSection />
    </div>
  );
};
