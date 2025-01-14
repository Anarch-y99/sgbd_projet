import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
  // définition du schéma de la collection User = structure
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export interface User extends Document {
  // définition de l'interface User = méthodes et propriétés
  _id: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  username: string;
}
