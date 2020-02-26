import React from "react";
import Form from "../components/Form";
import Result from "../components/Result";

const MainPage = () => {
  return (
    <div className="container">
      <h1 className="text-center text-primary">Short url generator:</h1>
      <div className="row">
        <div className="col-6 offset-3 mt-2">
          <Form />
          <Result/>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
