import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Home.scss'
const Home = () => {
  return (
    <div>
        <div className="slider">
        <Carousel>
                <div>
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg" />
                </div>
                <div>
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg" />
                </div>
                <div>
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg" />
                </div>
            </Carousel>
        </div>
        <div className="home__head">
            <div className="home__head__continer">
                <div className="home__head__continer__txt">
                    <h1>Local Florist Just <br /> For You</h1>
                    <p>Lorem ipsum dolor sit amet, pri autem nemore <br /> bonorum te. Autem fierent ullamcorper ius no. Te tibique <br /> intellegam mediocritatem his, est quis.</p><br />
                    <h3>Mary Byrd, owner</h3><br />
                     <img src="	https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
                </div>
                <div className="home__head__continer__foto">
                    <div className="home__head__continer__foto1">
                        <img src="	https://mobirise.com/extensions/floram4/floral-studio/assets/images/fl2.jpg" alt="" />
                    </div>
                    <div className="home__head__continer__foto2">
                        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/fl1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="home__body">
            <div className="home__body__continer">
                <div className="home__body__continer__txt">
                   <div className="home__body__continer__txt__con">
                    <h1>Our Mission</h1>
                    <p>Lorem ipsum dolor sit amet, pri omnium <br /> verterem id, sit labore dicunt an, ea <br /> civibus.</p><br />
                    <button>Read more</button>
                   </div>
                </div>
                <div className="home__body__continer__img">
                    <img src="	https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
                </div>

            </div>
        </div>
        <div className="home__carts">
            <div className="home__carts__continer">
                <div className="home__carts__continer1">
                    <div className="home__carts__continer1_c1">
                        <img src="	https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
                        <h2>Dahlia</h2>
                        <h3>$45</h3>

                    </div>
                    <div className="home__carts__continer1_c2">
                    <img src="	https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
                    <h2>Dahlia</h2>
                        <h3>$45</h3>
                    </div>
                    <div className="home__carts__continer1_c3">
                    <img src="	https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
                    <h2>Dahlia</h2>
                        <h3>$45</h3>
                    </div>

                </div>
                <div className="home__carts__continer2">
                    <div className="home__carts__continer2__c1">
                    <img src="	https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
                    <h2>Dahlia</h2>
                        <h3>$45</h3>
                    </div>
                    <div className="home__carts__continer2__c2">
                    <img src="	https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
                    <h2>Dahlia</h2>
                        <h3>$45</h3>
                    </div>
                    <div className="home__carts__continer2__c3">
                    <img src="	https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
                    <h2>Dahlia</h2>
                        <h3>$45</h3>
                    </div>

                </div>
            </div>
        </div>
        <div className="home__imgcart">
            <p>Contacts</p>
            <h1>Our Team</h1>
            <div className="home__imgcart__continer">
                <div className="home__imgcart__continers">

                <div className="home__imgcart__continer1">
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
                     <h2>Velva Kopf</h2>
                     <p>Biologist</p>
                </div>
                <div className="home__imgcart__continer2">
                <img src="	https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg" alt="" />
                <h2>Velva Kopf</h2>
                     <p>Biologist</p>
                </div>
                <div className="home__imgcart__continer3">
                <img src="	https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg" alt="" />
                <h2>Velva Kopf</h2>
                     <p>Biologist</p>
                </div>
                </div>
                <div className="home__imgcart__continer__txt">
                    <div className="home__imgcart__continer__txt1">
                        <h1>The fine makers of flora</h1>
                        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />

                    </div>
                    <div className="home__imgcart__continer__txt2">
                     <p>Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem <br /> fierent ullamcorper ius no, nec ea quodsi invenire. Pri facilisi eleifend <br /> ad, ad eos scripta oblique. Vix cu oratio.</p>
                    </div>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Home