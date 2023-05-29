import React, { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetUpForm.module.css';

const NewMeetUpForm = () => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetUpData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        console.log(meetUpData);
    };

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">MeetUp Title</label>
                    <input type="text" required id="title" defaultValue="" ref={titleInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor="image">MeetUp Image</label>
                    <input type="url" required id="image" defaultValue="" ref={imageInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address" defaultValue="" ref={addressInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required rows="5" defaultValue="" ref={descriptionInputRef}></textarea>
                </div>

                <div className={classes.actions}>
                    <button type="submit">Add MeetUp</button>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetUpForm;
