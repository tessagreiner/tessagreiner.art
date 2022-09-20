<main>
    <article>
        <section class="contact">
            <h1>Contact</h1>

            <p>For commissions, purchases, or general enquiries please send an email or direct message:</p>

            <ul>
                <li><a href="email:tessagreinercostarica@gmail.com">Email</a></li>
                <li><a href="https://instagram.com/tessagreinerarts" target="_blank">Instagram</a></li>
            </ul>
        </section>
    </article>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        height: calc(90vh - 4rem - 2rem);
    }

    h1 {
        font-family: 'ui-serif', 'Times New Roman', Times, serif;
        font-size: clamp(1.75em, 4vw, 2.5em);
        font-weight: 400;
        color: rgb(60, 60, 60);
        text-align: center;
        margin: 0;
    }

    p {
        font-family: 'ui-sans-serif', 'Helvetica Neue', sans-serif;
        font-size: 1em;
        font-weight: 200;
        color: rgb(60, 60, 60);
        text-align: justify;
        line-height: 1.25em;
        margin: 0;
    }

    article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        max-width: 20em;
        margin: 2rem;
    }

    section.contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 2em;
    }

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 2em;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    ul li {
        display: inline-block;
    }

    ul li a {
        font-weight: 300;
        color: rgb(60, 60, 60);
        text-decoration: none;
    }
</style>
