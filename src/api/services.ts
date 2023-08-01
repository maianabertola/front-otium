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

export const getOneService = (id: string) => {
  return service.get<Iservices[]>(`/service/${id}`).then((res) => res.data);
};
