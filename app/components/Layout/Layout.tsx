import Head from "next/head";
import NavBar from "./NavBar";

type LayoutType = {
 children: React.ReactNode;
};

const Layout: React.FC<LayoutType> = ({ children }) => {
 return (
  <>
   <Head>
    <title>Sushi Place</title>
   </Head>
   <NavBar />
   <main>{children}</main>
  </>
 );
};

export default Layout;
