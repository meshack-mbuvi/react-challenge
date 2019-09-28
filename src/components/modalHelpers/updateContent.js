import React from "react";
import { deferContent } from "./deferContent";

export const updateContent = () => {
  return (
    <span>
      <label>Gender</label>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gender" id="gender1" value="Male" />
        <label className="form-check-label" htmlFor="gender1">
          Male
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gender" id="gender2" value="option2" />
        <label className="form-check-label" htmlFor="gender2">
          Female
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input type="text" className="form-control" name="location" id="location" placeholder="Location" />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input type="number" className="form-control" name="age" id="age" placeholder="Age" />
      </div>
      <label>Customer Education</label>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="1" name="access_code" id="access_code1" />
        <label className="form-check-label" htmlFor="access_code1">
          Access Code
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="1" name="splash_page" id="splash_page1" />
        <label className="form-check-label" htmlFor="splash_page1">
          Splash Page
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="1" name="autoplay" id="autoplay1" />
        <label className="form-check-label" htmlFor="autoplay1">
          Turn off autoplay
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="1" name="mpesa" id="mpesa1" />
        <label className="form-check-label" htmlFor="mpesa1">
          M-Pesa training
        </label>
      </div>
      {deferContent()}
    </span>
  );
};
