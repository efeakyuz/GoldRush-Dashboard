import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import EventList from './EventList'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="12">
                        <EventList/>
                    </Col>
                </Row>
            </div>
        )
    }
}
