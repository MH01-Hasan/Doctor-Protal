import React from "react";

const ConfarmationModal = ({
  titel,
  massage,
  closeModel,
  modeldata,
  Success,
}) => {
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{titel}</h3>
          <p className="py-4">{massage}</p>
          <div className="modal-action">
            <label
              onClick={() => Success(modeldata)}
              htmlFor="my-modal"
              className="btn btn-success"
            >
              Yes
            </label>
            <button onClick={closeModel} className="btn btn-error">
              Cencel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfarmationModal;
