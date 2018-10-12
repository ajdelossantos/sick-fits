import Link from 'next/link';

const Home = props => (
  <div>
    <h2>Home</h2>
    <Link href="/sell">
      <a>Sell!</a>
    </Link>
  </div>
);

export default Home;
