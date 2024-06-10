import { useNavigate, Outlet } from "react-router-dom";
export const Contact = () => {
  const Navigate = useNavigate();

  const hansleSubmit = () => {
    console.log("-------");
    Navigate("/");
  };

  return (
    <main>
      <div className="component">Contact</div>;
      <Outlet />
      <button onClick={hansleSubmit}>Back To Home </button>
    </main>
  );
};
