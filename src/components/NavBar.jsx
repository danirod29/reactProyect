import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../config/AuthContex";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleClick = async () => {
    try {
      await logout();
      toast.success("Logged out successfully", {
        duration: 3000,
      });
      setTimeout(() => {
        navigate("/signIn");
      }, 4000);
    } catch (error) {
      toast.error(error.message, {
        duration: 3000,
      });
    }
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/inicio" className="btn btn-ghost text-xl">Horario</Link>
      </div>
      <div className="flex-none gap-2">
        
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
          { user ? (
            <li>
            <a onClick={handleClick}>Cerrar Sesión</a>
          </li>
          ) : (
            <>
            <li>
            <Link to="/signIn">Iniciar Sesión</Link>
            </li>
            <li>
            <Link to="/signUp">Registrarse</Link>
            </li>
            </>
          )
          }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
