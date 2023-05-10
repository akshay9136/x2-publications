"use client";
import Link from 'next/link';
import styles from './header.module.css';
import { useParams } from 'next/navigation';

export default function Header() {
    const params = useParams();
    return (
        <div className={styles.header}>
            <h3>KRISHIKA JAIN</h3>
            <h3><Link href="/">X2 PUBLICATIONS</Link></h3>
            <h3>{params.bookName}</h3>
        </div>
    )
}
