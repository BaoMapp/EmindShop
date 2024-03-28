import React, {useState, useEffect} from 'react'

import '../styles/home.css'
import Helmet from '../components/Helmet/Helmet'

import Clock from '../components/UI/Clock';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png'

import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

import Sevices from '../services/Sevices';
import ProductsList from '../components/UI/ProductsList';
import counterImg from '../assets/images/counter-timer-img.png'

import useGetData from '../custom-hooks/useGetData';


const Home = () => {

const {data: products, loading} = useGetData('products')

const [trendingProducts, setTrendingProducts] = useState([]);
const [bestSalesProducts, setBestSalesProducts] = useState([]);
const [mobileProducts, setMobileProducts] = useState([]);
const [wirelessProducts, setWirelessProducts] = useState([]);
const [popularProducts, setPopularProducts] = useState([]);

const year = new Date().getFullYear();

useEffect(()=>{
  const filterTrendingProducts = products.filter
    (item=> item.category ==='kitchenutensils'
  );

  const filterBestSalesProducts = products.filter
    (item=> item.category ==='cookware'
  );

  const filterMobileProducts = products.filter
    (item=> item.category ==='mobile'
  );

  const filterWirelessProducts = products.filter
    (item=> item.category ==='wireless'
  );
  
  const filterPopularProducts = products.filter
    (item=> item.category ==='popular'
  );


  setTrendingProducts(filterTrendingProducts);
  setBestSalesProducts(filterBestSalesProducts);
  setMobileProducts(filterMobileProducts);
  setWirelessProducts(filterWirelessProducts);
  setPopularProducts(filterPopularProducts);

}, [products]);
  
  return <Helmet title = {"Home"}>
    <section className='hero_section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero_content'>
              <p className='hero_stbtitle'>Trending Product in {year}</p>
              <h2>Utensils for every family</h2>
              <p>High-Quality Imported Goods. Cheap Genuine Household Appliances. Over 15 Years of Reputation. META Genuine Authorized Dealer, Top Reputation</p>

              <motion.button whileTap={{scale:1.2}} className='buy_btn'><Link to='/shop'>SHOP NOW</Link></motion.button>
            </div>
          </Col>
          <Col lg ='6' md='6'>
            <div className="hero_img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Sevices/>
    <section className='trending_products'>
      <Container>
        <Row>

        
          <Col lg='12' className='text-center'>
            {/* <h2 className='section_title'>Popular Products</h2> */}
          </Col>

          {
            loading ? <h5 className='fw-bold'>Loading.....</h5> : <ProductsList data={trendingProducts}/>
          }
          

      
          <Col lg='12' className='text-center'>
          <h2 className='section_title'> Best Sales</h2>
          </Col>
          {
            loading ? <h5 className='fw-bold'>Loading.....</h5> : <ProductsList data={bestSalesProducts}/>
          }
        </Row>
      </Container>
    </section>

    <section className='timer_count'>
      <Container>
        <Row>
          <Col lg='6' md='6'>

          <div className="Clock_top-content">
            
          </div>  
          <Clock/>
            <motion.button whileTap={{scale: 1.2}} className='buy_btn store_btn'>
              <Link to='/'>Visit Store</Link>
            </motion.button>
            
          </Col>

          <Col lg='6' md='6' className='text-end'>
            <img src={counterImg} alt='' />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="new_arrivals">
      <Container>
        <Row>
        <Col lg='12' className='text-center mb-5'>
            <h2 className='section_title'>New Arrivals</h2>
        </Col>
        {
            loading ? <h5 className='fw-bold'>Loading.....</h5> : <ProductsList data={mobileProducts}/>
          }
        {
            loading ? <h5 className='fw-bold'>Loading.....</h5> : <ProductsList data={wirelessProducts}/>
          }

        </Row>
      </Container>
    </section>

    <section className="popular_category">
    <Container>
        <Row>
        <Col lg='12' className='text-center mb-5'>
            {/* <h2 className='section_title'>Popular in Category</h2> */}
        </Col>
        {
            loading ? <h5 className='fw-bold'>Loading.....</h5> : <ProductsList data={popularProducts}/>
          }
        </Row>
      </Container>
    </section>
  </Helmet>
};

export default Home;