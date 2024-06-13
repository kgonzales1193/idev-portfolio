import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transport = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	secure: process.env.NODE_ENV !== "development",
	auth: {
		user: process.env.MAIL_USERNAME,
		pass: process.env.MAIL_PASSWORD,
	},
} as SMTPTransport.Options);

type SendEmailDto = {
	sender: Mail.Address;
	recipients: Mail.Address[];
	subject: string;
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	message: string;
};

export const sendEmail = async (dto: SendEmailDto) => {
	const {
		sender,
		recipients,
		subject,
		firstname,
		lastname,
		email,
		phone,
		message,
	} = dto;

	return await transport.sendMail({
		from: sender,
		to: recipients,
		subject: subject,
		html: `
      <p>First Name: ${firstname}</p>
      <p>Last Name: ${lastname}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
	});
};
