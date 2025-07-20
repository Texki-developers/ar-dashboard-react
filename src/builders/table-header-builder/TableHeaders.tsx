import SearchInput from "../../components/search-input/SearchInput";
import type { IHeaderConfig } from "../../models/header.type";

const TableHeader = ({ headerConfig }: { headerConfig: IHeaderConfig }) => {
    return (
        <div className="px-6 py-3 bg-white rounded-xl flex items-center gap-2 justify-between">
            <div className="flex gap-1 items-center">
                <h6 className="text-[24px] font-semibold">{headerConfig.title}</h6>
                {headerConfig.total && <span className="text-[12px] text-grayText">(total {headerConfig.total})</span>}
            </div>
            <div className="flex gap-2 items-center">
                <SearchInput />
            </div>
        </div>
    );
};

export default TableHeader;
