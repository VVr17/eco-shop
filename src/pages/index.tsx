import Heading from "components/Heading";
import Section from "components/Section";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { catalog } from "utils/fakeData/fakeListData";
import Breadcrumb from "components/UIkit/Breadcrumb";

const Home = () => {
  const router = useRouter();
  // console.log("router.asPath", router.asPath);

  return (
    <>
      <Head>
        <title>Eco Shop</title>
        <meta name="description" content="eco shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Section>
        <Breadcrumb route={[{ href: "/", name: "Homepage" }]} />
        <Heading tag="h2" text="Home" />

        {/* <>
          {catalog.map(({ id, name }) => (
            <Link href={`/${id}`}>{name}</Link>
          ))}
        </> */}
      </Section>
    </>
  );
};

export default Home;
