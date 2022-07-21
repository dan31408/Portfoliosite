import { selectAllPortfolio } from './portfolioSlice';
import {Col, Row} from 'reactstrap';
import PortfolioCard from './PortfolioCard';

const Portfoliolist = () => {
    const portfolio = selectAllPortfolio();
    return (
        <Row className='ms-auto'>
            {portfolio.map ((portfolio) => {
                return(
                    <Col md='5' className='m-4' key={portfolio.id}>
                        <PortfolioCard portfolio={portfolio} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default Portfoliolist;