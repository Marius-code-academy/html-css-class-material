// npm i -g name    - atsiuncia npm package globaliai
// npm i -D name    - atsiuncia kaip dev dependency
// npm i name - atsiuncia kaip dependency

import express from "express";

const app = express()

app.get("/labas", (req, res) => {
  res.json({
    labas : "Labas"
  })
})

app.listen(3000, () => console.log("App listening on PORT 3000"))