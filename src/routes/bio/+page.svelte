<main>
    <article>
        <section class="quote">
            <figure>
                <blockquote>
                    “Self expression is the dominant necessity of human nature.”
                </blockquote>

                <figcaption>~ Dale Carnegie</figcaption>
            </figure>
        </section>

        <section class="body">
            <p>I love this quote because it perfectly stresses the importance of portraying your feelings and emotions
                to the outside world. If you keep your thoughts bundled up on the inside under lock and key, it’s going
                to be nearly impossible to feel like you're living in your ultimate truth.</p>

            <p>Creating a way to communicate your self expression is an essential part of feeling fulfilled. This is why
                I started to paint. Creating a painting that I’m happy with is just like carefully putting my words
                together to write this bio in a way that you, the reader, can understand how I feel. It can be a
                frustrating process attempting to depict the art in my head into art on a canvas. Countless times I
                will create something and then paint over it when it doesn't feel the way I wanted it to. However,
                there are also times when I start out with an idea that doesn't go as planned, but turns into another
                idea that I wouldn't have foreseen. Some of these pieces are my personal favorites.</p>

            <figure>
                <img src="./tessa-greiner-portrait.webp"
                     alt="A portrait of Tessa Greiner"
                >

                <figcaption>Tessa Picasso (ca. 2022)</figcaption>
            </figure>

            <p>Here's a little more about me: I grew up in Canada and always feel the most at home when I’m in nature,
                most of my paintings are inspired by a sense of nature and feminine energy.</p>

            <p>I travelled full-time for 4 years and during that time my perspectives on everything changed. I
                understand a lot more about people and cultures and the importance of community. What I experienced
                made me really feel. I went from sad to excited, elated, lonely, powerless, powerful, and even scared.
                I learned how to accept my circumstances and let go of what I couldn't control. I began to feel
                inspired. My art is a response to these feelings and memories. I am always striving to learn more, and
                create more. I hope you enjoy what I’ve created thus far!</p>
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
        padding: 2rem;
    }

    p {
        font-family: 'ui-sans-serif', 'Helvetica Neue', sans-serif;
        font-size: 1em;
        font-weight: 200;
        color: rgb(60, 60, 60);
        text-align: justify;
        line-height: 1.25em;
    }

    p:first-of-type::first-letter {
        -webkit-initial-letter: 3;
        initial-letter: 3;
        margin-right: 0.75em;
    }

    article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        max-width: 40em;
    }

    section.quote figure {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 1.75em;
        margin: 1em;
    }

    section.quote figure blockquote {
        font-family: 'ui-serif', 'Times New Roman', Times, serif;
        font-size: clamp(1.75em, 4vw, 2.5em);
        font-weight: 400;
        font-style: italic;
        text-align: left;
        margin: 0;
    }

    section.quote figure figcaption {
        font-family: 'ui-serif', 'Times New Roman', Times, serif;
        font-size: clamp(1em, 2vw, 1.75em);
        font-weight: 400;
        text-align: center;
        align-self: end;
    }

    section.body figure {
        text-align: center;
        margin: 0 1em 1em 1em;
    }

    section.body figure img {
        width: 100%;
        max-width: 16em;
    }

    section.body figure figcaption {
        font-size: 0.8em;
        font-weight: 200;
        font-style: italic;
        margin-top: 0.5em;
    }

    @media (min-width: 25em) {
        section.body figure {
            float: left;
        }
    }
</style>
