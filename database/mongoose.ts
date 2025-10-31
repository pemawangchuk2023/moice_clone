import mongoose from "mongoose";

const dbName = "moice_clone";
const MONGODB_URI = `${process.env.MONGODB_URI}/${dbName}`;

declare global {
	var mongooseCache: {
		conn: typeof mongoose | null;
		promise: Promise<typeof mongoose> | null;
	};
}

let cached = global.mongooseCache;

if (!cached) {
	cached = global.mongooseCache = {
		conn: null,
		promise: null,
	};
}

export const connectToDatabase = async () => {
	if (!MONGODB_URI) throw new Error("MONGODB_URI must be set within .env");

	if (cached.conn) return cached.conn;
	if (!cached.promise) {
		cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false });
	}

	try {
		cached.conn = await cached.promise;
	} catch (error) {
		cached.promise = null;
		throw error;
	}

	console.log(`Connected to database "${dbName}" using URI: ${MONGODB_URI}`);
	return cached.conn;
};
