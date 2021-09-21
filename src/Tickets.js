import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
function Tickets() {
    return (
        <Jumbotron>
        <Container>
         
          <Image
            fluid
            src="https://i.imgur.com/bNA58On.png"
            alt='View on the Catskill—Early Autumn, Oil on canvas by "Thomas Cole" '
            style={{ paddingBottom: '1em' }}
          />
          <p>
            New York State residents and NY, NJ, CT students, the amount you pay for tickets is up to you.

            If you wish to pay less than the general admission ticket prices, you may purchase your ticket at one of The Met’s locations with a valid ID.

            Continue to purchase a timed ticket below if you are not eligible for suggested admission, are not a Member, or do not already have a pass or voucher for admission to the Museum.

Y           our admission ticket provides same-day entry to both Met locations. There are no additional costs or timed tickets for exhibitions. There may be a line to enter exhibition spaces to maintain physical distancing. Exhibitions may also be closed to additional visitors toward the end of the day.


          </p>
      
        
          <Button
            variant="btn btn-outline-danger"
            href="https://engage.metmuseum.org/admission/?promocode=46070"
            target="_blank"
            rel="noreferrer noopener"
            style={{ marginTop: '1em' }}
          >
            Tickets
          </Button>
        </Container>
      </Jumbotron>
    
    );
}

export default Tickets;