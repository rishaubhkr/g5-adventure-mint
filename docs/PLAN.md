# PLAN.md - Syncing Adventure Assets

## Objective
Push the latest brand updates, optimized hero assets, and SEO improvements to the GitHub repository.

## Changes to Commit
1. **Assets**: New optimized hero image `public/images/rafting-hero.png`.
2. **Components**:
    - `Hero.tsx`: Switched to `rafting-hero.png` with LCP optimizations.
    - `Header.tsx`: Brand name update and logo restoration.
3. **Metadata**:
    - `layout.tsx`: OpenGraph & Twitter image updates.
    - `Schema.tsx`: JSON-LD structured data synchronization.

## Implementation Steps
### 1. Preparation
- [x] Verify all files are in the expected state.
- [ ] Run basic build check.

### 2. Git Operations
- [ ] `git add .` to stage all changes (including untracked image).
- [ ] `git commit -m "feat: optimize hero asset and synchronize brand metadata"`
- [ ] `git push origin main`

### 3. Verification
- [ ] Run `git status` to ensure clean working tree.
- [ ] Run `git log` to verify commit.
