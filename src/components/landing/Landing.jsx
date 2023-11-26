import React from "react";
import { useTarea } from "../../util/tareasContext";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate()
  const Dirigir = () =>{
    navigate("/signIn")
  }
  return (
    <div className=" bg-white flex w-full">
      <div className="grid h-auto flex-grow bg-base-300 place-items-stretch">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">HORARIO SEMANAL</h1>
              <p className="py-6">
                Aplicación con objetivo didactico que buscapermitir gestionar un
                horario semanal por el usuario.
              </p>
              <button onClick={Dirigir} className="btn btn-primary">Comenzar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid flex-grow card bg-base-300  rounded-box place-items-center">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className=""></th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miercoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
              <th>Sabado</th>
              <th>Domingo</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>6:00 am</th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>8:00 am</th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>10:00 am</th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>12:00 pm</th>
            </tr>
            {/* row 5 */}
            <tr>
              <th>2:00 pm</th>
            </tr>
            {/* row 6 */}
            <tr>
              <th>4:00 pm</th>
            </tr>
            {/* row 7 */}
            <tr>
              <th>6:00 pm</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Landing;
