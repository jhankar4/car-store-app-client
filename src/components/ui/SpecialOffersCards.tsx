/* eslint-disable @typescript-eslint/no-explicit-any */
// import { EditOutlined } from '@ant-design/icons'
import { Carousel, Col, Row, Skeleton } from 'antd'
import { useMediaQuery } from 'react-responsive';
import ProductCard from './ProductCard';
import { useGetProductsQuery } from '../../redux/features/Products/productApi';

export default function SpecialOffersCards() {

  const { isLoading, data } = useGetProductsQuery(undefined, {
      refetchOnMountOrArgChange: true,
    });

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  let slidesToShow = 4;
  if (isMobile) {
    slidesToShow = 1;
  } else if (isTablet) {
    slidesToShow = 2;
  }
  if (isLoading) {
    return (
      <section className="container section" style={{ paddingTop: 0 }}>
        <h2 className="heading">Special offers</h2>
        <Row gutter={[0, 10]}>
            <Col sm={24} md={12} lg={6} className="single-item">
              <Skeleton active avatar paragraph={{ rows: 2 }} />
            </Col>
        </Row>
      </section>
    );
  }

  const offerItems = data.data.filter((item: any) => item.isOnSale && item.inStock);
  console.log(offerItems)
  return (
    <section className="container special-offers section">
        <h2 className="heading">Special offers</h2>

        <Carousel arrows dots={false} infinite={true} 
        pauseOnHover={false}
        slidesToShow={slidesToShow} autoplay={true}
        autoplaySpeed={3500}
        className='slider-wrapper'
        >
            {
                offerItems.map( (item: any, index: number) => (
                    <div className="single-slide" key={index} >
                        <ProductCard item={item} />
                    </div>
                ))
            }
        </Carousel>
    </section>
  )
}
