import { notFound } from "next/navigation";
import { getAuth } from "@/auth/cookies";
import { CardCompact } from "@/components/card-compact";
import { Breadcrumbs } from "@/components/form/breadcrumbs";
import { Separator } from "@/components/ui/separator";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { isOwner } from "@/features/utils/is-owner";
import { homePath, ticketPath } from "@/paths";

type TicketEditPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TicketEditPage = async ({ params }: TicketEditPageProps) => {
    const { user } = await getAuth();

    const { ticketId } = await params;
    const ticket = await getTicket(ticketId);

    const isTicketFound = !!ticket;
    const isTicketOwner = isOwner(user, ticket);

    if (!isTicketFound || !isTicketOwner) {
        notFound();
    }

    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <Breadcrumbs breadcrumbs={[
                { title: "Tickets", href: homePath() },
                { title: ticket.title, href: ticketPath(ticket.id) },
                { title: "Edit" },
            ]} />

            <Separator />
            <div className="flex-1 flex flex-col justify-center items-center">
                <CardCompact
                    title="Edit Ticket"
                    description="Edit an existing ticket"
                    className="w-full max-w-[420px] animate-fade-from-top"
                    content={<TicketUpsertForm ticket={ticket} />}
                />
            </div>
        </div>
    );
};

export default TicketEditPage;