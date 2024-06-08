import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@/assets/img/search.png";
import styles from "./SearchIput.module.scss";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ value, onChange }: Props) => {
  return (
    <div className={styles.searchBox}>
      <TextField
        id="standard-basic"
        value={value}
        variant="outlined"
        placeholder="Search"
        onChange={onChange}
        className={styles.searchInput}
      />
      <button className={styles.searchButton}>
        <img src={SearchIcon} alt="Поиск" />
      </button>
    </div>
  );
};

export default SearchInput;
