import React from "react";

export const Form = () => {
  return (
    <form action="">
      <div className="row">
        <div className="input-group">
          <input
            className="input-control"
            type="text"
            placeholder="Name"
            required
          />
        </div>

        <div className="input-group">
          <input
            className="input-control"
            type="email"
            placeholder="email"
            required
          />
        </div>

        <div className="input-group">
          <input
            className="input-control"
            type="text"
            placeholder="Subject"
            required
          />
        </div>

        <div className="input-group">
          <textarea
            className="input-control"
            name=""
            id=""
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div className="submit-btn">
          <button type="submit" className="btn">
            send message
          </button>
        </div>
      </div>
    </form>
  );
};
