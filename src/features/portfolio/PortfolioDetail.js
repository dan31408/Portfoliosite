import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const PortfolioDetail = ( {portfolio} ) => {
    const { image, name, description } = portfolio;
    return(
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default PortfolioDetail;