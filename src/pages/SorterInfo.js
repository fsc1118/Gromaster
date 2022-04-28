import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

function SorterInfo() {

  return (
    <div>
    <div align="center">
      <br></br>
      <>
  <Dropdown className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true">
      Farm
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true">
      Barn
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>


  <Dropdown className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true">
      Sorter
    </Dropdown.Toggle>
    
    <Dropdown.Menu>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

</>
<Button variant="primary">Update</Button>
    </div>
    <br></br>
    <div align="center">
    <Button variant="success">All</Button>{' '}    
    <Button variant="success">Food Court Stats</Button>{' '}
    <Button variant="success">Threshold Modes</Button>{' '}
    <Button variant="success">Charts Per Sorter</Button>{' '}
    </div>
    <br></br>
    <div align="center">    
    <Card style={{ width: '50rem' }}>
    <Card.Header as="h5"><Row><Col>Food Court Statistics</Col><Col><BootstrapSwitchButton onlabel="Graph" width={100} checked={true} onstyle="success" /></Col></Row></Card.Header>
    <Card.Body>
      <Col>
      <div align="center">
      <Row>   
        <Col> 
        <Card style={{ width: '20rem', height : '20rem' }}>
        <Card.Header as="h5">Current Count</Card.Header>
        <Card.Body>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '20rem', height : '10rem' }}>
        <Card.Header as="h5">Average Weight</Card.Header>
        <Card.Body>
        </Card.Body>
        </Card>
        <Card style={{ width: '20rem', height : '10rem' }}>
        <Card.Header as="h5">Set Threshold</Card.Header>
        <Card.Body>
        </Card.Body>
        </Card>
        </Col>
      </Row>
      </div>
      <Row>
      <div class="mt-3" align="center">
      <Card style={{width: '40rem', height : '10rem'}}>
      <Card.Header as="h5">Percent Sorted In the 24 Hours</Card.Header>
      <Card.Body>
      </Card.Body>
      </Card>
      </div>
      </Row>
    </Col>
    </Card.Body>
    </Card>
    </div>

    <br></br>

    <div align="center">    
    <Card style={{ width: '50rem' }}>
    <Card.Header as="h5"><Row><Col>Threshold and Modes</Col><Col><BootstrapSwitchButton onlabel="AUTO" width={100} checked={true} onstyle="success" /></Col></Row></Card.Header>
    <Card.Body>
      <Col>
      <div align="center">
      <Row>   
        <Col> 
        <Card style={{ width: '20rem', height : '10rem' }}>
        <Card.Header as="h5">High Threshold</Card.Header>
        <Card.Body>
        </Card.Body>
        </Card>
        <Card style={{ width: '20rem', height : '10rem' }}>
        <Card.Header as="h5">Low Threshold</Card.Header>
        <Card.Body>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '20rem', height : '10rem' }}>
        <Card.Header as="h5">Double Pig Threshold</Card.Header>
        <Card.Body>
        </Card.Body>
        </Card>
        <Card style={{ width: '20rem', height : '10rem' }}>
        <Card.Header as="h5">Wait Time</Card.Header>
        <Card.Body>
        </Card.Body>
        </Card>
        </Col>
      </Row>
      </div>
    </Col>
    </Card.Body>
    </Card>
    </div>

    <br></br>

    <div align="center">    
    <Card style={{ width: '50rem' }}>
    <Card.Header as="h5"><Row><Col>Charts Per Sorter</Col><Col><BootstrapSwitchButton onlabel="Graph" width={100} checked={true} onstyle="success" /></Col></Row></Card.Header>
    <Card.Body>
    <div class="mt-3" align="center">
      <Row>
        <Col align="left">
    <Dropdown>
    <Dropdown.Toggle id="dropdown-autoclose-true">
      Sorter
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    </Col>
    </Row>
    </div>
      <Col>
      <div class="mt-3" align="center">
      <Row>   
        <Col> 
        <Card style={{ width: '20rem', height : '10rem' }}>
        <Card.Body>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '20rem', height : '10rem' }}>
        <Card.Body>
        </Card.Body>
        <Card.Footer as="h5">Graph Key</Card.Footer>
        </Card>
        </Col>
      </Row>
      </div>
    </Col>
    </Card.Body>
    </Card>
    </div>

    </div>
  );
}

export default SorterInfo;