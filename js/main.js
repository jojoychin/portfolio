/* Your code starts here */

var app = {};
var value = '';
var work = [
    {   "title": "d.bot",
        "hash": "#dbot",
        "category": "mobile",
        "sqImage": "images/d.bot_square.jpg",
        "darkImage": "images/d.bot_darksquare.jpg",
        "mainImage": "images/d.bot_main1.gif",
        "otherImage": "images/d.bot_other.jpg",
        "otherImage2": "images/d.bot_main.jpg",
        "tagline": "A chatbot that draws from female experiences in dating to simulate conversing with an unenlightened male<br>* Demoed at the NYC Media Lab Summit (2015) and covered by <a href=\"http://mashable.com/2015/11/16/dbot-chatbot/#WnHR0JvsP8q3\" target=\"_blank\">Mashable</a>, <a href=\"http://www.theguardian.com/lifeandstyle/shortcuts/2015/nov/29/sleazy-chatbot-internet-misogyny\" target=\"_blank\">The Guardian</a>, <a href=\"http://www.mtv.com/news/2615537/dbot-casual-sexism-joanna-chin-bryan-collinsworth/\" target=\"_blank\">MTV News</a>, and <a href=\"http://www.refinery29.com/2015/11/97731/chatbot-tinder-pickup-lines\" target=\"_blank\">Refinery 29</a>",
        "description": "<a href=\"http://www.dbot.us/\" target=\"_blank\">D.bot</a> is a chatbot that simulates conversing with an unenlightened male. The bot draws from a database of responses derived from women's actual interactions in online and offline dating. Users are encouraged to add their own experiences to the bot's AI. The project is intended to address in a light-hearted, humorous way, the pervasiveness of gender stereotypes and the ease with which disrespectful and patronizing comments find their way into everyday conversation.<br><br>D.bot was created in collaboration with Bryan Collinsworth. I took the lead on the web development and content curation. D.bot is built using HTML/CSS, JavaScript, node.js, socket.io, and Parse.<br><br><a href=\"http://www.dbot.us/\" target=\"_blank\">CHAT WITH D.BOT</a>"
    },
    {   "title": "Post from the Past",
        "hash": "#PostfromthePast",
        "category": "experience",
        "sqImage": "images/post_square.jpg",
        "darkImage": "images/post_darksquare.jpg",
        "vidBool": true,
        // "mainImage": "images/post_main2.gif",
        "mainImage": "<iframe width=\"640\" height=\"360\" src=\"https\://www.youtube.com/embed/du0sTdjsN-w?rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>",
        "otherImage": "images/post_other.jpg",
        "otherImage2": "images/post_other2.jpg",
        "tagline": "Mysterious packages from historical people<br>* A+E History Channel Design Jam winner (2015), NYC Media Lab Combine Selectee, and New Challenge Winner (2016)",
        "description": "Post from the Past (PFTP) is a mysterious monthly subscription box service in which you receive packages from people in the past. Hear their voices and uncover their stories through an immersive physical and digital journey. PFTP originated during and won a design jam for <a href=\"http://www.history.com/\" target=\"_blank\">A+E History Channel</a>. It was also a 2016 <a href=\"http://www.thecombine.nyc/\" target=\"_blank\">NYC Media Lab Combine</a> selectee and <a href=\"http://newchallenge.newschool.edu/\" target=\"_blank\">New Challenge</a> Winner.",
        "processLink": "As one of four team members working on this project, I drove the concept development, conducted user interviews and market analysis, and did much of the UX/UI work. I am currently the project lead and prototyper for both the physical and digital components.<div class=\"subTitle\"><a href=\"#PostfromthePast-process\">MORE ABOUT MY PROCESS</a></div>",
        "role": "Project lead, fabrication/production, content strategy, UX/UI/interaction design, UX researcher (qualitative)",
        "image1": "images/post_UXprocess.jpg",
        "description1": "The minimum viable product was conceived and created in less than 24 hours for the A+E History Channel design jam. Collectively, my three teammates and I created a physical product, basic web app UI, and a video to capture the narrative experience.<br><br><b>PROJECT LEAD</b><br>Since the beginning of 2016, I have been the project lead on Post from the Past guiding my team through product and business validation as part of my MFA Design + Technology Thesis and as a selectee for the 2016 NYC Media Lab Combine program.<br><br><b>FABRICATION/PRODUCTION + CONTENT STRATEGY</b><br>On the product side, I sourced and fabricated all physical components and developed/tested the tech integration. Working with another narrative expert, I crafted the entire story told through the objects included in the mailings and the accompanying audio script. This involved in-depth research into the featured historical person and the time, place(s), and people connected to her.",
        "image2": "images/post_contentflow.jpg",
        "description2": "<b>UX/UI/INTERACTION DESIGN</b><br>Working with another UX/UI designer, I created wireframes and developed the latest iteration of UI, integrating the content I created into the final designs. I incorporated all of these into the prototype for the app (using InVision), which has gone through one round of user testing.",
        "image3": "images/post_UX1.jpg",
        "image4": "images/post_UI.jpg",
        "description3": "<b>UX RESEARCH + ITERATIVE PROCESS</b><br>With my team, I conducted over 100 interviews to determine audience fit and user experience with the three iterations of prototypes. We asked broad questions about behavior patterns (e.g., As a history enthusiast, how do you consume history now? What’s your historical guilty pleasure?) and honed in on specifics within their self-identified interest (e.g. As a museum educator, what type of objects do your students find the most interesting? What are challenges to teaching with objects?).<br><br>In addition, we tested each iteration of the physical prototype with users and got feedback on the experience, synthesizing and incorporating our findings into the next iteration of the product. For example, in early testing we found that users needed a clearer path from the physical to digital experience, so we incorporated a postcard from an imaginary “Archivist” that articulated a clear direction/action for the user: <i>Who sent this? Are they guilty? You may find the missing pieces at <a href=\"http://www.postfromthepast.net/\" target=\"_blank\">www.postfromthepast.net</a>.</i><br><br>Here's a fun video we made about what we learned from interviewing customers:",
        "otherVid": "<iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/-YhTu8hyqxQ?rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>"
    },
    {   "title": "LAMA",
        "hash": "#LAMA",
        "category": "experience",
        "sqImage": "images/lama_square.gif",
        "darkImage": "images/lama_darksquare2.jpg",
        "vidBool": true,
        "mainImage": "<iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/gi_9HtJ1aas?rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>",
        "otherImage": "images/lama_main.jpg",
        "otherImage2": "images/lama_other3.jpg",
        "tagline": "A dynamic and immersive instore navigation system and app designed for <a href=\"http://www.nycmedialab.org/projects/publicis-groupe/\" target=\"_blank\">Publicis Groupe \"Retail Experience of the Future\" NYC Media Lab Corporate Challenge</a>",
        "description": "LAMA was developed for the <a href=\"http://www.nycmedialab.org/projects/publicis-groupe/\" target=\"_blank\">Publicis Groupe \"Retail Experience of the Future\" NYC Media Lab Corporate Challenge</a>.<br><br>The basic concept is an app that stores users' shopping lists so that when they visit a big box store, the app can automatically route them on the most efficient path to shop for their items, dynamically changing their path as the customer adds items to their Smart Cart or list. Navigation data is reflected in a light installation on the ceiling of the store adding visual interest to an otherwise mundane shopping process. Because items are being check off as they are added to the Smart Cart, users can checkout at any time using the app on their phone. Retailers also benefit by being able to add location-/user-specific ads, receive the data from consumer product choices, and visualize overall store traffic.",
        "processLink": "The concept went through two rounds of preliminary user testing with four total participants and the team developed technical mock-ups to test the feasibility of user pathways via an algorithm. <br><br>I was the lead on crafting the narrative and holistic user journey, as well as building the mobile mockups in InVision.<div class=\"subTitle\"><a href=\"#LAMA-process\">MORE ABOUT MY PROCESS</a></div>",
        "role": "Narrative and experience design, UI/UX/interaction design",
        "image1": "images/lama_process.jpg",
        "description1": "Our team of three, guided by designer Bernardo Schorr (Smart Design), developed LAMA by first researching examples of forward thinking in retail and interactive spaces. We synthesized over 40 examples to identify overarching trends and analyzed what about these were successful and why.<br><br>Once we brainstormed a concept, I led the development of a holistic user journey through the physical and digital space and developed the pitch narrative. Working with another UX/UI designer, I created the final consumer-facing screen designs and made the interactive prototype in InVision.",
        "image2": "images/lama_UX.png",
        "description2": "Over a week's time, the team conducted two rounds of in-depth user testing on-site at a “big box store” with four participants using yarn to simulate the lighted path to items on the consumer’s list. Our developer on the project built technical mock-ups to test the feasibility of multiple user pathways via an algorithm. The final concept was presented to executives and staff of Publicis Groupe subsidiaries.",
        "image3": "images/lama_usertest.jpg",
        "image4": "images/lama_other3.jpg",
        "description3": ""
    },
    {   "title": "NYC Mayor's Office",
        "hash": "#NYCMayorsOffice",
        "category": "data visualization",
        "sqImage": "images/mayors_square.jpg",
        "darkImage": "images/mayors_darksquare.jpg",
        "mainImage": "images/mayors_main.gif",
        "otherImage": "images/mayors_main2.gif",
        "otherImage2": "images/mayors_other.jpg",
        "tagline": "Data visualizations created for the NYC Mayor's Office based on data from their <a href=\"http://www1.nyc.gov/site/hhsaccelerator/index.page\" target=\"_blank\">HHS Accelerator Program</a>",
        "description": "These web-based, interactive data visualizations were created for the NYC Mayor's Office to visualize data from their <a href=\"http://www1.nyc.gov/site/hhsaccelerator/index.page\" target=\"_blank\">HHS Accelerator Program</a>. They were built using HTML/CSS, JavaScript, D3.js, and the JavaScript InfoVis Toolkit.",
        "processLink": "In this client-facing work, I first conducted research to better understand the existing data, systems, and needs of the Mayor's Office before embarking on an iterative design process in close consultation with HHS Accelerator stakeholders.<div class=\"subTitle\"><a href=\"#NYCMayorsOffice-process\">MORE ABOUT MY PROCESS</a></div>",
        "role": "Data visualization and interaction design",
        "image1": "images/mayor_UXprocess.jpg",
        "description1": "During my summer internship with the NYC Mayor’s Office, I worked to fulfill the design and data visualization needs in the Office of Operations, which is responsible for running and evaluating the HHS Accelerator program. I started the process by reading existing documents, exploring how I as a user might journey through its systems, and speaking with in-house designers, policy experts, engineers, and data scientists to understand the needs of the office and its constituents.",
        "image2": "images/mayor_sketch3.jpg",
        "description2": "I created paper prototypes, which were shown to a small group of Operation Office stakeholders before quickly creating a version of the interactive visualizations on the web. This first digital prototype was presented in a larger meeting of stakeholders so that they could see how the data might be interacted with on the web and for them to provide input. Based on their feedback and the existing design guidelines for the Accelerator program, I created a new iteration of visualizations that were linked to real datasets, balancing my design and interaction sense with the expressed needs of my clients. This iteration of visualizations was presented to a working group that suggested final tweaks. My final deliverables included the code and documentation about how the data visualizations were structured and rendered.",
        "image3": "images/mayors_main2.gif",
        "image4": "images/mayors_other.jpg",
        "description3": ""
    },
    {   "title": "Room 1206",
        "hash": "#Room1206",
        "category": "game",
        "sqImage": "images/rm1206_square.jpg",
        "darkImage": "images/rm1206_darksquare.jpg",
        "vidBool": true,
        "mainImage": "<iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/sEMAgyoSJM8?rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>",
        "otherImage": "images/rm1206_other.jpg",
        "otherImage2": "images/rm1206_other2.jpg",
        "tagline": "A game about the stories that emerge from the remnants of hotel guests<br>* Demoed at the NYC Arcade (2015)",
        "description": "Room 1206 is an exploratory narrative game in which players play a hotel housekeeper responsible for cleaning the same hotel room every day. As players complete their daily tasks, they encounter the signs and remnants of the guests who are staying there. Personal items, photographs, \"garbage\" left behind. Some mundane; some hinting at secrets, scandals, the triumphs and failures of human life. This game was created with an interest in creating tension between a desire to uncover narrative and the ethics required of a housekeeper. <br><br>The game is built in Unity in collaboration with Bryan Collinsworth. For this project, I built 3D models using Rhino and Maya and crafted many of the player and object interactions."
    },
    {   "title": "Banal Chaos",
        "hash": "#BanalChaos",
        "category": "experience design",
        "sqImage": "images/banalchaos_square.jpg",
        "darkImage": "images/banalchaos_darksquare.jpg",
        "mainImage": "images/banalchaos_main.gif",
        "otherImage": "images/banalchaos_other.jpg",
        "otherImage2": "images/banalchaos_other2.jpg",
        "tagline": "Banal Chaos is an interactive performance piece exploring banal chaos on the subway",
        "description": "Banal Chaos is an interactive performance piece in which the audience is invited to sit in chairs arranged like a NYC subway car and don headphones to listen in on the inner thoughts of strangers via a mobile web app. Performers silently embody the strangers going about their daily transit routine creating both a shared and individual performance experience.<br><br>The piece is intended to play with the everyday actions that we use in the subway - listening in on conversations, getting lost in internal thought, and putting on headphones - to explore and subvert those actions. It explores concepts of performance as a personalized experience and as a game (with audience members trying to guess which stranger’s conversation they were listening in on).<br><br> I worked with a group of five to develop the concept and create basic user flow. With a quick turn-around time, I developed and deployed the mobile web app for the project.<br><br><a href=\"http://joannach.in/banalchaos.html\" target=\"_blank\">EXPERIENCE THE MOBILE/WEB COMPONENT</a>"
    },
    {   "title": "Last Night",
        "hash": "#LastNight",
        "category": "game",
        "sqImage": "images/lastnight_square.jpg",
        "darkImage": "images/lastnight_darksquare.jpg",
        "mainImage": "images/lastnight_main.gif",
        "otherImage": "images/lastnight_other.jpg",
        "otherImage2": "images/lastnight_other2.jpg",
        "tagline": "A multi-player, chat-based, murder mystery game",
        "description": "Last Night is a narrative-driven, multi-player game that uses an online chat interface to facilitate interaction between players and a non-player character. The game was created to explore the question: <em>how does the form of a chat-based interface enable multi-player gameplay?</em> Project interest and goals included reaching an expanded game audience, investigating the form within the context of past and future interactive fiction, and studying how de-centralized multi-player interaction might work.<br><br>Last Night was built using HTML/CSS, JavaScript, node.js, socket.io and uses a Parse database. It can be played on a desktop or mobile device.",
        "processLink": "As the sole designer/developer on this projects, I did everything - from designing the game mechanics and narrative to developing the visual aesthetics to coding the front- and back-end for this networked game.<div class=\"subTitle\"><a href=\"#LastNight-process\">MORE ABOUT MY PROCESS</a></div>",
        "role": "Game and visual design, mobile web development",
        "image1": "images/lastnight_process.jpg",
        "description1": "The idea to make a chat-based game was not the initial driving force for the project. Last Night started as a multi-player interactive fiction piece about three friends who wake up in a cabin with their fourth friend dead. The gameplay was, in classic interactive fiction style, making branching choices or typing instructions of what to do in the fictional world and primarily focused on searching the cabin for items that would give clues about what happened last night.<br><br>The current visual form and game structure emerged from playtesters feedback on three different iterations. In the first set of user testing, players understood how to progress in the story, but didn’t connect with it. By changing the aesthetics to mimic chatting with a friend, I was able to leverage chat as a medium - typing to a friend on a mobile device has a set of familiar interactions. Furthermore, this premise allows additional wiggle room as miscommunication, undelivered messages, etc. are an accepted aspect of the chat medium; people are not taken out of the game when their parsed message does not always return the expected response from the artificial intelligence.",
        "image2": "images/lastnight_v1-2.jpg",
        "description2": "For the second iteration of the game, I added a back-end database using Parse that served as storage for my full narrative, which allowed me to build out and test the multiplayer aspects of the game. In the next round of playtesting, networked players revealed additional design challenges the biggest being the need for increased user communication/feedback. One of the key mechanics of the game is that an action or choice by one player affects the entire game environment (i.e., what options are available to other characters in the future), so knowing that an action had an effect or that other players are changing the environment is important.<br><br>In order to increase this feedback, in the latest iteration, I had the NPC updating players on other players’ actions when their choice dramatically changed the game environment. Based on user comments, I also solidified the visual aesthetic, which draws from current online chat platforms such as facebook and gchat and added the ability to login via facebook in order to incorporate a facebook profile pic as a player's chat icon in the game.",
        "image3": "images/lastnight_v3.jpg",
        "image4": "images/blank.jpg",
        "description3": ""
    },
    {   "title": "Freedom from Fear",
        "hash": "#FreedomfromFear",
        "category": "fabrication",
        "sqImage": "images/freedomfromfear_square.jpg",
        "darkImage": "images/freedomfromfear_darksquare.jpg",
        "mainImage": "images/freedomfromfear_main.jpg",
        "otherImage": "images/freedomfromfear_other.jpg",
        "otherImage2": "images/freedomfromfear_other2.jpg",
        "tagline": "A piece that examines the dichotomous symbolism of handcuffs",
        "description": "Freedom from Fear twists an object (handcuffs) to highlight the conflicted meaning inherent in certain artifacts of contemporary culture. The piece places emphasis on the tension between handcuffs as means of protection/safety and imprisionment/physical incapacitation. The handcuffs were modeled using Rhino and 3D printed."
    },
    {   "title": "Red Bull: Where's the Party At?",
        "hash": "#RedBullWheresthePartyAt",
        "category": "experience",
        "sqImage": "images/redbull_square.jpg",
        "darkImage": "images/redbull_darksquare.jpg",
        "mainImage": "images/redbull_main.jpg",
        "otherImage": "images/redbull_other2.jpg",
        "otherImage2": "images/redbull_other.jpg",
        "tagline": "An large-scale, party journey experience<br>* Red Bull Radical Design Jam winner (2014)",
        "description": "Where's the Party At was an experience designed for <a href=\"http://www.redbull.com/us/en\" target=\"_blank\">Red Bull</a>. The concept won the Red Bull Radical Design Jam in 2015 and was done in collaboration with Jessie Contour, Bryan Collinsworth, and Alec Dawson."
    },
    {   "title": "RentersRATE",
        "hash": "#RentersRATE",
        "category": "experience",
        "sqImage": "images/rentersRATE_square.jpg",
        "darkImage": "images/rentersRATE_darksquare.jpg",
        "mainImage": "images/rentersRATE_main2.gif",
        "otherImage": "images/rentersRATE_other2.jpg",
        "otherImage2": "images/rentersRATE_other.jpg",
        "tagline": "An app that crowdsources tenant feedback for safer/healthier living<br>* New Challenge finalist (2015)",
        "description": "RentersRATE is an app and SMS system that crowdsources tenant feedback for safer/healthier living. The app allows NYC tenants to submit reports about problems in their building/apartment in order to hold landlords and building management companies more accountable.<br><br>The concept and basic UI design were submitted to the <a href=\"http://newchallenge.newschool.edu/\" target=\"_blank\">New Challenge</a> in 2015, and it was selected by judges as a finalist. It was created in collaboration with Bryan Collinsworth, and I took the lead in all UX/UI design and prototyping in InVision."
    },
    {   "title": "Octopi Wall Street",
        "hash": "#OctopiWallStreet",
        "category": "fabrication",
        "sqImage": "images/octopi_square.jpg",
        "darkImage": "images/octopi_darksquare.jpg",
        "mainImage": "images/octopi_other.jpg",
        "otherImage": "images/octopi_main.jpg",
        "otherImage2": "images/octopi_other3.jpg",
        "tagline": "A large, portable, inflatable protest piece",
        "description": "Octopi Wall Street is a portable inflatable protest piece, which draws from classic political cartoons that use octopi to symbolize the influence of money in U.S. politics. Each tentacle length is based on the donations of the top eight contributors to political campaigns in New York's state and federal elections (<a href=\"http://www.opensecrets.org/\" target=\"_blank\">OpenSecrets.org</a>). Suckers are made of stickers with the logos of these contributors. The tentacles were created using a \"plastic welding\" technique. <br><br>This piece was made in collaboration with Bryan Collinsworth with both of us developing the concept and doing the fabrication."
    },
    {   "title": "Daraprim Dollar $ign",
        "hash": "#DaraprimDollar$ign",
        "category": "fabrication",
        "sqImage": "images/daraprim_square.jpg",
        "darkImage": "images/daraprim_darksquare.jpg",
        "mainImage": "images/daraprim_main.jpg",
        "otherImage": "images/daraprim_other.jpg",
        "otherImage2": "images/daraprim_other2.jpg",
        "tagline": "Bling that comments on the harmful practices in the pharmaceutical industry",
        "description": "Daraprim Dollar $ign appropriates the idea of \"bling\" to comment on the often outrageous and profit(money)-driven price hikes on drugs when they are acquired by pharmaceutical companies. In particular it is inspired by the increased cost of the drug Daraprim from $13.50 to $750 (over 500% increase) after it was acquired by Turning Pharmaceuticals. The CEO, Martin Shkreli has been known to live an ostentatious lifestyle that includes a boat and quoting Wu Tang Clan and Kanye on Twitter, which makes this mash up particularly appropriate. The piece was modeled in Rhino and 3D printed."
    },
    {   "title": "Privilege",
        "hash": "#Privilege",
        "category": "game",
        "sqImage": "images/privilege_square.jpg",
        "darkImage": "images/privilege_darksquare.jpg",
        "mainImage": "images/privilege_other.jpg",
        "otherImage": "images/privilege_main.jpg",
        "otherImage2": "images/privilege_other2.jpg",
        "tagline": "Privilege is a workshop game/activity that explores the personal and systemic aspects of privilege",
        "description": "Privilege is a tabletop, workshop game/activity where a group of players determine rules of privilege through rounds of play in order to become the most powerful (and privileged) person in the room.<br><br>Ultimately the goal of the activity is to ferment and facilitate conversation about the advantages and disadvantages that shape us, that shapes others, and that we carry through the world. Through this, the hope is that people will become more aware of their privileges (and the privileges of others) and form new perspectives by learning how others operate and function in society.<br><br>The central mechanic of creating rules based on characteristics/privileges a person possesses not only allows for people to recognize their own strengths and abilities, but it forces them to leave other people out. When creating rules, participants are trying to think of privileges that other people in the group don’t have so that they won’t receive any points. In doing this, people embed their biases, prejudices, assumptions, and judgments into the rules they create.<br><br>Through the lens of a workshop, this activity could be altered/facilitated in various ways to fit various contexts. The main version was tested and intended to be used for The Point, a nonprofit organization in the Bronx, NY dedicated to youth development. Other spaces this workshop/activity could be altered and used for include the workplace, events (ice-breakers), learning environments (cultural centers, schools), groups within a community (e.g., policemen and citizens) and so forth.<br><br>Privilege was developed with Jonathan Beilin, Tevin Byrd, and Shakti Mb."
    },
    {   "title": "Remember Remember",
        "hash": "#RememberRemember",
        "category": "game",
        "sqImage": "images/remember_square.jpg",
        "darkImage": "images/remember_darksquare.jpg",
        "vidBool": true,
        "mainImage": "<iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/jTcuQzd73do?rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>",
        "otherImage": "images/remember_main3.gif",
        "otherImage2": "images/remember_other.jpg",
        "tagline": "A live-action game that takes players to different physical locations, uncovering evidence and exploring themes of surveillance and digital identity",
        "description": "Remember Remember is a combined live-action and digital mystery game that takes teams of 2-4 players to different locations in a NYC neighborhood created in collaboration with Bryan Collinsworth.<br><br>Over the course of the game, players uncover a narrative about a young journalist, Sam Lee, who disappeared in the Middle East while writing a story about a former college classmate involved in a terrorist organization. The documents they discover eventually reveal that Sam was killed as collateral damage in a classified U.S. military strike. Players are guided by a friend of the missing journalist to the following documents, which they must then choose whether or not to leak.<br><br>One of the driving goals was to create a narrative that was relatable and interesting to young, digitally-engaged players, while also putting players into the simulated role of an Edward Snowden or Chelsea Manning-type figure. A second was to explore and highlight technology - social media, texting, augmented reality, audio and video - as a necessary vehicle for accessing key evidence and clues that advanced the game.<br><br>The unexpected twist in the game is that, unbeknownst to team 1, there is a second team that has been charged with digging up team 1’s digital dirt and using their own technology to surveille and ultimately try to stop them."
    },
    {   "title": "Decision Tracking",
        "hash": "#DecisionTracking",
        "category": "data visualization",
        "sqImage": "images/decisiontracking_square.jpg",
        "darkImage": "images/decisiontracking_darksquare.jpg",
        "vidBool": true,
        "mainImage": "<iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/_X9ymJKhS0Q?rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>",
        "otherImage": "images/decisiontracking_other2.jpg",
        "otherImage2": "images/decisiontracking_other.jpg",
        "tagline": "Artistic data visualization of decision-making",
        "description": "Artistic data visualization of decisions made in a 72 hour period."
    },
    {   "title": "Bang Bang",
        "hash": "#BangBang",
        "category": "game",
        "sqImage": "images/bangbang_square.jpg",
        "darkImage": "images/bangbang_darksquare.jpg",
        "mainImage": "images/bangbang_main.jpg",
        "otherImage": "images/blank.jpg",
        "otherImage2": "images/blank.jpg",
        "tagline": "Bang Bang is a split second decision making interactive fiction piece exploring law enforcement dilemmas",
        "description": "Bang Bang is an interactive fiction piece that puts the player in the shoes of a police officer making split second decisions. Pieces of the narrative are based on the Michael Brown police shooting case. The key mechanic was a timer that put pressure on the player to make decisions quickly. Text descriptions of situations allowed for the player to use their imagination to fill in the blanks of the story. In addition to the digital interface, an installation of this piece, created in collaboration with Jonathan Beilin, included physical objects that the player interacted with in order to trigger certain narrative elements.<br><br>Try out the digital version <a href=\"http://jochin.itch.io/bang-bang\" target=\"_blank\">here</a>."
    },
    // {   "title": "God is Watching",
    //     "hash": "#GodisWatching",
    //     "category": "fabrication",
    //     "sqImage": "images/godwatching_square.jpg",
    //     "mainImage": "images/godwatching_other.jpg",
    //     "otherImage": "images/godwatching_main.jpg",
    //     "otherImage2": "images/godwatching_other2.jpg",
    //     "tagline": "God is Watching is a video survellience project drawing parallels between an omnipotent God and a technologically empowered government",
    //     "description": "God is Watching is a video surveillance project that used an arduino yun, web camera, an IR sensor, and a hollowed out book entitled, <em>God: A Biography</em>, to broadcast a live video feed to youtube and take photos of people when they triggered the sensor.<br><br>The live feed was used in another project, a game called <a href=\"#RememberRemember\">Remember Remember</a>, in which a surveillance team loosely representing the government was monitoring the feed and using it to stop another team of players from leaking important documents.<br><br>The project explored the parallels between the way that people talk about an omnipresent deity or God and the way that people now talk about the government tapping our phones and watching us. It asks the question: <em>How has technology enabled the government to become omnipresent?</em>"
    // },
    {   "title": "Pitch Slam",
        "hash": "#PitchSlam",
        "category": "data visualization",
        "sqImage": "images/pitchslam_square.jpg",
        "darkImage": "images/pitchslam_darksquare.jpg",
        "mainImage": "images/pitchslam_main.jpg",
        "otherImage": "images/pitchslam_other.jpg",
        "otherImage2": "images/pitchslam_other2.jpg",
        "tagline": "Pitch Slam is a web platform that lets users visualize and compare pitch patterns between songs by their favorite artists",
        "description": "Pitch Slam lets users visualize and compare pitch patterns between top songs by two artists. The website is built using D3.js and uses <a href=\"http://developer.echonest.com/\" target=\"_blank\">The Echo Nest API</a>."
    },
    {   "title": "Jewelry",
        "hash": "#Jewelry",
        "category": "fabrication",
        "sqImage": "images/jewelry_square.jpg",
        "darkImage": "images/jewelry_darksquare.jpg",
        "mainImage": "images/banana_other2.jpg",
        "otherImage": "images/cartobijoux_other.jpg",
        "otherImage2": "images/fortunefavors_main.jpg",
        "tagline": "Various laser cut necklaces",
        "description": "<strong>Hannah Banana</strong> (above) is based on Andy Warhol's banana prints. It is laser cut from mirror acrylic.<br><br><strong>Cartobijoux</strong> (lower left) is based on a map of the Chicago shoreline and adjacent streets. It is made of laser cut transparent acrylic.<br><br><strong>Fortune Favors</strong> (lower right) is a multi-piece necklace made of abstracted fortune cookies. It is made of laser cut acrylic of various types."
    },
    {   "title": "Quake",
        "hash": "#Quake",
        "category": "fabrication",
        "sqImage": "images/quake_square.jpg",
        "darkImage": "images/quake_darksquare.jpg",
        "mainImage": "images/quake_main.jpg",
        "otherImage": "images/quake_other.jpg",
        "otherImage2": "images/blank.jpg",
        "tagline": "Quake is a data visualization of large earthquakes around the world",
        "description": "Quake is a web-based data visualization of large earthquakes around the world. Depth, location, size, and time of earthquakes with a magnitude larger than 4.5 are represented through visual choices and user interaction. Quake is built using HTML/CSS, JavaScript, and P5.js. Data is being pulled from the <a href=\"http://earthquake.usgs.gov/\" target=\"_blank\">U.S. Geological Service's Earthquake Hazards Program</a>"
    },
];

app.init = function() {
    console.log('Your code starts here!');
    // deploy hash listener
    hashRouter();
    // Refresh hash
    // if (location.hash == '#process'){
    //    location.hash = '';
    //    location.hash = '#process';
    // } else {
    //     location.hash = '';
    //     location.hash = '#work'; 
    // }
    
};

// A function where we detect the change of '#' on the browser address field
var hashRouter = function() {
    $(window).off('hashchange').on('hashchange', function() {
        console.log('Current hash is ' + location.hash);
        if (location.hash == '#work') {
            renderWork();
        } else if (location.hash == '#about') {
            renderAbout();
        } else if (location.hash == '#process') {
            var greeting = "Design Process";
            var tag = "UX/UI/Interaction Design";
            renderProcess(greeting, tag);
        } else if (location.hash == '#hey-IBM') {
            var greeting = "Hello IBM Design";
            var tag = "Here\'s a look into who I am as a designer..."
            renderProcess(greeting, tag);
        } else if (location.hash == '#PostfromthePast-process'){
            renderProjProcess('#PostfromthePast');
        } else if (location.hash == '#NYCMayorsOffice-process'){
            renderProjProcess('#NYCMayorsOffice');
        } else if (location.hash == '#LAMA-process'){
            renderProjProcess('#LAMA');
        } else if (location.hash == '#LastNight-process'){
            renderProjProcess('#LastNight');
        } else {
            renderProject(location.hash);
            var hashNoSymbol = location.hash;
            var tag = hashNoSymbol.replace(/\#+/g, '');
            console.log("This is the tag: "+tag);
        }
        attachEvents();
    });
};

// A function where we keep all user's interaction listener (buttons, etc)
var attachEvents = function() {
    console.log('Attaching Events');

    // project button
    $('.workBtn').off('click').on('click', function(e) {
        value = e.target.innerHTML;
        var valNoPunc = value.replace(/[.,\'-\/#!%?\^&\*;:{}=\-_`~()]+/g,'');
        var valNoSpace = valNoPunc.replace(/\s+/g, '');
        location.hash = '#'+valNoSpace;
    });

    $('.title').off('click').on('click', function() {
        location.hash = '#work';
    });

    $('.about').off('click').on('click', function() {
        location.hash = '#about';
    });

    $('.process').off('click').on('click', function() {
        location.hash = '#process';
    });

    $('.backBtn').off('click').on('click', function(){
        location.hash = '#work';
    });

    var findButton;
    var elements;
    var workImgs;

    $('#imageBlock').children().off('mouseenter').on('mouseenter', function(e){
        // console.log(e.currentTarget.hash);
        for (var i=0; i<work.length; i++){
            if (e.currentTarget.hash == work[i].hash){
                findButton = work[i].title;
            }
        }
        // console.log(findButton);
        var chosenLink;
        elements = document.getElementsByClassName('workBtn');
        for (var i = 0; i<elements.length; i++){
            if (findButton == elements[i].innerHTML){
                // console.log(findButton + ' = '+ elements[i].innerHTML);
                elements[i].style.background = "#93D103";
                // elements[i].style.color = "white";
                //#B22C00
                chosenLink = elements[i];
            }
        }
    });

    $('#imageBlock').children().off('mouseleave').on('mouseleave', function(e){
        // console.log(e.currentTarget.hash);
        // elements = document.getElementsByClassName('workBtn');
        for (var i = 0; i<elements.length; i++){
                elements[i].style.color = "black";
                elements[i].style.background = "rgba(0,0,0,0)";
            }
    });

    $('#imageBlock').children().off('click').on('click', function(){
        // console.log("clicked!");
        for (var i = 0; i<elements.length; i++){
            elements[i].style.color = "black";
            elements[i].style.background = "rgba(0,0,0,0)";
        }
    });

    var tempsrc;

    $('.workBtn').off('mouseenter').on('mouseenter', function(){
        // this.style.background = "#679900";
        this.style.background = "#93D103";
        // this.style.color = "white";
        workImgs = $('#imageBlock').children();
        //find image to replace
        for (var w in workImgs){
            if (this.innerHTML == workImgs[w].id){
                var tempID = workImgs[w].id;
                // console.log(tempID);
                var tempImg = workImgs[w];
                // console.log(tempImg);
                var indivImg = $(tempImg).find('img');
                console.log(indivImg.attr('src'));
                tempsrc = indivImg.attr('src');
                var srcReplace = tempsrc.replace('_','_dark');
                $(indivImg).attr('src', srcReplace);
                // console.log(indivImg);
            }
        //find new image?
        }
    });

    $('.workBtn').off('mouseleave').on('mouseleave', function(){
        this.style.color = "black";
        this.style.background = "rgba(0,0,0,0)";

        workImgs = $('#imageBlock').children();
        //find image to replace
        for (var w in workImgs){
            if (this.innerHTML == workImgs[w].id){
                var tempID = workImgs[w].id;
                // console.log(tempID);
                var tempImg = workImgs[w];
                // console.log(tempImg);
                var indivImg = $(tempImg).find('img');
                $(indivImg).attr('src', tempsrc);
                // console.log(indivImg);
            }
        //find new image?
        }

    });

    $('.projprocessBtn').off('click').on('click', function(){
        location.hash = this.id;
    });

    $('#otherImg').children().off('click').on('click', function(){
        var imagePop = $('<div id=\"imagePop\"><div id=\"closeBtn\">[X] CLOSE    <br></div>'+'<img src='+this.src+'></div>');
        imagePop.appendTo('header');
        // console.log(this.src);

        $('#closeBtn').off('click').on('click', function(){
            $('#imagePop').remove();
        });
    });

    var currentsrc;

};

/*
	functions to render different pages
*/
function renderWork () {
    var findHeight = $('#nav').height();
    console.log(findHeight);
    console.log('rendered work');
    // This is how we compile underscore template
    // Usually, it may be applied to other template brands as well
    var tplToCompile = $('#tpl_work').html();
    var compiled = _.template(tplToCompile, {
        title: 'JOANNA CHIN',
        date: new Date(),
        projects: work
    });
    $('#view').html(compiled);

    for (var i = 0; i<work.length; i++) {
        var img = $('<a href='+work[i].hash+' id=\"'+work[i].title+'\"><img src='+work[i].sqImage+' onmouseover=\"this.src=\''+work[i].darkImage+'\'" onmouseout=\"this.src=\''+work[i].sqImage+'\'" /></a>');
        img.appendTo('#imageBlock');
    }
    window.scrollTo(0, 0);
};

var fromProcess;

function renderProcess(pTitle, pTagline) {
    //get stuff from data base
    $('#nav').attr('display','none');
    var tplToCompile = $('#tpl_process').html();
    var compiled = _.template(tplToCompile, {
        title: pTitle,
        // category: projectCat,
        tagline: pTagline,
        description: 'I believe in creating playful, thought-provoking, user-centered experiences that meaningfully incorporate intuitive physical and digital interactions. I love the challenge and opportunity to work in teams, manage projects with multiple stakeholders, and design with end users.<br><br>Here are four projects that exemplify my iterative design process:',
        date: new Date()
    });
    $('#view').html(compiled);

    window.scrollTo(0, 0);

    fromProcess = true;
}

function renderProjProcess(hash){
    console.log('this is the hash: '+ hash);
    var pImgMain;
    var pImg1;
    var pImg2;
    var pImg3;
    var pImg4;
    var pTitle;
    var pTag;
    var pDes;
    var pRole;
    var pDes1;
    var pDes2;
    var pDes3;
    var pVidBool;
    var pOtherVid;

    for (var i in work){
        if (hash == work[i].hash){
            pImgMain = work[i].mainImage;
            pTitle = work[i].title;
            pTag = work[i].tagline;
            pDes = work[i].description;
            pRole = work[i].role;
            pImg1 = work[i].image1;
            pImg2 = work[i].image2;
            pImg3 = work[i].image3;
            pImg4 = work[i].image4;
            pDes1 = work[i].description1;
            pDes2 = work[i].description2;
            pDes3 = work[i].description3;
            pVidBool = work[i].vidBool;
            pOtherVid = work[i].otherVid;
        }
    }

    var tplToCompile = $('#tpl_projprocess').html();
    var compiled = _.template(tplToCompile, {
        title: pTitle,
        tagline: pTag,
        role: pRole,
        description: pDes,
        description1: pDes1,
        description2: pDes2,
        description3: pDes3,
        // img1: pImg1,
        // img2: pImg2,
        // img3: pImg3,
        otherVid: pOtherVid,
        date: new Date()
    });
    $('#view').html(compiled);

    if (pVidBool){
        var mainImg = $(pImgMain);
    } else {
        var mainImg = $('<img src='+pImgMain+'>');
    }

    mainImg.appendTo('#mainImg');

    if (pImg1 != 'images/blank.jpg') {
        var otherImg = $('<img src='+pImg1+' id=\"'+pTitle+'1\">');
        otherImg.appendTo('#img1');
    }

    if (pImg2 != 'images/blank.jpg') {
        var otherImg2 = $('<img src='+pImg2+' id=\"'+pTitle+'2\">');
        otherImg2.appendTo('#img2');
    }

    if (pImg3 != 'images/blank.jpg') {
        var otherImg3 = $('<img src='+pImg3+' id=\"'+pTitle+'3\">');
        otherImg3.appendTo('#img3');
    }

    if (pImg4 != 'images/blank.jpg') {
        var otherImg3 = $('<img src='+pImg4+' id=\"'+pTitle+'4\">');
        otherImg3.appendTo('#img4');
    }

    if (fromProcess){
        window.scrollTo(0, 0);
    }
}

function renderProject(hash) {
    var projectCat;
    var projectImgMain;
    var projectImg1;
    var projectTag;
    var projectDes;
    var projectImg2;
    var projectTitle;
    var projvidBool;
    var projectLink;

    //if key for each item is hash...
    //projectCat = work[hash].mainImage;

    for (var i = 0; i<work.length; i++){
        if (hash == work[i].hash){
            console.log(value + ' matched to '+ work[i].title);
            projectCat = work[i].category;
            projectImgMain = work[i].mainImage;
            projectImg1 = work[i].otherImage;
            projectImg2 = work[i].otherImage2;
            projectDes = work[i].description;
            projectTag = work[i].tagline;
            projectTitle = work[i].title;
            projvidBool = work[i].vidBool;
            projectLink = work[i].processLink;
        }
    }
    //get stuff from data base
    var tplToCompile = $('#tpl_project').html();
    var compiled = _.template(tplToCompile, {
        title: projectTitle,
        category: projectCat,
        tagline: projectTag,
        description: projectDes,
        link: projectLink,
        date: new Date()
    });
    $('#view').html(compiled);

    if (projvidBool){
        var mainImg = $(projectImgMain);
    } else {
        var mainImg = $('<img src='+projectImgMain+'>');
    }

    mainImg.appendTo('#mainImg');

    if (projectImg1 != 'images/blank.jpg') {
        var otherImg = $('<img src='+projectImg1+' id=\"'+projectTitle+'1\">');
        otherImg.appendTo('#otherImg');
    }

    if (projectImg2 != 'images/blank.jpg') {
        var otherImg2 = $('<img src='+projectImg2+' id=\"'+projectTitle+'2\">');
        otherImg2.appendTo('#otherImg');
    }

    window.scrollTo(0, 0);

    fromProcess = false;

}

function renderAbout() {
    var tplToCompile = $('#tpl_about').html();
    var compiled = _.template(tplToCompile, {
        title: 'About Me',
        tagline: 'Socially conscious, physical-digital interaction designer & technologist',
        date: new Date(),
        description: 'While pursuing an MFA in Design + Technology at Parsons School of Design, I’ve been enthusiastically spreading my creative wings -  making everything from <a href=\"#OctopiWallStreet\">giant inflatable tentacles</a> to <a href=\"#dbot\">chauvinist chatbots</a> to digital-physical experiences for organizations like <a href=\"#AEPostfromthePast\">A+E</a>, <a href=\"#RedBullWheresthePartyAt\">Red Bull</a>, <a href=\"#LAMA\">Publicis Groupe</a>, and the <a href =\"http://www.nycmedialab.org/\" target="_blank">NYC Media Lab</a>. While I have a diverse set of skills, my true passion lies in creating playful, thought-provoking, user-centered experiences that meaningfully incorporate physical and digital interactions. This past summer I combined my social impact, design, and tech know-how as a designer and data visualization specialist at the <a href=\"#NYCMayorsOffice\">NYC Mayor\'s Office of Operations</a>.<br><br>Before heading to graduate school, I was the Program Coordinator for <a href=\"http://www.animatingdemocracy.org/\" target=\"_blank\">Animating Democracy</a>, a program of <a href=\"http://www.americansforthearts.org/\" target=\"_blank\">Americans for the Arts (AFTA)</a> that strengthens organizations and people using art to foster civic engagement and social change. In addition to project management, communications and content strategy, research, partnership development, and design work, I contributed to AFTA\'s <i>Arts Link</i> and <i>ARTSblog</i> publications and wrote the preface for <a href=\"http://www.amazon.com/Advocating-Creatively-Natalie-Millman-ebook/dp/B00URVJWYM\" target=\"_blank\"><i>Advocating Creatively</i></a>, a publication from the Columbia School of Social Work.<br><br>I graduated with honors from Stanford University receiving a B.A. in international relations and a minor in studio art. My award-winning thesis explored the dynamic role of the AIDS Quilt as a memorial, piece of art, and reflection of the changing HIV/AIDS epidemic in America. In my free time, I enjoy dancing tango, brainstorming crazy project ideas, experimenting in the kitchen, and creating art of all kinds.'
    });
    $('#view').html(compiled);

    window.scrollTo(0, 0);
}

app.init();