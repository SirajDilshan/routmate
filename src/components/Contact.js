import { useNavigate } from "react-router-dom";
export const Contact = () => {
  const Navigate = useNavigate();

  const hansleSubmit = () => {
    console.log("-------");
    Navigate("/");
  };

  return (
    <>
      <div className="component">Contact</div>;
      <button onClick={hansleSubmit}>Back To Home </button>
    </>
  );
};
