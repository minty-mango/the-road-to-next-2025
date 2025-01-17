"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { setCookiesByKey } from "@/actions/cookies";
import { fromErrorToActionState } from "@/components/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const deleteTicket = async (id: string) => {
  try {
    await prisma.ticket.delete({
      where: { id: id },
    });
  } catch (error) {
    return fromErrorToActionState(error);
  }

  revalidatePath(ticketsPath());
  setCookiesByKey("toast", "Ticket deleted");
  redirect(ticketsPath());
};
