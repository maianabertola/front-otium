import service from "../service/service";

interface Iservices {
  title: string;
  slogan: string;
  description: string;
  imageCover: string;
  imageServicePage: string;
}

export const getAllServices = () => {
  return service.get<Iservices[]>("/service").then((res) => res.data);
};
