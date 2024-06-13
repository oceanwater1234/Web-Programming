import '../styles/Scroll.scss'

export default function Scroll() {
    const moveScrollByTop = () => {
        
        window.scroll({ top: 0, behavior: "smooth" });
    };

    const moveScrollByDown = () => {
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    };

    return(
        <div className='Wrapper'>
            <div className='ButtonWrapper'>
                <div className='circle' onClick={moveScrollByTop}></div>
                <div className='circle' onClick={moveScrollByDown}></div>
            </div>
        </div>
    )
}