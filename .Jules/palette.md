## 2026-05-08 - Screen Reader Accessibility for Icon-only Links
**Learning:** Chakra UI's `<Box as="a">` component used with an inner `<Icon>` does not inherently communicate purpose to screen readers. Relying solely on icons, such as social media logos, leaves keyboard and screen reader users without context.
**Action:** Always verify that icon-only links or buttons have an explicit `aria-label` attribute. Further, ensure `_focusVisible` states are styled sufficiently to provide clear visual feedback during keyboard navigation.
