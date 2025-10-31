"use client"

import AdminForm from "@/components/admin/admin-form"

const SignUp = () => {
	return (
		<div className="flex justify-center items-center w-full min-h-screen">
			<div className="p-8 w-full max-w-3xl">
				<AdminForm type="sign-up" />
			</div>
		</div>
	)
}

export default SignUp
