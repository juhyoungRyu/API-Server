interface ObjReturn {
    success?: boolean;
    data?: {};
    error?: {
        code: number;
        type: string;
        message: string;
    };
}
export { ObjReturn };
