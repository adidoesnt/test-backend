import { getRoute } from "@/utils/routing";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.main}>
            <Link href={getRoute("/redirect")} className={styles.button}>
                <h1>Home Page Placeholder</h1>
            </Link>
        </main>
    );
}
