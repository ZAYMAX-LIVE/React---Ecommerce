import React from "react";
import AboutBlock from "../components/AboutBlock";
import img from "../img/product/product1.png";
import { Link } from "react-router-dom";
import OurProducts from "../components/OurProducts";

class Home extends React.Component {
  funcSlaides = () => {
    let offset = 0;
    const slides = document.querySelector(".block");
    document.querySelector(".next").addEventListener("click", function () {
      offset += -80;
      if (offset < -160) {
        offset = 0;
      }
      slides.style.left = offset + "vw";
    });
    document.querySelector(".prev").addEventListener("click", function () {
      if (offset < 0) {
        offset += 80;
      }
      slides.style.left = offset + "vw";
    });
  }
  componentDidMount() { //slaides
    this.funcSlaides()
  }
  
  render() {
    console.log(this.props.post);
    return (
      <>
        <main>
          <section className="stock">
            <AboutBlock />
            <section className="mainBlock">
              <div className="stockBlock">
                <div className="block">
                  {this.props.post
                    .filter((post) => post.pref === "true")
                    .map((post, index) => (
                      <div key={index} className="item">
                        <div className="info">
                          <Link to={`card/${post.name}`}>
                            <h1>{post.name}</h1>
                          </Link>
                          <p>{post.title}</p>
                          <p>
                            Price:
                            <br />
                            <span>{post.price}$</span>
                          </p>
                          <button>Shop Now</button>
                        </div>
                        <div className="imgBlock">
                          <img src={post.img} alt="" srcset="" />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </section>
            <a className="prev">&#10094;</a>
            <a className="next">&#10095;</a>
          </section>
          <OurProducts posts={this.props.post} />
        </main>
      </>
    );
  }
}

export default Home;
/**
 {this.state.product.filter(post => post.pref === "true").map((post, index)=>(
                <div key={index}>
                  <div className="info">
                    <h1>{post.name}</h1>
                    <p>{post.title}</p>
                    <p>Price:<br/><span>{post.price}$</span></p>
                    <button>Shop Now</button>
                  </div>
                  <div className="imgBlock">
                    <img src={post.img} alt="" srcset="" />
                  </div>
                </div>
              ))}
 */
