import { Environment } from "@interfaces/i.environment";

export const environment: Environment = {
  production: true,
  graphCmsApiToken: '${GRAPH_CMS_API_TOKEN}',
  graphCmsUri: '${GRAPH_CMS_URI}'
};
