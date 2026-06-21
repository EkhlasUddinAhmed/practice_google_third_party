"use client";
import { sendGTMEvent } from "@next/third-parties/google";

const handleSendEvent = () => {
  sendGTMEvent({
    event: "writ_summit_click",
    category: "Live Conference",
    label: "Ticket Confirmation",
    ticket_code: "LAW-Summit-100",
    value: 100,
  });

  console.log("Writ Summit has been sent to Google..!!");
};
const SendEvent = () => {
  return (
    <button onClick={handleSendEvent} className="btn btn-primary">
      Writ Filling Summit
    </button>
  );
};

export default SendEvent;
