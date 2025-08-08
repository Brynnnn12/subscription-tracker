/* eslint-disable no-undef */
import { config } from "dotenv";

// Menggunakan template literal untuk menentukan path file .env
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { PORT, NODE_ENV, DB_URI } = process.env;
