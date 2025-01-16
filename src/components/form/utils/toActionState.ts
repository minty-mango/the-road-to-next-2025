import { ZodError } from "zod";

export type ActionState = {
    message: string;
    payload?: FormData;
    fieldErrors: Record<string, string[] | undefined>;
};

export const fromErrorToActionState = (
    error: unknown,
    formData: FormData
): ActionState => {
    if (error instanceof ZodError) {
        // Zod Error
        return {
            message: "",
            fieldErrors: error.flatten().fieldErrors,
            payload: formData,
        }
    } else if (error instanceof Error) {
        // Error
        return {
            message: error.message,
            fieldErrors: {},
            payload: formData,
        };
    } else {
        // Unknown Error
        return {
            message: "Something went wrong",
            fieldErrors: {},
            payload: formData,
        };
    }

};
