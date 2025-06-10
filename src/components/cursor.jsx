// CustomCursor.jsx
import { useEffect, useState } from "react";
import "../assets/css/cursor.css"

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <div
            className="cursor"
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}
        />
    );
};

export default Cursor;
