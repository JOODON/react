import classes from "./MeetupList.module.css";
import MeetUpItem from "./MeetUpItem";

function MeetUpList(props){
    return(
        <ul className={classes.list}>
            {props.meetups.map(
                meetup => <MeetUpItem
                     key={meetup.id}
                     id={meetup.id}
                     image = {meetup.image}
                     title = {meetup.title}
                     addres = {meetup.address}
                     description = {meetup.description}
                     meetup = {meetup}
                />)}
        </ul>
    )
}
export default MeetUpList;