import { Suspense } from "react";
import { getAuth } from "@/auth/cookies";
import { CardCompact } from "@/components/card-compact";
import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";

const TicketsPage = async () => {
    const { user } = await getAuth();

    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <Heading
                title="Tickets"
                description="All your tickets at once place"
            />

            <CardCompact
                title={"Create Ticket"}
                description={"A new ticket will be created."}
                content={<TicketUpsertForm />}
                className="w-full max-w-[420px] self-center"
            />

            <Suspense fallback={<Spinner />}>
                <TicketList userId={user?.id} />
            </Suspense>
        </div>
    );
};

export default TicketsPage;