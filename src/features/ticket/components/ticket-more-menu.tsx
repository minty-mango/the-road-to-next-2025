'use client';

import { Ticket, TicketStatus } from "@prisma/client";
import { LucideTrash } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
        console.log(value);
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