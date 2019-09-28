import React from "react";
export const deferContent = () => {
  return (
    <span>
      <div className="form-group">
        <label htmlFor="comments">Comments</label>
        <textarea className="form-control" name="comments" id="comments" rows="3" />
      </div>
    </span>
  );
};
