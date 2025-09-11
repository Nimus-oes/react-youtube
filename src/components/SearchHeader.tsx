import { Form, Link, useSearchParams } from "react-router";
import styles from "./SearchHeader.module.css";
import { useEffect, useState } from "react";

export default function SearchHeader() {
  const [sp] = useSearchParams();
  const q = sp.get("q") || "";
  const [text, setText] = useState<string | number>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => setText(q), [q]);

  return (
    <header className={styles.container}>
      <Link to={"/"}>YouTube</Link>
      <Form action="/videos" method="get">
        <input name="q" value={text} onChange={handleChange} />
        <button>🔍</button>
      </Form>
    </header>
  );
}
