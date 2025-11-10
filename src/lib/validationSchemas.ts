import * as Yup from 'yup';

export const AddContactSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  address: Yup.string().required(),
  image: Yup.string().required(),
  description: Yup.string().required(),
  owner: Yup.string().required(),
});

export const AddNoteSchema = Yup.object({
  contactId: Yup.number().required(),
  note: Yup.string().required(),
  owner: Yup.string().required(),
});

export const EditContactSchema = Yup.object({
  id: Yup.number().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  address: Yup.string().required(),
  image: Yup.string().required(),
  description: Yup.string().required(),
  owner: Yup.string().required(),
});
