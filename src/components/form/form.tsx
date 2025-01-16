import { toast } from "sonner";
import { useActionFeedback } from "./hooks/use-action-feedbackl";
import { ActionState } from "./utils/to-action-state";

type FormProps = {
    actionState: ActionState;
    action: (payload: FormData) => void;
    children: React.ReactNode;
}

const Form = ({ actionState, action, children }: FormProps) => {
    useActionFeedback(actionState, {
        onSuccess: ({ actionState }) => {
            if (actionState.message) {
                toast.success(actionState.message);
            }
        },
        onError: ({ actionState }) => {
            if (actionState.message) {
                toast.error(actionState.message);
            }
        },
    });
    return (
        <form action={action} className="flex flex-col gap-y-2">
            {children}
        </form>
    );
};

export { Form };