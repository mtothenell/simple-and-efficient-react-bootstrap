import './App.scss';
import { Button, Container, Navbar, NavDropdown, Nav, Col, Row } from 'react-bootstrap';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import Footer from './components/Footer';
import Item from './components/Item';

const App = () => {
    const numberOfItems = 1;

    return (
        <div className="d-flex flex-column min-vh-100">
            <ResponsiveNavbar />

            <Container className="mt-5">
                <Row>
                    <Col>
                        <p>Välkommen till Rönnas Svensexa!</p>
                    </Col>
                </Row>
                <Row>
                    {Array.from(Array(numberOfItems).keys()).map(number => (
                        <Col key={number}>
                            <Item></Item>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/*<Footer />*/}
        </div>
    );
};

//{/* <ResponsiveNavbar /> */}
export default App;
