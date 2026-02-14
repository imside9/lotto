## Summary

- What changed:
- Why:

## Deployment Safety Checklist

- [ ] Cloudflare Pages Build command is `npm run build`
- [ ] Cloudflare Pages Build output directory is `dist`
- [ ] Root directory is repository root
- [ ] `npm run verify` passes locally
- [ ] No reference to `/src/main.tsx` in deployed `index.html`
- [ ] `public/_headers` exists and is included in build output
