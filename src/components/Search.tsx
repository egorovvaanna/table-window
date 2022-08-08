import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounsed";
import table from "../store/table";
import { SearchContainer, Input, SearchIcon } from "../styles/global";



export const Search = () => {
const [value, setValue] = useState<string>("")
const debounce = useDebounce<string>(value, 500)

const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
    setValue(event.target.value)
}

useEffect(()=>{
    table.setSearch(debounce)
    table.setSearchTable()
},[debounce])

  return (
    <SearchContainer>
        <Input type="text" name="search" value={value} onChange={handleChange} />
      <SearchIcon/>
    </SearchContainer>
  );
};
