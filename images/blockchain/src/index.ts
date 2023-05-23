// App log.
import { format } from  "util";

function log(message: unknown, tag = "Info", file: NodeJS.WriteStream = process.stdout, newline = false): void {
	file.write(format("%s[%s] %s\n", newline ? "\n" : "", tag, message));
	console.log()
}

// Graceful shutdown.
process.once("SIGINT", gracefulShutdown);
process.once("SIGTERM", gracefulShutdown);

function gracefulShutdown(): void {
	log("SIGINT detected, exiting...", "Info", process.stdout, true);
	process.exit(0);
}

log("Hello World!")
