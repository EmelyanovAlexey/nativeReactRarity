import * as AuthSession from "expo-auth-session";
import { useEffect } from "react";

export const useYandexLogin = (onSuccess: (token: string) => void) => {
  const redirectUri = AuthSession.makeRedirectUri({
    scheme: "rarityApp",
  });

  const discovery = {
    authorizationEndpoint: "https://oauth.yandex.ru/authorize",
    tokenEndpoint: "https://oauth.yandex.ru/token",
  };

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: "ccc29ac5250f4bc5879cf429d75d7ff2",
      redirectUri,
      scopes: ["login:info", "login:email"],
      responseType: AuthSession.ResponseType.Token,
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      console.log("Яндекс access token:", access_token);

      // ВАЖНО: вызови колбэк, который передаётся в хук
      onSuccess(access_token);
    }
  }, [response]);

  return { promptAsync };
};
