import React from 'react'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import styles from './style.module.scss'

const SearchBar = () => {

    return (
        <div className={styles.searchBox}>
            <FormControl className={styles.SearchInp} >
                <OutlinedInput
                    className={styles.OutInp}
                    id="outlined-adornment-amount"
                    startAdornment={<SearchIcon />}
                    placeholder="Search Company"
                />
            </FormControl>
        </div>












    )
}

export default SearchBar;


