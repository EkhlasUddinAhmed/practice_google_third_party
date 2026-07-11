import { fetchClient } from "../lib/fetchClient";

export const getAllStudentsFromDB = async () => {
  const res = await fetchClient(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/students`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  return res.json();
};
