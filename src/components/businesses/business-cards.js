import React from 'react';

// Takes in a business and creates a business card
function BusinessCard(props) {
    // TODO: set prop variables
    let name = "";
    let desc = "";
    return(
        <Col style={{flex: 1}}>
            <Card>
                <CardBody>
                    {/* TODO: add image */}
                    <CardTitle tag="h2">{name}</CardTitle>
                    <CardText tag="p">{desc}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default BusinessCard;

// Creates a container of all the business cards
function BusinessCardSearchList(props) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // TODO:
        // get card objects from firebase
        // set the cards in the state variable to render
    });

    return(
        <Container>
            <Row style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>{cards}</Row>
        </Container>
    )
}

export default BusinessCardSearchList;