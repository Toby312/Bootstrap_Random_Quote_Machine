const QUOTEHERE= [
    {
        quote: "“We cannot solve problems with the kind of thinking we employed when we came up with them.”",
        author: "Albert Einstein"
    },
    {
        quote: "“Learn as if you will live forever, live like you will die tomorrow.”",
        author: "Mahatma Gandhi"
    }
    ,
    {
        quote: "“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”",
        author: "Mark Twain"
    }
    ,
    {
        quote: "“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”",
        author: "Eleanor Roosevelt"
    }
    ,
    {
        quote: "“When you change your thoughts, remember to also change your world.”",
        author: "Norman Vincent Peale"
    }
    ,
    {
        quote: "“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”",
        author: "Diane McLarene"
    }
    ,
    {
        quote: "“Success usually comes to those who are too busy looking for it.”",
        author: "Henry David Thoreau"
    }
    ,
    {
        quote: "“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.” ",
        author: "Dale Carnegiee"
    }
    ,
    {
        quote: "“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.” ",
        author: "Mister Rogers"
    }
    ,
    {
        quote: "“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.”",
        author: "John Wooden"
    }
    ,
    {
        quote: "“I never dreamed about success. I worked for it.”",
        author: "Estée Lauder"
    }
    ,
    {
        quote: "“Success is getting what you want, happiness is wanting what you get.”",
        author: "W. P. Kinsella"
    }
    ,
    {
        quote: "“Don’t let yesterday take up too much of today.”",
        author: "Will Rogers"
        
    }
    ,
    {
        quote: "“You learn more from failure than from success. Don’t let it stop you. Failure builds character.”",
        author: "Unknown"
    }
    ,
    {
        quote: "“If you are working on something that you really care about, you don’t have to be pushed.” ",
        author: "Steve Jobs"
    }
    ,
    {
        quote: "“Experience is a hard teacher because she gives the test first, the lesson afterwards.” ",
        author: "Vernon Sanders Law"
    }
    ,
    {
        quote: "“To know how much there is to know is the beginning of learning to live.”",
        author: "Dorothy West"
    }
    ,
    {
        quote: "“Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus. “",
        author: "Alexander Graham Bell"
    }
    ,
    {
        quote: "“Either you run the day or the day runs you.” ",
        author: "Jim Rohn"
    }
    ,
    {
        quote: "“I’m a greater believer in luck, and I find the harder I work the more I have of it.”",
        author: " Thomas Jefferson"
    }
    ,
    {
        quote: "“When we strive to become better than we are, everything around us becomes better too.”",
        author: "Paulo Coelho"
    }
    ,
    {
        quote: "“Opportunity is missed by most people because it is dressed in overalls and looks like work.”",
        author: "Thomas Edison"
    }
    ,
    {
        quote: "“Setting goals is the first step in turning the invisible into the visible.” ",
        author: "Tony Robbins"
    }
    ,
    {
        quote: "“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.” ",
        author: "Steve Jobs"
    }
    ,
   
    {
        quote: "“You've got to get up every morning with determination if you're going to go to bed with satisfaction.”",
        author: "George Lorimer"
    }
    ,
    {
        quote: "“Education is the most powerful weapon which you can use to change the world.”",
        author: "Nelson Mandelae"
    }
    ,
    {
        quote: "“The most difficult thing is the decision to act, the rest is merely tenacity.”",
        author: "Amelia Earhart"
    }
    ,
    {
        quote: "“You’ll find that education is just about the only thing lying around loose in this world, and it’s about the only thing a fellow can have as much of as he’s willing to haul away.",
        author: "John Graham"
    }
    ,
    {
        quote: "Take the attitude of a student, never be too big to ask questions, never know too much to learn something new.”",
        author: "Augustine Og Mandino"
    }
    ,
    {
        quote: "“People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.” ",
        author: "Zig Ziglar"
    }
    ,
    {
        quote: "“Work until your bank account looks like a phone number.”",
        author: "Unknown"
    }
]


   
function generateQuote(){
    let randomNos= QUOTEHERE.length
    let randomIndex= Math.floor(Math.random() *randomNos)
    let tweeterLink= "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
    let tweeterLink2= QUOTEHERE[randomIndex].quote.replace(/ /g, "%20")+ " "
    let tweeterLink3= QUOTEHERE [randomIndex].author.replace(/ /g, "%20")
    tweeterLink+=tweeterLink2+=tweeterLink3
    document.getElementById("tweet-quote").href= tweeterLink
    document.getElementById("text").innerText= QUOTEHERE[randomIndex].quote
    document.getElementById("author").innerText= QUOTEHERE [randomIndex].author   
    
 }


 
window.onload= init;
function init(){
    let randomNos= QUOTEHERE.length
    let randomIndex= Math.floor(Math.random() *randomNos)
    document.getElementById("text").innerText= QUOTEHERE[randomIndex].quote
    document.getElementById("author").innerText= QUOTEHERE [randomIndex].author

}






