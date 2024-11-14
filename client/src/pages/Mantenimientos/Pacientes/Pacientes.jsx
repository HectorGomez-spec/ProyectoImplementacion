import React from "react";
import Tabla from "../../../components/Mantenimientos/Tabla";
import { Formulario } from "./Form";
import { useEffect, useState } from "react";
import axios from "../../../api/axios";
import { useAppContext } from "../../../context/AppContext";
import { toast } from "sonner";
const columnas = [
  { id: "NOMBRE", label: "Nombre", minWidth: 100 },
  { id: "EDAD", label: "Edad", minWidth: 100 },
  { id: "FECHA_NACIMIENTO", label: "Fecha de Nacimiento", minWidth: 100 },
  { id: "TELEFONO", label: "Telefono", minWidth: 100 },
  { id: "IDENTIDAD", label: "Identidad", minWidth: 100 },
  { id: "SALA", label: "Sala", minWidth: 100 },
  { id: "DIAGNOSTICO", label: "Diagnostico", minWidth: 100 },
  { id: "Acciones", label: "Acciones", minWidth: 100 },

];

const Usuarios = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {setRows,rows,user} = useAppContext();

  async function getData() {
    try {
      const response = await axios.get("/getPacientes");
      setRows(response.data);
  
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    document.title = "Pacientes";
    getData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const deleteRequest = async (id) => {
    try {
      let tabla = rows.filter((data) => {
        return data.ID !== id;
      });
      const resp =  await axios.delete(`/eliminarPaciente/${id}`);
      setRows(tabla);
      await axios.post('/insertBitacora', {Accion: `${user[0][0].NOMBRE} eliminó un paciente`});
      toast.success(resp.data);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const filteredData = rows?.filter(
    (item) =>
      item.NOMBRE?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.TELEFONO?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.CORREO?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.DIRECCION?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.EDAD?.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="center w-100">
      <Tabla
        columns={columnas}
        rows={rows}
        formulario={Formulario}
        filteredData={filteredData}
        deleteRequest={deleteRequest}
        handleSearchChange={handleSearchChange}
        searchTerm={searchTerm}
        modalBtnValue={'Nuevo'}
        permisoConsulta={true}
        permisoActualizar={true}
        permisoEliminar={true}
      />
    </div>
  );
};

export default Usuarios;