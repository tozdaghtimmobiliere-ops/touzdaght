import NextAuth from "next-auth"
import { authConfig } from "./auth.config"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req
  const isAdminRoute = nextUrl.pathname.startsWith("/admin")
  const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth")

  // Allow admin and api auth routes to bypass NextAuth middleware
  // as we use custom localStorage-based auth for the admin panel.
  if (isAdminRoute || isApiAuthRoute) return undefined;

  return undefined;
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
