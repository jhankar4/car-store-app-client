import { Row, Col, Button, Input, Space, Typography, Divider, Flex } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import './../../styles/footer.css'; 

const { Title, Text } = Typography;

const FooterSection = () => {
  return (
    <section className="footer" style={{ backgroundColor: '#000', paddingTop: '50px', color: '#fff', }}>
      <div className="container">
      <Row gutter={[24, 24]}>
        {/* Logo and Slogan */}
        <Col xs={24} sm={8}>
          <div className="logo-section">
            <img src="/carnest-logo.png" alt="Carnest Logo" style={{ maxWidth: '160px', filter: 'invert(1)' }} />
            <Text className="slogan">Drive Your Dreams</Text>
            <Space size="middle" style={{ marginTop: '20px' }}>
              <FacebookOutlined style={{ fontSize: '24px', color: '#fff' }} />
              <TwitterOutlined style={{ fontSize: '24px', color: '#fff' }} />
              <InstagramOutlined style={{ fontSize: '24px', color: '#fff' }} />
              <LinkedinOutlined style={{ fontSize: '24px', color: '#fff' }} />
            </Space>
          </div>
        </Col>

        {/* Quick Links */}
        <Col xs={24} sm={8}>
          <div className="quick-links">
            <Title level={4} style={{ color: '#fff', textAlign: 'left' }}>Quick Links</Title>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ textAlign: 'left' }}><a href="/about" style={{ color: '#fff' }}>About</a></li>
              <li style={{ textAlign: 'left' }}><a href="/shop" style={{ color: '#fff' }}>Shop</a></li>
              <li style={{ textAlign: 'left' }}><a href="/privacy" style={{ color: '#fff' }}>Privacy Policy</a></li>
            </ul>
          </div>
        </Col>

        {/* Newsletter Subscription */}
        <Col xs={24} sm={8}>
          <div className="newsletter">
            <Title level={4} style={{ color: '#fff', textAlign: 'left' }}>Subscribe to Our Newsletter</Title>
            <Flex>
              <Input placeholder="Enter your email" style={{ width: '70%', borderRadius: '0px', marginBottom: '10px' }} />
              <Button color="purple" variant="solid" style={{ width: '25%', borderRadius: '0px', boxShadow: 'none' }}>
                Subscribe
              </Button>
            </Flex>
          </div>
        </Col>
      </Row>

      {/* Second Row: Contact Info */}
      <Divider style={{ borderColor: '#dddddd45', margin: '40px 0' }} />
      <Row gutter={24} style={{paddingBottom: '20px'}}>
        <Col xs={24} sm={8}>
          <Text style={{ color: '#fff' }}>Phone: +123 456 7890</Text>
        </Col>
        <Col xs={24} sm={8}>
          <Text style={{ color: '#fff' }}>Email: info@carnest.com</Text>
        </Col>
        <Col xs={24} sm={8}>
          <Text style={{ color: '#fff' }}>© 2025 Carnest. All rights reserved.</Text>
        </Col>
      </Row>
      </div>
      </section>
  );
};

export default FooterSection;
