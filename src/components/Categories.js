import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories, shallowEqual);
  const dispatch = useDispatch();
  const updateStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <p>{status}</p>
      <button
        type="submit"
        onClick={
            updateStatus
        }
      >
        Check status
      </button>
    </>
  );
};

export default Categories;
