import { getSignInUrl, getSignUpUrl, getUser } from "@workos-inc/authkit-nextjs";
import Hero from "./components/Hero";
import Jobs from "./components/Job";

export default async function Home() {

  const {user} = await getUser();
  const signInUrl = await getSignInUrl();
  const signUpUrl = await getSignUpUrl();

  return (
    <>
      <Hero/>
      <Jobs/>
    </>
  );
}
