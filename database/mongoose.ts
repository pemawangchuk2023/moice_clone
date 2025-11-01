import mongoose from "mongoose";

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
	// Debug logging
	console.log("=== Environment Debug ===");
	console.log("NODE_ENV:", process.env.NODE_ENV);
	console.log("MONGODB_URI exists:", !!process.env.MONGODB_URI);
	console.log("MONGODB_URI length:", process.env.MONGODB_URI?.length);
	console.log(
		"All env keys:",
		Object.keys(process.env).filter((key) => key.includes("MONGO"))
	);
	console.log("========================");

	const MONGODB_URI = process.env.MONGODB_URI;

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
	console.log(`Connected to database ${process.env.NODE_ENV}`);

	return cached.conn;
};
