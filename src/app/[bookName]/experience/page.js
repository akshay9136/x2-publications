'use client';
import { useEffect, useState, memo } from "react"
import * as Exp from '@/utils/experience';
import BackButton from "@/components/back-button";

function Experience({ params }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (mounted) {
            Exp[`exp${params.bookName}`]();
        }
    }, [mounted]);

    return mounted && (
        <>
            <canvas id="canvas"></canvas>
            <BackButton />
        </>
    );
}

export default memo(Experience);
