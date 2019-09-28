import React from "react";
import { deferContent, updateContent, viewContent } from "./modalHelpers";

export const Modal = props => {
  const { id, customer_first_name, customer_last_name, customer_phone, type } = props;
  return (
    <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {type === "update" ? "Update" : type === "view" ? "View" : "Defer"} {customer_first_name} {customer_last_name}
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          {type === "view" ? (
            viewContent(props)
          ) : (
            <form>
              <input type="hidden" name="task_id" value="21962" />
              <input type="hidden" name="task_status_id" value="3" />
              <div className="modal-body">
                <p>
                  <strong>Customer Phone:</strong> {customer_phone}
                </p>
                {type === "update" ? updateContent() : deferContent()}
              </div>

              {type === "update" ? (
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Update Customer
                  </button>
                </div>
              ) : (
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" className="btn btn-danger">
                    Defer Customer
                  </button>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
