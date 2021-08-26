class Movie_list extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_infos: []
    };
  }

  async getAPI() {
    const imgs = new Array();
    for (let i = 0; i < 9; i++) {
      const { data: image_api } = await axios("https://random.dog/woof.json");
      const image_infos = {
        index: i,
        img_url: image_api.url,
        img_size: image_api.fileSizeBytes
      };
      imgs.push(image_infos);
    }
    await this.setState({ img_infos: imgs });
  }

  componentDidMount() {
    this.getAPI();
  }

  render() {
    return (this.state.img_infos.map((image, index) => (
      <div key={index} className="movie_list_item">
        <img className="movie_list_item_img" src={image.img_url}></img>
        <span className="movie_list_item_title">MOONLIGHT</span>
        <p className="movie_list_item_desc">fileSize: {image.img_size}</p>
        <button className="movie_list_item_button">Watch</button>
      </div>
      ))
    )
  }
}

const domContainer = document.querySelector('.movie_list');
ReactDOM.render(<Movie_list />, domContainer);