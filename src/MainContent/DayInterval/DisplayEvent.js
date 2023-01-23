import React, { useContext } from "react";
import "./DisplayEvent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { DataContext } from "../../DataContext/DataContext";
import { ServiceContext } from "../../DataContext/Services";
import DeleteModal from "../Modal/DeleteModal";
import CreateUpdateModal from "../Modal/CreateUpdateModal";
const DisplayEvent = () => {
    const {
        event,
        currentDate,
        setIsEditEvent,
        setOpenCreateModal,
        OpenCreateModal,
        setIsId,
    } = useContext(DataContext);
    const { setOpenDeleteModal, openDeleteModal } = useContext(ServiceContext);
    const handleDelete = (id) => {
        setIsId(id);
        setOpenDeleteModal(true);
    };
    const handleEdit = (editId) => {
        const filteredEvent = event.filter((item) => {
        return item.id === editId;
        });
        setIsEditEvent(filteredEvent);
        setOpenCreateModal(true);
    };
    return (
        <div>
        {event.map((item) => {
            const start = moment(item.startTimeHrMin, "DD-MM-YYYY HH:mm");
            const end = moment(item.endTimeHrMin, "DD-MM-YYYY HH:mm");
            const result = end.diff(start, "minutes");
            const eventHeight = (result / 60) * 45;
            const topHr = parseInt(item.startTimeHrMin.slice(11, 13));
            const topMin = (parseInt(item.startTimeHrMin.slice(14, 16)) / 60) * 45.8;
            const isSelectedDate =
            currentDate.toISOString().slice(0, 10) ===
            item.eventDate.slice(0, 10);
            return (
            <div className="event-wrapper">
                <div
                className={
                    isSelectedDate
                    ? eventHeight >= 11.25
                        ? "display-event"
                        : "enlarge"
                    : "none"
                }
                style={{
                    height: eventHeight,
                    top: topHr * 45.8 + topMin + 45.8,
                    padding: "0px",
                }}
                >
                <span className="event-name-day-view">
                    {isSelectedDate && item.eventName}
                </span>
                <div className="delete-update-icon">
                    <span>
                    <FontAwesomeIcon
                        className="icon"
                        icon={faTrash}
                        onClick={() => handleDelete(item.id)}
                    />
                    </span>
                    <span>
                    <FontAwesomeIcon
                        className="icon"
                        icon={faPencil}
                        onClick={() => handleEdit(item.id)}
                    />
                    </span>
                </div>
                </div>
            </div>
            );
        })}
        {openDeleteModal && <DeleteModal />}
        {OpenCreateModal && <CreateUpdateModal />}
        </div>
    );
};
export default DisplayEvent;
