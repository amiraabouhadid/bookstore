import React from "react";
const NewBookForm = () => {
  const categories = ["horror", "action", "romance"];
  return (
    <>
      <h6 className="text-secondary">ADD A NEW BOOK</h6>
      <div className="">
        <form className="form-group d-flex flex-row justify-content-between flex-nowrap">
          <input
            style={{
              height: "2.813rem",
              marginRight: "2.215rem",
            }}
            className=" w-100 form-control"
            placeholder="Book title"
            type="text"
          />
          <select
            className="w-50 form-control "
            style={{
              height: "2.813rem",
              marginRight: "2.215rem",
            }}
          >
            {categories.map((cat) => (
              <option value={cat}>{cat}</option>
            ))}
          </select>
          <button
            style={{
              height: "2.813rem",
            }}
            type="submit"
            className="btn btn-primary w-50"
          >
            ADD BOOK
          </button>
        </form>
      </div>
    </>
  );
};
export default NewBookForm;
