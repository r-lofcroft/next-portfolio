import React, { useState } from "react";
interface ChildProps {
  onStateChange: (newState: boolean) => void;
}
const Contact: React.FC<ChildProps> = ({ onStateChange }) => {
  const [parentModalState, closeParentModal] = useState<boolean>(false);

  const toggleState = () => {
    const newState = !parentModalState;
    closeParentModal(newState);
    onStateChange(newState);
  };

  const confirmCallback = (callback: any) => {
    if (callback) {
      toggleState();
    }
  };

  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    //Server side masked key
    formData.append("access_key", "f9298845-6311-408d-bd76-0f2d275dc05d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();

    confirmCallback(() => {
      if (result.success) {
        toggleState();
        console.log(result);
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 p-2 w-full border rounded-md text-black"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 p-2 w-full border rounded-md text-black"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="mt-1 p-2 w-full border rounded-md text-black"
            placeholder="Your Message"
          ></textarea>
        </div>
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </>
  );
};
export default Contact;
