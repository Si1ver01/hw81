import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { requestShortUrl } from "../store/actions";

const Form = () => {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  const formHandler = e => {
    e.preventDefault();
    dispatch(requestShortUrl({ originalUrl: url }));
    setUrl("");
  };

  return (
    <form onSubmit={formHandler}>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="url"
            placeholder="http://mail.ru"
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
        </div>
        <div className="col-3">
          <button type="submit" className="btn btn-outline-primary btn-block">
            Short
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
