import z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, {
    message: "Name should have at least two alpha character",
  }),

  email: z.string().email({ message: "Invalid email " }),
  message: z.string().min(20, {
    message: "Message should have at least 20 characters",
  }),
});
