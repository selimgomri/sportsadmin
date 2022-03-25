export interface defaultForm {
  lastname : string;
  firstname: string;
  birthdate: Date;
  email: string;
  typeOfCotisation: string;
  phone: number;
  cotisationAlreadyPaid: boolean;
  newField: Label[]
}

export interface Label {
  name: string;
}
