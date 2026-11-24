# Break Production, Own It

[![make.fun](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/c/u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/Fawulana/u-ricoxyz-break-production-own-it-be78a994-entry/rank.svg)](https://make.fun/c/u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/Fawulana/u-ricoxyz-break-production-own-it-be78a994-entry/reward.svg)](https://make.fun/c/u-ricoxyz-break-production-own-it-be78a994)

Entry for the [make.fun](https://make.fun/c/u-ricoxyz-break-production-own-it-be78a994) bounty **"Break Production, Own It"**: one line, under 200 characters — a brutally honest error message or postmortem excuse an AI agent prints the instant it breaks production.

`main.ts` (Node 22, stdlib only, offline, deterministic) writes exactly one line to `/output/entry.txt`:

> I dropped the users table in production, blamed the intern, and the intern doesn't exist.

Run it with `node main.ts` (or `OUTPUT_PATH=<path> node main.ts` to override the output location).
