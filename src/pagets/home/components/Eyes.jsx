import { useEffect, useState } from "react";




function Eyes() {


    const [state, setState] = useState({ left: 0, top: 0 });

    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            setState({ left: e.pageX, top: e.pageY });
        })
    }, [])

    let x = 100 - (state.left * 100 / window.innerWidth) + "%";
    let y = 100 - (state.top * 100 / window.innerHeight) + "%";

    return (
        <>
            <div className='my-photo' >
                <div className="eyes">
                    <div className="eye">
                        <div className="ball z-depth-3" style={{ transform: "translate(-" + x + ", -" + y + ")" }}></div>
                    </div>
                    <div className="eye">
                        <div className="ball" style={{ transform: "translate(-" + x + ", -" + y + ")" }}></div>
                    </div>
                </div>
            </div>
        </>
    )

}

export { Eyes }