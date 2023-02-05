import React, { useState } from "react";

import CancelIcon from "~/shared/icons/CancelIcon";
import Security from "~/components/organisms/Security";
import Button from "~/components/atoms/Button";
import { toast } from "react-hot-toast";

interface IPreQuestionModal {
  showModal: boolean;
  setShowModal: any;
}

const PreQuestionModal = ({ showModal, setShowModal }: IPreQuestionModal) => {
  const initialParams = {
    pre_question: "",
  };
  const [params, setParams] = useState(initialParams);

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleChange = (e: any) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    toast.success("Created new Pre Question!");
    console.log("Submitted!", params);
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="flex absolute inset-0 h-screen w-screen justify-center items-center bg-swell-30 bg-opacity-60">
          <div className="flex flex-col justify-center w-80 bg-white rounded shadow-xl z-50">
            {/* Heading */}
            <div className="flex justify-between pl-7 pr-4 py-2 border-b border-swell-30 text-base font-semibold">
              <h1>Add new Pre Question</h1>
              <button onClick={handleCancel}>
                <CancelIcon />
              </button>
            </div>
            <div className="flex flex-col w-full p-4 space-y-5">
              <textarea
                name="pre_question"
                id="pre_question"
                cols={30}
                rows={5}
                className="flex justify-center border-2 m-2 p-2"
                placeholder="Enter your question here.."
                onChange={handleChange}
              ></textarea>
              <div className="flex ml-auto ">
                <Button className="px-6" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreQuestionModal;
