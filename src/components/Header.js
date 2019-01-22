import React from 'react';

class Header extends React.Component {
    render() {
        return (<h1 style={styles.header}>Emma's To Do App</h1>);
    }
}

const styles = {
    header: {
        color: "darkblue",
        textAlign: "center",
        paddingTop: "20px",
        paddingBottom: "20px"
    }
};

//render is a function that takes no parameters and returns the embedded html on screen
//styles for pieces of code are often put alongside the component in react as a json object
//if you want to share styles between different components can have a separate styles json object and import. However cleaner to keep together

export default Header;