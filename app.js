/*

Facebook social share URL:
https://www.facebook.com/sharer.php?u=[post-url]

Whatsapp social share URL:
https://api.whatsapp.com/send?text=[post-title] [post-url]

Twitter social share URL:
https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]

LinkedIn social share URL:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

Reddit social share URL:
https://reddit.com/submit?url=[post-url]&title=[post-title]

*/

let facebookBtn = document.querySelector(".facebook-btn");
let twitterBtn = document.querySelector(".twitter-btn");
let linkedinBtn = document.querySelector(".linkedin-btn");
let whatsappBtn = document.querySelector(".whatsapp-btn");
let redditBtn = document.querySelector(".reddit-btn");

function init() {
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Hey Friend! Please check out this Periodic Table");

    facebookBtn.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}`
    );

    twitterBtn.setAttribute(
        "href",
        `https://twitter.com/share?url=${postUrl}&text=${postTitle}&via=[via]&hashtags=[hashtags]`
    );

    linkedinBtn.setAttribute(
        "href",
        `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`

    );

    whatsappBtn.setAttribute(
        "href",
        `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`

    );

    redditBtn.setAttribute(
        "href",
        `https://reddit.com/submit?url=${postUrl}&title=${postTitle}`

    );
}

init();
