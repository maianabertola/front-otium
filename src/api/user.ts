import service from "../service/service";

interface IUser {
  name: string;
  surname: string;
  birthDate: Date;
  email: string;
  phoneNumber: string;
  address: string;
  country: string;
  password: string;
}

export const patchUser = async ({
  name,
  surname,
  birthDate,
  email,
  phoneNumber,
  address,
  country,
  userId,
}) => {
  const response = service.patch(
    `account/${userId}`,
    {
      name,
      surname,
      birthDate,
      email,
      phoneNumber,
      address,
      country,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};
