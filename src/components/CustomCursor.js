// import React, { useEffect, useState } from 'react';

// const CustomCursor = ({ isAboutPage }) => {
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const [scale, setScale] = useState(1);
//     const [color, setColor] = useState('#015A58'); // Default color
//     const [isTextElement, setIsTextElement] = useState(false);
//     const [isNavImage, setIsNavImage] = useState(false);
//     const [isIcon, setIsIconElement] = useState(false);

//     useEffect(() => {
//         const moveCursor = (e) => {
//             setPosition({ x: e.clientX, y: e.clientY });

//             const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
//             if (elementUnderCursor) {
//                 const tagName = elementUnderCursor.tagName;

//                 // Check if the element is a text element or a link
//                 const isTextElement = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'A', 'LI'].includes(tagName);
//                 setIsTextElement(isTextElement);

//                 // Check if the element is the navbar image
//                 const isNavbarImage = elementUnderCursor.classList.contains('hoverable');
//                 setIsNavImage(isNavbarImage);

//                 // Check if the element is one of the icons
//                 const isIcon = elementUnderCursor.closest('.social-icon') && elementUnderCursor.classList.contains('hoverable');
//                 setIsIconElement(isIcon);

//                 if (isTextElement || isNavbarImage || isIcon) {
//                     setColor('transparent');
//                 } else {
//                     setColor('#015A58');
//                 }

//                 const bgColor = window.getComputedStyle(elementUnderCursor).backgroundColor;
//                 if (bgColor === 'rgb(1, 90, 88)' || bgColor === 'rgba(1, 90, 88, 1)') {
//                     setColor('#ffffff');
//                 }
//             }
//         };

//         const hoverIn = () => setScale(3);
//         const hoverOut = () => setScale(1);

//         document.addEventListener('mousemove', moveCursor);
//         const hoverables = document.querySelectorAll('.hoverable');
//         hoverables.forEach(el => {
//             el.addEventListener('mouseenter', hoverIn);
//             el.addEventListener('mouseleave', hoverOut);
//         });

//         return () => {
//             document.removeEventListener('mousemove', moveCursor);
//             hoverables.forEach(el => {
//                 el.removeEventListener('mouseenter', hoverIn);
//                 el.removeEventListener('mouseleave', hoverOut);
//             });
//         };
//     }, []);

//     return (
//         <div
//             className="custom-cursor"
//             style={{
//                 left: `${position.x}px`,
//                 top: `${position.y}px`,
//                 transform: `translate(-50%, -50%) scale(${scale})`,
//             }}
//         >
//             <div
//                 className="cursor__ball"
//                 style={{
//                     backgroundColor: color,
//                     border: isTextElement || isIcon ? `2px solid ${isAboutPage ? 'rgba(1, 90, 88, 1)' : '#ffffff'}` : isNavImage ? '2px solid rgb(1, 90, 88)' : 'none',
//                     // isTextElement || isNavImage ? `2px solid ${isAboutPage ? 'rgba(1, 90, 88, 1)' : '#ffffff'}` : 'none',
//                 }}
//             />
//             <style>
//                 {`
//                     .custom-cursor {
//                         position: fixed;
//                         pointer-events: none;
//                         z-index: 1000;
//                         transition: transform 0.3s ease-out;
//                     }
//                     .cursor__ball {
//                         width: 25px; 
//                         height: 25px; 
//                         border-radius: 50%; 
//                     }
//                 `}
//             </style>
//         </div>
//     );
// };

// export default CustomCursor;


import React, { useEffect, useState } from 'react';

const CustomCursor = ({ isAboutPage }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);
    const [color, setColor] = useState('#015A58'); // Default color
    const [isTextElement, setIsTextElement] = useState(false);
    const [isNavImage, setIsNavImage] = useState(false);
    const [isIcon, setIsIconElement] = useState(false);
    const [isButton, setIsButtonElement] = useState(false);
    const [isNavBackground, setIsNavBackground] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
            if (elementUnderCursor) {
                const tagName = elementUnderCursor.tagName;

                // Check if the element is a text element or a link
                const isTextElement = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'A', 'LI'].includes(tagName);
                setIsTextElement(isTextElement);

                // Check if the element is the navbar image
                const isNavbarImage =elementUnderCursor.closest('.logo-img') && elementUnderCursor.classList.contains('hoverable');
                setIsNavImage(isNavbarImage);

                const isIcon = elementUnderCursor.closest('.social-icon') && elementUnderCursor.classList.contains('hoverable');
                setIsIconElement(isIcon);


                // Check if the element is one of the icons
                const isButton = elementUnderCursor.closest('.resume-button') && elementUnderCursor.classList.contains('hoverable');
                setIsButtonElement(isButton);

                // Check if the element is within the nav background
                const isNav = elementUnderCursor.closest('.nav-background'); // Check if inside the nav background
                setIsNavBackground(!!isNav); 

                if (isTextElement) {
                    hoverIn('text'); // Call hoverIn for text elements
                } else if (isNavbarImage) {
                    hoverIn('navbarImage'); // Call hoverIn for navbar images
                } else if (isIcon) {
                    hoverIn('icon'); // Call hoverIn for icons

                } else if (isButton) {
                    hoverIn('button')
                } else {
                    setScale(1); // Reset scale for other elements
                }

                if (isTextElement || isNavbarImage || isIcon || isButton) {
                    setColor('transparent');
                }else if (isNav) {
                    setColor('transparent');
                 } else {
                    setColor('#015A58');
                }

                const bgColor = window.getComputedStyle(elementUnderCursor).backgroundColor;
                if (bgColor === 'rgb(1, 90, 88)' || bgColor === 'rgba(1, 90, 88, 1)') {
                    setColor('#ffffff');
                }
            }
        };

        const hoverIn = (elementType) => {
            switch (elementType) {
                case 'navbarImage':
                case 'button':
                    
                    setScale(4); // Scale for text elements
                    break;
                case 'icon':
                    setScale(2.5); // Scale for navbar images and icons
                    break;
                default:
                    setScale(1); // Default scale
                    break;
            }
        };

        const hoverOut = () => {
            setScale(1); // Reset scale on mouse leave
        };

        document.addEventListener('mousemove', moveCursor);
        const hoverables = document.querySelectorAll('.hoverable');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', hoverIn);
            el.addEventListener('mouseleave', hoverOut);
        });

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            hoverables.forEach(el => {
                el.removeEventListener('mouseenter', hoverIn);
                el.removeEventListener('mouseleave', hoverOut);
            });
        };
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: `translate(-50%, -50%) scale(${scale})`,
            }}
        >
            <div
                className="cursor__ball"
                style={{
                    // backgroundColor: color,
                    backgroundColor: isNavBackground ? 'transparent' : color,
                    border: isTextElement || isIcon || isButton || isNavBackground ? '2px solid #ffffff' : isNavImage ? '2px solid rgb(1, 90, 88)' : 'none',
                }}
            />
            <style>
                {`
                    .custom-cursor {
                        position: fixed;
                        pointer-events: none;
                        z-index: 1000;
                        transition: transform 0.3s ease-out;
                    }
                    .cursor__ball {
                        width: 25px; 
                        height: 25px; 
                        border-radius: 50%; 
                    }
                `}
            </style>
        </div>
    );
};

export default CustomCursor;
