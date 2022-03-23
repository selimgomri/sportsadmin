export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  roles: string[];
  license_number: number;
  password: string;
  birthdate: Date;
  sexe: string;
  level: [];
  additionnalField: [];
  photo: any[];
  address: string;
}
