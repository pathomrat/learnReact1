import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

const About = () => {
    return(
        <div>
            <Header />
            <div className ="container col-md-5">
                <h3>สวัสดีครับ</h3>
                <p className = "title text-justify mt-4 mb-6">
                    เราคือร้านอาหารที่เน้นอาหารอร่อยเท่านั้น ไม่ให้ความสำคัญกับสุขภาพเท่าไร
                    เพราะสุขภาพที่ดีนั้นคุณสามารถสร้างได้ด้วยการ "ออกกำลังกาย"
                    ดังนั้นการกินของอร่อยก่อน แล้วคุณจะมีกำลังไปทำสิ่งที่คุณรัก
                </p>
                <h4 className = "text-success">HEALTHY CAFE</h4>
            </div>
            <Footer company = "Pathomrat CO." email ="pathomrat97@gmail.com" />
        </div>
    )
}

export default About;