import { Component } from "react";

class App extends Component {
  blogs = [
    { title: "First title", desc: "This is first decription", id: 1 },
    { title: "Second title", desc: "This is second decription", id: 2 },
    { title: "Third title", desc: "This is third decription", id: 3 },
  ];

  constructor() {
    super();
    this.state = {
      blogs: this.blogs,
    };
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.blogs.map((blog) => (
           <div className="blog" key={blog.id}>
               <h2>{blog.title}</h2>
               <p>{blog.desc}</p>
           </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
