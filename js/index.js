function mainQuote(){
    var quotes =[
        {quote:"“" + "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind." + "”" ,
        authorName:'Bernard M. Baruch'
        },
        {quote:"“" + "You only live once, but if you do it right, once is enough." + "”" ,
        authorName:'Mae West'
        },
        {quote:"“" + "If you tell the truth, you don't have to remember anything." + "”" ,
        authorName:'Mark Twain'
        },
        {quote:"“" + "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." + "”" ,
        authorName:'Maya Angelou'
        },
        {quote:"“" + "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best." + "”" ,
        authorName:'Marilyn Monroe'
        },
        {quote:"“" + "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth" + "”" ,
        authorName:'William W.Purkey'
        },
    ]
    var Num = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote") .innerHTML = quotes[Num].quote;
    document.getElementById("author") .innerHTML = quotes[Num].authorName;
    return Num ;
}