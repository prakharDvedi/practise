"use client";
import Info from "./info";
import Hobbie from "./hobbie";
import Settings from "./settings";
import { useState } from "react";
import styles from "./tabform.module.css";

export default function TabForm() {
  const [tab, setTab] = useState(0);
  const [err, setErr] = useState({});
  const [data, setData] = useState({
    name: "Prakhar",
    age: "20",
    email: "prakhar@gmail.com",
    hobbie: ["coding", "reading", "gaming"],
    theme: "light",
  }); 

  const pages = [
    {
      name: "Info",
      component: Info,
      valid: () => {
        if (!data.name || data.name.length < 2) {
          err.name = "Name is invalid";
        }
        if (!data.age || isNaN(data.age)) {
          err.age = "Age is invalid";
        }
        if (
          !data.email ||
          !data.email.includes("@") ||
          !data.email.includes(".") ||
          data.email.length < 5
        ) {
          err.email = "Email is invalid";
        }
        setErr(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Hobbie",
      component: Hobbie,
      valid: () => {
        if (data.hobbie.length < 1) {
          err.hobbie = "Select at least one hobbie";
        }
        setErr(err);
        return err.hobbie ? false : true;
      },
    },
    { name: "Settings", component: Settings },
  ];

  const ActivePage = pages[tab].component;

  const handleNext = () => {
    setTab((prev) => Math.min(prev + 1, pages.length - 1));
  };

  const handlePrev = () => {
    setTab((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", data);
  };

  return (
    <div className={styles.tabform}>
      <h1>TabForm</h1>

      <div className={styles.tabs}>
        {pages.map((page, index) => (
          <button
            key={page.name}
            className={styles.pageButton}
            onClick={() => setTab(index)}
          >
            {page.name}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        <ActivePage data={data} setData={setData} err={err} />
      </div>

      <div>
        {tab > 0 && <button onClick={handlePrev}>Prev</button>}
        {tab < pages.length - 1 && <button onClick={handleNext}>Next</button>}
        {tab === pages.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
}
