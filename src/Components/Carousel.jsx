import React from "react"
import "/src/CSS/carousel.css"

function Carousel(props){

    const carouselItemsRef = React.useRef(null)

    const [carouselWidth, setCarouselWidth] = React.useState()
    const [slideWidth, setSlideWidth] = React.useState()
    
    console.log("render")

    function handleCarouselResize(){
        console.log("resize")
        setCarouselWidth(carouselItemsRef.current.offsetWidth)
    }

    React.useEffect(()=>{
        setSlideWidth(carouselItemsRef.current.offsetWidth)
        window.addEventListener("resize", handleCarouselResize)

        return () => window.removeEventListener("resize", handleCarouselResize)
    },[carouselWidth])

    /*
        description: a function that divides carousel items into slides or pages.

        inputs:
            items: an array of items that will be divided to slides
            slideSize: number of items per slide.
        
        return: an array of elements each containing a number of carouselItems.
    */
    function createSlides(carouselItems, slideSize){
        var slides = []
        var slide = []
        
        for(let i = 0; i < carouselItems.length; i++){
            if(i != 0 && i % slideSize == 0){
                slides.push(<div key={(i-1)/3} style={{width: slideWidth}} className="slide">{slide}</div>)
                slide = []
            }
            slide.push(carouselItems[i])
        }
        if(slide.length > 0){
            slides.push(<div key={(slides.length-1)/slideSize} style={{width: slideWidth}} className="slide">{slide}</div>)
        }

        return slides
    }

    function scrollRight(){
        const carouselItemsNode = carouselItemsRef.current
        carouselItemsNode.scrollBy({
            top: 0,
            left: carouselItemsNode.childNodes[0].offsetWidth,
            behavior: "smooth"
        })
    }

    function scrollLeft(){
        const carouselItemsNode = carouselItemsRef.current
        carouselItemsNode.scrollBy({
            top: 0,
            left: -carouselItemsNode.childNodes[0].offsetWidth,
            behavior: "smooth"
        })
    }

    return(
        <div className="carousel">
            <button onClick={scrollLeft} className="scroll-left-button">
                <img src="/src/assets/Images/left-arrow.png" alt="left arrow" className="left-arrow-icon" />
            </button>
            <div ref={carouselItemsRef} className="carousel-items">
                <div className="container">
                    {createSlides(props.items, 3)}
                </div>
            </div>
            <button onClick={scrollRight} className="scroll-right-button">
                <img src="/src/assets/Images/right-arrow.png" alt="right arrow" className="right-arrow-icon" />
            </button>
        </div>
    )
}

export default Carousel