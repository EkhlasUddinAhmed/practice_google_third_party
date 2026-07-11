//import { auth } from "@/auth"; // Server-side এ কাজ করবে
//import { getSession } from "next-auth/react"; // Client-side এ কাজ করবে

export const fetchClient = async (url, options) => {
  let session = null;

  // ১. চেক করি কোডটি কোথায় রান করছে
  if (typeof window === "undefined") {
    // সার্ভার সাইড
    const { auth } = require("@/auth");
    session = await auth();
  } else {
    // ক্লায়েন্ট সাইড
    const { getSession } = require("next-auth/react");
    session = await getSession();
  }

  // console.log("Fromm Fetch Client: Session is>>>>>>>>>>>>>>>>>>:", session);
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      ...(session && { Authorization: `${session?.accessToken}` }),
    },
  });
};
