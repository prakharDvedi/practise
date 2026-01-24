"use client";
import Info from "./info";
import Hobbie from "./hobbie";
import Settings from "./settings";
import { useState } from "react";
import styles from "./tabform.module.css";

export default function TabForm() {
  const pages = [
    { name: "Info", component: Info },
    { name: "Hobbie", component: Hobbie },
    { name: "Settings", component: Settings },
  ];

  const [tab, setTab] = useState(0);
  const activePage = pages[0].component;

  return (
    <div className={styles.tabform}>
      <h1>TabForm</h1>
      <div className={styles.tabs}>
        {pages.map((page) => {
          const PageName = page.name;
          const PageComponent = page.component;
          return (
            <div key={page.name}>
              <button className={styles.pageButton}>
                <PageComponent />
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <activePage />
      </div>
    </div>
  );
}
