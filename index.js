const expressdemo = require("express");
const app = expressdemo()
const jwt = require("jsonwebtoken");
const port = 3000;

const Createtoken = async () => {
  const token = await jwt.sign(
    { id: "slkd23sdf4w53sd2353" },
    "mynameisparshuramsainiincoedifytechnology",
    {
      expiresIn: "2 seconds",
    }
  );
  console.log(token);
  const userver = await jwt.verify(
    token,
    "mynameisparshuramsainiincoedifytechnology"
  );
  console.log(userver);
};
Createtoken();
app.listen(port, () => {
    console.log(port);
  });