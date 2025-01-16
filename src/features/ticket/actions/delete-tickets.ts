"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { setCookiesByKey } from "@/actions/cookies";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const deleteTicket = async (id: string) => {
  "use server";

  await prisma.ticket.delete({
    where: { id: id },
  });

  revalidatePath(ticketsPath());
  setCookiesByKey("toast", "Ticket deleted");
  redirect(ticketsPath());
};
