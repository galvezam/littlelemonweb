import {Route, Link as RouterLink} from "react-router-dom"

const CallToAction = () => {
    return (
        <section className="call-to-action">
            <h1>Welcome to Little Lemon</h1>
            <p>Your favorite place to dine.</p>
            <RouterLink to="/booking">
                <button >Make a Reservation</button>
            </RouterLink>
            
        </section>
    );
};

export default CallToAction;