import { Types } from "mongoose";
import service from "../service/service";

interface Ibooking {
  numberOfPeople: number;
  pet: boolean;
  message: string;
  userId: string;
  villaId: string;
  bookedDates: {
    Start: Date;
    End: Date;
  };
}

export const submitBooking = async ({
  numberOfPeople,
  pet,
  message,
  userId,
  villaId,
  bookedDates,
}) => {
  console.log("pet dans submitBooking", pet);

  await service.post(
    `/booking/${villaId}`,
    {
      numberOfPeople,
      pet,
      message,
      userId,
      villaId,
      bookedDates,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};
