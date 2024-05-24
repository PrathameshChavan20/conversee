export const signUpEmailtemp = async (usersName: string, hrefLink: string) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Conversee!</title>
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
            font-size: 28px;
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
                <h1>Welcome to Conversee! 🎉</h1>
            </td>
        </tr>
        <tr>
            <td class="content">
                <p>Dear ${usersName},</p>
                <p>Thank you for joining Conversee, the ultimate video calling platform for seamless communication.
                    We're thrilled to have you on board and can't wait for you to experience the power of real-time
                    video connections! 🎥</p>
                <p>Conversee is a cutting-edge platform that brings people together, no matter where they are in the
                    world. Whether you're catching up with friends, collaborating with colleagues, or hosting virtual
                    events, our platform offers a smooth and reliable video calling experience. 🌍</p>
                <div style="text-align: center; margin-bottom: 20px;">
                    <a href=${hrefLink} style="display: inline-block;
                    padding: 12px 24px;
                    background-color: #9370DB;
                    color: #ffffff;
                    text-decoration: none;
                    border-radius: 30px;
                    font-weight: bold;
                    transition: background-color 0.3s ease;  background-color: #7B68EE;" target="_main">Let&apos;s get
                        started 🚀</a>
                </div>
                <p>Our user-friendly interface and advanced features, such as screen sharing, virtual backgrounds, and
                    high-quality audio and video, ensure that your conversations are seamless and engaging. 🔥</p>
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
