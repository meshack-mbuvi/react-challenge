import React from "react";

export const viewContent = props => {
  const { gender, location, age, personnel_first_name, personnel_other_name, comments, completed } = props;
  return (
    <div className="modal-body">
      <table className="table table-condensed table-hover table-stiped table-bordered">
        <tbody>
          <tr>
            <th>Gender</th>
            <td>{gender}</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>{location}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{age}</td>
          </tr>
          <tr>
            <th>Access Code</th>
            <td>
              <span className="label label-success">Completed</span>
            </td>
          </tr>
          <tr>
            <th>Splash Page</th>
            <td>
              <span className="label label-success">Completed</span>
            </td>
          </tr>
          <tr>
            <th>Turn off Autoplay</th>
            <td>
              <span className="label label-success">Completed</span>
            </td>
          </tr>
          <tr>
            <th>M-Pesa Training</th>
            <td>
              <span className="label label-success">Completed</span>
            </td>
          </tr>
          <tr>
            <th>Comments</th>
            <td>{comments}</td>
          </tr>
          <tr>
            <th>Updated By</th>
            <td>
              {personnel_first_name} {personnel_other_name}
            </td>
          </tr>
          <tr>
            <th>Updated On</th>
            <td>{completed}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
