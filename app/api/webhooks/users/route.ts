import { WebhookEvent, UserJSON } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";

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

  const { id } = evt.data;
  const eventType = evt.type;
  console.log(`Webhook with an ID of ${id} and type of ${eventType}`);

  if (evt.type === "user.updated" || evt.type === "user.created") {
    if (isUserData(evt.data)) {
      const userEmail = evt.data.email_addresses[0]?.email_address;

      if (userEmail) {
        console.log(`Email for user ${id}: ${userEmail}`);
        console.log(`Your account has been ${evt.type.split(".")[1]}.`);
      } else {
        console.error("No email address found for the user");
      }
    } else {
      console.error("Invalid event data type");
    }
  }

  if (evt.type === "user.deleted") {
    console.log("-------User has been deleted with userId:", evt.data.id);
  }

  return new Response("", { status: 200 });
};

function isUserData(data: WebhookEvent["data"]): data is UserJSON {
  return "email_addresses" in data;
}
