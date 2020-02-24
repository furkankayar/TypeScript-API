import { Response } from "express";

const SendResponse = (code: number, res: Response, message: object | string, error: object | string | boolean) => {
    res
        .status(code)
        .json({
            "code": code,
            "body": message,
            "error": error
        });
}

const IsString = (parameter: any) => {
    return parameter != null && (typeof parameter === "string" || parameter instanceof String) ? true : false; 
} 

export { SendResponse , IsString };