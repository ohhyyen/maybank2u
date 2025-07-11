// Global declaration for Deno environment variables
declare namespace Deno {
  namespace env {
    function get(key: string): string | undefined;
  }
}

// Declare the Deno HTTP server module
declare module "https://deno.land/std@0.190.0/http/server.ts" {
  interface Request {
    json(): Promise<any>;
    method: string;
  }
  interface ResponseInit {
    headers?: Record<string, string>;
    status?: number;
  }
  class Response {
    constructor(body?: BodyInit | null, init?: ResponseInit);
  }
  function serve(handler: (req: Request) => Promise<Response> | Response): Promise<void>;
}