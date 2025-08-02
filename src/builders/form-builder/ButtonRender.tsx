import PrimaryButton from "../../components/primary-button/PrimaryButton";
import type { IButton } from "../../models/form";
import type { IButtonLoadingState } from "./reducers";

const ButtonRender = ({ buttons, onClick, buttonsLoading }: { buttons: IButton[]; onClick: (id: string) => void; buttonsLoading: IButtonLoadingState }) => {
    return (
        <div className="mt-6">
            {buttons.map((button) => {
                switch (button.type) {
                    case "primaryButton":
                        return (
                            <PrimaryButton
                                key={button.id}
                                type="button"
                                loading={buttonsLoading[button.id]}
                                onClick={() => {
                                    if (buttonsLoading[button.id]) return;
                                    onClick(button.id)
                                }}>
                                {button.label}
                            </PrimaryButton>
                        );
                    default:
                        return (
                            <button
                                key={button.id}
                                {...button}
                                type="button">
                                {button.label}
                            </button>
                        );
                }
            })}
        </div>
    );
};

export default ButtonRender;
