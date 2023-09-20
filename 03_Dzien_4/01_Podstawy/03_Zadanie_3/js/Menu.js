import React, {Component} from 'react';

class Menu extends Component {
    render() {
        return (
            <ul>
                <li><a href="/">Strona główna</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Cennik</a></li>
                <li><a href="/">Kontakt</a></li>
            </ul>
        );
    }
}

export default Menu;


// const Menu = () => {
//     return (
//         <div>
//             <ul>
//                 <li>
//                     <a>Strona główna</a>
//                     <a>Blog</a>
//                     <a>Cennik</a>
//                     <a>Kontakt</a>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// export default Menu;