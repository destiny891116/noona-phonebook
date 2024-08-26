import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <div className="contact-item">
      <Row>
          <Col lg={2}>
              <img width={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP7g-S9-DLSLrx8D5LWReDH3k44y9K4GnK5g&s" />
          </Col>
          <Col lg={10}>
              <div>{item.name}</div>
              <div>{item.phoneNumber}</div>
          </Col>
      </Row>
    </div>
  )
}

export default ContactItem
