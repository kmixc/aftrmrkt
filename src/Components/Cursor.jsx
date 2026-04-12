import { useEffect, useRef, useState } from 'react';

/**
 * AFTRMRKT Custom Cursor
 *
 * Drop into your root layout (App.jsx):
 *
 *   import Cursor from './components/Cursor/Cursor';
 *   <Cursor />
 *
 * Trigger the enlarged state on any element by adding data-cursor:
 *   <div data-cursor>hover me</div>
 */

const HOVER_SELECTORS = 'a, button, [data-cursor]';

export default function Cursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const mouse = useRef({ x: -200, y: -200 });
    const ringPos = useRef({ x: -200, y: -200 });
    const rafId = useRef(null);
    const [big, setBig] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Don't run on touch-only devices
        if (window.matchMedia('(hover: none)').matches) return;

        const onMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
            if (!visible) setVisible(true);
        };

        const onMouseOver = (e) => {
            if (e.target.closest(HOVER_SELECTORS)) setBig(true);
        };

        const onMouseOut = (e) => {
            if (e.target.closest(HOVER_SELECTORS)) setBig(false);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', onMouseOver);
        document.addEventListener('mouseout', onMouseOut);

        // Animation loop — dot snaps instantly, ring lags behind
        const loop = () => {
            const { x: mx, y: my } = mouse.current;

            // Dot: snap directly to mouse
            if (dotRef.current) {
                dotRef.current.style.left = `${mx}px`;
                dotRef.current.style.top = `${my}px`;
            }

            // Ring: lerp toward mouse
            ringPos.current.x += (mx - ringPos.current.x) * 0.13;
            ringPos.current.y += (my - ringPos.current.y) * 0.13;

            if (ringRef.current) {
                ringRef.current.style.left = `${ringPos.current.x}px`;
                ringRef.current.style.top = `${ringPos.current.y}px`;
            }

            rafId.current = requestAnimationFrame(loop);
        };

        rafId.current = requestAnimationFrame(loop);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
            document.removeEventListener('mouseout', onMouseOut);
            cancelAnimationFrame(rafId.current);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Don't render on touch devices
    if (typeof window !== 'undefined' &&
        window.matchMedia('(hover: none)').matches) {
        return null;
    }

    return (
        <>
            {/* DOT — snaps to cursor */}
            <div
                ref={dotRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: big ? '20px' : '10px',
                    height: big ? '20px' : '10px',
                    background: '#DC2026',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    mixBlendMode: 'exclusion',
                    opacity: visible ? 1 : 0,
                    transition: 'width 0.15s ease, height 0.15s ease, opacity 0.3s ease',
                    willChange: 'left, top',
                }}
            />

            {/* RING — lags behind cursor */}
            <div
                ref={ringRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: big ? '54px' : '34px',
                    height: big ? '54px' : '34px',
                    border: `1px solid ${big ? '#DC2026' : 'rgba(253,252,250,0.3)'}`,
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    zIndex: 99998,
                    opacity: visible ? 1 : 0,
                    transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, opacity 0.3s ease',
                    willChange: 'left, top',
                }}
            />
        </>
    );
}