const nodemailer = require("nodemailer");

const changedFiles = process.argv[2]?.trim() || "No files changed.";
const newFiles = process.argv[3]?.trim() || "No new files added.";

const sendMail = async () => {
    console.log("📤 Sending email...");

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "teeshakakkar2004@gmail.com",  // Replace with your email
        subject: "📂 Models Folder Update Detected",
        text: `🚨 Changes detected in the models folder:\n\n📝 Changed Files:\n${changedFiles}\n\n🆕 Newly Created Files:\n${newFiles}`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent:", info.response);
    } catch (error) {
        console.error("❌ Failed to send email:", error);
        process.exit(1);
    }
};

sendMail();
