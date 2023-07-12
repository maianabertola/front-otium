import { Types } from "mongoose";
import service from "../service/service";

interface Ibooking {
  numberOfPeople: number;
  pet: boolean;
  message: string;
  userId: Types.ObjectId;
  villaId: Types.ObjectId;
  bookedDates: {
    Start: Date;
    End: Date;
  };
}

export const submitBooking = async (
  numberOfPeople: number,
  message: string,
  userId: Types.ObjectId,
  villaId: string,
  bookedDates: Date
) => {
  await service.post(
    `/booking/${villaId}`,
    {
      numberOfPeople,
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
