// import { EditOutlined } from '@ant-design/icons'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card, Carousel } from 'antd'
import Meta from 'antd/es/card/Meta'

export default function SpecialOffersCards() {

    // const contentStyle: React.CSSProperties = {
    //     margin: 0,
    //     height: '160px',
    //     color: '#fff',
    //     lineHeight: '160px',
    //     textAlign: 'center',
    //     background: '#364d79',
    //   };

    type TOfferItem = {
        name: string;
        model: string;
        image: string
      };

    const offerItems: TOfferItem[] = [
        {
          name: '74 DS DS 4',
          model: '1.2 HYBRID 136 Pallas 5dr e-DSC',
          image: 'https://d1ek71enupal89.cloudfront.net/images/blocks_png/PEUGEOT/208/5DR/73Peu208GT5drWhiFR_800.jpg'
        },
        {
            name: '72 DS DS 4',
            model: '5.2 HYBRID 136 Pallas 5dr e-DSC',
            image: 'https://d1ek71enupal89.cloudfront.net/images/blocks_png/BMW/1%20SERIES/5DR/73Bmw1se118MspoAuy5drGryFR4_800.jpg'
          },
        {
          name: '74 DS DS 4',
          model: '1.2 HYBRID 136 Pallas 5dr e-DSC',
          image: 'https://d1ek71enupal89.cloudfront.net/images/blocks_png/JEEP/AVENGER/5DR/24JeeAveAlt5drYelFR3_800.jpg'
        },
        {
            name: '72 DS DS 4',
            model: '5.2 HYBRID 136 Pallas 5dr e-DSC',
            image: 'https://d1ek71enupal89.cloudfront.net/images/blocks_png/LEAPMOTOR/C10/5DR/74LeaC105DrGrnFR4_800.jpg'
          },
        {
          name: '74 DS DS 4',
          model: '1.2 HYBRID 136 Pallas 5dr e-DSC',
          image: 'https://d1ek71enupal89.cloudfront.net/images/blocks_png/ALFA%20ROMEO/JUNIOR/5DR/74AlfJunElec5drRedFR8_800.jpg'
        },
        {
            name: '74 DS DS 4',
            model: '1.2 HYBRID 136 Pallas 5dr e-DSC',
            image: 'https://d1ek71enupal89.cloudfront.net/images/blocks_png/PEUGEOT/208/5DR/73Peu208GT5drWhiFR_800.jpg'
          },
      ];


  return (
    <section className="container special-offers">
        <h2 className="heading">Special offers</h2>

        <Carousel arrows dots={false} infinite={true} 
        pauseOnHover={false}
        slidesToShow={4} autoplay={true}
        autoplaySpeed={3500}
        className='slider-wrapper'
        >
            {
                offerItems.map( (item, index) => (
                    <div className="single-slide" key={index} >
                        <Card
                        className='card'
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
                            <button className='icon-btn'>
                                <ShoppingCartOutlined />
                            </button>
                            ]}
                            >
                            <Meta
                            title={item.name}
                            description={item.model}
                            />
                        </Card>
                    </div>
                ))
            }
        </Carousel>
    </section>
  )
}
