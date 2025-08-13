import { CloseIcon } from "../../../assets/svg-icons";
import Button from "../../../components/button/Button";
import Input from "../../../components/form-components/Input";
import ModalWrapper from "../../../components/modal/ModalWrapper";
import { Controller, useForm } from "react-hook-form";
import useAddTable from "./useAddTable.hook";
import { useEffect } from "react";
import { queryClient } from "../../../main";

interface IAddTable {
    tableNumber: string;
}

const AddTable = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IAddTable>();
    const { addTableMutation } = useAddTable();
    const onSubmit = (data: IAddTable) => {
        addTableMutation.mutate({ tableNumber: data.tableNumber });
    };
    useEffect(() => {
        if (addTableMutation.isSuccess) {
            onClose();
            queryClient.invalidateQueries({ queryKey: ["tables"] });
        }
    }, [addTableMutation.isSuccess, onClose]);

    return (
        <ModalWrapper
            show={show}
            onClose={onClose}>
            <div className="min-w-[300px]">
                <div className="flex justify-between items-center py-4">
                    <h2 className="text-lg font-semibold">Add Table</h2>
                    <div
                        className="cursor-pointer"
                        onClick={onClose}>
                        <CloseIcon
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <Controller
                        name="tableNumber"
                        control={control}
                        rules={{ required: "Table Number is required" }}
                        render={({ field }) => (
                            <Input
                                width="300px"
                                type="text"
                                label="Table Number"
                                placeholder="Table Number"
                                error={errors?.tableNumber?.message as string}
                                {...field}
                            />
                        )}
                    />
                    <div className="flex justify-end">
                        <Button onClick={handleSubmit(onSubmit)}>{addTableMutation.isPending ? "Adding..." : "Add"}</Button>
                    </div>
                </div>
            </div>
        </ModalWrapper>
    );
};

export default AddTable;
