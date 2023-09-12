import { BlogAreaContainer } from "./Styles";
import { Container } from "../../pages/Home/Styles";

export default function BlogArea() {
  return (
    <BlogAreaContainer>
      <Container>
        <div className="blog-grid">
          <div className="grid-post">
            <div className="grid-post__img">
              <img src="https://themedox.com/xolio/wp-content/uploads/2023/03/inner_blog_img04.jpg" />
            </div>
            <div className="grid-post__content">
              <span>Category</span>
              <span className="date-post">Agosto 2023</span>
              <h2>Title teste do blog do lucas alexsandro</h2>
            </div>
          </div>
          <div className="grid-post">
            <div className="grid-post__img">
              <img src="https://themedox.com/xolio/wp-content/uploads/2023/03/inner_blog_img02.jpg" />
            </div>
            <div className="grid-post__content">
              <span>Category</span>
              <span className="date-post">Agosto 2023</span>
              <h2>Title teste do blog do lucas alexsandro</h2>
            </div>
          </div>
          <div className="grid-post">
            <div className="grid-post__img">
              <img src="https://themedox.com/xolio/wp-content/uploads/2023/03/inner_blog_img01.jpg" />
            </div>
            <div className="grid-post__content">
              <span>Category</span>
              <span className="date-post">Agosto 2023</span>
              <h2>Title teste do blog do lucas alexsandro</h2>
            </div>
          </div>
        </div>
      </Container>
    </BlogAreaContainer>
  );
}
