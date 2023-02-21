import React from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import { setFilterValue } from "redux/filterSlice";
import { getFilterValue } from "redux/selectors";

import styles from "./Filter.module.css";

export function Filter() {
  const dispatch = useAppDispatch();
  const value = useAppSelector(getFilterValue);

  const handleFilterValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setFilterValue(event.target.value));

  return (
    <label className={styles.label}>
      <p className={styles.text}>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={handleFilterValue}
      />
    </label>
  );
}
