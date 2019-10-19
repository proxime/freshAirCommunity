import React, { useState, useRef, useEffect } from 'react';
import mountains from '../../images/mountains.jpg';
import './Slider.css';

const Slider = () => {
    const [slide, setSile] = useState(0);
    const [readySlide, setReady] = useState(true);
    const [slideHeight, setSlideHeight] = useState(0);
    const [transition, setTransition] = useState('top 1.2s ease');
    const slider = useRef(null);
    const [touchY, setTouchY] = useState(null);

    const onWheel = e => {
        if (slider) {
            if (e.deltaY > 0) {
                if (slide < 3 && readySlide) {
                    setSile(slide + 1);
                    setReady(!readySlide);
                    setTimeout(() => setReady(readySlide), 1200);
                    setTransition('top 1.2s ease');
                }
            } else {
                if (slide > 0 && readySlide) {
                    setSile(slide - 1);
                    setReady(!readySlide);
                    setTimeout(() => setReady(readySlide), 1200);
                    setTransition('top 1.2s ease');
                }
            }
        }
    }

    const onTouchStart = e => {
        e.persist();
        setTouchY(e.touches[0].clientY);
    }

    const onTouchMove = e => {
        e.persist();
        if (!touchY) return;

        const currentY = e.touches[0].clientY;
        const diffY = touchY - currentY;

        if (diffY > 50) {
            if (slide < 3 && readySlide) {
                setSile(slide + 1);
                setReady(!readySlide);
                setTimeout(() => setReady(readySlide), 1200);
                setTransition('top 1.2s ease');
            }
        } else if (diffY < -50) {
            if (slide > 0 && readySlide) {
                setSile(slide - 1);
                setReady(!readySlide);
                setTimeout(() => setReady(readySlide), 1200);
                setTransition('top 1.2s ease');
            }
        }
    }

    if (!slideHeight && slider.current) {
        setSlideHeight(slider.current.clientHeight / 4);
    }

    useEffect(() => {
        const windowResize = () => {
            setSlideHeight(slider.current.clientHeight / 4);
            setTransition('top 0s ease');
        }

        window.addEventListener('resize', windowResize);

        return function cleanInterwal() {
            window.removeEventListener('resize', windowResize);
        }
    }, [])

    return (
        <div className="slider-container" onWheel={e => onWheel(e)} onTouchStart={e => onTouchStart(e)} onTouchMove={e => onTouchMove(e)}>
            <div className="slider" ref={slider} style={{
                top: -slide * slideHeight,
                transition,
            }}>
                <div className="slider-item">
                    <h1 className="head-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, cupiditate!</h1>
                    <p className="head-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nam blanditiis nihil modi, obcaecati animi commodi esse molestias sint reiciendis provident, rerum quas eius mollitia? Illum obcaecati est ex labore.</p>
                    <img className="head-image" src={mountains} alt="" />
                </div>
                <div className="slider-item">
                    <h1 className="head-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, cupiditate!</h1>
                    <p className="head-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nam blanditiis nihil modi, obcaecati animi commodi esse molestias sint reiciendis provident, rerum quas eius mollitia? Illum obcaecati est ex labore.</p>
                    <img className="head-image" src={mountains} alt="" />
                </div>
                <div className="slider-item">
                    <h1 className="head-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, cupiditate!</h1>
                    <p className="head-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nam blanditiis nihil modi, obcaecati animi commodi esse molestias sint reiciendis provident, rerum quas eius mollitia? Illum obcaecati est ex labore.</p>
                    <img className="head-image" src={mountains} alt="" />
                </div>
                <div className="slider-item">
                    <h1 className="head-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, cupiditate!</h1>
                    <p className="head-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nam blanditiis nihil modi, obcaecati animi commodi esse molestias sint reiciendis provident, rerum quas eius mollitia? Illum obcaecati est ex labore.</p>
                    <img className="head-image" src={mountains} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Slider;
