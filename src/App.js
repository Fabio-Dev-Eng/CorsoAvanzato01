import React, { useState, memo } from "react";
import "./styles.css";

const FINES = [
  {
    id: "1",
    type: "Sorpasso",
    amount: 258.63,
    plate: "PC89666"
  },
  {
    id: "2",
    type: "Contromano",
    amount: 2008.63,
    plate: "PC89666"
  },
  {
    id: "3",
    type: "Parcheggio sulle strisce",
    amount: 78.63,
    plate: "PC89666"
  },
  {
    id: "4",
    type: "Insulti Polizia locale",
    amount: 800.63,
    plate: "PC89666"
  }
];

export default function App() {
  const [idsSelected, setIdsSelected] = useState([]);

  const finesElements = FINES.map(fine => {
    return (
      <FineMemo
        key={fine.id}
        fine={fine}
        selected={idsSelected.includes(fine.id)}
        onSelect={setIdsSelected}
      />
    );
  });
  return (
    <table className="blueTable">
      <thead>
        <tr>
          <th>Motvazione</th>
          <th>Ammontare</th>
          <th>Targa</th>
        </tr>
      </thead>
      <tbody>{finesElements}</tbody>
    </table>
  );
}

const FineMemo = memo(Fine);

function Fine({ fine, selected, onSelect }) {
  return (
    <tr
      onClick={() =>
        !selected
          ? onSelect(prevState => {
              return [...prevState, fine.id];
            })
          : onSelect(prevState => {
              return prevState.filter(number => {
                return number !== fine.id;
              });
            })
      }
      style={selected ? { background: "aqua" } : null}
    >
      <td>{fine.type}</td>
      <td>{fine.amount}</td>
      <td>{fine.plate}</td>
    </tr>
  );
}
