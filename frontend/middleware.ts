import NextAuth from "next-auth"
import { authConfig } from "./auth.config"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth")
  const isPublicRoute = ["/", "/about", "/contact"].includes(nextUrl.pathname)
  const isAuthRoute = ["/login", "/register"].includes(nextUrl.pathname)
  const isAdminRoute = nextUrl.pathname.startsWith("/admin")

  if (isApiAuthRoute) return null

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/", nextUrl))
    }
    return null
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/login", nextUrl))
  }

  // RBAC Middleware Logic
  if (isAdminRoute) {
    const userRole = (req as any).auth?.user?.role
    if (userRole !== "ADMIN") {
      return Response.redirect(new URL("/", nextUrl))
    }
  }

  return null
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
