import Link from "next/link";
import styles from "./page.module.css";
import { getRoute } from "@/utils/routing";
import Button from "@/components/button";

const { NEXT_PUBLIC_BACKEND_URL } = process.env;

export default function Home() {
    const uri = `${NEXT_PUBLIC_BACKEND_URL}/green/health`;
    return (
        <main className={styles.main}>
            <Link href={getRoute("/")} className={styles.button}>
                <h1>Redirect Page Placeholder</h1>
            </Link>
            <Button uri={uri} />
        </main>
    );
}
