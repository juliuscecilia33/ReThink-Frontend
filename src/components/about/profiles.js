import React, { useEffect } from 'react';

// Takes in a profile and creates a profile card
function ProfileCard(props) {
    let fname = props.firstname;
    let lname = props.lastname;
    let desc = props.description;
    return(
        <Col style={{flex: 1}}>
            <Card>
                <CardBody>
                    <CardTitle tag="h2">{fname + " " + lname}</CardTitle>
                    <CardText tag="p">{desc}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ProfileCard;

// Creates a container of all the profile cards
function ProfileList(props) {
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

export default ProfileList;