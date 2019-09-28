import React from "react";

export const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone</th>
        <th>Registration</th>
        <th>Status</th>
        <th>Created</th>
        <th colSpan="3">Actions</th>
      </tr>
    </thead>
  );
};
