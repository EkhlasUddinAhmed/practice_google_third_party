import React from "react";

const ShowAllBlogsCard = ({ blog }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{blog?.title}</h2>
        <p>{blog?.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-neutral">Show Details</button>
        </div>
      </div>
    </div>
  );
};

export default ShowAllBlogsCard;
