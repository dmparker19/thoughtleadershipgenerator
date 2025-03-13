const openings = [
    "Marketing isn't about X, it's about Y.",
    "Most marketers focus on X, but the real winners focus on Y.",
    "If you're still thinking about X, you're already behind.",
    "The best marketers understand X, but the elite marketers master Y.",
    "I was today years old when I realized X changes everything.",
    "Hot take: X is the single most underrated strategy in B2B.",
    "I don't care what anyone says—if you're not doing X, you're losing.",
    "B2B marketers, stop obsessing over X and start prioritizing Y.",
    "If I had a dollar for every time someone ignored X, I'd be a billionaire.",
    "Nobody talks about this, but X is the real secret to growth.",
    "Marketers who truly understand X will dominate 2025.",
    "I see too many brands treating X like an afterthought. Big mistake.",
    "Every successful B2B brand I know focuses on X. Coincidence? I think not.",
    "If you're not talking about X in your board meetings, you're already behind.",
    "I tested X for 30 days. The results? Game-changing.",
    "CMOs, if you're not focused on X, it's time to wake up.",
    "Want to stay ahead of the curve? Start thinking about X differently.",
    "Just had a conversation with a top CMO about X. Mind blown.",
    "I used to ignore X. Then I realized it was the most powerful growth lever in B2B.",
    "Here's an unpopular opinion: X is more important than Y.",
    "99% of marketers are getting X completely wrong.",
    "I see so many people overcomplicating X when the answer is so simple.",
    "If your marketing isn't built around X, you're setting yourself up for failure.",
    "We need to have a serious conversation about X in B2B.",
    "This one shift in how I think about X changed everything.",
    "Why is no one talking about X? It's the real growth driver.",
    "If you're wondering why your growth has plateaued, look at X.",
    "B2B marketing is evolving. If you're not leveraging X, you're falling behind.",
    "Some marketers get X. Most don't. Be the exception.",
    "I've built entire marketing teams around X, and the results speak for themselves.",
    "At the end of the day, X is what separates great brands from forgettable ones.",
    "Most companies treat X as optional. That's why they fail.",
    "Struggling with low engagement? You're probably not focusing enough on X.",
    "I used to think X was just hype. Now I realize it's everything.",
    "We tracked X for a year. The insights? Eye-opening.",
    "Imagine if every marketer understood X. The industry would be unrecognizable.",
    "I don't throw around the word 'game-changer' often, but X truly is.",
    "Want to see massive growth? Focus on X for the next 6 months.",
    "B2B marketers are always chasing X, but they should be doubling down on Y instead.",
    "You don't need a bigger budget. You need a better X strategy.",
    "If you're not measuring X, how do you even know your marketing is working?",
    "One simple tweak to X could 10x your pipeline.",
    "I've consulted for hundreds of B2B brands. The best ones all prioritize X.",
    "It's time we stop thinking about X as a nice-to-have.",
    "Great marketing isn't about tactics. It's about X.",
    "Here's what every marketer needs to understand about X.",
    "If you're not embedding X into your strategy, you're playing the wrong game.",
    "This one overlooked approach to X could change everything.",
    "I just saw a B2B brand absolutely nail X. Learn from them.",
    "There's a lot of noise in B2B. The real signal? X."
];

const buzzwords = [
    "dark social",
    "pipeline velocity",
    "storytelling at scale",
    "demand gen vs. lead gen",
    "account-based everything",
    "growth loops",
    "thought leadership flywheels",
    "first-party data",
    "AI-powered personalization",
    "product-led growth",
    "intent-based targeting",
    "sales-marketing alignment",
    "community-led growth",
    "brand as a demand driver",
    "attribution modeling",
    "frictionless buyer journeys",
    "conversational marketing",
    "the content moat",
    "zero-click content",
    "social selling vs. social listening",
    "full-funnel engagement",
    "customer obsession",
    "the inbound-outbound hybrid",
    "predictive analytics",
    "demand capture vs. demand creation",
    "scalable personalization",
    "the rev ops mindset",
    "self-serve buying experiences",
    "the sales-marketing flywheel",
    "net dollar retention",
    "the intent data arms race",
    "buying committee orchestration",
    "the hybrid GTM motion",
    "trust-based marketing",
    "the LinkedIn algorithm hack",
    "the cold outbound revival",
    "attention as a currency",
    "the TikTokification of B2B",
    "personal brand arbitrage",
    "the SEO moat",
    "conversational ABM",
    "demand efficiency",
    "cross-channel synergy",
    "thought leadership arbitrage",
    "the rise of first-party intent",
    "revenue orchestration",
    "the de-anonymization of B2B traffic",
    "emotion-driven B2B storytelling",
    "category creation vs. category capture",
    "CMO-led revenue motion"
];

const conclusions = [
    "This is the future of B2B.",
    "Trust me, the best CMOs already know this.",
    "Smart marketers will get this. The rest won't.",
    "The data proves it—adapt or get left behind.",
    "I see so many marketers ignoring this, and it blows my mind.",
    "Marketers who understand this will win in 2025.",
    "If this resonates, we should connect.",
    "Your ICP is waiting—are you ready?",
    "This isn't just marketing, it's a movement.",
    "The best brands already operate this way.",
    "It's time for marketers to wake up and embrace this reality.",
    "If you're not thinking about this, you're already behind.",
    "We're entering a new era of marketing—this is just the beginning.",
    "The winners of tomorrow are already prioritizing this today.",
    "The real question is: Will you take action or get left behind?",
    "This is the mindset shift marketers need to make.",
    "Those who adapt will thrive. The rest? Well...",
    "The numbers don't lie—this is where marketing is heading.",
    "Marketers who get this will be unstoppable in 2025.",
    "It's not a trend. It's the new normal.",
    "This is how the best companies drive exponential growth.",
    "We need to stop overcomplicating things and focus on what works.",
    "Every marketer needs to ask themselves: Am I leveraging this?",
    "This changes the game for B2B marketing.",
    "Execution beats strategy, but only if you're executing on this.",
    "This one shift will separate the best from the rest.",
    "It's time to rethink everything we thought we knew about marketing.",
    "The brands who understand this will dominate in the next decade.",
    "This isn't theory—it's what's actually driving results.",
    "The best marketers don't follow trends. They create them.",
    "If you're not already prioritizing this, you're missing out on huge opportunities.",
    "Growth isn't about hacks. It's about mastering this.",
    "The smartest marketers are already leveraging this. Are you?",
    "This is what separates good marketers from great ones.",
    "It all comes down to one thing: Are you ready to evolve?",
    "This is the key to sustainable, long-term growth.",
    "The biggest mistake marketers make? Ignoring this.",
    "This is the conversation every marketing team should be having right now.",
    "The future belongs to brands that understand this shift.",
    "If you're still doing things the old way, now is the time to change.",
    "Most marketers won't get this, but the best already do.",
    "This is what will drive the next wave of marketing innovation.",
    "Marketers who invest in this today will dominate tomorrow.",
    "The best companies aren't waiting for permission to embrace this.",
    "Your competitors are already figuring this out—are you?",
    "The biggest unlock for growth? Mastering this strategy.",
    "If this post made you think, you're on the right track.",
    "At the end of the day, this is what truly matters in B2B.",
    "This one insight can change how you approach marketing forever.",
    "One thing is clear: The future of marketing belongs to those who act on this today."
];

function getRandomItem(array, exclude = null) {
    let item;
    do {
        item = array[Math.floor(Math.random() * array.length)];
    } while (item === exclude);
    return item;
}

function formatForLinkedIn(text) {
    // Replace em dashes with proper HTML entities
    text = text.replace(/—/g, '–');
    
    // Add line breaks for readability
    text = text.replace(/\n\n/g, '\n\n');
    
    // Add relevant hashtags based on buzzwords used
    const hashtags = [
        "#B2BMarketing",
        "#MarketingStrategy",
        "#ThoughtLeadership",
        "#GrowthMarketing",
        "#B2BGrowth"
    ];
    
    // Randomly select 2-3 hashtags
    const numHashtags = Math.floor(Math.random() * 2) + 2;
    const selectedHashtags = [];
    for (let i = 0; i < numHashtags; i++) {
        const hashtag = getRandomItem(hashtags, selectedHashtags[selectedHashtags.length - 1]);
        selectedHashtags.push(hashtag);
    }
    
    return text + '\n\n' + selectedHashtags.join(' ');
}

function generatePost() {
    // Get opening template
    const opening = getRandomItem(openings);
    
    // Get two different buzzwords
    const buzzword1 = getRandomItem(buzzwords);
    const buzzword2 = getRandomItem(buzzwords, buzzword1); // Ensure different from first
    
    // Get conclusion
    const conclusion = getRandomItem(conclusions);
    
    // Build the post
    let post = opening.replace('X', buzzword1).replace('Y', buzzword2);
    
    // Add some context (optional middle paragraph)
    if (Math.random() > 0.5) {
        post += '\n\n';
        post += `Think about it: While everyone else is focused on traditional metrics, the real opportunity lies in mastering ${buzzword1}.`;
    }
    
    // Add conclusion with spacing
    post += '\n\n';
    post += conclusion;
    
    // Format for LinkedIn
    const formattedPost = formatForLinkedIn(post);
    
    // Update the UI
    const postContent = document.getElementById('postContent');
    postContent.innerHTML = formattedPost.replace(/\n\n/g, '<br><br>');
    
    // Add subtle animation
    postContent.style.opacity = '0';
    setTimeout(() => {
        postContent.style.opacity = '1';
    }, 50);
}

function copyToClipboard() {
    const postContent = document.getElementById('postContent');
    const textToCopy = postContent.innerText;
    
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            const copyBtn = document.getElementById('copyBtn');
            const originalText = copyBtn.innerText;
            copyBtn.innerText = 'Copied! ✓';
            copyBtn.style.backgroundColor = '#8aff80'; // Success color
            
            setTimeout(() => {
                copyBtn.innerText = originalText;
                copyBtn.style.backgroundColor = '';
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy to clipboard. Please try again.');
        });
}

// Theme toggling functionality
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
}

// Event listeners
document.getElementById('generateBtn').addEventListener('click', generatePost);
document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
document.getElementById('themeToggle').addEventListener('click', toggleTheme); 