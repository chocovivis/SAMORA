export {};

declare global {
  namespace Express {
    interface Request {
      user: string;
    }
    interface Response{
        user:string
    }
    interface Router{
        user:string
    }
  }
}