declare module 'method-override' {
  import { RequestHandler } from 'express';

  function methodOverride(
      override: string | ((req: any) => string | false),
      options?: { methods?: string[] }
  ): RequestHandler;

  export default methodOverride;
}
