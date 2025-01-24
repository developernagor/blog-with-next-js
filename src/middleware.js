import { NextResponse } from "next/server";

export default function middleware(req) {
  const token = req.cookies.get("authToken");

  // Debugging: Log the pathname
  console.log("Requested Path:", req.nextUrl.pathname);

  // Allow requests to the root ("/") or static files without redirect
  if (req.nextUrl.pathname === "/") {
    console.log("Root path accessed. Skipping middleware.");
    return NextResponse.next();
  }

  // If no token exists, redirect to the home page
  if (!token) {
    console.log("No auth token found. Redirecting to '/'...");
    return NextResponse.redirect(new URL("/api/auth/login", req.url));
  }

  // Allow access if the token exists
  console.log("Auth token found. Proceeding to requested route...");
  return NextResponse.next();
}

export const config = {
  matcher: ["/profile"], // Apply middleware only to the /profile route
};
