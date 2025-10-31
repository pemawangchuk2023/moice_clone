import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseConnection {
	conn: Mongoose | null;
	promise: Promise<Mongoose> | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	cached = (global as any).mongoose = {
		conn: null,
		promise: null,
	};
}
export const connectToDatabase = async () => {
	if (cached.conn) return cached.conn;

	if (!MONGODB_URI) throw new Error("The MONGODB_URI is missing");

	cached.promise =
		cached.promise ||
		mongoose.connect(MONGODB_URI, {
			dbName: "moice_clone",
			bufferCommands: false,
		});
	cached.conn = await cached.promise;
	return cached.conn;
};
