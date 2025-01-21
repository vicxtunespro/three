// middleware.js
import { withAuth } from 'next-auth/middleware';

const protectedRoutes = ['/protected', '/dashboard', '/shop']; // Add your protected routes here

export default withAuth({
  pages: {
    signIn: '/api/auth/signin', // Redirect here if not authenticated
  },
  // Custom middleware function
  async middleware(req) {
    const { pathname } = req.nextUrl;

    // Check if the request path is in the protected routes
    if (protectedRoutes.some(route => pathname.startsWith(route))) {
      // If the path is protected, apply the auth middleware
      return await withAuth(req);
    }

    // If the path is not protected, allow the request to proceed
    return NextResponse.next();
  },
});

// Specify the paths where the middleware should apply
export const config = {
  matcher: ['/protected/:path*', '/dashboard/:path*', '/shop/:path*'], // Adjust this to match your protected routes
};