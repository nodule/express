var app = express();

output = { app: app, express: express };

// the process listening doesn't really belong here.
// but for now it's convenient because it allows to
// restart the flow, probably restart will only work
// if you re-start the flow twice.
// I should expose these events and let one specify
// what to do during these events.

function close() {
  app.close();
}

// on kill 
process.on('SIGTERM', close);

// on crash
process.on('uncaughtException', close);

