import { NAVBAR_MENU } from "@/mock";
import React from "react";
import styles from "./styles.module.css";

export default function Index() {
  return (
    <div className="w-full">
      <hr class="rounded" />
      <ul className="pl-10">
        {NAVBAR_MENU?.map(({ title, id }) => (
          <div
            className={styles.liMenuDiv}
            style={{ display: "inline-block", width: "12%", padding: "16px" }}
            key={id}
          >
            <li className="text-center">
              <p> {title}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
