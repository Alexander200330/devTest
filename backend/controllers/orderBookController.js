import OrderBook from "../models/OrderBook.js";

const obtenerOrderBook = async (req, res) => {
  try {
    const orderBooks = await OrderBook.find();
    res.json(orderBooks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error al obtener los OrderBooks" });
  }
};

const creandoOrderBook = async (req, res) => {
  try {
    const orderBook = new OrderBook(req.body);
    const orderBookAlmacenado = await orderBook.save();
    res.json(orderBookAlmacenado);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear el OrderBook" });
  }
};

export { obtenerOrderBook, creandoOrderBook };
