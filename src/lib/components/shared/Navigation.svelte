<nav>
    <ul>
        <li><a href="./art">Art</a></li>
        <li><a href="./bio">Bio</a></li>
        <li><a href="./contact">Contact</a></li>
    </ul>
</nav>

<style>
    nav {
    }

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 1em;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    ul li {
        display: inline-block;
    }

    ul li a {
        font-family: 'ui-sans-serif', 'Helvetica Neue', sans-serif;
        font-size: 1.15rem;
        font-weight: 300;
        color: rgb(65, 65, 65);
        text-transform: uppercase;
        text-decoration: none;
    }

    @media (min-width: 600px) {
        ul {
            gap: 2em;
        }
    }
</style>
