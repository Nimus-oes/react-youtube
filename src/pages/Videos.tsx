import { useLoaderData } from "react-router";

export default function Videos() {
  const { q, results } = useLoaderData();
  return (
    <>
      <div>{q ? `Videos: ${q}` : "Videos 🔥"}</div>
    </>
  );
}
