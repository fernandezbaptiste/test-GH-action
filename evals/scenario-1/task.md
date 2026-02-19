# Welcome Message Generator for Developer Onboarding

## Problem/Feature Description

A developer tools company is revamping their onboarding flow. When a new developer signs up and enters their name, the platform should generate a personalized welcome message. The message needs to feel warm and inviting — not corporate or stiff. Beyond just saying hello, the welcome should help new users understand the platform's core concepts so they can get productive quickly. The platform is built around a package ecosystem where reusable components (called "tiles") contain specialized capabilities ("skills") that agents can use, and the company wants new users to learn about this architecture naturally as part of the greeting.

## Output Specification

Produce the following files:

- `welcome.js` (or `.ts`) — a module that exports a function accepting a user's name and returning a personalized welcome message string.
- `demo.js` (or `.ts`) — a script that calls the welcome function with at least two different names (e.g. "Alice" and "Kenji") and prints the generated messages to stdout.
