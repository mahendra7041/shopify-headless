import { type SessionOptions } from "express-session";

const sessionConfig: SessionOptions = {
  secret: process.env.SESSION_SECRET || "secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    secure: process.env.NODE_ENV === "production",
  },
};

export default sessionConfig;
