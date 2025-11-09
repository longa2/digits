'use client';

import { Card, Image, ListGroup } from 'react-bootstrap';
import { Contact, Note } from '@prisma/client';
import NoteItem from '@/components/NoteItem';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCardAdmin = ({ contact, notes }: { contact: Contact, notes: Note[] }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={contact.image} width={75} />
    </Card.Header>
    <Card.Title>
      {contact.firstName}
      &nbsp;
      {contact.lastName}
    </Card.Title>
    <Card.Subtitle>{contact.address}</Card.Subtitle>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
      <p className="blockquote-footer">{contact.owner}</p>
      <ListGroup variant="flush">
        {notes.map((note) => <NoteItem key={note.id} note={note} />)}
      </ListGroup>
    </Card.Body>
  </Card>
);

export default ContactCardAdmin;
