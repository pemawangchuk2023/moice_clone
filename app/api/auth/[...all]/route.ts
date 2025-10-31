import { getAuth } from "@/lib/auth";

export const GET = async (request: Request) => {
	const auth = await getAuth();
	return auth.handler(request);
};

export const POST = async (request: Request) => {
	const auth = await getAuth();
	return auth.handler(request);
};
