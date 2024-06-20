import {Container, Row, Col} from "react-bootstrap"
import {useEffect, useState} from "react"
import {ArrowRightCircle} from "react-bootstrap-icons"
import Headerimage from '../assets/img/home.png'
export const Banner=()=>{
    const [loopNum, setloopNum]= useState(0);
    const [ IsDeleteing, setIsDeleting]= useState(false);
    const toRotate = ["Web Developer", "UI/UX Designer" , "Full Stack developer","Graphic Designer", "Computer System Engineer" ]
    const [text, settext]= useState('');
    const period= 2000;
    const [delta , setdelta]= useState(300- Math.random()* 100);

    useEffect(()=>{
        let ticker= setInterval(()=>{
            tick();
        }, delta)
        return ()=> {clearInterval(ticker)};

    },[text])
    const tick =()=>{
        let i =loopNum% toRotate.length
        let fullText = toRotate [i]
        let updatetext = IsDeleteing ? fullText.substring(0, text.length-1): fullText.substring(0, text.length+1);
        settext(updatetext);
        if(IsDeleteing){
            setdelta (prevdelta=>prevdelta/2)
        }
        if (!IsDeleteing && updatetext ===fullText){
            setIsDeleting(true)
            setdelta(period)
        }else if(IsDeleteing && updatetext === ''){
            setIsDeleting(false);
            setloopNum (loopNum +1);
            setdelta(500);

        }
        
    }
    return(
        <section className="banner" id="home" >
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                        <span className="tagline">Welcome to my portfolio </span>
                        <h1>{'Hi I am Mahnoor'}<span className="wrap"> {text}</span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <button className="vvd" onClick={() => console.log("connect")}>Let's connect<ArrowRightCircle size={25}/></button>
                        
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                    <img src={Headerimage} alt="Header Image"/>
                    </Col>
                </Row>

            </Container>

        </section>

    )
}