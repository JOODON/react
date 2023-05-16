import classes from "./Card.module.css";
function Card(props){
    return(
        <div className={classes.card}>
            {props.children} {/* 콘텐츠를 열고 닫는 사이에 콘텐츠를 포함해서 반환해줌*/}
        </div>
    )
}

export default Card;