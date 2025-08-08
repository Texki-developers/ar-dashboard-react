import { DeleteIcon } from "../../assets/svg-icons";
import TableHeader from "../../builders/table-header-builder/TableHeaders";
import Button from "../../components/button/Button";

const ProductDetails = () => {
    return (
        <div>
            <div className="grid gap-3">
                <TableHeader
                    headerConfig={{ title: "Biriyani" }}
                    actions={
                        <div className="flex gap-2">
                            <Button>
                                <DeleteIcon />
                            </Button>
                            <Button></Button>
                        </div>
                    }
                />
            </div>
        </div>
    );
};

export default ProductDetails;
