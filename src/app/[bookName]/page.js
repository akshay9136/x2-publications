'use client';
import Link from 'next/link';
import styles from '../page.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const bookStyleMap = {
    '164words': {
        backgroundColor: 'black',
        color: 'white',
    },
    '82colors': {
        backgroundColor: 'white',
        color: 'black',
    },
};

export default function BookDashboard({ params: { bookName } }) {
    const router = useRouter();

    useEffect(() => {
        function toggleBook(e) {
            if (e.keyCode === 32) {
                router.push(
                    bookName === '164words' ? '/82colors' : '/164words'
                );
            }
        }
        document.addEventListener('keydown', toggleBook);
        return () => {
            document.removeEventListener('keydown', toggleBook);
        };
    }, []);

    return (
        <div className={styles.bookCover} style={bookStyleMap[bookName]}>
            <h1>
                <Link href={`/${bookName}/experience`}>Experience</Link> --{' '}
                <Link href={`/${bookName}/book`}>Book</Link>
            </h1>
        </div>
    );
}
