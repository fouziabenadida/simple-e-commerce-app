import { Col, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Product, RootObject } from '../Data/Model'
import axios from 'axios'
import ProductItem from '../Components/ProductItem'

export default function Products() {
  const [store, setStore] = useState<Product[]>([])
  const getStore = async () => {
    const { data } = await axios.get<RootObject>("https://dummyjson.com/products")
    setStore(data.products)
  }
  useEffect(() => {
    getStore();

  }, [])


  return (
    <>
      <h1 style={{ textAlign: "center" }}>Latest Products</h1>
      <hr style={{ marginTop: "30px", marginBottom: "30px" }} />
      <Row md={2} xs={1} lg={3} className="g-3">
        {store.map((item) => {
          return (
            <Col key={item.id}>
              <ProductItem {...item} />
            </Col>
          );
        })}

      </Row>

    </>
  )
}
