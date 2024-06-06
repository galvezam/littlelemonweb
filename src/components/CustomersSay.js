import React from 'react';

const CustomersSay = () => {
    const testimonials = [
        { id: 1, name: "Customer 1", rating: 5, review: "Excellent!" },
        { id: 2, name: "Customer 2", rating: 4, review: "Very good!" },
        { id: 3, name: "Customer 3", rating: 5, review: "Loved it!" },
    ];

    const styles = {
        section: {
            padding: '50px',
            textAlign: 'center'
        },
        h2: {
            fontSize: '2em',
            marginBottom: '20px'
        },
        ul: {
            listStyle: 'none',
            padding: '0'
        },
        li: {
            marginBottom: '40px'
        },
        h3: {
            fontSize: '1.5em',
            marginBottom: '10px'
        },
        p: {
            marginBottom: '10px',
            fontSize: '1.1em',
            lineHeight: '1.5'
        }
    };

    return (
        <section style={styles.section}>
            <h2 style={styles.h2}>What our customers say</h2>
            <ul style={styles.ul}>
                {testimonials.map((testimonial) => (
                    <li key={testimonial.id} style={styles.li}>
                        <h3 style={styles.h3}>{testimonial.name}</h3>
                        <p style={styles.p}>Rating: {testimonial.rating}</p>
                        <p style={styles.p}>{testimonial.review}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CustomersSay;
