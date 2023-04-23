import ThirdPartyEmailPasswordNode from "supertokens-node/recipe/thirdpartyemailpassword";
import EmailVerificationNode from "supertokens-node/recipe/emailverification";
import UserMetadata from "supertokens-node/recipe/usermetadata";
import SessionNode from "supertokens-node/recipe/session";
import { appInfo } from "./appInfo";
import { AuthConfig } from "../interfaces";
import DashboardNode from "supertokens-node/recipe/dashboard";

export let backendConfig = (): AuthConfig => {
  return {
    framework: "express",
    supertokens: {
      connectionURI: "http://localhost:3567",
    },
    appInfo,
    recipeList: [
      EmailVerificationNode.init({
        mode: "REQUIRED",
      }),
      ThirdPartyEmailPasswordNode.init({
        providers: [
          ThirdPartyEmailPasswordNode.Github({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
          }),
        ],
      }),
      SessionNode.init(),
      DashboardNode.init(),
      UserMetadata.init(),
    ],
    isInServerlessEnv: true,
  };
};
