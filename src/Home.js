import React from 'react'
import Product from './Product'
import Slider from './slider/Slider'
import './Home.css'

const Home = () => {
    return (
        <>
            <Slider className='' />
            <div className="slider__image">
            </div>
            <div className='howup'>
                <div className='home__row'>
                    <Product
                        id='123456'
                        title='Xiaomi Pad 5 | Qualcomm Snapdragon 860 | 120Hz Refresh Rate | 6GB, 128GB'
                        price={26999}
                        rating={4}
                        image='https://images-eu.ssl-images-amazon.com/images/I/31jUKdJdjHL._AC_SX184_.jpg'
                    />
                    <Product
                        id='223456'
                        title="CAMPUS
                        Men's Rodeo-2 Running Shoes"
                        price={753}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/6138Uxu+hvL._AC_UL320_.jpg'
                    />
                    <Product
                        id='323456'
                        title="Campus Sutra
                        Men's Vegan Leather Regular Fit Cotton Jacket for Winter Wear"
                        price={1033}
                        rating={3}
                        image='https://m.media-amazon.com/images/I/81iREF0AoQL._AC_UL320_.jpg'
                    />

                </div>
                <div className='home__row'>
                    <Product
                        id='423456'
                        title='NOGAIYA Glass Wall Lamp (Multicolor)'
                        price={399}
                        rating={3}
                        image='https://m.media-amazon.com/images/I/61273AWlxLL._AC_SY200_.jpg'
                    />
                    <Product
                        id='523456'
                        title='Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)'
                        price={3449}
                        rating={5}
                        image='https://images-eu.ssl-images-amazon.com/images/G/31/img19/DesktopQCandCC/1X_brownie_PcCC._SY304_CB646510445_.jpg'
                    />
                    <Product
                        id='623456'
                        title='Instant Pot Air Fryer, Vortex 6QT ClearCook, Touch Control Panel, 360° EvenCrisp™ Technology'
                        price={11999}
                        rating={5}
                        image='https://m.media-amazon.com/images/I/71VgHp7sgEL._AC_SY200_.jpg'
                    />
                    <Product
                        id='723456'
                        title='Beardo Beard & Hair Growth Oil for thicker, longer beard'
                        price={569}
                        rating={3}
                        image='https://images-eu.ssl-images-amazon.com/images/I/41+7KF5NOYL._AC_SX184_.jpg'
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id='823456'
                        title='Acer 127 cm (50 inches) I Series 4K Ultra HD Android Smart LED TV'
                        price={26999}
                        rating={5}
                        image='https://m.media-amazon.com/images/I/41imW51RweL._SY300_SX300_QL70_FMwebp_.jpg'
                    />
                    <Product
                        id='923456'
                        title="TRONICA Series 7.1 Channel Home Theatre System Bluetooth, USB,FM, SD, RCA Inputs,AUX, LED TV Supported"
                        price={69990}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/71Ffh7BAS5S._AC_UL320_.jpg'
                    />


                </div>
            </div>
        </>
    )
}

export default Home