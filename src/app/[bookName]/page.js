import Link from 'next/link';
import styles from '../page.module.css';

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
    return (
        <div
            className={styles.bookCover}
            style={bookStyleMap[bookName]}
        >
            <h1>
                <Link href={`/${bookName}/experience`}>Experience</Link>{' '}
                -- <Link href={`/${bookName}/book`}>Book</Link>
            </h1>
        </div>
    );
}
