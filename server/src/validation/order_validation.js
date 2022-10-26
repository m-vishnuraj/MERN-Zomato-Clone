import joi from "joi";

export const validateOrderDetails = (orderObject) => {
    const Schema = joi.object({
        orderDetails: joi.required(),
    });
    return Schema.validateAsync(orderObject);
};