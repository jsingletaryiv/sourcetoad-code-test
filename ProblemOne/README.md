# Sourcetoad Code - Part 1

I created one of these `README` files inside both directories. I just wanted to list out a few things in here rather than forgetting to mention it in the an email... So, if I do forget something I can just update it here and push it to the repo.

## Preface

Just wanted to cover a few things up front to help curb any confusion and/or head scratching. ;)

### Use of console `log()` / `group()` methods

I'm sure you will notice the use of `console.*` methods throughout the code. I don't use them a lot to begin with and I usually flag them to be removed during build / compilation but this is a different kind of scenario... I figured that having them there could help answer any possible questions or concerns when looking under the hood. That said, if I'm going to use logs they need to be somewhat organized so thats where all the `group()` methods come in. They help round-up the comments and keep looking organized inside the browser console. The main takeaway for me is knowing that you'll be able to expand and collapse the groups as needed.

So, while wrapping up Part 4 was when I realized how crowded the code was looking but I couldn't just delete all that hard work. So, if the logs are a bit much just follow on of the two workarounds:

1. Open up `index.html` and swap out lines 18 and 19 - That will load `index.js` instead of `index-verbose.js`. Verbose being the... _Ah, you get it._ ;)
2. If all goes well, the repo should check out the `dev-verbose` branch by default. From your terminal, run `git fetch` on the repo and checkout the standard `dev` branch.

### Use of comment tags

I did leave in a few comments prefixed with `NOTE:` to help explain a snippet of code or help explain my thought process.

### My Appreciation

    Hi Sourcetoad,
    
    I would like to thank Justin and anyone else on the Sourcetoad team who will be reviewing this repo. I just hope that my code examples are on par with your expectations. I know that time is important to us all so I appreciate your time and consideration.

    Regards,
    James Singletary
