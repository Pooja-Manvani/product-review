import { Button, Col, Row } from 'react-bootstrap';
import cart from './assets/images/icon-cart.svg'
import desProductImg from './assets/images/image-product-desktop.jpg';
import mobProductImg from './assets/images/image-product-mobile.jpg';
import './App.css';


function App() {
  // Title Variable.
  const title = "P E R F U M E";
  /**
   * @name getAddtoCart
   * @description for added product alert.
   */
  const getAddtoCart = () => {
    alert("Product is added in the cart.")
  }
  return (
    // Start:Product Card
    <div className="App">
      <Row className='h-100 rounded-3 bg-white' >
        {/* Start: Product Image Container */}
          { (window.innerWidth > 986) ?
          <Col className='overflow-hidden h-100 p-0 rounded-start' lg={6} xsm={12} >
            <img alt="Product" src={desProductImg} className='overflow-hidden h-100 w-100' /> 
            </Col>
            :
            <Col className='overflow-hidden h-auto p-0 rounded-top' lg={6} xsm={12} >
            <img alt="Product" src={mobProductImg} className='overflow-hidden h-100 w-100' />
            </Col>
          }
        {/* End: Product Image Container */}
        {/* Start: Details and information Container. */}
        <Col className='d-flex  flex-column p-0  overflow-hidden' lg={6} xsm={12}>
          <div className='p-lg-5 flex-grow-1'>
          {/* Start: Title */}
          <h6 className='px-4 py-1 py-lg-3 text-muted fw-bold m-0'>{title}</h6>
          {/* End: Title */}
          {/* Start: Product subject container. */}
          <h2 className='info-fonts fw-bolder m-0 px-4 py-lg-3'>
            <p className='m-0'>
            Grabrielle
            </p>
            <p className='m-0'>
            Essence Eau
            </p>
            <p className='m-0'>
            De Parfum
            </p>
          </h2>
          {/* End: Product subject container. */}
          {/* Start: Product info-Paragraph */}
          <h5 className='fw-lighter text-muted px-4 p-lg-4 pe-5'>
            A floral, solar and voluptuous interpretation composed
            by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </h5>
          {/* End: Product info-Paragraph */}
          {/* Start: Product Price */}
          <h2 className='px-4 py-2 py-lg-4 text-success fw-bolder'>
            $149.99 <span className='price-font text-muted'>$169.99</span>
          </h2>
          {/* End: Product Price */}
          {/* Start: Product add to cart Button */}
          <div className='d-flex px-4 p-lg-2 bottom-0'>
          <Button className='d-flex w-100 rounded-3 justify-content-center bg-success border-0 shadow p-lg-3 ' onClick={getAddtoCart}>
             <img alt='icon-cart' className=' h-100 overflow-hidden pe-2' src={cart} />
              <div className='d-flex text-center fw-bold align-content-center ' >
                Add to Cart
              </div>
          </Button>
          </div>
          {/* End: Product add to cart Button */}
          </div>
        </Col>
        {/* End: Details and information Container. */}
      </Row>
    </div>
    // End:Product Card
  );
}

export default App;
