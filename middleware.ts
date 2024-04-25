import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protetedRoutes = createRouteMatcher([
  "/",
  "/upcoming",
  "/previous",
  "/recordings",
  "/personal-room",
  "/meeting(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (protetedRoutes(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
