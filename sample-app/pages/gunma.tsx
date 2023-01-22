import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <Layout title="群馬県" description="群馬県概要">
      <p>群馬県概要</p>
      <p>
        群馬県は本州の山岳地帯にある内陸県で、温泉地とスキー場で有名です。
        草津は小さな町ですが、100 を超える温泉があり、
        特に有名な湯畑では、湧き出る源泉が木樋を通って滝壺へ流れ落ちる光景が見られます。
        海抜 1,200 m にある草津には、スキーやハイキングのコースもあります。 ―
        Google
      </p>
    </Layout>
  );
}
