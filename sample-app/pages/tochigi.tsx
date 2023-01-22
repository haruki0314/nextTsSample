import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <Layout title="栃木県" description="栃木県概要">
      <p>栃木県概要</p>
      <p>
        栃木県は東京の北に位置し、県内の一部は日光国立公園に指定されています。
        杉の木に覆われたこの公園には、火山である男体山がそびえ、
        その隣には男体山の噴火で形成された湖、中禅寺湖が水をたたえています。
        この湖の東端にあるのが、絵のように美しい高さ 97 m の華厳の滝です。
        栃木県西部に位置する日光市には日光東照宮があります。
        金が精巧に散りばめられたこの神社には、
        江戸幕府初代将軍の徳川家康が祀られています。 ― Google
      </p>
    </Layout>
  );
}
