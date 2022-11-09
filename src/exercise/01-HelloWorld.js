import React from 'react';

/**
 *🏆
 * The goal here is just to say Hello World.
 * Follow the instruction inside return statement
 */
function HelloWorld(props) {
    return (
        /**
         * ✏️ 
         * Instead of returning null you would need to return a React element
         * Use the React.createElement function to display a div
         * and Hello World text inside the div
         */
         React.createElement('div', {id: "myApp", className:"bg-dark", title: "My App"}, 'Hello World') 
         /**
          * <div id="myApp" class="bg-dark" title="My App">Hello World</div>
          * VirtualDOM -> Represent UI Kept in memory { type: "div", props: {id: "myApp", className:"bg-dark", title: "My App"}, children: ['Hello World']  }
          */// <div id="myApp" class="bg-dark" title="My App">Hello World</div>
    );
}

/**
 * 🚨 🚨 DO NOT DELETE OR CHANGE THIS.🚨 🚨
 * This is how you would use your above component and 
 * the output of this code is displayed on the browser
 */
const Usage = (props) => {
    return <HelloWorld />
}

export default Usage;

