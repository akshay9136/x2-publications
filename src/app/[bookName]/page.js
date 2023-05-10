import Link from 'next/link';

export default function BookDashboard({ params }) {
    return (
        <div>
            <h1>
                <Link href={`/${params.bookName}/experience`}>
                    Experience
                </Link>{' '}
                -- <Link href={`/${params.bookName}/book`}>Book</Link>
            </h1>
        </div>
    );
}
