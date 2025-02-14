/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Col, Descriptions, Image, Row } from "antd"
// import { productItems, TOfferItem } from "../utils/ProductData";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProductDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state?.product;

    const goToCheckout = (data: any) => {
        navigate(`/checkout`, { state: { product: data } });
    }

    return (
        <div style={{ maxWidth: "1000px", margin: "auto", padding: "16px" }}>
        {/* Car Image */}
        <Card style={{ marginBottom: "20px" }}>
        <Row gutter={16}>  
            {/* Image Column */}
            <Col xs={24} md={10}>  
            <div style={{width: '100%', maxHeight: '355px'}}>
                <Image 
                    alt={data.model} 
                    src={data.image} 
                    style={{ width: "100%", height: "auto", objectFit: "cover" }} 
                />
            </div>

            <div style={{width: '100%', marginTop: '16px', display: 'flex', justifyContent: 'space-between', gap: '15px'}}>
                <Image 
                    alt={data.model} 
                    src={data.image} 
                    style={{ width: "100%", height: '135px', objectFit: "cover" }} 
                />
                <Image 
                    alt={data.model} 
                    src={data.image}
                    style={{ width: "100%", height: '135px', objectFit: "cover" }} 
                />
            </div>

            </Col>

            {/* Details Column */}
            <Col xs={24} md={14}>  
            <Descriptions title="Car Details" bordered column={1}>
                <Descriptions.Item label="Brand">{data?.brand}</Descriptions.Item>
                <Descriptions.Item label="Model">{data.model}</Descriptions.Item>
                <Descriptions.Item label="Year">{data.year}</Descriptions.Item>
                <Descriptions.Item label="Category">{data.category}</Descriptions.Item>
                <Descriptions.Item label="Price">${data.price}</Descriptions.Item>
                <Descriptions.Item label="Description">{data.description}</Descriptions.Item>
            </Descriptions>
            <Button color="purple"
            onClick={ () => goToCheckout(data)}
            style={{marginTop: '16px'}} block size="large" variant="solid">Buy now</Button>
            </Col>
        </Row>
        </Card>
        </div>
    )
}

export default ProductDetails
