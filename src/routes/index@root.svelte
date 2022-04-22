<main>
    <h1>Tessa Greiner</h1>

    <nav>
        <ul>
            <li><a href="./art">Art</a></li>
            <li><a href="./bio">Bio</a></li>
            <li><a href="./contact">Contact</a></li>
        </ul>
    </nav>
</main>

<video playsinline autoplay muted loop>
    <source src="./background.mp4" type="video/mp4">
</video>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: clamp(5em, 7.5vw, 7.5em);
        height: 100vh;
    }

    h1 {
        font-family: 'ui-serif', 'Times New Roman', Times, serif;
        font-size: clamp(3em, 10vw, 10em);
        font-weight: 700;
        color: rgb(255, 255, 255);
        text-transform: uppercase;
        text-align: center;
        margin: 0 3rem;
        padding: 0;
    }

    nav {
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    ul li {
        display: inline;
    }

    ul li:not(:last-of-type) {
        padding-right: clamp(2.5em, 5vw, 5em);
    }

    ul li a {
        font-size: clamp(1.5em, 2.5vw, 2.5em);
        font-weight: 200;
        color: rgb(255, 255, 255);
        text-transform: capitalize;
        text-decoration: none;
    }

    video {
        object-fit: cover;
        width: 110vw;
        height: 110vh;
        position: fixed;
        top: -5vh;
        left: -5vw;
        z-index: -1;
    }
</style>
