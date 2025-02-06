import { useParams } from "react-router-dom";
import { blogs } from "../utils/BlogData";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useEffect } from "react";

export default function BlogDetails() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);

    const { slug } = useParams();

    const blog = blogs.find((b) => b.slug === slug);

    // If blog is not found, showing not found
    if (!blog) return <h1 style={{textAlign: 'center', fontSize: '20px'}}>Blog Not Found</h1>;

  return (
    <section className="container">
        <Row justify={'center'} >
            <Col lg={14}>
                <Card
                        style={{cursor: 'pointer'}}
                            cover={
                                <img
                                    alt={blog.title}
                                    src={blog.image}
                                />
                            }
                        >
                            <Meta
                                 title={<span style={{ fontSize: '20px', fontWeight: 'bold', cursor: 'pointer' }}>{blog.title}</span>}
                                 description={<span style={{ fontSize: '18px', color: '#666' }}>{blog.description}</span>}
                            />
                            <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px', marginTop: '40px' }}>A DPF is a clever little device that's fitted to your diesel's exhaust system to capture harmful particulate; these are usually soot particles, giving DPFs the nickname 'soot traps'.</p>
                            <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>However, as with all filters, the DPF can eventually clog up, creating a blockage and hindering your vehicle's performance. To prevent this, a DPF filter must go through something called 'regeneration'. This is where the DPF burns off the soot that it has caught in a safe and environmentally friendly way, emptying the filter and making it good as new.</p>
                            <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>Most DPFs are able to do this automatically depending on how you drive your vehicle. If you do lots of motorway driving, your DPF will be getting hot enough naturally to regenerate regularly, keeping it clear and operating efficiently. This is known as 'passive regeneration'. However, not everyone will be using their vehicle for long journeys, which is why modern DPFs are also able to do something called 'active regeneration'. This is where the engine actively adds additional fuel to raise the temperature of the exhaust when the filter reaches a certain level, usually around 45% full, and thus safely burn off the soot.</p>
                        </Card>
            </Col>
        </Row>
    </section>
  )
}
