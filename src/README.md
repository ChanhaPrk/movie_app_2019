github pages서비스를 이용하여 내 프로젝트를 호스팅 해보자 ^오^  

## What is a JSX??     
html문법과 javascript의 중간 단계의 문법이라고 생각하면 편함..!!    
react을 사용하는데 있어 반드시 알아야할 개념임!    
##### JSX에서 지켜야할 기본적인 규칙        
1. 모든 tag는 열었다면, 반드시 닫아야 한다.    
2. 두개이상의 tag가 있다면 반드시 하나의 tag으로 묶어야 한다.   
<code>    
function App(){    
    return <div>    
        <div>AA</div>    
        <div>BB</div>
    </div>    
}    
</code>    
새로운 <div></div>을 사용해서 묶는건 tag을 불필요하게 사용하게 됨으로 <fragment></fragment>tag을 사용합니다.     
<code>
import React ,{Fragment} from "react";    
//fragment 모듈을 import합니다.
function App(){    
 return <fragment>    
    <div>AA</div>    
    <div>BB</div>    
 <fragment>    
}    
</code>
3. data types    
3-1. ~~var : ES6이후부터는 자주 사용되지않은다.~~    
3-2. const : 한번 선언되면 이후 데이터를 변경 할 수 없습니다.    
3-3. let : 데이터를 유동적으로 (변경하여)사용할 수 있습니다.    
4. 조건부 렌더링 하는 여러가지 방법    
4-1. 삼항연산자    
<code>
    function App(){    
        const name = 'prkchan';    
        return <fragment>    
            {name ==== 'kineun' ? 'woman' : 'man'}    
        </fragment>    
}    
</code>
4-2. &&연산자
<code>
    function App(){    
        const name = 'prkchan';    
        return <fragment>    
            {name === 'kimeun' && 'woman' : 'man'}
        </fragment>    
}    
</code>
4-3. Arrow function
<code>
    function App(){    
        const name = 'prkchan';    
        return <fragment>    
            {    
                (() => {    
                    if(name === 'kim' ) return <fragment>AA</fragment>    
                    if(name === 'prk' ) return <fragment>BB</fragment>
                    returm <fragment>CC</fragment>
                })    
            }    
        </fragment>    
}    
</code>    
5. styling..    
5-1. style    
tag에 styling하기 위해선 새로운 객체를 만들어 적용합니다.    
<code>
    function App(){    
        const tagStyle = {    
            backGround : 'black',    
            color : 'white'    
        };    
        return<div style={tagStyle}>    
            안녕하세요 리액트!    
        </div>    
}
</code>    
css의 항목은 보통 문자 중간에 '-'가 존재하지만, jsx안에서의 항목은 '-'대신 카멜 문법을 적용하여 사용한다.    
5-2. className    
<code>    
import './tagStyle.css';    
    
function App(){    
    return <div className="tagStyle">
        안녕하세요 리액트!
    </div>
}    
</code>
<!--1. packge.json 파일을 수정하자.    -->
#### React의 가종 좋은 장점은...??    
component을 만들고, 다양한 프로젝트에 재사용이 가능하다.    


#### React component file의 기본형태      
import React from "react";    
//import ... from ...;    
    
function ThisIsFunctionComponent{    
    return <div>return value!!</div>
    
}    
    
export defult ThisIsFunctionComponent;    
//export defult component name;    
        
orther component -> orther component -> index component -> view!!    
index.js(component)    
    
import ThisIsFunctionComponent from "./ThisIsFunctionComponent";    
//import component from "./ ../file";    
//사용하고자하는 component을 import(포함) 해야합니다.    
//추가하려는 파일위치 기준으로 같은 폴더는 ./ 하위 폴더는 ../을 추가해야합니다.    
    
ReactDOM.render( <component />, document.getElementById(""));    
//view 특정 태크에 생성한 component을 붙힙니다.    
//하나의 component만 render할 수 있다. (주의)    
    
    
#### Create React Component    
1. 두가지 컴포넌트 형태    
1-1. function component    
<code>
function ThisIsFunctionComponent(){    
   return <div> return text...!! </div>;    
}
</code>
1-2. class component    
<code>
class ThisIsClassComponent extends React.Component{
//React.Component객체를 반드시 상속(extends)해야한다..!!
    render(){
    //class component가 보유하고 있는 데이터를 최종적으로 출력하는 함수이다.
    //어떤 데이터를 출력(render)하기 위해선 반드시 존재해야하는 함수이다.
        return <div> Render text!! </div>
    }
}
</code>

#### Props!!!    
function component      
class component comunication! 
<code>
function Food(props){
//props에는 넘어온 이름으로 object 형태의 데이터가 넘어오게 된다.
//function Food({props.faverite})
//function Food({faverite}){
    return <h1>{props.faverite}</h1>
    //return <h1>{faverite}</h1>;
}

function App(){
    return <div>
         <Food faverite="kimchi" />            
         <Food faverite="pizza" />
        </div>;
}    
</code>     
#### map function
#### class - state!! 
<code>
class App extends React.Component{
    state = {
       count : 0  
    };
    add = () => {
        this.setState({ count : this.state.count +1});
        //this.state.count = this.state.count+1;과 같은 방식으로 하면 다음과 같은 경고가 발생함! 
        //warring : Do not mutate state directly. Use setState()  react/no-direct-mutation-state
        //state을 직접적으로 수정하지 마십시오.
        //상태가 자동으로 refresh되지않으므로 앵간하면 this.setState()을 사용하자.
        //this.setState( { valueNuame : value } ); 
    };
    minus = () => {
        this.setState({ count : this.state.count -1});
    };
    division = () => {
        this.setState(
            current => ({count : this.state.count / 2 })
            //this.state.count하는 방식은 위험하다.
            //해당코드를 호출하는 동안 다른곳에서 데이터가 수정될 수 있으므로....(?)
        );
    };
    multi = () => {
      this.setState(
            current => ({count : this.state.count * 2 })
            //error : current => () 함수 안에 {}가 누락되어 있음 
      );  
    };
    render(){
        return <div>
        <h1>Number is {this.state.count}</h1>
        <div>
            <button onClick={this.add}>ADD</button>
            <button onClick={this.minus}>MINUS</button>    
            <button onClick={this.division}>DIVISION</button>
            <button onClick={this.multi}>MULTI</button>
        </div>
        </div>
    }
}
</code>    
    
#### class component life cycle    
클래스 컴포넌트가 처음 생성(페이지로 도착하였을때)되었을때, 표출(render), 파괴(페이지가 변경될때)될때 자동으로 호출되는 함수들은 다음과 같습니다.    
생성    
function componentDidMount()
표출    
function render()
function componentDidUpdate()
파괴    
function componentWillUnmount()

setState()함수가 최초로 render()함수를 호출합니다.    
render() -> componentDidMount() -> componentDidUpdate() -> componentWillUnmount()    
    
class ThisIsClassComponent extends React.Component{     
    componentDidMount(){
        //component가 최초로 생성될때 호출되는 함수입니다.
    }
    render(){
        //화면에 무엇인가 표출하고자 할때 호출되는 함수입니다.
        return (<div></div>);
    }
    componentDidUpdate(){
        //state가 갱신될때 호출되는 함수입니다.
    }
    componentWillUnmount(){
        //component가 파괴될따(다른 페이지으로 이동할때) 호출되는 함수입니다.
    }
}
#### props data Verification!! 
컴포넌트의 arguments의 데이터가 올바른 type인지 확인합니다.     

1. npm install prop-types       
//외부 모듈이기때문에 반드시 설치가 필요합니다.     
2. import PropTypes from 'prop-types';
//외부 모듈이기때문에 반드시 import하여 사용해야 합니다.
3. 데이터의 type과 필수 유/무을 지정합니다.        

<code>
function ThisIsFunctionComponent( name, age, address, phone, sex ){}{
    ...
}

1. string, number, bool, list, object, func 등등 javascript에서 지원하는 자료형을 모두 지정할 수 있다.
2. PropTypes.string 
3. PropTypes.string.isRequired
ThisIsFunctionComponent.propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired,
    address : PropTypes.string,
    phone : PropTypes.array,
    sex : PropTypes.bool.isRequired
}
</code>

#### javascript Arrow function                                              <<<<
#### using fetch api feat.axios     
//ajax??
//fetch api basic    
fetch("").than(functon Thisisfunction(response){
    console.log( response );
});

//axios    
axios api을 사용하기 위해서 모듈을 다운로드 하여 설치해야한다.    
그리고 해당 모듈을 component에 import해야한다.    
import axios from "axios";

<code>
getData = async () =>{
    const getData = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    try{
        if( state === '1' ){ ... }
    }
    }catch( error ){
        console.log( error ) ;
    }
}
</code>
axios는 특정서버와 통신한다.    
그러므로 처리속도가 매우 느리다.(서버에 요청해서 응답을 받아야하니까..)    
그러나 javascript source code는 서버와 통신 작업이 마무리 되고 나발이고(?) 다음줄의 source code을 처리하게 된다.    
잠깐...? 서버한테 요청한 걸 아직 응답받지 못했는데??.. 이를 방지하고자 다음 두개의 예약어를 사용하게 된다.    
async : 해당함수에는 비동기으로 처리되는 source code가 포함되어 있음을 알립니다.    
await : 실제 서버와 통신하기위한 코드가 처리되기를 기다려줍니다. 다음 source code을 처리하지않고 기다립니다.    
<code>
    class App extends React.Component{
        state : {
            isLoading : true,
            movies : []
        };
        
        getMovie(){
            //const movies = axios.get("");
            //this.setState({movies : movies.data.data.movies});
            //this.setState({isLoading : false});
            
            const { data : { data : { movies } } } = axios.get("");
            this.setState( {movies , isLoading : false} );
        };
        
        componentDidMount(){
            this.Movie();
        }
        
        render(){
            //return <div>{isLoading ? "loading...." : "complate...!!" }</div>
            const {isLoading,movies} = this.state;
            return <div>
                <div>{isLoading ? "loading...." : movies.map(movie=>{
                    return <Movie id = {movie.id} year = {movie.year} title={movie.title} />
                }}</div>
            </div>
        };
    }
</code>
#### Route, Router, navigation?????     
아니 그래서 이게 정확히 뭐하는 놈인데    
route      (사전적 의미)길, 방법    
router     (사전적 의미)라우터    
navigation (사전적 의미)항법, 항해, 해운    
    
route기능을 사용하기 위해서 모듈을 설치해야합니다.    
//import Route from "react-route-dom";    
//하나의 모듈에 존재하는 두개이상의 기능을 불러오고자할때 다음과 같은 문법을 사용합니다.    
import {HashRouter, Route} from "react-route-dom";    

<code>
function App(){
    return <HashRouter>
    <Route path="/" component={}/>
    <Route path="/home" component={}/>
    <Route path="/home/about" component={}/>
    </HashRouter>
}
</code>
HashRouter-Route는 위에서 아래로 접속하고자하는 주소가 있는지 검사하며, 존재할 경우 해당하는 component을 return하게 된다.    
하지만 요청한 주소의 path을 가지고 있는 모든 component을 return하게 됨으로 exact 예외처리를 해야한다.    
<code>
function App(){
    return
    <HashRouter>
        <Route path="/" exact={true} component={}/>
        <Route path="/home/about" component={}/>
        <Route path="/home/list" component={}/>
    </HashRouter>
}
</code>         
        
텍스트를 클릭하였을때 특정 페이지을 요청하게 하게끔 react에서 Link - to기능을 제공하고있다.   
<code>
import {Link} from "react-route-dom";    
    
function Navigation(){
    return <div>
        <Link to="/">home</Link>
        <Link to="/home/about">about</Link>
        <Link to="/home/list">list</Link>
    </div>
}
    
export defualt Navigation;

//Link-to tag(Navigation)과 Router-Route을 조합하여 사용하면 다음과 같은 형태가 된다.     
//Link-to tag가 정상적으로 작동하기 위해선 반드시 Router안에 위치해 있어야 한다.(주의하자.)       
function App(){
    return <div>
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={}/>
            <Route path="/home/about" componen={}/>
            <Route path="/home/list" component={}/>
        </HashRouter>
    </div>
}
</code>

링크를 클릭하였을때 다음페이지에 데이터를 넘겨보내고자 합니다.      
<code>
    <Link
      to={{
        pathname: "/courses",               
        search: "?sort=name",
        hash: "#the-hash",
        state: { fromDashboard: true }
      }}
    />    
</code>
/*
    pathname    : 연결할 경로를 나타내는 문자열입니다.
    search      : 쿼리 매개 변수의 문자열 표현입니다.
    //hash        : URL에 넣을 해시입니다. # a-hash.           <<지금은 굳이 몰라도 될듯... ?? 
    state       : 위치에 유지되는 상태입니다.
    
    *pathname,state,search,hash
*/

다음과 같은 방법으로 Link-to을 이용하여 다음 페이지에 데이터를 전달합니다.       
<code>
function Movie(id,year,title){
    return 
    <div>
        <Link to={
            pathname:"/home/detail",
            state:{
<!--
                id:id,
                year:year,
                title:title
-->
                id,
                year,
                title
        }}/>
    </div>
}
</code>
특정 hyper text을 클릭하여 페이지를 요청한다 -> 내용을 구성하는 component에 데이터를 넘긴다. -> 페이지 요청이 있었으므로    
Router-Route 분긴에 걸림!!!..        
<code>
    <div>
        <Router>
            <Route path="/" exact={ture}    component={}/>
            <Route path="/home/about/:id"   component={Movie_detail}/>     path을 요청할경우 component가 생성된다.
            <Route path="/home/list"        component={}/>
        </Router>    
    </div>
</code>
<code>
    function Movie({id,title,year}){
        return  <div>
                    <Link to={
                                pathname="/home/about/${id}",
                                state={
                                        id,title,year
                                      }
                             }
                    />
                    <div>title is {title}</div>
                    <div>year is {year}</div>
                    <div>id is {id}</div>
                </div>
    }
</code>
<code>
    class Movie_detail extends React.Component{
        componentDidMount(){
            const {location, history} = this.props;
            //react-router-dom에서 Router을 이용해서 데이터을 넘길때 항상 같이 넘기는 데이터가 있는데
            //그 중 history데이터가 있음
            if( history === null ){
            //비정정상적인 페이지 접근이라면 history데이터가 없음!! 
                history.push("/");
                //그래서 /(home)으로 리다이렉션 시킴!!
            }
        }
        return(){
            const {location} = this.props;
            if( location.state ){
                return <div>{location.state.title}</div>
            }else{
                return null;
            }
        }
    }
</code>
1. Router 분기 만듬 <- 클릭하여 분기를 호출하기 위해선 <Link to={pathName="" state={}}/> tag을 가지고 있어야 함!! 
2. Router 분기에 걸렸다면, component을 생성함 -> <Link to/>의 state={} 속성에 의해 생성되는 component에 데이터를 넘겨줌!! 
3. 넘어온 데이터는 this.props안에 다 있음 
    1. const {location} = this.props
    2. (typer text을 클릭한)정상적인 접근
        const {location} = this.props;
        class component가 전 페이지에서 넘어온 데이터는 모두 this.props에 들어있다.
        this.props에 원하는 데이터가 있는지 확인해 보자.
    3. (전페이지에서 데이터를 넘기지 않은 강제)비정상적인 접근
        this.props.history === null 
        잘못된 접근으로 홈페이지으로 리다이렉션 시킴       