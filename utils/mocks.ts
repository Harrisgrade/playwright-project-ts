import { fakerEN } from "@faker-js/faker";

export function generateMockUser() {
  const person = fakerEN.person;
  const internet = fakerEN.internet;
  const date = fakerEN.date.birthdate({ max: 70, min: 1, mode: "age" });
  const location = fakerEN.location;
  const phone = fakerEN.phone;
  const gender = fakerEN.helpers.arrayElement(["#id_gender1", "#id_gender2"]);

  const mockUser = {
    title: person.prefix(),
    firstName: person.firstName(),
    lastname: person.lastName(),
    email: internet.email(),
    password: internet.password(),
    dobDay: date.getDay().toString(),
    dobMonth: date.toLocaleString("en-US", { month: "long" }),
    dobYear: date.getFullYear().toString(),
    signupForNewsletter: false,
    specialOffersFromPartners: false,
    gender,
    company: "Automation Test",
    address: location.streetAddress(),
    Country: fakerEN.helpers.arrayElement([
      "India",
      "United States",
      "Canada",
      "Australia",
      "Israel",
      "New Zealand",
      "Singapore",
    ]),
    State: location.state(),
    City: location.city(),
    ZipCode: location.zipCode(),
    MobilePhone: phone.number({ style: "national" }),
  };

  return mockUser;
}
