"use client";

import { useEffect, useState } from "react";
import styles from "./ProgressBar.module.css";

export default function ProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const currentScrollY = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setProgress(Number((currentScrollY / scrollHeight).toFixed(2)) * 100);
            }
        };

        window.addEventListener("scroll", updateProgress);
        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    return (
        <div 
            className={styles.progressBar} 
            style={{ width: `${progress}%` }} 
            aria-hidden="true" 
        />
    );
}
