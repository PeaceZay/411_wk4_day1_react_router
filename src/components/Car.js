import React from 'react'
import cars from '../cars.json'
import { useParams } from 'react-router-dom';
import { Container, Chip, Paper } from '@mui/material';


// import MUI components here //

const Car = (props) => {
    let { id } = useParams();
    const car = cars.find(c => c.id == id)

    // const car = cars.find(e=>e['id']===parseInt(carId))
    // const keys = Object.keys(car)
    console.log(car, "HERE I AM, to save the day")


    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Paper>
                <h1>{car.Name}</h1>
                {
                    Object.keys(car).map((key, idx) => {
                        return <Chip label={`${key}: ${car[key]}`}></Chip>
                    })
                }

            </Paper>
        </Container>
    );

}
export default Car