export class PersonData  { 
    firstname: string;
	lastname: string;
	address: string;
	city: string;
	phone: string;
	contact: string;
	contactnum: number;
    constructor(fn: string, ln: string, ad: string, city: string, ph: string, c: string, cn: number) {
		this.firstname = fn;
		this.lastname = ln;
		this.address = ad;
		this.city = city;
		this.phone = ph;
		this.contact = c;
		this.contactnum = cn;
    }
};

