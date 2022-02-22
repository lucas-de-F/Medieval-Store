// import { Request, Response, NextFunction } from 'express';

// export const domainError = (err: any, req: Request, res: Response, next: NextFunction) => {
//   enum errorStatus {
//     Conflit = 409,

//     NotFound = 404,
//     BadRequest = 400,
//     UnprocessableEntity = 422,
//   }

//   const status = errorStatus[err.code];

//   if (!status) {
//     console.log(err.message)
//     res.status(500).json({ message: err.message });
//   }

//   res.status(err.code).json(err);
// };
