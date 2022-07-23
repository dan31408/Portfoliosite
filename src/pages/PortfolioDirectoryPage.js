import { Container, Row, Col, Button } from 'reactstrap';
import PortfolioList from '../features/portfolio/PortfolioList';
import PortfolioDetail from '../features/portfolio/PortfolioDetail';
import { selectRandomPortfolio } from '../features/portfolio/portfolioSlice';

const PortfolioDirectoryPage = () => {
    let selectedPortfolio = selectRandomPortfolio();

    const togglePortfolio = () => {
        selectedPortfolio = selectRandomPortfolio();
        console.log(selectedPortfolio);
    };

    return(
    <Container>
        <Button onClick={() => togglePortfolio()}>
            Select Random Tutorials
            </Button>
        <Row>
            <Col sm='5' md='7'>
                <PortfolioList />
            </Col>
            <Col sm='7' md='5'>
                <PortfolioDetail portfolio={selectedPortfolio} />
            </Col>
        </Row>
    </Container>
    )
}

export default PortfolioDirectoryPage;