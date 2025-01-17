
import { toast } from "sonner";
import { useActionFeedback } from "./hooks/use-action-feedbackl";
import { ActionState } from "./utils/to-action-state";

type FormProps = {
    actionState: ActionState;
    action: (payload: FormData) => void;
    children: React.ReactNode;
    onSuccess?: (actionState: ActionState) => void;
    onError?: (actionState: ActionState) => void;
}

const Form = ({ actionState, action, children, onSuccess, onError }: FormProps) => {
    useActionFeedback(actionState, {
        onSuccess: ({ actionState }) => {
            if (actionState.message) {
                toast.success(actionState.message);
            }
            onSuccess?.(actionState);
        },
        onError: ({ actionState }) => {
            if (actionState.message) {
                toast.error(actionState.message);
            }
            onError?.(actionState);
        },
    });
    return (
        <form action={action} className="flex flex-col gap-y-2">
            {children}
        </form>
    );
};

export { Form };