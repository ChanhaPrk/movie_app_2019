import React from 'react';
import PropTypes from "prop-types";
//비동기 통신을 위한 엑시오스를 포함합니다.
import axios from "axios";
import Movie from "./Movie";

//component에는 반드시 return이 존재 해야함
//create new component
function FavoriteAppleProduct({name, picture,rating}){
    return <div>
            <h1>{name}</h1>
            <img src={picture} alt=""></img>
            <div>{rating}/5</div>
           </div>
}

//입력된 value의 type이 제대로 input되었는지 확인합니다.
//react는 매우 확장성 높은 프레임워크이며, 자율성이 높음
//그로인해 오류가 발생할 수 있는 여자기 있으므로 이를 방지하고자 검증 기능을 제공합니다.
FavoriteAppleProduct.propTypes= {
    name : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
    rating : PropTypes.number
};

//array object 
const appleProducts = [
    {
        id : 1,
        name : "macbook",
        image : "https://cdn.clien.net/web/api/file/F01/9333366/51ee95cf71941d.JPG",
        rating : 4
    },
    {
        id : 2,
        name : "iphone12",
        image : "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2020%2F07%2Fapple-iphone-12-to-launch-on-septembrer-8-2020-rumor-1.jpg",
        rating : 3
        
    },
    {
        id : 3,   
        name : "ipad pro 4gen",
        image : "https://www.eposcomputer.com/media/catalog/product/cache/1/thumbnail/1000x/17f82f742ffe127f42dca9de82fb58b1/i/p/ipad_pro_12_9-in_silver_smart_keyboard_folio_14fl_type_mode_us-en_screen.jpg",
        rating : 1
    }
];

//new class component 
class App3 extends React.Component{
    state = {
        isLoading : true,
        movies : []
    };
    getMovies = async () => {
        const {data : { data : { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        //what the expression???
        //this.setState({movies : movies});
        //this.setState({isLoading : false});
        this.setState({movies, isLoading: false });
    };
    componentDidMount(){
        this.getMovies();
    };
    render(){
        //이름이 같으면 지가(?) 알아서 대입되나??
        const {isLoading,movies}  = this.state;
        return <div>{this.state.isLoading ? "Loading" : movies.map(movie => {
            console.log(movie);
            return <Movie
                        key={movie.id}
                        id={movie.id} 
                        year={movie.year} 
                        title={movie.title} 
                        summary={movie.summary} 
                        poster={movie.medium_cover_image}></Movie> })}</div>;
    }
}


//1 function component
//2 class component
//      2-1 extends React.Component
//      2-2 override render() functon
//      2-3 return 
//      2-4 render()는 자동으로 실행된다.
class App2 extends React.Component{
    state = {
        count : 0
    };
    add = () => {
        console.log( "call add function.");
        //this.state.count += 1;
        //this.setState({ count : this.state.count += 1 });
        this.setState(current => ({count : current.count += 1}));
    };
    minus = () => {
        console.log( "call minus function." );
        this.setState(current=>({count : current.count -= 1}));
    };
    render(){
        //state 안에 있는 데이터를 참조합니다.
        return <div><h1>count number is {this.state.count}</h1>
                    <div>
                        <button onClick={this.add}>add</button>
                        <button onClick={this.minus}>minus</button>
                    </div>
        </div>;
    };
}


function App() {
  return <div>  
                <h1> jsx test :) </h1>
                {appleProducts.map(dish => 
                                    <FavoriteAppleProduct 
                                   key={dish.id} 
                                   name={dish.name} 
                                   picture={dish.image}
                                   rating={dish.rating}
                                   />
                                  )}
        </div>;
}

//export default App2;
export default App3;

