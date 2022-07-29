import React, { useState } from "react";
//import "./Style.css";
function RecieptDetail() {
  const [detail, setdetail] = useState({
    date: "",
    amount: "",
    // paymentmode: "cash",
    remark: "",
  });
  const [record, setrecord] = useState([]);
  const [pmode, setpmode] = useState();

  const handlePayment = (e) => {
    const pvalue = e.target.value;
    setpmode(pvalue);

    console.log(pvalue);
  };

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name);
    setdetail({ ...detail, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(record);
    const newReacord = {
      ...detail,
      pmode,
      id: new Date().getDate().toString(),
    };
    setrecord([...record, newReacord]);
    setdetail({ date: "", paymentmode: "", amount: "", remark: "" });
    console.log(record);
  };

  return (
    <div className>
      <h3>Reciept Details</h3>
      <form action="Reciept Details" onSubmit={handlesubmit}>
        <div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              value={detail.date}
              onChange={handleinput}
              name="date"
              id="date"
            />
          </div>
          <div>
            <label htmlFor="amount">Amount </label>
            <input
              placeholder="Enter Amount"
              type="number"
              value={detail.amount}
              onChange={handleinput}
              name="amount"
              id="amount"
            />
          </div>
          <div>
            <label htmlFor="Payment mode">
              Payment mode
              <select
                value={pmode}
                onchange={handlePayment}
                name="paymentmode"
                id="paymentmode"
              >
                <option value="Card">Card</option>
                <option value="Cash">Cash</option>
                <option value="Netbanking ">Netbanking</option>
                <option value="UPI">UPI</option>
              </select>
            </label>
          </div>

          <div>
            <label htmlFor="remark">remark</label>
            <input
              placeholder="Enter Remark"
              type="text"
              value={detail.remark}
              onChange={handleinput}
              name="remark"
              id="remark"
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>

      <div className="table1">
        <table>
          <tr>
            <th>Date</th>
            <th>Payment Mode</th>
            <th>Amount</th>
            <th>Remark</th>
          </tr>

          {record.map((curElem) => {
            return (
              <tr key={curElem.id}>
                <td>{curElem.date}</td>
                <td>{curElem.pmode}</td>
                <td>{curElem.amount}</td>
                <td>{curElem.remark}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default RecieptDetail;
