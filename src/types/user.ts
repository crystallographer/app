export type Geo = {
    lat: string;
    lng: string;
};

export type Address = {
    city: string;
    geo: Geo;
    phone: string;
    street: string;
    suite: string;
    website: string;
    zipcode: string;
};

export type Company = {
    bs: string;
    catchPhrase: string;
    name: string;
};

export type User = {
    address: Address;
    company: Company;
    email: string;
    id: number;
    name: string;
    username: string;
};
