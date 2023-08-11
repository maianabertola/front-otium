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
    `/account/user/${userId}`,
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

//create a new user
export const SignUp = async ({
  email,
  password,
  name,
  surname,
  phoneNumber,
  birthDate,
  address,
  country,
}) => {
  await service.post("/auth/signup", {
    email,
    password,
    name,
    surname,
    phoneNumber,
    birthDate,
    address,
    country,
  });
};

//create a post to log in
export const LogIn = async ({ email, password }) => {
  const response = await service.post("/auth/login", { email, password });
  return response.data;
};

//check if the user exists via the token
export const fetchUser = async (token) => {
  const response = await service.get("/auth/verify", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
