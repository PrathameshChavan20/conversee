export const userUpdateEmailTemp = async (usersName: string) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Updated!</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin-top: 50px;
            margin-bottom: 50px;
        }

        table {
            border-collapse: collapse;
            max-width: 600px;
            margin: 0 auto;
        }

        h1 {
            font-size: 23px;
            margin-bottom: 0;
            color: #ffffff;
            text-align: center;
        }

        p {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 20px;
            color: #555555;
        }

        .header {
            background-color: #9370DB;
            border-radius: 10px 10px 0 0;
            padding: 20px;
        }

        .content {
            background-color: #ffffff;
            border-radius: 0 0 10px 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }

        .footer {
            font-size: 14px;
            text-align: center;
            color: #cccccc;
            padding: 30px;
            background-color: #333744;
            /* Footer background color */
        }

        .footer a {
            color: #FDB45C;
            /* Color for footer links */
        }
    </style>
</head>

<body>
    <table>
        <tr>
            <td class="header">
                <h1>Your Conversee account has been updated! 🎉</h1>
            </td>
        </tr>
        <tr>
            <td class="content">
                <p>Dear ${usersName},</p>
                <p>We wanted to let you know that your Conversee account has been updated successfully. 🎯</p>
                <p>Whether you've changed your personal information, updated your preferences, or made any other
                    modifications, your account now reflects the latest changes.</p>
                <p>If you have any questions or need assistance, our dedicated support team is always here to help.
                    Simply reply to this email, and we'll get back to you as soon as possible. 💬</p>
                <p>Best regards,<br>The Conversee Team 👋</p>
            </td>
        </tr>
        <tr>
            <td class="footer content">
                This is an automated message, please do not reply.<br>
            </td>
        </tr>
    </table>
</body>

</html>
`;
