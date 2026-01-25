"use client";
import Info from "./info";
import Hobbie from "./hobbie";
import Settings from "./settings";
import { useState } from "react";
import styles from "./tabform.module.css";

export default function TabForm() {
  const [data,setData] = useState({
    name:"Prakhar",
    age:"20",
    email:"prakhar@gmail.com",
    hobbie:["coding","reading","gaming"],
    toggle:"yes"
  });

  const pages = [
    { name: "Info", component: Info },
    { name: "Hobbie", component: Hobbie },
    { name: "Settings", component: Settings },
  ];

  const [tab, setTab] = useState(0);
  const ActivePage = pages[tab].component;

  return (
    <div className={styles.tabform}>
      <h1>TabForm</h1>

      <div className={styles.tabs}>
        {pages.map((page, index) => (

          <button
            key={page.name}
            className={styles.pageButton}
            onClick={() => setTab(index)}
            // why a () => setTab(index) and not just setTab(index)?
            // because we want to pass a function reference to onClick, not call the function immediately. callback function
            // why a key needed for map?
            // to help React identify which items have changed, are added, or are removed
          > 
            {page.name}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        <ActivePage data={data} setData={setData} />
      </div>
    </div>
  );
}
