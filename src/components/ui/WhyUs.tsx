import { Col, Row } from "antd"
import { useMediaQuery } from "react-responsive";

const WhyUs = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    let textLeft = false;
    if(isMobile){
         textLeft = true;
    }
    const whyData = [
        {
            icon: '/icons/1.png',
            title: 'Reliable',
            description: 'Extensive multi-point evaluation – Each vehicle is carefully inspected to meet high safety.'
        },
        {
            icon: '/icons/2.png',
            title: 'Sustainable',
            description: 'Drive with purpose – We plant a tree for every car you purchase'
        },
        {
            icon: '/icons/4.png',
            title: 'Secure',
            description: 'Unhappy with your purchase? No problem. Return your car with our hassle-free'
        },
        {
            icon: '/icons/3.png',
            title: 'Convenient',
            description: 'No need to step out! Schedule a virtual viewing and have your car delivered right to your doorstep.'
        }
    ]
  return (
    <section className="container section ">
    <h2 className="heading">Why carnest?</h2>
      <div className="content-wrapper" style={{paddingTop: '50px'}}>
      <Row gutter={[20, 20]}>
        {
            whyData.map((item, index) => (
                <Col key={index} sm={24} md={12} lg={6}>
                    <div className="sinlge-item" style={{ textAlign: textLeft ? 'left' : 'center' }}>
                        <img style={{width: '65px', margin: '0px auto'}} src={item.icon} alt="Icon" />
                        <h2 style={{margin: '8px 0px'}}>{item.title}</h2>
                        <p style={{fontSize: '16px'}}>{item.description}</p>
                    </div>
                </Col>
            ))
        }
      </Row>
      </div>
    </section>
  )
}

export default WhyUs
