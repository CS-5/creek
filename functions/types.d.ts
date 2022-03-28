import type { JwtPayload } from "@cfworker/jwt";
import type { User } from "auth0";

declare type PagesFunction<
  Env = unknown,
  Params extends string = any,
  Data extends RequestData = RequestData
> = (context: EventContext<Env, Params, Data>) => Response | Promise<Response>;

declare type RequestData = {
  managementToken?: string;
  jwt?: JwtPayload;
  user?: User;
  auth0?: {
    domain: string;
    frontendAudience: string;
    backendId: string;
    backendSecret: string;
  };
};

declare type MgmtTokenResponse = {
  access_token: string;
  token_type: string;
};
