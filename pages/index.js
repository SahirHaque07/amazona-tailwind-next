import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import data from "../utils/data";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Layout title="Home Page">
        Home Page
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {data.products.map((product) => (
            <ProductItem product={product} key={product.slug} />
          ))}
        </div>
      </Layout>
    </>
  );
}
