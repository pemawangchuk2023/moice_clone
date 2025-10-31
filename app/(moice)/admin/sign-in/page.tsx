"use client"

import AdminForm from "@/components/admin/admin-form"

const SignIn = () => {
	return (
		<div className="flex justify-center items-center w-full min-h-screen">
			<div className="p-8 w-full max-w-md">
				<AdminForm type="sign-in" />
			</div>
		</div>
	)
}

export default SignIn
