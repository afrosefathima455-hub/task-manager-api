import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ background: "#333", padding: "10px" }}>
      <Link to="/" style={{ color: "white", marginRight: "16px" }}>
        Home
      </Link>
      {!token && (
        <>
          <Link to="/login" style={{ color: "white", marginRight: "16px" }}>
            Login
          </Link>
          <Link to="/signup" style={{ color: "white", marginRight: "16px" }}>
            Signup
          </Link>
        </>
      )}
      {token && (
        <button onClick={handleLogout} style={{ marginLeft: "16px" }}>
          Logout
        </button>
      )}
    </nav>
  );
}