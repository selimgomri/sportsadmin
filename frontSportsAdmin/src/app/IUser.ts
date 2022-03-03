export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  roles: string[];
  licenseNumber: number;
  password: string;
  birthdate: Date;
  sexe: string;
  level: [];
  additionnalField: [];
  photo: string;
  address: string;
}
