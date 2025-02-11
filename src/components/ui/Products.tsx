/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";

const Products = ({heading, showItem, showFeatured}: any) => {
  const navigate = useNavigate();
  
    type TOfferItem = {
        name: string;
        model: string;
        image: string;
        featured: boolean;
      };

    const featuredItems: TOfferItem[] = [
        {
          name: '74 DS DS 4',
          featured: true,
          model: '1.2 HYBRID 136 Pallas 5dr e-DSC',
          image: 'https://d1ek71enupal89.cloudfront.net/images/blocks_png/PEUGEOT/208/5DR/73Peu208GT5drWhiFR_800.jpg'
        },
        {
            name: '72 DS DS 4',
            featured: true,
            model: '5.2 HYBRID 136 Pallas 5dr e-DSC',
            image: 'https://d1ek71enupal89.cloudfront.net/images/blocks_png/BMW/1%20SERIES/5DR/73Bmw1se118MspoAuy5drGryFR4_800.jpg'
          },
        {
          name: '74 DS DS 4',
          featured: true,
          model: '1.2 HYBRID 136 Pallas 5dr e-DSC',
          image: 'https://d1ek71enupal89.cloudfront.net/images/blocks_png/JEEP/AVENGER/5DR/24JeeAveAlt5drYelFR3_800.jpg'
        },
        {
            name: '72 DS DS 4',
            featured: true,
            model: '5.2 HYBRID 136 Pallas 5dr e-DSC',
            image: 'https://d1ek71enupal89.cloudfront.net/images/blocks_png/LEAPMOTOR/C10/5DR/74LeaC105DrGrnFR4_800.jpg'
          },
        {
          name: '74 DS DS 4',
          featured: true,
          model: '1.2 HYBRID 136 Pallas 5dr e-DSC',
          image: 'https://d1ek71enupal89.cloudfront.net/images/blocks_png/ALFA%20ROMEO/JUNIOR/5DR/74AlfJunElec5drRedFR8_800.jpg'
        },
        {
            name: '74 DS DS 4',
            featured: true,
            model: '1.2 HYBRID 136 Pallas 5dr e-DSC',
            image: 'https://d1ek71enupal89.cloudfront.net/images/blocks_png/PEUGEOT/208/5DR/73Peu208GT5drWhiFR_800.jpg'
          },
          {
            name: '74 DS DS 4',
            featured: true,
            model: '1.2 HYBRID 136 Pallas 5dr e-DSC',
            image: 'https://d1ek71enupal89.cloudfront.net/images/blocks_png/PEUGEOT/208/5DR/73Peu208GT5drWhiFR_800.jpg'
          },
          {
              name: '72 DS DS 4',
              featured: true,
              model: '5.2 HYBRID 136 Pallas 5dr e-DSC',
              image: 'https://d1ek71enupal89.cloudfront.net/images/blocks_png/BMW/1%20SERIES/5DR/73Bmw1se118MspoAuy5drGryFR4_800.jpg'
            },
            {
              name: '72 DS DS 4',
              featured: false,
              model: '5.2 HYBRID 136 Pallas 5dr e-DSC',
              image: 'https://d1ek71enupal89.cloudfront.net/images/blocks_png/LEAPMOTOR/C10/5DR/74LeaC105DrGrnFR4_800.jpg'
            },
          {
            name: '74 DS DS 4',
            featured: false,
            model: '1.2 HYBRID 136 Pallas 5dr e-DSC',
            image: 'https://d1ek71enupal89.cloudfront.net/images/blocks_png/ALFA%20ROMEO/JUNIOR/5DR/74AlfJunElec5drRedFR8_800.jpg'
          },
      ];

      const itemsToDisplay = showFeatured
    ? featuredItems.filter(item => item.featured) // Only show featured items
    : featuredItems;
  return (
    <section className="container section" style={{ paddingTop: 0 }}>
        <h2 className="heading">{heading}</h2>
        <Row gutter={[0, 10]}>
        {
                itemsToDisplay.slice(0, showItem ? showItem : featuredItems.length).map( (item, index) => (
                  
                  <Col sm={24} md={12} lg={6} className="single-item" key={index} >
                        <Card
                            className='card'
                            style={{ marginLeft: '5px', marginRight: '5px' }}
                            cover={
                            <img
                                alt="Car"
                                src={item?.image}
                            />
                            }
                            actions={[
                            <div style={{textAlign: 'left', marginLeft: '15px'}}>
                                <span style={{color: '#212121', fontWeight: '500'}}>Price</span>
                                <br />
                                <span style={{textDecoration: 'line-through'}}>$3500</span>
                                &nbsp;&nbsp;
                                <span style={{color: '#212121', fontWeight: '500'}}>$2200</span>
                            </div>,
                            <button className='icon-btn' style={{cursor: 'pointer'}}>
                                <ShoppingCartOutlined />
                            </button>
                            ]}
                            >
                            <Meta
                            title={item.name}
                            description={item.model}
                            />
                        </Card>
                    </Col>
                    
                ))
            }
        </Row>
        {
          showFeatured &&
          <div style={{textAlign: 'center', paddingTop: '50px'}}>
                <Button variant="solid" size="large" onClick={() => navigate('/shop')} className="custom-button" >View All</Button>
          </div>
        }
    </section>
  )
}

export default Products
