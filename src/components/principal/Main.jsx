import React, { useEffect, useRef } from "react";
import { useTarea } from "../../util/tareasContext";

const Main = () => {
  const { tareas, addTareas } = useTarea();

  console.log(tareas);

  let horario = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ];
  for (let index = 0; index < tareas.length; index++) {
    switch (tareas[index].tareatemp.dia) {
      case "Lunes":
        if (tareas[index].tareatemp.hora == "6:00 am") {
          horario[0][0] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "8:00 am") {
          horario[1][0] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "10:00 am") {
          horario[2][0] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "12:00 pm") {
          horario[3][0] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "2:00 pm") {
          horario[4][0] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "4:00 pm") {
          horario[5][0] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "6:00 pm") {
          horario[6][0] = tareas[index].tareatemp.nombre;
        }
        break;
      case "Martes":
        if (tareas[index].tareatemp.hora == "6:00 am") {
          horario[0][0] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "8:00 am") {
          horario[1][1] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "10:00 am") {
          horario[2][1] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "12:00 pm") {
          horario[3][1] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "2:00 pm") {
          horario[4][1] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "4:00 pm") {
          horario[5][1] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "6:00 pm") {
          horario[6][1] = tareas[index].tareatemp.nombre;
        }
        break;
      case "Miercoles":
        if (tareas[index].tareatemp.hora == "6:00 am") {
          horario[0][2] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "8:00 am") {
          horario[1][2] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "10:00 am") {
          horario[2][2] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "12:00 pm") {
          horario[3][2] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "2:00 pm") {
          horario[4][2] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "4:00 pm") {
          horario[5][2] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "6:00 pm") {
          horario[6][2] = tareas[index].tareatemp.nombre;
        }
        break;
      case "Jueves":
        if (tareas[index].tareatemp.hora == "6:00 am") {
          horario[0][3] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "8:00 am") {
          horario[1][3] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "10:00 am") {
          horario[2][3] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "12:00 pm") {
          horario[3][3] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "2:00 pm") {
          horario[4][3] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "4:00 pm") {
          horario[5][3] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "6:00 pm") {
          horario[6][3] = tareas[index].tareatemp.nombre;
        }
        break;
      case "Viernes":
        if (tareas[index].tareatemp.hora == "6:00 am") {
          horario[0][4] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "8:00 am") {
          horario[1][4] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "10:00 am") {
          horario[2][4] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "12:00 pm") {
          horario[3][4] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "2:00 pm") {
          horario[4][4] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "4:00 pm") {
          horario[5][4] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "6:00 pm") {
          horario[6][4] = tareas[index].tareatemp.nombre;
        }
        break;
      case "Sabado":
        if (tareas[index].tareatemp.hora == "6:00 am") {
          horario[0][5] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "8:00 am") {
          horario[1][5] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "10:00 am") {
          horario[2][5] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "12:00 pm") {
          horario[3][5] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "2:00 pm") {
          horario[4][5] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "4:00 pm") {
          horario[5][5] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "6:00 pm") {
          horario[6][5] = tareas[index].tareatemp.nombre;
        }
        break;
      case "Domingo":
        if (tareas[index].tareatemp.hora == "6:00 am") {
          horario[0][6] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "8:00 am") {
          horario[1][6] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "10:00 am") {
          horario[2][6] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "12:00 pm") {
          horario[3][6] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "2:00 pm") {
          horario[4][6] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "4:00 pm") {
          horario[5][6] = tareas[index].tareatemp.nombre;
        }
        if (tareas[index].tareatemp.hora == "6:00 pm") {
          horario[6][6] = tareas[index].tareatemp.nombre;
        }
        break;

      default:
        break;
    }
  }

  const myRef = useRef();

  useEffect(() => {
    const myElement = myRef.current;
    for (let index = 0; index < 49; index++) {
      myElement.getElementsByTagName("td")[index].className = "";
    }

    for (let index = 0; index < 49; index++) {
      if (myElement.getElementsByTagName("td")[index].innerText != "") {
        myElement.getElementsByTagName("td")[index].className = "bg-[#50d71e]";
      }
    }
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table" ref={myRef}>
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
            <td> {horario[0][0]}</td>
            <td> {horario[1][0]}</td>
            <td> {horario[2][0]}</td>
            <td> {horario[3][0]}</td>
            <td> {horario[4][0]}</td>
            <td> {horario[5][0]}</td>
            <td> {horario[6][0]}</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>8:00 am</th>
            <td> {horario[0][1]}</td>
            <td> {horario[1][1]}</td>
            <td> {horario[2][1]}</td>
            <td> {horario[3][1]}</td>
            <td> {horario[4][1]}</td>
            <td> {horario[5][1]}</td>
            <td> {horario[6][1]}</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>10:00 am</th>
            <td> {horario[0][2]}</td>
            <td> {horario[1][2]}</td>
            <td> {horario[2][2]}</td>
            <td> {horario[3][2]}</td>
            <td> {horario[4][2]}</td>
            <td> {horario[5][2]}</td>
            <td> {horario[6][2]}</td>
          </tr>
          {/* row 4 */}
          <tr>
            <th>12:00 pm</th>
            <td> {horario[0][3]}</td>
            <td> {horario[1][3]}</td>
            <td> {horario[2][3]}</td>
            <td> {horario[3][3]}</td>
            <td> {horario[4][3]}</td>
            <td> {horario[5][3]}</td>
            <td> {horario[6][3]}</td>
          </tr>
          {/* row 5 */}
          <tr>
            <th>2:00 pm</th>
            <td> {horario[0][4]}</td>
            <td> {horario[1][4]}</td>
            <td> {horario[2][4]}</td>
            <td> {horario[3][4]}</td>
            <td> {horario[4][4]}</td>
            <td> {horario[5][4]}</td>
            <td> {horario[6][4]}</td>
          </tr>
          {/* row 6 */}
          <tr>
            <th>4:00 pm</th>
            <td> {horario[0][5]}</td>
            <td> {horario[1][5]}</td>
            <td> {horario[2][5]}</td>
            <td> {horario[3][5]}</td>
            <td> {horario[4][5]}</td>
            <td> {horario[5][5]}</td>
            <td> {horario[6][5]}</td>
          </tr>
          {/* row 7 */}
          <tr>
            <th>6:00 pm</th>
            <td> {horario[0][6]}</td>
            <td> {horario[1][6]}</td>
            <td> {horario[2][6]}</td>
            <td> {horario[3][6]}</td>
            <td> {horario[4][6]}</td>
            <td> {horario[5][6]}</td>
            <td> {horario[6][6]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Main;
