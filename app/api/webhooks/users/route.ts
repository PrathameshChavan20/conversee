import { WebhookEvent, UserJSON } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";
import { sendEmail } from "@/utils/sendEmail";
import { signUpEmailtemp } from "@/public/htmlFiles/welcomeEmail";
import { userUpdateEmailTemp } from "@/public/htmlFiles/userUpdateEmail";
// import { userDeleteEmailTemp } from "@/public/htmlFiles/userDeletionEmail";
export const POST = async (req: Request) => {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET) {
    throw new Error("Clerk WEBHOOK_SECRET not found.");
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occurred", { status: 400 });
  }

  if (isUserData(evt.data)) {
    const userEmail = evt.data.email_addresses[0]?.email_address;
    if (evt.type === "user.created") {
      const template = await signUpEmailtemp(
        evt.data.first_name + "\n" + evt.data.last_name,
        process.env.NEXT_PUBLIC_BASE_URL as string
      );
      await sendEmail(
        userEmail,
        "Conversee Welcomes You! 🙏",
        undefined,
        template
      ).then(() => {
        console.log("Welcome Email has been sent to the " + userEmail);
      });
    }

    if (evt.type === "user.updated") {
      const template = await userUpdateEmailTemp(
        evt.data.first_name + "\n" + evt.data.last_name
      );
      await sendEmail(
        userEmail,
        "Account Updated! ✔️",
        undefined,
        template
      ).then(() => {
        console.log("User updation Email has been sent to the " + userEmail);
      });
    }
  } else {
    console.log(evt.data.id);
    // if (evt.type === "user.deleted") {
    //   console.log("Inside the user.deleted");
    //   const template = await userDeleteEmailTemp(
    //     evt.data.first_name + "\n" + evt.data.last_name
    //   );
    //   await sendEmail(
    //     userEmail,
    //     "Account Deleted! 😔",
    //     undefined,
    //     template
    //   ).then(() => {
    //     console.log("User deletion Email has been sent to the " + userEmail);
    //   });
    // }
  }

  return new Response("", { status: 200 });
};

function isUserData(data: WebhookEvent["data"]): data is UserJSON {
  return "email_addresses" in data;
}
