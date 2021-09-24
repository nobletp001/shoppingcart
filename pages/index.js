import Head from "next/head";
import Image from "next/image";
export default function Home({datas}) {
  return (
    <div>
      <Head>
        <title>ShoppingCart</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light  bg-dark fixed-top shadow">
        <a className="navbar-brand m-auto text-white" href="#">
          TemitopeShoppingCart
        </a>
      </nav>
      <div className="row mx-1 " style={{ marginTop: "60px" }}>
        {datas.map((dat)=>{
          return (
            <div className="col-lg-4 col-md-6 col-12  my-1" key={dat.id}>
              <div className="card shadow border h-100 ">
                <Image
                  src={dat.image}
                  className="card-img-top responsive"
                  alt={dat.title}
                  height="300"
                  width="200"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{dat.title}</h5>
                </div>
                <p className="card-text text-center display-5">${dat.price}</p>
              </div>
            </div>
          );
        })}
       
      </div>
<footer className="page-footer font-small  bg-dark pt-4">
  <div className="container">
    <div className="row">
      <div className="col-md-6 mb-4 col-12">
        <form className="form-inline">
          <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" />
        </form>
      </div>
      <div className="col-md-6 mb-4 col-12">
        <form className="input-group">
          <input type="text" className="form-control form-control-sm" placeholder="Your email" aria-label="Your email" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-sm btn-outline-white my-0 bg-white mx-2" type="button">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="footer-copyright text-center py-3 text-white">© 2020 Copyright:
    <a href="https://mdbootstrap.com/" className="text-decoration-none text-white"> TemitopeJoshua</a>
  </div>
</footer>

      
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://fakestoreapi.com/products");
  const datas = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      datas,
    },
  };
}