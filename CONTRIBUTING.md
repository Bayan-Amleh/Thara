# Git Workflow

## Golden rules
1. **Never push directly to `main`.** Always work on your own branch and open a Pull Request.
2. **One branch = one task.**
3. **Pull before you start**, every time.
4. Someone else reviews your PR before it is merged.

## Branch names
`feature/<page-or-feature>` - e.g. `feature/cities-page`, `feature/shop-cart`
`fix/<what>` - e.g. `fix/navbar-mobile`

## Daily flow
```bash
git checkout main
git pull                          # get latest work
git checkout -b feature/cities-page

# ... code ...

git add .
git commit -m "Add cities page hero section"
git push -u origin feature/cities-page
```
Then open GitHub -> **Compare & pull request** -> ask a teammate to review -> Merge.

## Commit messages
Short, English, starts with a verb: `Add`, `Fix`, `Update`, `Remove`.
Good: `Add product card to shop page` - Bad: `changes`, `asdf`

## If you get a merge conflict
Don't panic and don't delete other people's code. Ask in the group, and resolve it together.

## Don't commit
`node_modules/` and `css/output.css` (already in `.gitignore`). Every member runs `npm install` + `npm run dev` locally.
