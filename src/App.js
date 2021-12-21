// import "./styles.css";
import {
  Routes,
  Route,
  useParams,
  Link,
  BrowserRouter,
  Outlet
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Basic Example</h1>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />}>
              <Route path="abc" element={<h1>Arfat</h1>} />
              <Route path="ced" element={<h1>ced</h1>} />
            </Route>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product/:productId" element={<Product />} />
            {/* <Route path="product/:productId" element={<Product />} /> */}

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

let laptops = [
  { name: "macbokk-air", price: "127000" },
  { name: "acer-laptop", price: "50000" },
  { name: "HP-laptop", price: "40000" },
  { name: "toshiba-laptop", price: "80000" }
];

function Laptops() {
  return (
    <ol>
      {laptops.map((lappy) => {
        return (
          <li>
            <Link to={`product/${lappy.name}`}>{lappy.name}</Link>
          </li>
        );
      })}
    </ol>
  );
}

function Product() {
  const obj = useParams();
  // console.log(obj);
  const { productId } = obj;
  return (
    <>
      {/* <Laptops /> */}
      <h1>Product page</h1>
      <h2>Show the product of the ID: {productId} </h2>
      <p>Price: {laptops.filter((el) => el.name === productId)[0].price}</p>
    </>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <Laptops />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <hr />
    </div>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function Dashboard() {
  return <div>Dashboard</div>;
}

function NoMatch() {
  return (
    <>
      <h2>Error 404</h2>
      <p>
        <Link to="/">Go to home page</Link>
      </p>
    </>
  );
}
