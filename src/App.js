import { useCallback, useEffect, useRef, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const formEl = useRef();

  const onCloseModal = useCallback(function () {
    setOpenModal((v) => !v);
  }, []);
  console.log(formEl.current, "current");
  useEffect(
    function () {
      function callback(e) {
        if (formEl.current && !formEl?.current?.contains(e.target)) {
          console.log("closing");
          onCloseModal();
        }
        console.log(formEl.current, "current");
        console.log(e.target, "target");
      }
      document.addEventListener("click", callback, true);
    },
    [onCloseModal]
  );

  return (
    <div className="App">
      <Button name={"Open Form"} onClick={() => setOpenModal((v) => !v)} />
      {openModal && (
        <div>
          <Modal onCloseModal={onCloseModal} formEl={formEl} />
        </div>
      )}
    </div>
  );
}

export default App;
