/**
 * MANOVA — Digital Marketing Portfolio
 * Frontend Interaction, Case Study Modal, and Scroll Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. PROJECT CASE STUDY DATA (HONEST, SPECIFIC, GROUNDED) ---
  const caseStudies = {
    'google-ads': {
      title: 'Search with intent.',
      subtitle: 'Google Ads Search certification, campaign structuring, and keyword-intent mapping',
      category: 'Performance marketing',
      type: 'Practice project / Simulation',
      context: 'Structured practical campaign planning completed as part of Google Ads Search certification preparation. Focused on architecting bottom-of-funnel, intent-driven Search campaigns that prioritize searcher intent and conversion hygiene while controlling ad spend.',
      objective: 'Design a scalable Google Ads Search campaign structure to capture qualified search queries for a simulated service offer, establishing clean ad groups and a conversion measurement plan.',
      role: 'Campaign Architect & Search Copywriter (Simulated practice)',
      process: [
        'Audience Intent Mapping: Segmented search queries by intent (informational vs commercial/transactional) using Google Keyword Planner.',
        'Campaign & Ad Group Structuring: Grouped keywords into tightly themed Single-Theme Ad Groups (STAGs) utilizing Exact Match ([ ]) and Phrase Match (" ") to restrict irrelevant impressions.',
        'Negative Keyword Filtering: Formulated proactive negative keyword lists (generic, job-seeker, freebie, and competitor queries) to minimize budget leakage before launch.',
        'Responsive Search Ads (RSAs): Authored RSA combinations per ad group with pinned value propositions, benefit-driven descriptions, and relevant keyword insertion.',
        'Conversion Tracking & Bidding Plan: Defined primary conversion actions (lead form submissions) and structured a staged bidding roadmap (initial Maximize Clicks for data collection -> Maximize Conversions -> Target CPA).'
      ],
      tools: ['Google Ads', 'Google Keyword Planner', 'Google Sheets', 'Search Console'],
      deliverables: [
        'Google Ads account architecture plan with 3 segmented ad groups',
        'Keyword research matrix (search volume, intent categorization, match types)',
        'Curated negative keyword lists (generic, informational, and competitor queries)',
        'Responsive Search Ad (RSA) creative variations with ad extensions (sitelinks, callouts)',
        'Conversion action plan & bidding strategy roadmap'
      ],
      badge: 'Practice project / Campaign simulation',
      results: 'Practice project and strategy exercise — outcome not measured on live advertising spend. Key learning: tightly themed ad groups combined with disciplined negative keyword filtering prevent budget leakage far better than unconstrained broad automated bidding.'
    },

    'ga4-gtm': {
      title: 'From click to conversion.',
      subtitle: 'GA4 custom event taxonomy, GTM trigger logic, and simulated discrepancy analysis',
      category: 'Marketing analytics',
      type: 'Practical learning & simulated exercise',
      context: 'Hands-on implementation of Google Analytics 4 (GA4) deployed via Google Tag Manager (GTM), complemented by a structured discrepancy diagnostic exercise on a simulated campaign dataset. Explores the end-to-end measurement chain from ad click to verified lead.',
      objective: 'Configure reliable custom event tracking via GTM, prevent duplicate conversion over-counting, and diagnose why lead figures diverge across Google Ads, GA4, and CRM records.',
      role: 'Analytics & Tag Implementation',
      process: [
        'Measurement Framework: Documented user conversion paths and defined standard GA4 event names and custom parameters.',
        'GTM Configuration: Set up GA4 configuration tags, measurement IDs, and custom event tags with parameter payloads.',
        'Trigger Logic & De-duplication: Configured form triggers bound to validated success callbacks rather than raw submit-button clicks to prevent false-positive leads.',
        'QA & Verification: Validated payload delivery and parameter mapping using GTM Preview Mode and GA4 DebugView.',
        'Simulated Discrepancy Audit: Analyzed a simulated campaign dataset to identify why metrics diverge at each stage:\n• Spend: ₹6,000 | Clicks: 300 | Sessions: 255 | GA4 leads: 15 | Google Ads leads: 18 | Sales-confirmed leads: 12 | Cost per GA4 lead: ₹400.\n• Click-to-Session Drop (300 clicks vs 255 sessions = 15% drop): Diagnosed causes including page load latency, bounces before the GA4 container executed, and accidental duplicate clicks.\n• Ad Platform vs GA4 Variance (18 Google Ads leads vs 15 GA4 leads): Investigated attribution model differences (Google Ads attributing to click timestamp vs GA4 reporting by conversion session), cross-device/browser tracking gaps, and cookie consent rejections.\n• GA4 vs Sales Pipeline Drop (15 GA4 leads vs 12 sales-confirmed leads = 20% validation drop): Accounted for test submissions, invalid contact data, and duplicate form submissions within the same session.'
      ],
      tools: ['Google Tag Manager', 'Google Analytics 4', 'Chrome DevTools', 'GA4 DebugView'],
      deliverables: [
        'GTM container tag taxonomy blueprint with validated event-trigger schemas',
        'Custom parameter documentation (form_id, button_text, lead_type)',
        'Simulated campaign discrepancy analysis framework (Clicks -> Sessions -> Ad Leads -> GA4 Leads -> CRM Leads)',
        'Tracking QA checklist for testing GTM Preview Mode and GA4 DebugView'
      ],
      badge: 'Simulated exercise & sandbox validation',
      results: 'Simulated exercise dataset and sandbox testing on personal web projects. Cost per GA4 lead: ₹400 (₹6,000 / 15 leads); Cost per sales-confirmed lead: ₹500 (₹6,000 / 12 leads). Key learning: Ad platforms, analytics tools, and CRM pipelines will almost never report identical figures. Understanding the structural reasons for discrepancies (attribution windows, client-side drop-offs, lead qualification) is essential to avoid misdiagnosing campaign performance.'
    },

    'reelforge-ai': {
      title: 'Visibility, rethought.',
      subtitle: 'Semrush technical SEO audits, crawl error remediation, and AI search visibility',
      category: 'SEO & AI search',
      type: 'Personal product project',
      context: 'ReelForge AI is my own product project (hosted at reel-forge-ai-psi.vercel.app), an AI-assisted competitor intelligence and short-form video strategy web application. Used the live website as a practical testing ground for technical SEO audits, indexability cleanup, and AI search visibility.',
      objective: 'Conduct comprehensive site audits using Semrush, resolve technical errors (duplicate titles, metadata collisions, duplicate content), and inspect codebase fixes using Antigravity IDE and ChatGPT.',
      role: 'Creator & Technical SEO Strategist (AI-assisted workflow)',
      process: [
        'Baseline Semrush Audit (Oct 20, 2026 — 19 pages crawled): Uncovered an initial Site Health of 74% and AI Search Health of 89%, with 7 duplicate title tag errors, 6 duplicate content errors, and 7 duplicate meta descriptions.',
        'Investigative Analysis with ChatGPT: Used ChatGPT to investigate how route parameter handling on Vercel was generating duplicate page variations and uncanonical index paths.',
        'Codebase Inspection & Fixes in Antigravity IDE: Opened the project in Google Antigravity IDE to inspect HTML headers, unify canonical URLs, clean up routing logic, and write unique meta descriptions for distinct tool pages.',
        'Follow-up Semrush Audit (Oct 21, 2026 — 14 pages crawled): Re-crawled the site with refined crawl scope focused on 14 core indexable pages. Site Health increased to 92% and AI Search Health increased to 94%, with duplicate titles, content, and meta description errors reduced to 0.'
      ],
      tools: ['Semrush Site Audit', 'Google Antigravity IDE', 'ChatGPT', 'Vercel', 'Structured Data Validator'],
      deliverables: [
        'Comparative Semrush audit reports and exported issue CSVs (Oct 20 vs Oct 21, 2026)',
        'Refactored page metadata (unique titles, optimized meta description lengths)',
        'Clean canonical URL tagging and sitemap/robots.txt configuration',
        'AI search health remediation summary'
      ],
      badge: 'Personal product project / Technical audit remediation',
      results: 'Verified Semrush audit results:\n• Earlier Audit (Oct 20, 2026): 74% Site Health | 89% AI Search Health (19 pages crawled; 7 duplicate titles, 6 duplicate content, 7 duplicate meta descriptions).\n• Later Audit (Oct 21, 2026): 92% Site Health | 94% AI Search Health (14 pages crawled; 0 duplicate titles, 0 duplicate content, 0 duplicate meta descriptions).\n• Limitations: The audit scores reflect technical crawl health and error resolution across the 14 indexable pages. The follow-up report indicated crawler restrictions affecting several pages. These scores do not claim or prove increased organic traffic, keyword rankings, AI citations, leads, or revenue.'
    }
  };

  // --- 2. NOTHING MOTION & SCROLL REVEAL OBSERVER ---
  const motionSelectors = '.reveal, .reveal-scale, .reveal-left, .reveal-right';
  const revealElements = document.querySelectorAll(motionSelectors);

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Staggered reveal for initial viewport elements on page load
    setTimeout(() => {
      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          el.classList.add('in');
          revealObserver.unobserve(el);
        }
      });
    }, 60);
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('in'));
  }

  // --- 3. MOBILE MENU TOGGLE ---
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.textContent = isOpen ? '✕' : '☰';
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !menuToggle.contains(e.target) && nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      }
    });
  }

  // --- 4. SCROLL MOTION CONTROLLER (NAV, TOPBAR, HERO PARALLAX) ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a:not(.nav-cta)');
  const topbar = document.querySelector('.topbar');
  const heroPhoto = document.querySelector('.hero-photo');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let ticking = false;

  const onScroll = () => {
    const scrollY = window.scrollY;

    // 1. Topbar elevation & blur state
    if (topbar) {
      if (scrollY > 30) {
        topbar.classList.add('scrolled');
      } else {
        topbar.classList.remove('scrolled');
      }
    }

    // 2. Hero photo subtle parallax (Nothing aesthetic, desktop only)
    if (heroPhoto && !prefersReduced && window.innerWidth > 768 && scrollY < 1200) {
      const offset = Math.min(120, scrollY * 0.16);
      heroPhoto.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.015)`;
    }

    // 3. Active section highlighter
    if (sections.length && navLinks.length) {
      const scrollPos = scrollY + 160;
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          const matchingLink = Array.from(navLinks).find(link => link.getAttribute('href') === `#${id}`);
          if (matchingLink) {
            navLinks.forEach(link => link.classList.remove('active'));
            matchingLink.classList.add('active');
          }
        }
      });
    }

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  // Initial execution on mount
  onScroll();

  // --- 5. INTERACTIVE CASE STUDY MODAL ---
  const modalOverlay = document.getElementById('caseStudyModal');
  const modalClose = document.getElementById('modalClose');
  const modalBody = document.getElementById('modalBody');
  const projectCards = document.querySelectorAll('.project[data-project], .creative-card[data-project], [data-project]');
  let lastActiveElement = null;

  const openCaseStudy = (projectId) => {
    const data = caseStudies[projectId];
    if (!data || !modalOverlay || !modalBody) return;

    lastActiveElement = document.activeElement;

    // --- DEDICATED VISUAL SEQUENCE FOR REELFORGE AI ---
    if (projectId === 'reelforge-ai') {
      modalBody.innerHTML = `
        <div class="rf-visual-container">
          <!-- A. PROJECT HERO -->
          <div class="rf-hero">
            <div class="rf-hero-brand-bar">
              <img src="assets/images/reelforge/reelforge_logo.png" alt="ReelForge AI Official Logo" class="rf-modal-brand-logo" />
              <div style="flex: 1;">
                <div class="case-top-tags" style="margin-bottom: 4px;">
                  <span class="tag">SEO &amp; AI Search</span>
                  <span class="tag">Personal Product Project</span>
                </div>
                <div style="font-family: var(--font-mono); font-size: 11px; color: #a8a79d; letter-spacing: 0.06em; text-transform: uppercase;">
                  ReelForge AI · Visibility, rethought.
                </div>
              </div>
            </div>

            <div class="rf-hero-media">
              <img src="assets/images/reelforge/reelforge_live_website.png" alt="ReelForge AI live application interface showing video intelligence and SEO tools" loading="lazy" />
              <div class="rf-hero-media-caption">Live Product Interface · Next.js Web Application on Vercel</div>
            </div>

            <div class="rf-hero-content">
              <div class="rf-hero-header">
                <div class="rf-hero-title">
                  <h2>ReelForge AI — Technical SEO &amp; AI Search Optimization</h2>
                  <p class="mono" style="color: #a8a79d; margin-top: 5px; font-size: 11px;">Tools: Semrush, ChatGPT, Antigravity IDE, Next.js</p>
                </div>
                <a class="rf-live-btn" href="https://reel-forge-ai-psi.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Visit Live Website ↗
                </a>
              </div>

              <div class="rf-brief-box">
                <p><strong>Project Brief:</strong> ReelForge AI is an AI-powered content intelligence product. I conducted a technical SEO and AI search audit using Semrush, investigated reported issues with ChatGPT, implemented code-level improvements using Antigravity IDE, and evaluated the follow-up audit.</p>
                <p style="margin-top: 8px;"><strong>Goal:</strong> Improve technical website health, resolve duplicate metadata/content issues, and strengthen technical foundations for search discovery.</p>
                <div style="margin-top: 8px; font-size: 12px; color: #b9b8af;">
                  <strong>My Role:</strong> Auditing, investigation, code-level implementation, and audit evaluation. AI tools supported the workflow; implementation decisions and validation remained part of the development process.
                </div>
                <div style="margin-top: 6px; font-size: 11.5px; color: #a5a49b;">
                  <strong>Project Status:</strong> Technical SEO optimization completed for the documented audit cycle. AI crawler access and real-world search performance require further validation.
                </div>
              </div>
            </div>
          </div>

          <!-- B. AUDIT COMPARISON -->
          <div class="rf-audit-comparison">
            <div class="rf-brand-heading">
              <div class="rf-semrush-pill">
                <img src="assets/images/reelforge/semrush_logo_transparent.png" alt="Semrush Logo" class="rf-semrush-logo" />
              </div>
              <div class="rf-brand-heading-content">
                <h4>Semrush Site Audit — Technical Remediation Comparison</h4>
                <span class="mono">VERIFIED AUDIT REPORT DATA · OCT 20 VS OCT 21, 2026</span>
              </div>
            </div>

            <!-- Responsive Side-by-Side Audit Scorecards -->
            <div class="rf-scorecards">
              <!-- Oct 20 Baseline Card -->
              <div class="rf-scorecard baseline">
                <div class="rf-scorecard-header">
                  <span class="rf-scorecard-tag">Oct 20, 2026 · Baseline Audit</span>
                  <span class="rf-scorecard-scope">19 Pages Crawled</span>
                </div>
                <div class="rf-score-row">
                  <span class="rf-score-name">Site Health</span>
                  <span class="rf-score-val">74%</span>
                </div>
                <div class="rf-score-row">
                  <span class="rf-score-name">AI Search Health</span>
                  <span class="rf-score-val">89%</span>
                </div>
                <div class="rf-score-row">
                  <span class="rf-score-name">Reported Errors</span>
                  <span class="rf-score-val">22</span>
                </div>
                <div class="rf-score-row">
                  <span class="rf-score-name">Reported Warnings</span>
                  <span class="rf-score-val">78</span>
                </div>
                <div class="rf-score-row">
                  <span class="rf-score-name">Duplicate Title-Tag Errors</span>
                  <span class="rf-score-val">7</span>
                </div>
                <div class="rf-score-row">
                  <span class="rf-score-name">Duplicate Content Errors</span>
                  <span class="rf-score-val">6</span>
                </div>
                <div class="rf-score-row">
                  <span class="rf-score-name">Duplicate Meta Descriptions</span>
                  <span class="rf-score-val">7</span>
                </div>
              </div>

              <!-- Oct 21 Follow-up Card -->
              <div class="rf-scorecard followup">
                <div class="rf-scorecard-header">
                  <span class="rf-scorecard-tag">Oct 21, 2026 · Post-Remediation</span>
                  <span class="rf-scorecard-scope">14 Pages Crawled</span>
                </div>
                <div class="rf-score-row">
                  <span class="rf-score-name">Site Health</span>
                  <span class="rf-score-val">92% <span class="rf-score-delta-inline">+18%</span></span>
                </div>
                <div class="rf-score-row">
                  <span class="rf-score-name">AI Search Health</span>
                  <span class="rf-score-val">94% <span class="rf-score-delta-inline">+5%</span></span>
                </div>
                <div class="rf-score-row">
                  <span class="rf-score-name">Reported Errors</span>
                  <span class="rf-score-val">1 <span class="rf-score-delta-inline">-95%</span></span>
                </div>
                <div class="rf-score-row">
                  <span class="rf-score-name">Reported Warnings</span>
                  <span class="rf-score-val">4 <span class="rf-score-delta-inline">-95%</span></span>
                </div>
                <div class="rf-score-row">
                  <span class="rf-score-name">Duplicate Title-Tag Errors</span>
                  <span class="rf-score-val">0 <span class="rf-score-delta-inline">Resolved</span></span>
                </div>
                <div class="rf-score-row">
                  <span class="rf-score-name">Duplicate Content Errors</span>
                  <span class="rf-score-val">0 <span class="rf-score-delta-inline">Resolved</span></span>
                </div>
                <div class="rf-score-row">
                  <span class="rf-score-name">Duplicate Meta Descriptions</span>
                  <span class="rf-score-val">0 <span class="rf-score-delta-inline">Resolved</span></span>
                </div>
              </div>
            </div>

            <!-- Detailed Comparison Table -->
            <div class="rf-table-wrap">
              <table class="rf-compare-table">
                <thead>
                  <tr>
                    <th>Audit Metric</th>
                    <th>Oct 20, 2026 (Baseline)</th>
                    <th>Oct 21, 2026 (Remediation)</th>
                    <th>Resolution &amp; Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="metric-name">Site Health</td>
                    <td class="val-num">74%</td>
                    <td class="val-num">92%</td>
                    <td><span class="rf-val-badge success">+18% Score</span></td>
                  </tr>
                  <tr>
                    <td class="metric-name">AI Search Health</td>
                    <td class="val-num">89%</td>
                    <td class="val-num">94%</td>
                    <td><span class="rf-val-badge success">+5% Score</span></td>
                  </tr>
                  <tr>
                    <td class="metric-name">Pages Crawled (Audit Scope)</td>
                    <td class="val-num">19 pages</td>
                    <td class="val-num">14 pages</td>
                    <td><span class="rf-val-badge neutral">Refined crawl to core indexable paths</span></td>
                  </tr>
                  <tr>
                    <td class="metric-name">Duplicate Title-Tag Errors</td>
                    <td class="val-num">7 errors</td>
                    <td class="val-num">0 errors</td>
                    <td><span class="rf-val-badge success">100% Resolved (-7)</span></td>
                  </tr>
                  <tr>
                    <td class="metric-name">Duplicate Content Errors</td>
                    <td class="val-num">6 errors</td>
                    <td class="val-num">0 errors</td>
                    <td><span class="rf-val-badge success">100% Resolved (-6)</span></td>
                  </tr>
                  <tr>
                    <td class="metric-name">Duplicate Meta-Description Errors</td>
                    <td class="val-num">7 errors</td>
                    <td class="val-num">0 errors</td>
                    <td><span class="rf-val-badge success">100% Resolved (-7)</span></td>
                  </tr>
                  <tr>
                    <td class="metric-name">Reported Technical Errors</td>
                    <td class="val-num">22 errors</td>
                    <td class="val-num">1 error</td>
                    <td><span class="rf-val-badge success">-21 Errors (-95%)</span></td>
                  </tr>
                  <tr>
                    <td class="metric-name">Reported Warnings</td>
                    <td class="val-num">78 warnings</td>
                    <td class="val-num">4 warnings</td>
                    <td><span class="rf-val-badge success">-74 Warnings (-95%)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="rf-scope-notice">
              <strong>Crawl Scope Disclosure:</strong> The two audits reflect different crawl scopes (19 pages crawled on Oct 20 vs 14 pages on Oct 21, 2026). The follow-up crawl excluded non-indexable dynamic sandbox endpoints to focus specifically on core production routes. This data is reported transparently and is not presented as an identical laboratory scope.
            </div>
          </div>

          <!-- C. SHOW THE ACTUAL EVIDENCE -->
          <div class="rf-evidence-section">
            <div class="rf-brand-heading">
              <div class="rf-semrush-pill">
                <img src="assets/images/reelforge/semrush_logo_transparent.png" alt="Semrush Logo" class="rf-semrush-logo" />
              </div>
              <div class="rf-brand-heading-content">
                <h4>Semrush Site Audit Evidence Gallery</h4>
                <span class="mono">AUTHENTIC PDF EXTRACTS · AUDIT OVERVIEWS &amp; ISSUE DIAGNOSTICS</span>
              </div>
            </div>

            <div class="rf-evidence-grid">
              <!-- Figure 1: Oct 20 Baseline Overview -->
              <div class="rf-evidence-card">
                <div class="rf-evidence-header">
                  <span>BASELINE REPORT · OCT 20, 2026</span>
                  <span>19 PAGES CRAWLED</span>
                </div>
                <div class="rf-evidence-media">
                  <img src="assets/images/reelforge/semrush_oct20_health_card.png" alt="Semrush Site Audit baseline overview showing 74% Site Health and 89% AI Search Health" loading="lazy" />
                </div>
                <div class="rf-evidence-caption">
                  <strong>Figure 1:</strong> Baseline Semrush Site Audit (Oct 20, 2026) documenting 74% Site Health, 89% AI Search Health, and 10 pages with issues out of 19 crawled URLs.
                </div>
              </div>

              <!-- Figure 2: Oct 21 Follow-up Overview -->
              <div class="rf-evidence-card">
                <div class="rf-evidence-header">
                  <span>FOLLOW-UP REPORT · OCT 21, 2026</span>
                  <span>14 PAGES CRAWLED</span>
                </div>
                <div class="rf-evidence-media">
                  <img src="assets/images/reelforge/semrush_oct21_health_card.png" alt="Semrush Site Audit follow-up overview showing 92% Site Health and 94% AI Search Health" loading="lazy" />
                </div>
                <div class="rf-evidence-caption">
                  <strong>Figure 2:</strong> Follow-up Semrush Site Audit (Oct 21, 2026) documenting 92% Site Health and 94% AI Search Health across the refined 14 indexable pages.
                </div>
              </div>

              <!-- Figure 3: Oct 20 Top Issues Baseline -->
              <div class="rf-evidence-card">
                <div class="rf-evidence-header">
                  <span>OCT 20 ISSUES · 22 ERRORS / 78 WARNINGS</span>
                  <span>SEMRUSH DIAGNOSTICS</span>
                </div>
                <div class="rf-evidence-media">
                  <img src="assets/images/reelforge/semrush_oct20_issues_crop.png" alt="Semrush Top Issues report Oct 20 showing 7 duplicate title tags and 6 duplicate content issues" loading="lazy" />
                </div>
                <div class="rf-evidence-caption">
                  <strong>Figure 3:</strong> Baseline Top Issues report (Oct 20, 2026) detailing 7 duplicate title tag errors, 6 duplicate content issues, and 6 pages lacking an h1 heading.
                </div>
              </div>

              <!-- Figure 4: Oct 21 Top Issues Follow-up -->
              <div class="rf-evidence-card">
                <div class="rf-evidence-header">
                  <span>OCT 21 ISSUES · 1 ERROR / 4 WARNINGS</span>
                  <span>SEMRUSH DIAGNOSTICS</span>
                </div>
                <div class="rf-evidence-media">
                  <img src="assets/images/reelforge/semrush_oct21_issues_crop.png" alt="Semrush Top Issues report Oct 21 showing duplicate errors eliminated and total errors reduced to 1" loading="lazy" />
                </div>
                <div class="rf-evidence-caption">
                  <strong>Figure 4:</strong> Follow-up Top Issues report (Oct 21, 2026) verifying that all duplicate title tag and content errors were reduced to 0, leaving only 1 technical error and 4 warnings.
                </div>
              </div>
            </div>
          </div>

          <!-- D. TECHNICAL INVESTIGATION & WORKFLOW -->
          <div class="rf-workflow-section">
            <div class="rf-section-title">
              <h4>D. Technical Investigation &amp; Remediation Workflow</h4>
              <span class="rf-section-badge">Diagnosis to Code Fix</span>
            </div>

            <div class="rf-workflow">
              <div class="rf-workflow-step">
                <div class="rf-step-badge">
                  <span>STEP 01</span>
                  <img src="assets/images/reelforge/semrush_logo_transparent.png" alt="Semrush" style="height: 12px; width: auto; opacity: 0.85;" />
                </div>
                <h5>Semrush Site Audit</h5>
                <p>Identified and classified crawl issues, duplicate title tags, and canonical discrepancies across indexable Next.js URLs.</p>
              </div>

              <div class="rf-workflow-step">
                <div class="rf-step-badge">
                  <span>STEP 02</span>
                  <span>ROOT CAUSE</span>
                </div>
                <h5>ChatGPT Analysis</h5>
                <p>Investigated route parameter collisions on Vercel where dynamic routing generated duplicate indexable page variations without canonical tags.</p>
              </div>

              <div class="rf-workflow-step">
                <div class="rf-step-badge">
                  <span>STEP 03</span>
                  <span>CODE REMEDIATION</span>
                </div>
                <h5>Antigravity IDE</h5>
                <p>Inspected codebase headers directly in Google Antigravity IDE: unified canonical URL tags, consolidated routing, and authored distinct meta descriptions.</p>
              </div>

              <div class="rf-workflow-step">
                <div class="rf-step-badge">
                  <span>STEP 04</span>
                  <span>EVALUATION</span>
                </div>
                <h5>Follow-up Audit</h5>
                <p>Re-crawled the 14 core indexable URLs. Verified duplicate errors dropped to 0 and technical errors dropped from 22 to 1; documented remaining crawler boundaries.</p>
              </div>
            </div>
          </div>

          <!-- E. REMAINING ISSUE -->
          <div class="rf-issue-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span class="mono" style="color: #ab6f2b; font-size: 10px;">REMAINING TECHNICAL ISSUE · CRAWLER ACCESS</span>
              <span class="tag" style="border-color: #ab6f2b; color: #ab6f2b; font-size: 9px;">Requires Investigation</span>
            </div>
            <h4>E. Six Pages Blocked from AI Search Bot Crawling</h4>
            <p>
              The follow-up audit reported that six pages were blocked from crawling by listed AI search bots (ChatGPT-User, OAI-SearchBot, Googlebot, Google-Extended, PerplexityBot, Perplexity-User, Claude-User). This indicates server-side or crawler-specific header rules that require further technical investigation.
            </p>
            <div style="max-width: 600px; margin-bottom: 12px; border: 1px solid rgba(0,0,0,0.1); border-radius: 6px; overflow: hidden; background: #fff;">
              <img src="assets/images/reelforge/semrush_oct21_blocked_bots.png" alt="Semrush report showing 6 pages blocked from ChatGPT-User, Googlebot, PerplexityBot, and other AI bots" style="width: 100%; height: auto; display: block;" loading="lazy" />
              <div style="padding: 8px 12px; font-size: 11px; color: #6a6962; background: #faf9f6; border-top: 1px solid rgba(0,0,0,0.06);">
                <strong>Figure 5:</strong> Semrush Pages Blocked from AI Search report (Oct 21, 2026), recording 6 pages blocked across 8 listed AI and search crawler user-agents.
              </div>
            </div>
            <p style="font-size: 12.5px; color: #615f57; margin-bottom: 0;">
              <strong>Honesty Boundary:</strong> Crawler access still requires investigation. I make <em>no claim</em> that ReelForge AI is fully accessible to all AI search crawlers or that it currently appears in AI-generated answers.
            </p>
          </div>

          <!-- F. RESULTS & LEARNINGS -->
          <div class="rf-learnings-card">
            <div class="honest-badge">Honest Project Outcome</div>
            <h4>F. Results &amp; What the Evidence Actually Shows</h4>
            <p>
              The Semrush audit reports document clear, verifiable progress in technical website hygiene: Site Health improved from 74% to 92%, AI Search Health improved from 89% to 94%, and listed duplicate title, description, and content errors were completely resolved across the 14 core indexable pages.
            </p>
            
            <p style="font-size: 12.5px; color: #e57373; font-weight: 500; margin-bottom: 6px;">
              IMPORTANT LIMITATIONS — WHAT THESE REPORTS DO NOT ESTABLISH:
            </p>
            <ul class="rf-disclaimer-list">
              <li><strong>No Organic Traffic Growth:</strong> Technical health score improvements do not prove increased search visitors.</li>
              <li><strong>No Higher Keyword Rankings:</strong> Resolving crawl errors does not guarantee top positions on SERPs.</li>
              <li><strong>No Increased AI Citations:</strong> AI search health scores reflect crawler formatting hygiene, not live AI citation frequency.</li>
              <li><strong>No Leads or Revenue Claims:</strong> No commercial revenue or user conversions are attributed to these audit scores.</li>
            </ul>

            <div class="rf-next-steps">
              <strong>Planned Next Steps:</strong><br>
              1. Investigate and test server-side crawler access rules and robots.txt headers for AI bots.<br>
              2. Validate canonical and indexability signals in Google Search Console once live query impression data accumulates.<br>
              3. Monitor core Web Vitals, mobile viewport shifts, and text-to-HTML ratios on newly added feature pages.
            </div>
          </div>
        </div>
      `;
      modalOverlay.classList.add('active');
      document.body.classList.add('modal-open');
      modalClose.focus();
      return;
    }

    // Default renderer for other case studies
    const processItemsHtml = data.process.map(p => `<li>${p.replace(/\n/g, '<br>')}</li>`).join('');
    const deliverableItemsHtml = data.deliverables.map(d => `<li>${d.replace(/\n/g, '<br>')}</li>`).join('');
    const toolsHtml = data.tools.map(t => `<span>${t}</span>`).join('');
    const resultsHtml = data.results.replace(/\n/g, '<br>');

    modalBody.innerHTML = `
      <div class="case-top-tags">
        <span class="tag">${data.category}</span>
        <span class="tag">${data.type}</span>
      </div>
      <h3 class="modal-title">${data.title}</h3>
      <p class="modal-subtitle">${data.subtitle}</p>

      <div class="case-grid">
        <div class="case-card">
          <span class="case-label">01 / Context</span>
          <p>${data.context}</p>
        </div>

        <div class="case-card">
          <span class="case-label">02 / Objective</span>
          <p>${data.objective}</p>
        </div>

        <div class="case-card full-width">
          <span class="case-label">03 / My Role</span>
          <p>${data.role}</p>
        </div>

        <div class="case-card full-width">
          <span class="case-label">04 / Process & Execution</span>
          <ul>${processItemsHtml}</ul>
        </div>

        <div class="case-card">
          <span class="case-label">05 / Tools Used</span>
          <div class="tools-pills">${toolsHtml}</div>
        </div>

        <div class="case-card">
          <span class="case-label">06 / Deliverables</span>
          <ul>${deliverableItemsHtml}</ul>
        </div>

        <div class="case-results-card">
          <div class="honest-badge">Honest Outcome: ${data.badge}</div>
          <span class="case-label">07 / Results & Learnings</span>
          <p>${resultsHtml}</p>
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.classList.add('modal-open');
    modalClose.focus();
  };

  const closeCaseStudy = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.classList.remove('modal-open');
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  };

  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // If clicking inside a video or interactive control, do not open case study unless target itself has data-project
      const interactiveParent = e.target.closest('video, .ba-controls, .objection-trigger, .objection-content, .script-terminal, .matrix-grid');
      if (interactiveParent && !e.target.closest('[data-project]')) {
        return;
      }
      if (card.tagName === 'A' && card.hasAttribute('href') && !card.getAttribute('href').startsWith('#')) {
        return;
      }
      e.preventDefault();
      // Prefer the closest target's data-project, fallback to card's data-project
      const targetWithProject = e.target.closest('[data-project]') || card;
      const projectId = targetWithProject.getAttribute('data-project');
      if (projectId) {
        openCaseStudy(projectId);
      }
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const interactiveParent = e.target.closest('video, .ba-controls, .objection-trigger, .objection-content, .script-terminal, .matrix-grid');
        if (interactiveParent && !e.target.closest('[data-project]')) {
          return;
        }
        if (card.tagName === 'A' && card.hasAttribute('href') && !card.getAttribute('href').startsWith('#')) {
          return;
        }
        e.preventDefault();
        const targetWithProject = e.target.closest('[data-project]') || card;
        const projectId = targetWithProject.getAttribute('data-project');
        if (projectId) {
          openCaseStudy(projectId);
        }
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeCaseStudy);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeCaseStudy();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeCaseStudy();
    }
  });

  // --- 6. IMAGE LIGHTBOX VIEWER ---
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  const openLightbox = (src, caption) => {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption || 'Visual inspection';
    if (lightboxCaption) {
      lightboxCaption.textContent = caption || '';
    }
    lightboxModal.classList.add('active');
    document.body.classList.add('modal-open');
  };

  const closeLightbox = () => {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.classList.remove('modal-open');
    if (lightboxImg) lightboxImg.src = '';
  };

  document.querySelectorAll('[data-enlarge]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const src = el.getAttribute('data-enlarge');
      const caption = el.getAttribute('data-caption') || el.getAttribute('aria-label') || '';
      openLightbox(src, caption);
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });

});
