const express = require("express");

const app = express();

app.use(express.json());

const users  =[]

let user = {
  id: "b096d4f3-c30d-465b-9887-5a45db26a13f",
  gender: "M",
  status: "APPROVED",
  lastName: "Pay",
  password: "xxxxxxxx",
  photoUrl: null,
  email: "develper@ileero.com",
  firstName: "Ileero",
  phoneNumber: "+447809284029",
  createdDateTime: "2021-03-09T12:53:38",
  modifiedDateTime: "2023-05-30T16:41:48",
};


let transaction = {
  type: "DEBIT",
  status: {
    label: "Completed",
    value: "COMPLETED",
  },
  userId: "bf871a29-c61a-4ea0-a806-c09b0faaa2d1",
  firstName: "Austine",
  remittance: {
    ask: "940",
    bid: "935",
    fee: {
      amount: "18.00",
    },
  },
  pay: {
    amount: "618.00",
  },
  remit: {
    amount: "600",
  },
  purpose: "Family Maintenance",
  settlement: {
    amount: "564000",
  },
  paymentMethod: "PAYMENT_GATEWAY",
  deliveryMethod: {
    fees: {
      amount: 3,
    },
    label: "Bank Deposit",
  },
  sourceCurrency: {
    currencyCode: "GBP",
    currencyName: "UK",
  },
  sourceOfIncome: "Business Income",
  targetCurrency: {
    currencyCode: "NGN",
    currencyName: "Nigerian Naira",
  },
  beneficiary: {
    lastName: "Joseph",
    firstName: "Omolayo",
    bankDetails: {
      accountNumber: "1234567890",
    },
  },
  referenceNo: "ILEERO74373106",
  emailAddress: "beneficiary@ileero.com",
  paymentStatus: {
    label: "Payment Authorised",
    value: "PAYMENT_AUTHORISED",
  },
  transactionId: "9da19bf7-e870-4ed3-9396-cd7ecda979cd",
  paymentGateway: "ILEERO",
  creationDateTime: "2023-05-30T17:08:40",
  modifiedDateTime: "2023-05-30T17:14:59",
};

// GET: Returns a user JSON
app.get("/user/:id", (req, res) => {
  res.json(user);
});

// GET: Returns a transaction JSON
app.get("/transaction/:id", (req, res) => {

  res.json(transaction);
});

// POST: Make Payment Success
app.post("/payment/success", (req, res) => {
  // update transaction status to 'success'
  transaction.status = { label: "Payment Success", value: "PAYMENT_SUCCESS" };
  res.status(200).send({ status: "success" });
});

// POST: Make Payment Fail
app.post("/payment/fail", (req, res) => {
  // update transaction status to 'fail'
  transaction.status = { label: "Payment Failed", value: "PAYMENT_FAIL" };
  res.status(400).send({ status: "fail" });
});

// POST: Save transaction
app.post("/transaction/:id", (req, res) => {
  // save the transaction data
  transaction = {
    ...transaction,
    ...req.body
  };
  res
    .status(200)
    .send({ status: "success", transactionId: transaction.transactionId });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
