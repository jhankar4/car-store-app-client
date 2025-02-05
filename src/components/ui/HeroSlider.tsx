import { Button, Card, Carousel, Col, Row } from "antd";

export default function HeroSlider() {

      type THeroItem = {
        title: string;
        description: string;
      };


      const heroItems: THeroItem[] = [
        {
          title: 'Drive Your Future Today 🔥',
          description: 'Browse thousands of cars near you and drive home your dream vehicle today.',
        },
        {
            title: 'Your Car, Your Way 😍',
            description: 'Fast, simple, and secure. Your next car is just a few clicks away.',
        },
      ];

      
  return (
    <Carousel arrows={false} dots={false} infinite={true} autoplay={true} autoplaySpeed={5500}>
        {heroItems.map((item, index) => (
            <div key={index}>
                <div className={`slider ${index === 1 ? "slider-2" : "slider-1"}`}>
                    <div className="container">
                    <Row>
                        <Col md={24} lg={12}>
                            <div className="content-wrapper" style={{marginTop: '50px'}}>
                                <h2 className="headline">{item.title}</h2>
                                <p className="sub-headline">{item.description}</p>
                                <Card style={{ width: 350 }}>
                                    <p style={{fontSize: '18px',marginBottom: '10px', textAlign: 'center'}}>Find your next car, nationwide.</p>
                                    <Button color="purple" variant="solid" block>
                                        Shop now
                                    </Button>
                                </Card>
                            </div>
                        </Col>
                        <Col md={24} lg={12}>
                            <div className="slider-object">
                                <img src="car-1.png" alt="Car" />
                            </div>
                        </Col>
                    </Row>
                    </div>
                </div>
            </div>
        ))}
    </Carousel>
  )
}
