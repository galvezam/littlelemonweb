import React from 'react';


const specials = [
  {
    name: 'Pasta Primavera',
    description: 'Fresh vegetables, garlic, and olive oil.',
    price: '$12.99'
  },
  {
    name: 'Chicken Alfredo',
    description: 'Grilled chicken, creamy Alfredo sauce.',
    price: '$14.99'
  },
  {
    name: 'Margherita Pizza',
    description: 'Fresh mozzarella, tomatoes, and basil.',
    price: '$10.99'
  }
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

const Specials = () => {
    return (
      <section style={styles.section}>
        <h2 style={styles.h2}>Specials</h2>
        <ul style={styles.ul}>
          {specials.map((special, index) => (
            <li key={index} style={styles.li}>
              <h3 style={styles.h3}>{special.name}</h3>
              <p style={styles.p}>{special.description}</p>
              <p style={styles.p}>{special.price}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Specials;