# Organization deployed defect-delivery retest

Completed: 2026-09-18T10:10:00Z

Environment: deployed development · Google Chrome · 1792x976 by default; additional sizes only for responsive findings.

This report records terminal disposition for every Organization entry in the 276-finding delivery batch. PASS means the deployed behavior was verified. FAIL means the deployed defect remains reproducible. PASSED_OVER means the bounded attempt could not produce trustworthy proof, commonly because an exact fixture, actor, reversible mutation, or stable protected page was unavailable. DUPLICATE_COVERAGE points to another finding that exercised the same behavior.

## Summary

| Total | PASS | FAIL | DUPLICATE_COVERAGE | PASSED_OVER |
|---:|---:|---:|---:|---:|
| 3 | 2 | 0 | 0 | 1 |

Severity inventory: MEDIUM 3. Outcome reconciliation: PASS 2 · PASSED_OVER 1.

## Finding dispositions

| ID | Severity | Outcome | Title | Disposition | Tested |
|---|---|---|---|---|---|
| ORG019-HIST-001 | MEDIUM | PASS | Announcement history truncates and activity duplicates | VERIFIED_FIXED_DEPLOYED | 2026-09-18T07:30:55.985Z |
| ORG024-STALE-001 | MEDIUM | PASS | Stale profile writes silently overwrite newer values | VERIFIED_FIXED_DEPLOYED | 2026-09-18T07:32:06.611Z |
| ORG025-COVERAGE-001 | MEDIUM | PASSED_OVER | Role context works but three full organization lifecycles remain incomplete | PASSED_OVER_MISSING_RUN_SCOPED_FIXTURES | 2026-09-18T05:20:00.000Z |

The machine-readable companion file preserves target URLs, evidence paths, notes, browser, viewport, and API provenance for each entry.
