/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Navbar Styles */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 10px 20px;
    position: relative;
}

.navbar .logo {
    color: #fff;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
}

.menu {
    display: flex;
    gap: 15px;
}

.menu a {
    color: #fff;
    text-decoration: none;
    padding: 8px 12px;
    font-size: 18px;
    transition: background-color 0.3s;
}

/* Change color on hover */
.menu a:hover {
    background-color: #575757;
    border-radius: 4px;
}

/* Menu Icon */
.icon {
    display: none; /* Hide by default */
    color: #fff;
    font-size: 30px;
    cursor: pointer;
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
    .menu {
        display: none; /* Hide the menu by default on small screens */
        flex-direction: column;
        position: absolute;
        top: 60px; /* Position below the navbar */
        left: 0;
        width: 100%;
        background-color: #333;
        z-index: 1;
    }

    .menu a {
        text-align: center;
        padding: 10px;
        border-bottom: 1px solid #575757;
    }

    .icon {
        display: block; /* Show the menu icon on smaller screens */
    }
}
