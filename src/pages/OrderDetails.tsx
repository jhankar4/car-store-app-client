/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Descriptions, Tag, Image } from "antd";
import { useVerifyOrderQuery } from "../redux/features/Products/productApi";
import { useSearchParams } from "react-router-dom";

const OrderDetails = () => {
  const [searchParams] = useSearchParams();
  const { isLoading, data: orderData } = useVerifyOrderQuery(
    searchParams.get("order_id"),
    {
      refetchOnMountOrArgChange: true,
    }
  );

  if (isLoading) return <p>Loading...</p>;

  const { verifiedPayment, car_details } : any = orderData.data;
  const payment = verifiedPayment[0];

  // Determine status color
  const statusColor : any = {
    Success: "green",
    Failed: "red",
    Pending: "orange",
    Cancelled: "gray",
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      {/* Status Bar */}
      {/* <Card style={{ marginBottom: "20px", textAlign: "center" }}>
        <Tag color={statusColor[payment.bank_status] || "blue"} style={{ fontSize: "16px", padding: "8px 16px" }}>
          {payment.bank_status}
        </Tag>
      </Card> */}

      <section className="thanks-section">
        <div>
          <div className="top-container">
            <div className="welcome-msg">
              <div className="check-container">
                <div className={`check-background ${payment.bank_status === 'Success' ? 'success' : 'failed'}`}>
                 {
                  payment.bank_status === 'Success' && <svg
                  viewBox="0 0 65 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 25L27.3077 44L58.5 7"
                    stroke="white"
                    stroke-width="13"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                 }
                  
                  {
                    payment.bank_status !== 'Success' && <svg
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 10L55 55"
                      stroke="white"
                      stroke-width="8"
                      stroke-linecap="round"
                    />
                    <path
                      d="M55 10L10 55"
                      stroke="white"
                      stroke-width="8"
                      stroke-linecap="round"
                    />
                  </svg>
                  }
                  
                </div>
                <div className="check-shadow"></div>
              </div>

              <div className={`txt-content ${payment.bank_status === 'Success' ? 'success' : 'failed'}`}>
                {
                  payment.bank_status === 'Success' && <h3>Thank you for your order</h3>
                }
                {
                  payment.bank_status !== 'Success' && <h3>Oops! Something went wrong. Order not placed.</h3>
                }
                {/* <p>Please check your email inbox for order confirmation</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Image */}
      <Card cover={<Image alt={car_details.model} src='https://d1ek71enupal89.cloudfront.net/images/blocks_png/PEUGEOT/208/5DR/73Peu208GT5drWhiFR_800.jpg' />} style={{ marginBottom: "20px" }}>
        <Descriptions title="Car Details" bordered column={1}>
          <Descriptions.Item label="Brand">{car_details.brand}</Descriptions.Item>
          <Descriptions.Item label="Model">{car_details.model}</Descriptions.Item>
          <Descriptions.Item label="Year">{car_details.year}</Descriptions.Item>
          <Descriptions.Item label="Category">{car_details.category}</Descriptions.Item>
          <Descriptions.Item label="Price">${car_details.price}</Descriptions.Item>
          <Descriptions.Item label="Description">{car_details.description}</Descriptions.Item>
        </Descriptions>
      </Card>

      {/* Order Details */}
      <Card title="Order Details">
        <Descriptions bordered column={1}>
          <Descriptions.Item label="Order ID">{payment.order_id}</Descriptions.Item>
          <Descriptions.Item label="Amount Paid">{payment.payable_amount} {payment.currency}</Descriptions.Item>
          <Descriptions.Item label="Received Amount">{payment.received_amount}</Descriptions.Item>
          <Descriptions.Item label="Bank Transaction ID">{payment.bank_trx_id}</Descriptions.Item>
          <Descriptions.Item label="Payment Method">{payment.method}</Descriptions.Item>
          <Descriptions.Item label="Transaction Date">{payment.date_time}</Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColor[payment.bank_status] || "blue"}>{payment.bank_status}</Tag>
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

export default OrderDetails;
