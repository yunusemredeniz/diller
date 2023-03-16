import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyBtnStyle = {
  backgroundColor: "#e5e5e5",
  border: "none",
  padding: "1rem 3rem",
  cursor: "pointer",
  borderRadius: "8px",
  marginBottom: "1rem",
};

const warnBtnStyle = {
  backgroundColor: "#F1C40F",
  border: "none",
  padding: "1rem 3rem",
  cursor: "pointer",
  borderRadius: "8px",
};

function Toastify() {
  const notify = () => toast("Wow so easy!");
  const warn = () => toast.warn("Wow so easy!");

  return (
    <main>
      <button onClick={notify} style={notifyBtnStyle}>
        Notify!
      </button>
      <button onClick={warn} style={warnBtnStyle}>
        Warn!
      </button>
      <ToastContainer />
    </main>
  );
}

export default Toastify;
