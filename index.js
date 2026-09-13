import dotenv from "dotenv";

import { initServer, defaultAdmin } from "./config/server.js";

dotenv.config();

const start = async () => {
  await initServer();
  await defaultAdmin();
};

start();