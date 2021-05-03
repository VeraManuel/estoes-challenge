const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const config = require("../../config");
const projectRoute = require("../../routes/projects");
const userRoute = require("../../routes/users");
const logger = require("../logger");

class ExpressServer {
  constructor() {
    this.app = express();
    this.port = config.port;
    this.basePathProjects = config.api.prefix + "/projects";
    this.basePathUsers = config.api.prefix + "/users";

    this._middlewares();

    this._routes();

    this._notFound();
    this._errorHandler();
  }

  _middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(morgan("tiny"));
  }

  _routes() {
    this.app.head("/status", (req, res) => {
      res.status(200).end();
    });

    this.app.use(`${this.basePathProjects}`, projectRoute);
    this.app.use(`${this.basePathUsers}`, userRoute);
  }

  _notFound() {
    this.app.use((req, res, next) => {
      const error = new Error("Not Found");
      error.code = 404;
      next(error);
    });
  }

  _errorHandler() {
    this.app.use((err, req, res, next) => {
      const code = err.code || 500;

      const body = {
        error: {
          code,
          message: err.message,
          detail: err.data,
        },
      };

      res.status(code).json(body);
    });
  }

  async start() {
    this.app.listen(this.port, (error) => {
      if (error) {
        logger.error(error);
        process.exit(1);
      }
    });
  }
}

module.exports = ExpressServer;
