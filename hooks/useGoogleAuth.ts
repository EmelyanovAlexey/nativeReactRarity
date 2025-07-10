// import * as WebBrowser from "expo-web-browser";
// import * as Google from "expo-auth-session/providers/google";
// import { useEffect } from "react";

// WebBrowser.maybeCompleteAuthSession();

// export function useGoogleAuth(onSuccess: (accessToken: string) => void) {
//   const [request, response, promptAsync] = Google.useAuthRequest({
//     clientId: "260288183113-0c5c51trus5e9haasaa6juj2d54stvh2.apps.googleusercontent.com",
//   });

//   useEffect(() => {
//     if (response?.type === "success") {
//       const { accessToken } = response.authentication ?? {};
//       if (accessToken) {
//         onSuccess(accessToken);
//       }
//     }
//   }, [response]);

//   return {
//     signInWithGoogle: () => promptAsync(),
//   };
// }

