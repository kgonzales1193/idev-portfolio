import { sendEmail } from "@/lib/mail";

export async function POST() {
	const sender = {
		name: "keiprojects.com",
		address: "no-reply@noreply.com",
	};

	const recipients = [
		{
			name: "Kevin Gonzales",
			address: "kgonzales1193@gmail.com",
		},
	];

	try {
		const result = await sendEmail({
			sender,
			recipients,
			subject: "",
			firstname: "",
			lastname: "",
			email: "",
			phone: "",
			service: "",
			message: "",
		});
		return Response.json({
			accepted: result.accepted,
		});
	} catch (error) {
		return Response.json(
			{
				message:
					"Sorry! We failed to send the message at this time. Please try again later.",
			},
			{ status: 500 }
		);
	}
}
