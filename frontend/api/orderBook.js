export const enviarDatosABaseDeDatos = async (data) => {
    try {
      // Extraer solo las propiedades deseadas del objeto
      const { id, price, side, size, symbol, timestamp } = data;
  
      const datosDeseados = {
        id,
        price,
        side,
        size,
        symbol,
        timestamp
      };
  
      const response = await fetch("http://localhost:4000/api/orderbooks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosDeseados),
      });
  
      if (!response.ok) {
        throw new Error("Error al enviar los datos a la base de datos");
      }
  
      const responseData = await response.json();
      console.log("Datos enviados correctamente a la base de datos:", responseData);
    } catch (error) {
      console.error("Error al enviar los datos a la base de datos:", error);
    }
  };
  