import SearchInput from "../../components/search-input/SearchInput";

const TableHeader = () => {
    return (
        <div className="px-6 py-3 bg-white rounded-xl flex items-center gap-2 justify-between">
            <div className="flex gap-1 items-center">
                <h6 className="text-[24px] font-semibold">Products</h6>
                <span className="text-[12px] text-grayText">(total 120)</span>
            </div>
            <div className="flex gap-2 items-center">
                <SearchInput />
            </div>
        </div>
    );
};

export default TableHeader;
