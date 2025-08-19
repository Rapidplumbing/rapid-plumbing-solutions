# Rapid Plumbing Solutions Website (Email Only)

This version only sends appointment requests via Yahoo Mail.

## Deploy (Vercel)
1. Push this repo to GitHub.
2. In Vercel → New Project → import this repo.
3. Add Environment Variables:
```
YAHOO_USER=rapidplumbingsolutionsllc@yahoo.com
YAHOO_PASS=<your_yahoo_app_password>
```
4. Deploy.

## Local Dev
```
npm install
npm run dev
```
Then open http://localhost:3000
