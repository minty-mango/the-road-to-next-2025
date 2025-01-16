import { ActionState } from "./to-action-state";

type FieldErrorProps = {
    actionState: ActionState;
    name: string;
}

const FieldError = ({ actionState, name }: FieldErrorProps) => {
    const message = actionState.fieldErrors[name]?.[0];

    if (!message) return null;

    return <span className="text-red-500 text-xs">{message}</span>
}

export { FieldError }