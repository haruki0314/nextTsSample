import Head from "next/head";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({ children, title, description }: Props) {
  const pageTitle = title || "ホームページタイトル";
  return (
    <div className="wrap">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || "ホームページ概要"} />
      </Head>
      <header>
        <h1>{pageTitle}</h1>
      </header>
      <nav>
        <button>
          <Link href="/">Home</Link>
        </button>
        &nbsp;&nbsp;
        <button>
          <Link href="/ibaraki">茨城県</Link>
        </button>
        &nbsp;&nbsp;
        <button>
          <Link href="/tochigi">栃木県</Link>
        </button>
        &nbsp;&nbsp;
        <button>
          <Link href="/gunma">群馬県</Link>
        </button>
        &nbsp;&nbsp;
      </nav>
      <main>{children}</main>
      <footer>May/25/2022 AM 08:25</footer>
    </div>
  );
}
