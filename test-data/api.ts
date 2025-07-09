export interface UserRequestParams {
  name: string;
  email: string;
  password: string;
  title: "Mr" | "Mrs" | "Miss";
  birth_date: number; // 1-31
  birth_month: number; // 1-12
  birth_year: number; // e.g., 1990
  firstname: string;
  lastname: string;
  company: string;
  address1: string;
  address2?: string;
  country: string;
  zipcode: string;
  state: string;
  city: string;
  mobile_number: string;
}

// Example usage:
export const exampleUser: UserRequestParams = {
  name: "John Doe",
  email: "john.doe@example.com",
  password: "securePassword123",
  title: "Mr",
  birth_date: 15,
  birth_month: 6,
  birth_year: 1990,
  firstname: "John",
  lastname: "Doe",
  company: "Example Corp",
  address1: "123 Main St",
  address2: "Apt 4B",
  country: "USA",
  zipcode: "12345",
  state: "NY",
  city: "New York",
  mobile_number: "+1234567890",
};
