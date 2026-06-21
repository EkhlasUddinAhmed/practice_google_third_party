"use client"; // Error boundaries must be Client Components

export default function ErrorPage({error}) {
  return (
    <div>
      <h2>Something went wrong:{error?.message}</h2>
    </div>
  );
}
