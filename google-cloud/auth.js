'use strict';

const { Compute } = require('google-auth-library');

/**
 * Acquire a client, and make a request to an API that's enabled by default.
 */
async function main() {
  const client = new Compute({
    // Specifying the serviceAccountEmail is optional. It will use the default
    // service account if one is not defined.
    serviceAccountEmail: 'sivakumar.shwetha@gmail.com'
  });
  const projectId = 'dubhacks-2018-memory-project';
  const url = `https://www.googleapis.com/dns/v1/projects/${projectId}`;
  const res = await client.request({ url });
  console.log(res.data);
}

main().catch(console.error);
