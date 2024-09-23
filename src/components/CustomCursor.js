import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [borderColor, setBorderColor] = useState('#015A58'); // Initial border color

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Get the element under the cursor
            const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);

            // Check background color of the element under the cursor
            const bgColor = window.getComputedStyle(elementUnderCursor).backgroundColor;

            // Update the border color based on the background color
            if (bgColor === 'rgb(1, 90, 88)' || bgColor === null) { // Equivalent of #015A58
                setBorderColor('#ffffff'); // Change to white on dark background
            } else {
                setBorderColor('#015A58'); // Change to greenish on light background
            }
        };

        // Attach event listener for mouse movement
        document.addEventListener('mousemove', moveCursor);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div
            className="custom-cursor fixed w-8 h-8 rounded-full bg-transparent pointer-events-none mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-100 ease-out"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                border: `2px solid ${borderColor}`, // Dynamic border color
            }}
        />
    );
};

export default CustomCursor;
