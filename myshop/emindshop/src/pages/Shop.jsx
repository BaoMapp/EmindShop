import React,{useState} from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css'

import products from '../assets/data/products'
import ProductLists from "../components/UI/ProductsList"

const Shop = () => {

  const [productsData, setProductsData] = useState(products)
  console.log(productsData);
  const handleFilter = e=>{
    const filterValue = e.target.value;
    if(filterValue === 'cookware'){
      const filteredProducts =products.filter(
        (item)=> item.category === "cookware"
        );

        setProductsData(filteredProducts);
    }

    if(filterValue === 'mobile'){
      const filteredProducts =products.filter(
        (item)=> item.category === "mobile"
        );

        setProductsData(filteredProducts);
    }

    if(filterValue === 'kitchenutensils'){
      const filteredProducts =products.filter(
        (item)=> item.category === "kitchenutensils"
        );

        setProductsData(filteredProducts);
    }

    if(filterValue === 'knife'){
      const filteredProducts =products.filter(
        (item)=> item.category === "knife"
        );

        setProductsData(filteredProducts);
    }

    if(filterValue === 'wireless'){
      const filteredProducts =products.filter(
        (item)=> item.category === "wireless"
        );

        setProductsData(filteredProducts);
    }
  }



  const handleSearch = e => {
    const searchTerm = e.target.value 

    const seachedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(seachedProducts)
  }
  return ( 
  <Helmet title='shop'>

    <CommonSection title='Products'/>

    <section>
      <Container>
        <Row>
          <Col lg = '3' md='3'>
            <div className="filter_widget">
              <select onChange={handleFilter}>
              <option >Filter By Category</option>
                <option value="cookware">Cookware</option>
                <option value="mobile">Mobile</option>
                <option value="kitchenutensils">Kitchen Utensils</option>
                <option value="knife">Knife</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
          </Col>
          <Col lg = '3' md='6' className='text-end'>
          <div className="filter_widget">
              <select>
              <option >Sort By </option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
          <Col lg = '6' md='12'>
          <div className="search_box">
            <input type="text" placeholder='Search.........' onChange={handleSearch} />
            <span><i class="ri-search-line"></i></span>
          </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          {
            productsData.length === 0? <h1>No products are found!</h1>
            : <ProductLists data={productsData} />
          }
        </Row>
      </Container>
    </section>
  </Helmet>
  );
};

export default Shop;