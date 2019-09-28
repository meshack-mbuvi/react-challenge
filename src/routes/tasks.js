import React, { Component } from "react";
import { TableHeader } from "../components/tableHeader";
import { TableRow } from "../components/tableRow";
import { connect } from "react-redux";
import { getTasks } from "../redux/actions/tasks";
import Login from "./login";
import { Analysis } from "../components/analysis";

export class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 1 };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTasks());
  }

  handlePageSelect = event => {
    const { dispatch } = this.props;

    const {
      target: { value: page }
    } = event;

    this.setState({ page });

    dispatch(getTasks(page));
  };

  handleSubmitPage = event => {
    const newPage = event.target.id;

    const {
      dispatch,
      tasks: { page }
    } = this.props;

    if (newPage === "next") {
      return dispatch(getTasks(page + 1));
    }

    if (page === 1) {
      return dispatch(getTasks(1));
    }
    return dispatch(getTasks(page - 1));
  };

  render() {
    const authToken = localStorage.getItem("token");

    if (!authToken) {
      return <Login />;
    }

    const { tasks } = this.props;
    const options = []; //This holds page numbers in the select drop down

    let items;
    let numberOfPages;
    let summary;
    let perPage;
    let page;

    if (tasks.tasks) {
      perPage = tasks.perPage;
      page = tasks.page;

      // set details of the personnel
      window.localStorage.setItem("user", tasks.tasks[0].personnel_first_name);

      items = tasks.tasks.map(task => {
        return <TableRow data={task} key={task.task_id} />;
      });

      numberOfPages = Math.ceil(tasks.totalTasks / perPage);

      for (let number = 1; number <= numberOfPages; number++) {
        options.push(
          <option value={number} selected={number === page ? true : false} key={number}>
            {number}
          </option>
        );
      }

      summary = tasks.summary;
    }

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Tasks</h5>
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped table-condensed">
                      <TableHeader />
                      {items}
                    </table>
                  </div>
                </div>

                <div className="card-footer">
                  <div className="d-flex flex-row-reverse">
                    <form action="#" onSubmit={this.handleSubmitPage} id="next">
                      <button className="btn btn-rounded" type="submit">
                        <i className="fas fa-chevron-right" />
                      </button>
                    </form>
                    <form action="#" onSubmit={this.handleSubmitPage} id="previous">
                      <button className="btn btn-rounded mx-2" type="submit">
                        <i className="fas fa-chevron-left" />
                      </button>
                    </form>
                    <span className="font-weight-normal">of {numberOfPages}</span>

                    <select name="page" id="page" className="form-control mr-2" onChange={this.handlePageSelect}>
                      {options}
                    </select>
                    <span className="font-weight-normal mr-2">Page</span>
                  </div>
                </div>
              </div>
            </div>

            {tasks.tasks ? <Analysis summary={summary} /> : ""}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ Tasks }) => {
  return {
    tasks: Tasks.tasks || []
  };
};

export default connect(mapStateToProps)(Tasks);
