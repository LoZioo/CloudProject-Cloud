// HTTP port.
const HTTP_PORT = 5090;

// Cloud block.
interface CloudBlock_t {
	VA:					Array<number>,
	W:					Array<number>,

	timestamp:	string,
	hash:				string,
}

/**
 * Check if obj is a CloudBlock_t object (check keys only, not values).
 * @param obj
 * @returns obj is CloudBlock_t
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function is_CloudBlock_t(obj: any): obj is CloudBlock_t {
	const testObj: CloudBlock_t = {
		VA: [],
		W: [],
		timestamp: "",
		hash: ""
	};

	const keys = Object.keys(testObj);
	return keys.every(key => key in obj);
}

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
import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());		// Now Express can decode the application/json body inside req.body.

app.get("/", (req: Request, res: Response) => {
	// Available endpoints.
	const endpoints = {
		service: "add-block",
		endpoints: [
			{
				endpoint:			"/add",
				method:				"post",
				description:	"Add the hash and the timestamp of a CloudBlock_t object to the blockchain."
			}
		]
	};

	// Send response.
	res.contentType("application/json");
	res.send(JSON.stringify(endpoints));
});

app.post("/add-block", (req: Request, res: Response) => {
	const block: CloudBlock_t = req.body;

	try {
		assert(is_CloudBlock_t(block));
	}

	catch(e){
		res.sendStatus(400);
		return;
	}

	log(format("Received block from %s:%d.", req.ip, req.socket.remotePort));
	res.sendStatus(200);
});

const server = app.listen(HTTP_PORT, HTTP_ADDRESS, () => {
	log(format("Server is running at http://%s:%d.", HTTP_ADDRESS, HTTP_PORT));
});

// Graceful shutdown.
process.once("SIGINT", gracefulShutdown);
process.once("SIGTERM", gracefulShutdown);

function gracefulShutdown(): void {
	log("SIGINT detected, exiting...", "Info", stdout, true);

	server.close();
	process.exit(0);
}

// Main.
log("I'm the blockchain!");
