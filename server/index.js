const express = require("express");
const cors = require("cors");
require("./config/connection");

const { PORT } = require("dotenv").config().parsed;
const app = express();

app.use(express.json());
app.use(cors({origin: 'http://localhost:3000',}));

const CommuneRouter = require("./classes/commune/router");
const EtablissementRouter = require("./classes/etablissement/router");

app.use("/api/communes", CommuneRouter);
app.use("/api/etablissements", EtablissementRouter);

app.listen(PORT, () => console.log(`server raning in port ${PORT}  => ^_^`));
