window.ADMIN_UAT = {
  scenarios: [
    ['ORG-001','PASS','Create independent shared identities','Created and switched among Pitcher, Investor and Assessor identities'],
    ['ORG-002','FAIL','Profile branding and public rendering','Logo file selection blocked in one connected Chrome profile'],
    ['ORG-003','FAIL','Contact points and primary selection','Saved email contacts reload blank'],
    ['ORG-004','PASS','Existing-member invitation','Pending invitation activated correctly'],
    ['ORG-005','FAIL','New-user invitation and signup','Recovery chain returns a consumed token'],
    ['ORG-006','PASS','Invitation rejection and re-invite','Reject, re-invite and accept completed'],
    ['ORG-007','PASS','Membership labels and capabilities','Labels persist and deployed equal-rights policy is explicit'],
    ['ORG-008','FAIL','Member changes and revocation','Removed member cannot be re-invited normally'],
    ['ORG-009','PASS','Public membership privacy','Private and public states enforced after reload'],
    ['ORG-010','PASS','Context switch and isolation','Fresh retest passed for all three organization roles'],
    ['ORG-011','PASS','KYB entity validation','United States Corporation submission completed'],
    ['ORG-012','PASS','KYB ownership','99% blocked; 100% accepted'],
    ['ORG-013','PASS','KYB review and rework','Reject, resubmit, review and approve completed'],
    ['ORG-014','PASS','Verified identity lock','Approved legal identity is effectively locked'],
    ['ORG-015','PASS','Workflow readiness and links','Role dashboards preserve organization identity'],
    ['ORG-016','FAIL','Payout second approval','Pending/self-denial passed; independent completion blocked'],
    ['ORG-017','FAIL','KYC-update second approval','Pending/self-denial passed; downstream linkage unproved'],
    ['ORG-018','FAIL','Governance decision lifecycle','Reject, cancel, expiry, detail and full history are absent'],
    ['ORG-019','FAIL','Announcement delivery and history','Only latest three visible; duplicate activity rows'],
    ['ORG-020','FAIL','Activity and calendar','Duplicate audit rows; valid event cannot be added'],
    ['ORG-021','PASS','Leave and last-manager protection','Last-manager guard and permitted leave passed'],
    ['ORG-022','PASS','Ownership handover','Owner/Admin handover preserved the organization'],
    ['ORG-023','FAIL','Closure and isolation','Closure ignores pending governed actions'],
    ['ORG-024','FAIL','Recovery and concurrent edits','Silent last-write-wins; offline branch unavailable'],
    ['ORG-025','FAIL','Pitcher organization lifecycle','Context passed; dependent lifecycle is not all-pass'],
    ['ORG-026','FAIL','Investor organization lifecycle','Context passed; full lifecycle not completed'],
    ['ORG-027','FAIL','Assessor organization lifecycle','Context passed; full lifecycle not completed']
  ],
  findings: [
    {id:'ORG003-DATA-001',scenario:'ORG-003',severity:'high',area:'Organization contacts',title:'Saved email contacts reload as blank',summary:'Two valid organization email contacts were saved, but both values were empty after reload at every requested Chrome size while the address persisted.',expected:'Every saved contact value and primary selection should persist exactly after refresh and re-authentication.',retest:'Create two email contacts and an address, reload at all six sizes, and compare field values plus public/private exposure.'},
    {id:'ORG005-AUTH-001',scenario:'ORG-005',severity:'critical',area:'Invitation activation',title:'Password recovery reuses an invalid consumed token',summary:'Signup and confirmation emails arrived, but the recovery flow sent a second-stage magic link that resolved to the already-consumed token and reported invalid or expired.',expected:'Each recovery stage should issue a fresh single-use token that permits the invited user to set a password and activate membership.',retest:'Invite a fresh plus-address, register, verify, request recovery, consume each link once, sign in and accept the membership.'},
    {id:'ORG008-MEMBER-001',scenario:'ORG-008',severity:'high',area:'Membership lifecycle',title:'Removed members cannot be re-invited through the normal form',summary:'After removal revoked access, submitting the same verified email cleared the form but created no pending or active membership and showed no actionable error.',expected:'Re-inviting should create a new auditable invitation or explain why the membership cannot be restored.',retest:'Remove a disposable member, refresh both actors, re-invite, accept and verify one active membership.'},
    {id:'ORG018-GOV-001',scenario:'ORG-018',severity:'high',area:'Governance',title:'Governed actions lack a complete decision lifecycle',summary:'Pending payout and KYC-update records expose Approve/Waiting only. There is no rejection, requester cancellation, expiry, full detail or complete-history navigation.',expected:'Maker-checker requests need inspectable details and auditable approve, reject, cancel and expiry outcomes.',retest:'Create isolated requests and complete every terminal branch with two active members, then inspect immutable history and notifications.'},
    {id:'ORG019-HIST-001',scenario:'ORG-019',severity:'medium',area:'Announcements',title:'Announcement history truncates and activity duplicates',summary:'After four announcements, only the latest three were retrievable and no older-history control existed. Announcement and membership activity appeared in duplicate rows.',expected:'Authorized members should retrieve complete announcement history once, with stable author and timestamp attribution.',retest:'Publish four uniquely titled announcements, refresh in two profiles and navigate all history without duplicate rows.'},
    {id:'ORG020-CAL-001',scenario:'ORG-020',severity:'high',area:'Organization calendar',title:'Valid future event cannot be added',summary:'A populated future title and datetime left Add Event disabled after reload and at all six Chrome sizes; past-date validation did disable as expected.',expected:'A valid future event should enable Add Event, persist once and render with an unambiguous timezone.',retest:'Create future, midnight and DST-boundary events, refresh in another profile and test edit/cancel/history.'},
    {id:'ORG023-CLOSE-001',scenario:'ORG-023',severity:'critical',area:'Organization closure',title:'Closure succeeds with pending governed actions',summary:'Exact-name and reason validation worked, but the organization closed while payout and KYC-update approval records were still pending.',expected:'Closure should block until governed and financial obligations are resolved, or execute an explicit auditable cancellation policy.',retest:'Create pending high-risk actions, attempt closure, resolve them, then close and verify member/public isolation and retained audit.'},
    {id:'ORG024-STALE-001',scenario:'ORG-024',severity:'medium',area:'Concurrent editing',title:'Stale profile writes silently overwrite newer values',summary:'Two loaded tabs edited the same tagline; the second stale save replaced the first with no conflict warning or visible last-write policy.',expected:'Concurrent changes should detect a stale version or explicitly communicate the accepted last-write policy before data loss.',retest:'Repeat from two isolated member profiles, save in order, reconcile activity versions and retry after a browser-controlled offline failure.'},
    {id:'ORG025-COVERAGE-001',scenario:'ORG-025–027',severity:'medium',area:'Composite lifecycle',title:'Role context works but three full organization lifecycles remain incomplete',summary:'Pitcher, Investor and Assessor organization identities rendered correctly across six sizes, but every downstream role lifecycle was not completed under organization identity.',expected:'Each organization role should complete its full dependent lifecycle with notifications, finance, audit and terminal-state reconciliation.',retest:'Run the linked Pitcher, Investor and Assessor lifecycle suites under verified organization identities after the open blockers are fixed.'}
  ]
};

window.PR_REVIEW_DATA = {
  meta: {
    generatedAt: '2026-09-12T07:10:00Z',
    commit: 'ed1f5aec',
    url: 'https://github.com/capitalinvestmentclub/organization-uat-report',
    source: 'Organization Chrome × six-size UAT run records in capitalinvestmentclub/webapp'
  },
  findings: window.ADMIN_UAT.findings.map((finding) => ({
    id: finding.id,
    type: finding.id === 'ORG025-COVERAGE-001' ? 'Gap' : 'Defect',
    severity: finding.severity[0].toUpperCase() + finding.severity.slice(1),
    status: 'Open',
    scenario: finding.scenario,
    area: finding.area,
    title: finding.title,
    description: finding.summary,
    expected: finding.expected,
    retest: finding.retest,
    source: `tests/e2e/organization/${finding.scenario}`,
    line: 1,
    sourceUrl: 'https://github.com/capitalinvestmentclub/organization-uat-report',
    evidenceRun: `Private ${finding.scenario} Chrome six-size run record`,
    evidenceRunUrl: 'https://github.com/capitalinvestmentclub/organization-uat-report',
    evidenceUrl: '',
    mediaEvidenceCount: 0
  }))
};
