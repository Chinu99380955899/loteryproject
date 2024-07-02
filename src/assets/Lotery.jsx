import { useState } from "react";
import "./Lotery.css"; 
import { generateTicket ,sum } from "./helper";


export default function Lotery() {
    let [ticket ,setTicket] = useState( generateTicket(3));
    let iswWinning=sum(ticket) ===15;
    let buyTicket =() =>
        {
            setTicket(generateTicket(3));
        }
  return (
    <div>
      <h1>Lottery gift</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>

      <br />
      <button onClick={buyTicket}>Buy new Ticket</button>
      <h3>{iswWinning && "Congraclution ,you won the lottery"}</h3>
    </div>
  );
}
