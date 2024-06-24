import { Address } from "./Address";
import { Company } from "./company";
import { Post } from "./Post";

export class UserPost {
    id!: number;
    name!: string;
    username!: string;
    email!: string;
    address!: Address;
    phone!: string;
    website!: string;
    company!: Company;
    posts!: Post[]; 

    constructor(user: any) {
        this.id = user.id;
        this.name = user.name;
        this.username = user.username;
        this.email = user.email;
        this.address = user.address;
        this.phone = user.phone;
        this.website = user.website;
        this.company = user.company;
        this.posts = [];
      }
   
}