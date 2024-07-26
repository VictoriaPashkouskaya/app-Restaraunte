import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Card, CardContent, Typography, Container } from '@mui/material';
import '../Menu.css';

const Menu = ({ dishes }) => {
  return (
    <Container className="menu-container" maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Our Menu
      </Typography>
      <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
        {dishes.map((dish) => (
          <Card key={dish.id} className="menu-item">
            <CardContent>
              <Typography variant="h5" component="div">
                {dish.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {dish.description}
              </Typography>
              <Typography variant="h6" component="div">
                ${dish.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </Container>
  );
};

export default Menu;
