import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const PortfolioCard = ({ portfolio }) => {
    const { image, name } = portfolio;
    return (
        <Card>
            <CardImg 
            width='100%'
            src={image}
            alt={name}
        />
        <CardImgOverlay>
            <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
        </Card>
    )
}

export default PortfolioCard;