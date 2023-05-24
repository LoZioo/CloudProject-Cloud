// HTTP port.
const HTTP_PORT = 5090;

// App log.
import { format } from  "util";
import { stdout, stderr } from "process";

function log(message: unknown, tag = "Info", file: NodeJS.WriteStream = stdout, newline = false): void {
	file.write(format("%s[%s] %s\n", newline ? "\n" : "", tag, message));
}

// Envroiment variables.
import { env } from "process";
import assert from "assert";

try {
	assert("HTTP_ADDRESS" in env);
}
catch(e){
	log("HTTP_ADDRESS envroiment variable not set, exiting...", "Error", stderr);
	process.exit(1);
}

const HTTP_ADDRESS = env.HTTP_ADDRESS as string;

// Express server.
import express, { Express, Request, Response } from "express";

const app = express();

app.get('/', (req: Request, res: Response) => {
	res.send('Express + TypeScript Server');
});

const server = app.listen(HTTP_PORT, HTTP_ADDRESS, () => {
	log(format("Server is running at http://%s:%d", HTTP_ADDRESS, HTTP_PORT));
});

// Graceful shutdown.
process.once("SIGINT", gracefulShutdown);
process.once("SIGTERM", gracefulShutdown);

function gracefulShutdown(): void {
	log("SIGINT detected, exiting...", "Info", stdout, true);

	server.close();
	process.exit(0);
}
