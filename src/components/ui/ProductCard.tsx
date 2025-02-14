/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}: any) => {

    const navigate = useNavigate();

    const productDetailsClick = (data: any) => {
        navigate(`/shop/${data._id}`, { state: { product: data } }); 
    };

    const goToCheckout = (data: any) => {
        navigate(`/checkout`, { state: { product: data } });
    }

    return (
        <Card
            className="card"
            style={{ marginLeft: "5px", marginRight: "5px" }}
            cover={<img alt="Car" src={item?.image} />}
        >


        {
            !item.inStock && <label style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                border: '1px solid #ddd',
                background: '#d52626',
                color: '#fff',
                fontSize: '13px',
                padding: '3px 13px',
                display: 'block',
                borderRadius: '4px'

            }} >Stock out</label>}

            {/* Title and description */}
            <Meta title={item.name} description={item.model} />

            {/* Price and Cart Button - Placed Below Title & Description */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px"}}>
            <div>
                <span style={{ color: "#212121", fontWeight: "500" }}>Price</span>
                <br />
                {
                item?.isOnSale && <>
                    <span style={{ textDecoration: "line-through" }}>${(item.price * 1.05).toFixed(2)}</span>
                    &nbsp;&nbsp;
                </>
                }
                <span style={{ color: "#212121", fontWeight: "500" }}>${Number(item.price).toFixed(2)}</span>
            </div>
            <button className="icon-btn" title="Buy now" 
            onClick={() => goToCheckout(item)}
            style={{ cursor: "pointer", marginRight: '0px' }}>
                <ShoppingCartOutlined />
            </button>
            </div>

            {/* View Details Button - At the Bottom */}
            <div style={{ marginTop: "16px",}}>
            <Button size="large" block onClick={ () => productDetailsClick(item)}>
                View details
            </Button>
            </div>
        </Card>
    )
}

export default ProductCard
