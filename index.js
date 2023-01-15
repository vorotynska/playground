let quotes = [{
        quote: "A people free to choose will always choose peace.",
        author: "Ronald Reagan"
    },
    {
        quote: "It is difficult to free fools from the chains they revere.",
        author: "Voltaire"
    },
    {
        quote: "I saw the angel in the marble and carved until I set him free.",
        author: "Michelangelo"
    },
    {
        quote: "No one is free, even the birds are chained to the sky.",
        author: "Bob Dylan"
    },
    {
        quote: "We must free ourselves of the hope that the sea will ever rest. We must learn to sail in high winds.",
        author: "Aristotle Onassis"
    },
    {
        quote: "For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others.",
        author: "Nelson Mandela"
    },
    {
        quote: "Only in our dreams are we free. The rest of the time we need wages.",
        author: "Terry Pratchett"
    },
    {
        quote: "Love is the greatest gift that God has given us. It's free.",
        author: "Taraji P. Henson"
    },
    {
        quote: "Linux is only free if your time has no value.",
        author: "Jamie Zawinski"
    },
    {
        quote: "Happiness can only be found if you can free yourself of all other distractions.",
        author: "Saul Bellow"
    },
]

$(document).ready(function () {
    $('#new-quote').bind('click', quotes, function (e) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        $('#text').text(e.data[randomIndex].quote);
        $('#author').append(e.data[randomIndex].author);
        $('#tweet-quote').attr(
            'href',
            'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
            encodeURIComponent('"' + e.data[randomIndex].quote + '" ' + e.data[randomIndex].author)
        );
    })
});