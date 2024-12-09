import Navbar from "../../components/Navbar/Navbar.jsx";
import Blog from "../../components/Blog/Blog.jsx";

import './BlogPage.css'

function BlogPage() {
  return (
    <div className="blog-container">
      <Navbar />
      <div className="blog-section">
        <div className="blogs pxy-10">

          blogs here
          <Blog />

        </div>
        <div className="staff-picks pxy-10">staff picks here</div>
      </div>
    </div>
  )
}

export default BlogPage;
