'use client';
import BackButton from '@/components/back-button';

const bookPreviewSrcMap = {
    164: 'https://drive.google.com/file/d/1FFB10bg42fBsvmibNwBC-S_LZhf_v9bl/preview',
    82: 'https://drive.google.com/file/d/1LEx9-1bo2YqOTE6o3Qt0Y_uvTm3eN7z3/preview',
};

export default function Book({ params }) {
    return (
        <div className="preview">
            <iframe
                width="100%"
                height="100%"
                src={bookPreviewSrcMap[params.bookName]}
                allow="autoplay"
            />
            <BackButton />
        </div>
    );
}
