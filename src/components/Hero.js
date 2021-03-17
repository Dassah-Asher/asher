import ButtonContainer from "./ButtonContainer";

function Hero() {
    const styles={
        background:"blue",
        height:40,
        width:100,
        color:"white",
        borderRadius:50
        
    
    }
    return(
        <header>
            <div className="hero">
                <h2>FRONT END  LANGUAGES</h2>
                <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
    </ul>
                
             <ButtonContainer styles={styles} title="Click to know more"/>
            </div>
        </header>
    );

    }

    export default Hero
