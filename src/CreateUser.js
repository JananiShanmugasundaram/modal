import Button from "./Button";

function CreateUser({ onCloseModal, formEl }) {
  return (
    <div className="form" ref={formEl}>
      <button
        style={{ position: "absolute", right: "5px" }}
        onClick={onCloseModal}
      >
        X
      </button>
      <label htmlFor="name">Name</label>&nbsp;&nbsp;
      <input name="name" type="text" size={30} />
      <hr />
      <label htmlFor="age">Age</label>&nbsp;&nbsp;
      <input name="age" type="text" size={30} />
      <hr />
      <label htmlFor="address">Address</label>&nbsp;&nbsp;
      <input name="address" type="text" size={30} />
      <hr />
      <Button name={"Add User"} />
    </div>
  );
}

export default CreateUser;
