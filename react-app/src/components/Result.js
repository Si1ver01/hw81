import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const { link, error } = useSelector(state => state);

  if (error) {
    return <p className="text-center text-danger mt-2"> {error} </p>;
  }

  if (!link) {
    return (
      <p className="text-center mt-2">
        Введите ссылку которую хотите сократить с указанием протокола. Пример
        http://mail.ru
      </p>
    );
  }

  const formatLink = `http://localhost:8000/${link.shortUrl}`;

  return (
    <p className="text-center mt-2">
      Short URL :{" "}
      <a href={formatLink} target="_blank" rel="noopener noreferrer">
        {formatLink}
      </a>
    </p>
  );
};

export default Result;
