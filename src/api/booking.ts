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
