import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <Layout title="茨城県" description="茨城県概要">
      <p>茨城県概要</p>
      <p>
        茨城県は東京の北東に位置し、太平洋に面しています。
        県庁所在地の水戸市は、県の中央部にあり、 2 月下旬～3
        月にかけて梅が咲き乱れる偕楽園で知られています。
        水戸市の西側にある笠間市は、花や龍の飾り彫りが施された笠間稲荷神社で有名です。
        笠間市の南西には 2 つの峰を持つ筑波山があり、
        目的やレベルに合わせてさまざまなハイキング トレイルが整備されています。
        ― Google
      </p>
    </Layout>
  );
}
