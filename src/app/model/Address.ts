export class Address {
    street!: string;
    suite!: string;
    city!: string;
    zipcode!: string;
    geo!: {
      lat: string;
      lng: string;
    };
  
    // constructor(
    //   street: string,
    //   suite: string,
    //   city: string,
    //   zipcode: string,
    //   geo: { lat: string; lng: string }
    // ) {
    //   this.street = street;
    //   this.suite = suite;
    //   this.city = city;
    //   this.zipcode = zipcode;
    //   this.geo = geo;
    // }
  }
  