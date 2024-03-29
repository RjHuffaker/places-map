import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Place = ({
	id,
	placeName,
	lat,
	lng,
	date,
	handleRemovePlace
}) => {
	const history = useHistory();

	return (
		<Card style={{ width: '18rem' }} className="place">
			<Card.Body>
				<Card.Title className="place-title">{placeName}</Card.Title>
				<div className="place-details">
					<div>Latitude: {lat}</div>
					<div>Longitude: {lng}</div>
					<div>Date: {new Date(date).toDateString()}</div>
				</div>

				<Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
					Edit
				</Button>{' '}


				<Button variant="danger" onClick={() => handleRemovePlace(id)}>
					Delete
				</Button>
			</Card.Body>
		</Card>
	)
};

export default Place;