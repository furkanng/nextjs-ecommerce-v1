"use-client";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { BRANDS } from "@/mock";

export default function Index() {
  return (
    <div>
      {BRANDS?.map(({ imageUrl, id }) => (
        <div key={id} style={{ display: "inline-block", padding: "16px" }}>
          <Image
            className={styles.image}
            src={imageUrl}
            height={80.5}
            width={80.5}
            alt="logo"
            style={{
              borderRadius: "100%",
              border: "solid",
            }}
          />
        </div>
      ))}
    </div>
  );
}
