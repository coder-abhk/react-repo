import { Component } from "react";
import ListItem from "./Content";

class App extends Component {
  // array of objects
  blogs = [
    { title: "First title", desc: "This is first decription", id: 1 },
    { title: "Second title", desc: "This is second decription", id: 2 },
    { title: "Third title", desc: "This is third decription", id: 3 },
  ];

  // array of numbers
  numbers = [11, 12, 13, 14, 15];

  constructor() {
    super();
    this.state = {
      blogs: this.blogs,
      numbers: this.numbers,
    };
  }

  render() {
    const listItems = this.state.numbers.map((number) => (
      // correct way of defining key
      <ListItem key={number.toString()} value={number} />
    ));
    return (
      <div className="App">
        <header className="header">
          <h1>Demo Blog</h1>
        </header>
        <main>
          {this.state.blogs.map((blog) => (
            <div className="blog" key={blog.id.toString()}>
              <h2>{blog.title}</h2>
              <p>{blog.desc}</p>
            </div>
          ))}
        </main>
        <section>
          {/* inline style */}
          <ul style={{ listStyle: "round", color: "#5b49f5", padding: "1rem" }}>
            {listItems}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
