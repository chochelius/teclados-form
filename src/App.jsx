import "./App.css";
import { useState } from "react";

//crea un array de 10 productos de restaurantes con los siguientes campos:
// - id
// - nombre
// - cantidad inicial = ""
// - cantidad existente = ""
function App() {
  const productos = [
    {
      id: 1,
      nombre: "Hamburguesa",
      cantidadInicial: "",
      cantidadExistente: "",
    },
    { id: 2, nombre: "Pizza", cantidadInicial: "", cantidadExistente: "" },
    {
      id: 3,
      nombre: "Papas Fritas",
      cantidadInicial: "",
      cantidadExistente: "",
    },
    { id: 4, nombre: "Hot Dog", cantidadInicial: "", cantidadExistente: "" },
    { id: 5, nombre: "Tacos", cantidadInicial: "", cantidadExistente: "" },
    { id: 6, nombre: "Burritos", cantidadInicial: "", cantidadExistente: "" },
    { id: 7, nombre: "Ensalada", cantidadInicial: "", cantidadExistente: "" },
    {
      id: 8,
      nombre: "Pollo Frito",
      cantidadInicial: "",
      cantidadExistente: "",
    },
    { id: 9, nombre: "Alitas", cantidadInicial: "", cantidadExistente: "" },
    {
      id: 10,
      nombre: "Costillas BBQ",
      cantidadInicial: "",
      cantidadExistente: "",
    },
  ];

  // crea un estado para guardar los productos actualizados
  const [productos1, setProductos] = useState(productos);

  return (
    <>
      {/* crea una tabla con clases bootstrap usando un fondo oscuro y letras blancas de 5 columnas, la primera es id, la segunda es el nombre del producto, la tercera columna debe decir en el encabezado cantidad inicial y la última cantidad existente, parte explicando con un texto diciendo que es la tabla de inventario y debe llenarse al final de cada turno */}
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Inventario</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-center">
              Esta tabla debe llenarse al final de cada turno
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-5">
            <table className="table table-dark table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nombre Producto</th>
                  <th scope="col">Cantidad Inicial</th>
                  <th scope="col">Cantidad Existente</th>
                </tr>
              </thead>
              <tbody>
                {/* haz el render directamente de la lista de productos */}
                {productos1.map((producto) => (
                  <tr key={producto.id}>
                    <td>{producto.id}</td>
                    <td>{producto.nombre}</td>
                    <td>
                      <input
                        type="number"
                        id={`cantidadInicial${producto.id}`}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id={`cantidadExistente${producto.id}`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="row">
              <div className="col">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    const productosActualizados = productos.map((producto) => {
                      const cantidadInicial = document.getElementById(
                        `cantidadInicial${producto.id}`
                      ).value;
                      const cantidadExistente = document.getElementById(
                        `cantidadExistente${producto.id}`
                      ).value;
                      return {
                        ...producto,
                        cantidadInicial,
                        cantidadExistente,
                      };
                    });
                    setProductos(productosActualizados);
                    alert("Inventario actualizado");
                  }}
                >
                  Actualizar Inventario
                </button>
                <p>nuevo inventario: {JSON.stringify(productos1, null, 2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
