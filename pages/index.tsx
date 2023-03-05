import About from "@/app/components/Pages/About/About";
import { IProduct } from "@/app/types/IProduct";
import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import { axiosClassic } from "@/app/services/ssr.api";
import { ProductService } from "@/app/services/productsService";

export interface IProductsPage {
 products: IProduct[];
}

const Home: NextPage<IProductsPage> = () => {
 return <About />;
};

export default Home;
