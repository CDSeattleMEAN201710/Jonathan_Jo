export class User {
  constructor(
    public first_name: string = "",
    public last_name: string = "",
    public email: string = "",
    public password: string = "",
    public confirmpassword: string = "",
    public street_address: string = "",
    public unitNumber: string = "",
    public city: string = "",
    public state: string = "",
  ){}
}