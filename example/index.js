const { createLogger, format, transports, config } = require("winston");
const winstonDevConsole = require("../dist/index.js").default;

const util = require('util')
require('dotenv').config()

const excessivelyLargeObjectToLog = require('./largeObject.js');

// Standard logger with syslog log levels. Will show meta as stringified objects
let logger = winstonDevConsole.init(
  createLogger({
    levels: config.syslog.levels,
    level: "debug",
    transports: winstonDevConsole.transport({
      showTimeStamps: true,
      addLineSeparation: true,
      logLevels: config.syslog.levels,
      basePath: process.env.BASEPATH
    })
  })
)

// Logger for table output instead of stringified objects. Uses cli log levels
let tableLogger = winstonDevConsole.init(
  createLogger({
    levels: config.cli.levels,
    level: "silly",
    transports: winstonDevConsole.transport({
      showTimeStamps: false,
      addLineSeparation: true,
      logLevels: config.cli.levels,
      table: true,
      basePath: process.env.BASEPATH
    })
  })
)

// Omitting logLevels defaults to npm levels. Will log without meta, while still allowing you to capture meta inputs into a log file
let fileLogger = winstonDevConsole.init(
  createLogger({
    levels: config.npm.levels,
    level: "warn",
    transports: [
      winstonDevConsole.transport({
        addLineSeparation: true,
        showMeta: false,
        logLevels: config.npm.levels,
        basePath: process.env.BASEPATH
      }),
      new transports.File({
        filename: './example/logs.log',
        levels: config.npm.levels,
        level: 'silly',
        format: format.combine(
            format.errors({ stack: true }),
            format.timestamp(),
            format.json(),
            format.prettyPrint()
        )
      })
    ]
  })
)

logger.notice("Go to ./example/index.js for this code for these outputs");
logger.debug("Debug an object", { make: "Ford", model: "Mustang", year: 1969 });
logger.info("Returned value", { value: util.format });
logger.crit("Information", {
  options: ["Lorem ipsum", "dolor sit amet"],
  values: ["Donec augue eros, ultrices."],
});
logger.warning("Warning");
logger.emerg(new Error("Unexpected error"));



tableLogger.debug("Cross Table", [
    { head: [ '', 'Top Header 1', 'Top Header 2' ] },
    { 'Left Header 1': [ 'Value Row 1 Col 1', 'Value Row 1 Col 2' ] },
    { 'Left Header 2': [ 'Value Row 2 Col 1', 'Value Row 2 Col 2' ] }
]);
tableLogger.info("Horizontal Table", [
    {head: ['TH 1 label', 'TH 2 label'], colWidths: [25, 25]},
    ['First value', 'Second value'],
    ['First value', 'Second value']
]);
tableLogger.verbose("Vertical Table", [
    {},
    { 'Some key': 'Some value' },
    { 'Another key': 'Another value' }
]);


// Check the log files to see the output. It should be in the same folder as the present working directory of the terminal
fileLogger.silly('This is not severe enough to log to console, but logs to file', excessivelyLargeObjectToLog)

fileLogger.error('The fileLogger always logged to logs.log, even if not logging to console. Excessively large meta object does not log to console with showMeta set false', excessivelyLargeObjectToLog)