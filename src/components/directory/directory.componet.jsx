import { render } from "@testing-library/react";
import react from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends react.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "HATS",
          imageUrl:
            "https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "JACKETS",
          imageUrl:
            "https://cdn.pixabay.com/photo/2017/08/05/15/04/leather-2584298__340.jpg",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "SNEAKERS",
          imageUrl:
            "https://images.pexels.com/photos/2364582/pexels-photo-2364582.jpeg",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "WOMENS",
          imageUrl:
            "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "MENS",
          imageUrl:
            "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
