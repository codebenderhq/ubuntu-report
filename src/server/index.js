import { serve } from "https://deno.land/std@0.135.0/http/server.ts";
import API from "./api/index.ts";
import * as app from "./static/index.js";
import middleware from "https://sauveur.xyz/api/blacklabel/bridge"
 
const port = 8080;


export const handler = async (request) => {
  // console.log(Deno.env.get('DENO_ENV'))
  return middleware(request, API, app)
};


console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
await serve(handler, { port });
 