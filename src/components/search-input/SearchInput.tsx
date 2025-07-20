import { SearchIcon } from "../../assets/svg-icons";
import Input from "../form-components/Input";

const SearchInput = () => {
    return (
        <Input
            leftIcon={<SearchIcon />}
            placeholder="Search"
        />
    );
};

export default SearchInput;
