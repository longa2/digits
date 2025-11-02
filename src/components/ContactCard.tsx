'use client';

import { Contact } from '@/lib/validationSchemas';
import { Card, Image } from 'react-bootstrap';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ contact }: { contact: Contact }) => (
  <Card className="h-100">
    <Card.Header><Image width={75} src={contact.image} /></Card.Header>
    <Card.Title>
      {contact.firstName}
      &nbsp;
      {contact.lastName}
    </Card.Title>
    <Card.Subtitle>{contact.address}</Card.Subtitle>
    <Card.Body><Card.Text>{contact.description}</Card.Text></Card.Body>
  </Card>
);

export default ContactCard;
