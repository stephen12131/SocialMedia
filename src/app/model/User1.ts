export class User {
    name!: string;
    email!: string;
    password!: string;
    role!: string;
    agree!: boolean;
  
    constructor(
      name: string = '',
      email: string = '',
      password: string = '',
      role: string = '',
      agree: boolean = false
    ) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.role = role;
      this.agree = agree;
    }
  }
  