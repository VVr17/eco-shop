import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";

export const useUserGoogleData = (
  callback: (error: Error | null, data: {} | null) => void
) => {
  const [user, setUser] = useState<any>(null);
  // const [profile, setProfile] = useState(null);

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse as any),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          // setProfile(res.data);
          callback(null, res.data);
        })
        .catch((err) => callback(err, null));
    }
  }, [user]);

  return { googleLogin };
};
