import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ getName }) => (
  <>
    <p className={styles.paragraf}>Find contact by name</p>
    <input
      className={styles.search}
      placeholder="Search by name"
      type="text"
      onChange={getName}
    />
  </>
);

export default Filter;
