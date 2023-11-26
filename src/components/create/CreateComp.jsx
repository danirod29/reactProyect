import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import { useTarea } from "../../util/tareasContext";

const CreateComp = () => {
  const navigate = useNavigate();
  const { tareas, addTareas } = useTarea();

  const [tareatemp, setTareatemp] = useState({
    nombre: "",
    hora: "",
    dia: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTareatemp({
      ...tareatemp,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!tareatemp.nombre.trim()) {
      validationErrors.nombre = "nombre es requerido";
    }
    if (!tareatemp.hora.trim()) {
      validationErrors.nombre = "hora es requerida";
    }
    if (!tareatemp.dia.trim()) {
      validationErrors.nombre = "dia es requerida";
    }

    setErrors(validationErrors);
    console.log(tareatemp);
    addTareas({
        tareatemp
    })

    console.log(tareas)
    toast.success("Tarea Creada", {
      duration: 3000,
    });
  };

  return (
    <div>
      <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Crear Tarea
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium leading-5 text-gray-900"
                >
                  Nombre de la tarea
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <select
                  className="select w-full max-w-xs"
                  id="hora"
                  name="hora"
                  onChange={handleChange}
                >
                  <option disabled selected>
                    Hora
                  </option>
                  <option>6:00 am</option>
                  <option>8:00 am</option>
                  <option>10:00 am</option>
                  <option>12:00 pm</option>
                  <option>2:00 pm</option>
                  <option>4:00 pm</option>
                  <option>6:00 pm</option>
                </select>
              </div>

              <div>
                <select
                  className="select w-full max-w-xs"
                  id="dia"
                  name="dia"
                  onChange={handleChange}
                >
                  <option disabled selected>
                    Dia
                  </option>
                  <option>Lunes</option>
                  <option>Martes</option>
                  <option>Miercoles</option>
                  <option>Jueves</option>
                  <option>Viernes</option>
                  <option>Sabado</option>
                  <option>Domingo</option>
                </select>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Crear Tarea
                </button>
              </div>
            </form>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default CreateComp;
