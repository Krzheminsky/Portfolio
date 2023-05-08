import { useEffect } from "react";
import React from 'react';
import Typed from 'typed.js';

function Developer() {

    const develop = React.useRef(null);

    useEffect(() => {
        const typed = new Typed(develop.current, {
            strings: ['Frontend-developer', 'Flutter-developer'],
            typeSpeed: 40,
            fadeOut: true,
            loop: true,
            showCursor: false,
            backDelay: 4000,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (

        <>
            <span ref={develop} />
        </>
    )

}

export { Developer }