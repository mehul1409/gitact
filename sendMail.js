const nodemailer = require("nodemailer");

// Get arguments from workflow
const changedFiles = process.argv[2]?.trim() || "No files changed.";
const newFiles = process.argv[3]?.trim() || "No new files added.";
const diffOutput = process.argv[4]?.trim() || "No diff available.";



const sendMail = async () => {
    console.log("📤 Sending email...");

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "mehulbansalswm1234@gmail.com",
            pass: "qwlr zrds vlpv mmfe",
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "teeshakakkar2004@gmail.com",  // Replace with your email
        subject: "📂 Models Folder Update - Detailed Changes",
        text: `
🚨 Changes in models folder:

📝 Changed Files:
${changedFiles}

🆕 New Files:
${newFiles}

🔍 Detailed Changes (Git Diff):
${diffOutput}
        `,
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
