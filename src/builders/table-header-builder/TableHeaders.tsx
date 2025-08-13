import { BackIcon } from "../../assets/svg-icons";
import Button from "../../components/button/Button";
import SearchInput from "../../components/search-input/SearchInput";
import type { IHeaderConfig } from "../../models/header.type";
import { useNavigate } from "react-router";

const TableHeader = ({
    headerConfig,
    actionButton,
    actions,
    showSearch,
    showBackButton,
    onBack,
}: {
    headerConfig: IHeaderConfig;
    actionButton?: { label: string; onClick: () => void };
    actions?: React.ReactNode;
    showSearch?: boolean;
    showBackButton?: boolean;
    onBack?: () => void;
}) => {
    const navigate = useNavigate();
    return (
        <div className="px-6 py-3 bg-white rounded-xl flex items-center gap-2 justify-between">
            <div className="flex gap-3 items-center">
                {showBackButton && (
                    <div
                        onClick={() => {
                            if (onBack) {
                                onBack();
                            } else {
                                navigate(-1);
                            }
                        }}
                        className="cursor-pointer">
                        <BackIcon />
                    </div>
                )}
                <h6 className="text-[24px] font-semibold capitalize">{headerConfig.title}</h6>
                {headerConfig.total && <span className="text-[12px] text-grayText">(total {headerConfig.total})</span>}
            </div>
            <div className="flex gap-2 items-center">
                {showSearch && <SearchInput />}
                {actionButton && <Button onClick={actionButton.onClick}>{actionButton.label}</Button>}
                {actions}
            </div>
        </div>
    );
};

export default TableHeader;
