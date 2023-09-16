import { useContext } from "react";
import { SpeakerDataContext } from "../contexts/SpeakerDataContext";

export default function DeleteSpeakerButton({ id }) {
  const { deleteSpeaker } = useContext(SpeakerDataContext);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        const confirmed = confirm(
          "Are you sure you want to delete this speaker?"
        );
        if (confirmed) {
          deleteSpeaker(id);
        }
      }}
      className="btn btn-danger btn-sm"
    >
      <i className="fa fa-trash"></i>
      {" Delete "}
    </button>
  );
}
