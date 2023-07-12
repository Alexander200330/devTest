import React, { useEffect, useState } from 'react';
import Item from './Item';
import Header from './Header';

const Table = () => {
  const [socket, setSocket] = useState(null);
  const [data, setData] = useState([]);
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    const newSocket = new WebSocket("wss://ws.bitmex.com/realtime?subscribe=instrument,orderBookL2_25:XBTUSD");
    newSocket.onopen = () => {
      console.log("WebSocket conexión establecida");
    };
    newSocket.onmessage = (event) => {
      const { data } = JSON.parse(event.data);
      setData([...data]);
    };
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    setCombinedData((prevCombinedData) => [...data.slice(0, 10), ...prevCombinedData]);
  }, [data]);

  return (
    <>
    <Header />
    <div className="container" style={{ marginTop: '50px', textAlign: 'center', maxHeight: '500px', overflowY: 'auto' }}>
      <table style={{ margin: '0 auto', width: '800px', tableLayout: 'fixed' }}>
        <thead>
          <tr>
            <th style={{ width: '20%' }}>Price</th>
            <th style={{ width: '20%' }}>Side</th>
            <th style={{ width: '20%' }}>Size</th>
            <th style={{ width: '20%' }}>Symbol</th>
            <th style={{ width: '40%' }}>
              <span style={{ display: 'block', textAlign: 'center' }}>Timestamp</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {combinedData.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Table;
