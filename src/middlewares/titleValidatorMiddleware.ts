import {Request, Response} from "express";
import {body} from "express-validator";

export const titleValidatorMiddleware = body('title').trim().isLength(({
    min: 3,
    max: 40
})).withMessage('title should be at least 3 and at most 40 characters')