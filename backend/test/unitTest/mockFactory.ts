import { Request, Response } from 'express';

export const mockRequest = (
    body: object = {},
    params: object = {}
) => {
    return ({
        params,
        body,
    } as unknown) as Request;
};

export const mockResponse = (res: { body?: object } = {}, json: jest.Mock) => {
    return ({
        status: jest.fn(status => ({ json })),
        body: res?.body,
    } as unknown) as Response;
};

export const mockApiCall = (
    req: { body?: object; params?: object } = {},
    res?: { body?: object }
) => {
    const json = jest.fn();
    return {
        req: mockRequest(req.body, req?.params),
        res: mockResponse(res, json),
        next: jest.fn(),
        json,
    };
};
