import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { blogs } from "../utils/BlogData";
import { useNavigate } from "react-router-dom";

type TBlog = {
    _id: string
    title: string
    slug: string
    description: string
    image: string
    published_date: string
    category: string
  }

  
export default function Blog() {

    const navigate = useNavigate();

    const blogClick = (data: TBlog) => {
        const slug = data.slug
        navigate(`/blog/${slug}`);
    };
  return (
    <section className="container">
        <Row gutter={[20, 20]}>
            
            {
                blogs.map((item, index) => (
                    <Col key={index} lg={8} md={12} sm={24}>
                        <Card
                        style={{cursor: 'pointer'}}
                        onClick={ () => blogClick(item)}
                            cover={
                                <img
                                    alt={item.title}
                                    src={item.image}
                                />
                            }
                        >
                            <Meta
                                 title={<span style={{ fontSize: '20px', fontWeight: 'bold', cursor: 'pointer' }}>{item.title}</span>}
                                 description={<span style={{ fontSize: '16px', color: '#666' }}>{item.published_date}</span>}
                            />
                        </Card>
                    </Col>
                ))
            }
        </Row>
    </section>
  )
}
