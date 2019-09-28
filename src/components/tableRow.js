import React from "react";
import { Modal } from "./modal";

export const TableRow = props => {
  const {
    task_id,
    customer_first_name,
    customer_last_name,
    customer_phone,
    status,
    registration,
    assigned,
    personnel_first_name,
    personnel_other_name,
    location,
    gender,
    age,
    comments
  } = props.data;

  return (
    <tbody>
      <tr>
        <td>{task_id}</td>
        <td>{customer_first_name}</td>
        <td>{customer_last_name}</td>
        <td>{customer_phone}</td>
        <td>{registration}</td>
        <td>
          <span
            className={
              status === "In Progress"
                ? "badge badge-warning"
                : status === "Assigned"
                ? "label label-primary"
                : status === "Deferred"
                ? "badge badge-danger"
                : "badge badge-success"
            }
          >
            {status}
          </span>
        </td>

        <td>{assigned}</td>
        {status === "In Progress" ? (
          <React.Fragment>
            <td>
              <button
                type="button"
                className="btn btn-success btn-sm"
                data-toggle="modal"
                data-target={`#updateModal${task_id}`}
              >
                Update
              </button>
              <Modal
                id={`updateModal${task_id}`}
                customer_first_name={customer_first_name}
                customer_last_name={customer_last_name}
                personnel_first_name={personnel_first_name}
                personnel_other_name={personnel_other_name}
                type="update"
              />
            </td>

            <td>
              <button type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target={`#deferModal${task_id}`}>
                Defer
              </button>
              <Modal
                id={`deferModal${task_id}`}
                customer_first_name={customer_first_name}
                customer_last_name={customer_last_name}
                personnel_first_name={personnel_first_name}
                personnel_other_name={personnel_other_name}
                type="defer"
              />
            </td>
          </React.Fragment>
        ) : null}

        {status === "Deferred" ? (
          <td>
            <form
              onSubmit={e => window.confirm(`Are you sure you want to select ${customer_first_name} ${customer_last_name}?`)}
            >
              <input type="hidden" name="task_id" value={task_id} />
              <input type="hidden" name="task_status_id" value="2" />
              <button type="submit" className="btn btn-warning btn-sm">
                Select
              </button>
            </form>
          </td>
        ) : null}

        {status === "Completed" ? (
          <td>
            <a className="btn btn-sm btn-primary" data-toggle="modal" data-target={`#view_customer4596${task_id}`}>
              View
            </a>

            <Modal
              id={`view_customer4596${task_id}`}
              customer_first_name={customer_first_name}
              customer_last_name={customer_last_name}
              personnel_first_name={personnel_first_name}
              personnel_other_name={personnel_other_name}
              gender={gender}
              age={age}
              location={location}
              comments={comments}
              type="view"
            />
          </td>
        ) : null}
      </tr>
    </tbody>
  );
};
