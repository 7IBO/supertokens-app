import ThirdPartyEmailPasswordReact from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import EmailVerificationReact from "supertokens-auth-react/recipe/emailverification";
import SessionReact from "supertokens-auth-react/recipe/session";
import { appInfo } from "./appInfo";
import Router from "next/router";

export let frontendConfig = () => {
  return {
    languageTranslations: {
      translations: {
        fr: {
          EMAIL_PASSWORD_SIGN_IN_HEADER_TITLE: "Se connecter",
          EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_START: "Pas de compte ?",
          EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_SIGN_UP_LINK:
            "Créer un compte",
          EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_END: "",
          THIRD_PARTY_PROVIDER_DEFAULT_BTN_START: "Continuer avec",
          THIRD_PARTY_PROVIDER_DEFAULT_BTN_END: "",
          THIRD_PARTY_EMAIL_PASSWORD_SIGN_IN_AND_UP_DIVIDER_OR: "ou",
          EMAIL_PASSWORD_EMAIL_LABEL: "Email",
          EMAIL_PASSWORD_EMAIL_PLACEHOLDER: "Adresse email",
          EMAIL_PASSWORD_PASSWORD_LABEL: "Mot de passe",
          EMAIL_PASSWORD_PASSWORD_PLACEHOLDER: "Mot de passe",
          EMAIL_PASSWORD_SIGN_IN_SUBMIT_BTN: "Se connecter",
          EMAIL_PASSWORD_SIGN_IN_FOOTER_FORGOT_PW_LINK: "Mot de passe oublié ?",
          BRANDING_POWERED_BY_START: "",
          BRANDING_POWERED_BY_END: "",
          EMAIL_PASSWORD_RESET_HEADER_TITLE: "Réinitialiser le mot de passe",
          EMAIL_PASSWORD_RESET_HEADER_SUBTITLE:
            "Nous allons vous envoyer un email pour réinitialiser votre mot de passe",
          EMAIL_PASSWORD_RESET_SEND_BTN: "Envoyer",
        },
      },
      defaultLanguage: "fr",
    },
    appInfo,
    recipeList: [
      EmailVerificationReact.init({
        mode: "REQUIRED",
      }),
      ThirdPartyEmailPasswordReact.init({
        signInAndUpFeature: {
          providers: [ThirdPartyEmailPasswordReact.Github.init()],
        },
      }),
      SessionReact.init(),
    ],
    // this is so that the SDK uses the next router for navigation
    windowHandler: (oI) => {
      return {
        ...oI,
        location: {
          ...oI.location,
          setHref: (href) => {
            Router.push(href);
          },
        },
      };
    },
  };
};
