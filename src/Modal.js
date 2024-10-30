import CreateUser from "./CreateUser";

function Modal({ onCloseModal, formEl }) {
  return (
    <div className="overlay">
      <div className="modal">
        <CreateUser onCloseModal={onCloseModal} formEl={formEl} />
      </div>
    </div>
  );
}

export default Modal;
