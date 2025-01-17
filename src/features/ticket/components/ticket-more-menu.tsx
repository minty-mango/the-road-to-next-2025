'use client';

import { Ticket, TicketStatus } from "@prisma/client";
import { LucideTrash } from "lucide-react";
import { toast } from "sonner";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { updateTicketStatus } from "../actions/update-ticket-status";
import { TICKET_ICONS_LABELS } from "../contants";

type TicketMoreProps = {
    ticket: Ticket;
    trigger: React.ReactNode;
}

const TicketMoreMenu = ({ ticket, trigger }: TicketMoreProps) => {
    const deleteButton = (
        <DropdownMenuItem>
            <LucideTrash className="size-4" />
            <span>Delete</span>
        </DropdownMenuItem>
    );

    const handleUpdateTicketStatus = async (value: string) => {
        const promise = updateTicketStatus(ticket.id, value as TicketStatus);

        toast.promise(promise, {
            loading: "Updating status..",
        });

        const result = await promise;
        if (result.status === "ERROR") {
            toast.error(result.message);
        } else if (result.status === "SUCCESS") {
            toast.success(result.message);
        }
    };

    const ticketStatusRadioGroupItems = (
        <DropdownMenuRadioGroup value={ticket.status} onValueChange={handleUpdateTicketStatus}>
            {(Object.keys(TICKET_ICONS_LABELS) as Array<TicketStatus>).map(
                (key) => (
                    <DropdownMenuRadioItem key={key} value={key}>
                        {TICKET_ICONS_LABELS[key]}
                    </DropdownMenuRadioItem>
                ))}
        </DropdownMenuRadioGroup>
    );

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {trigger}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" side="right">
                {ticketStatusRadioGroupItems}
                <DropdownMenuSeparator />
                {deleteButton}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export { TicketMoreMenu }