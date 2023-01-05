import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
    error: "/",
  },
  secret: process.env.SECRET,
});

export const config = { matcher: ["/dashboard/:path*"] };
