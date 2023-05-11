'use client';
import Link from 'next/link';
import styles from './header.module.css';
import { useParams } from 'next/navigation';

const bookTitleMap = {
    '164words': '164 WORDS',
    '82colors': '82 COLORS',
};

const bookStyleMap = {
    '164words': {
        backgroundColor: 'black',
        color: 'white',
    },
    '82colors': {
        backgroundColor: 'white',
        color: 'black',
        borderBottom: '2px solid black',
    },
};

export default function Header() {
    const { bookName } = useParams();
    return (
        <div className={styles.header} style={bookStyleMap[bookName]}>
            <h3>KRISHIKA JAIN</h3>
            <h3><Link href="/">X2 PUBLICATIONS</Link></h3>
            <h3><Link href={`/${bookName}`}>{bookTitleMap[bookName]}</Link></h3>
        </div>
    )
}
