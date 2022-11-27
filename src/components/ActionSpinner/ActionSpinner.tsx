import { PuffLoader } from "react-spinners";
import { ApplicationState } from "../../reducers";
import { useAppSelector } from "../../store";
import "./actionSpinner.css";

const ActionSpinner = () => {
    const pendingTasks = useAppSelector((state: ApplicationState) => state.globalEvents.pendingTasks);

    return (
        <div className={pendingTasks > 0 ? "showActionSpinner" : "hideActionSpinner"} key="spinner">
            <PuffLoader loading={pendingTasks > 0} size={150} />
        </div>
    );
};

export default ActionSpinner;
