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
    },

    'creative-content': {
      title: 'Attention with a purpose.',
      subtitle: 'Promotional video editing, creative strategy frameworks, and narrative storytelling',
      category: 'Content & creative',
      type: 'Personal projects & concept frameworks',
      context: 'Self-directed creative production and strategic content planning combining short-form promotional video editing (9:16), structured creative strategy research frameworks, and published narrative storytelling. Explores how to hold viewer attention without relying on generic templates.',
      objective: 'Develop high-retention visual hooks, audience-aware scripting, and structured brand content frameworks across multiple formats (short-form video, brand strategy decks, long-form narrative).',
      role: 'Creative Strategist, Scriptwriter & Video Editor',
      process: [
        'Creative Strategy Research Framework: Applied a 4-stage research template (Competitor Research -> Audience Awareness Stages -> Angle Ideation -> Scripting) to deconstruct target audience friction points before writing.',
        'Short-Form Video Production: Designed and edited 9:16 vertical video assets (Pomelli promotional creative concepts) emphasizing first-3-second retention hooks, kinetic text layout, and rhythm-synced cuts.',
        'Brand Content Concepts: Formulated organic social content strategies and calendars for educational and lifestyle brand concepts (SITJEE, Temple Run Cafe).',
        'Narrative Storytelling: Authored and structured long-form published narrative work ("Memories With Someone I Had Never Met"), applying emotional pacing and relatable tension to audience engagement.'
      ],
      tools: ['Premiere Pro / CapCut', 'After Effects / Motion tools', 'Creative Strategy Templates (Notion/Docs)', 'Figma / Canva'],
      deliverables: [
        '9:16 vertical promotional video creatives (Pomelli concept video)',
        '4-part Creative Strategy Research framework (Research, Awareness Stages, Ideation, Script)',
        'Social content strategy frameworks & content calendars (SITJEE & concept decks)',
        'Narrative story manuscripts and script blueprints'
      ],
      results: 'Completed creative deliverables, strategy frameworks, and published writing. Explicitly distinguished as personal creative work, client concept proposals, and editorial writing—outcomes are not presented as commercial viral metrics or paid ad ROAS. Key learning: Visual polish without a clear audience awareness angle fails to hold attention; grounding creative ideation in customer friction before touching editing software delivers far clearer narrative direction.'
    },

    'social-audit': {
      title: 'Social Media Account Audits',
      subtitle: 'SITJEE Chennai & The Label Ritika · Pre-pitch commercial profile gap analysis',
      category: 'Social & Audit Strategy',
      type: 'Agency Client Deliverables (ALCAS)',
      context: 'Conducted diagnostic pre-pitch social media and website audits during agency internship at ALCAS. Evaluated existing brand profiles, identified customer journey friction, and authored proposal decks for client acquisition meetings.',
      objective: 'Analyze brand profile conversion friction (bio clarity, highlight structure, proof signals, WhatsApp CTA pathways) and formulate positioning solutions that pre-sell prospective customers before enquiry.',
      role: 'Digital Marketing Intern / Audit Analyst',
      process: [
        'Account Hygiene & Bio Analysis: Examined current usernames, bio value propositions, and external link pathways. Discovered that both SITJEE and The Label Ritika were using static, product-only descriptions without clear next-step calls to action.',
        'Highlight Funnel Architecture: Diagnosed absence of structured social proof. Reorganized highlights into standardized conversion buckets: Results / Achievements, Programs, Faculty Highlights, Reviews, and Consultation FAQ.',
        'Content Ecosystem Mapping: Segmented posting styles into 4 core pillars (Authority, Reach, Inclusivity/Student Proof, Behind-the-Scenes) to replace disconnected product catalogues with an intentional conversion engine.',
        'Inquiry Pathway Optimization: Structured the direct booking journey: Profile Visit -> Reel Hook -> WhatsApp / DM -> Diagnostic Consultation -> Client Onboarding.'
      ],
      tools: ['Instagram Analytics', 'Meta Business Suite', 'Google Docs', 'Canva'],
      deliverables: [
        'SITJEE Chennai Instagram Account Audit (Strengths vs Areas for Improvement)',
        'The Label Ritika 3-Gap Situation Analysis & Client Acquisition Strategy',
        'Standardized Story Highlight taxonomy blueprints',
        'Pre-call audit decks presented during founder-level business development'
      ],
      badge: 'Agency Client Deliverables & Audit Blueprints',
      results: 'Delivered client-ready audit proposals used in live agency business development. Identified that treating feeds as catalogues compresses price and inquiry volume; structuring the profile as an inquiry engine with clear social proof creates high-intent inbound consultations.'
    },

    'grid-redesigns': {
      title: 'Instagram Grid Systems & Visual Direction',
      subtitle: 'Before & After transformations for 5 commercial brands + 5 structured launch grids',
      category: 'Creative Direction & Branding',
      type: 'Client Work & Profile Transformations (ALCAS)',
      context: 'Created visual identity transformations and structured 9-post launch grids for commercial and industrial businesses across Chennai (fashion boutiques, physiotherapy clinics, educational academies, and plumbing engineering).',
      objective: 'Transform unbranded, chaotic social media profiles into premium, trustworthy visual assets that command higher customer perception and establish commercial credibility.',
      role: 'Visual Strategist & Social Media Designer',
      process: [
        'Visual Audit & Diagnosis: Evaluated baseline feeds for lack of color cohesion, erratic typography, and low parent/client trust signals.',
        'Color Palette Engineering: Defined disciplined color palettes tailored to industry psychology (Deep Blue/Industrial Orange for AquaFlow; Soft Cream/Rose for KKR Fashions; Crimson/Gold for The Circle Academy).',
        '9-Post Modular Grid Structuring: Formulated intentional grid layouts (e.g. alternating educational carousels, client reviews, and direct solution posts) ensuring the feed looks cohesive from both 3-post and 9-post perspectives.',
        'Highlight Cover Iconography: Designed unified vector highlight covers replacing random video stills with clean category markers (Courses, Faculty, Results, Reviews, FAQ).',
        'Comparative Case Studies: Documented Before & After transformations across 5 commercial brands (Princess Park, KKR Fashions, Z Fashion Cult, Endora, Kiara).'
      ],
      tools: ['Canva', 'Adobe Photoshop', 'Instagram Grid Builder', 'Figma'],
      deliverables: [
        '5 Before & After commercial profile transformations (Princess Park, KKR Fashions, Z Fashion Cult, Endora, Kiara)',
        '5 Complete 9-Post Launch Grids (AquaFlow, HomeCraft Living, KKR Fashions, The Circle Academy, ZCult)',
        'Custom vector highlight cover suites for 5 client niches',
        'Brand typography and hex color specification sheets'
      ],
      badge: 'Verified Client Deliverables & Case Studies',
      results: 'Delivered 5 full before/after transformations and 5 complete 9-post launch grids. Grounding grid aesthetics in industry-specific color psychology and modular templates allows businesses to maintain visual consistency without expensive daily graphic design overhead.'
    },

    'content-engines': {
      title: 'Multi-Format Content Strategy & Editorial Calendars',
      subtitle: 'SITJEE Chennai, Bethel Logistics, Tamara Wellness & Run for Fizal',
      category: 'Content Strategy & Copywriting',
      type: 'Client Content Retainers & Narrative Carousels',
      context: 'Developed monthly content creation roadmaps, weekly distribution calendars, and carousel scripts across educational coaching, B2B logistics, and health & wellness sectors during ALCAS agency work.',
      objective: 'Construct compounding content systems where individual posts serve specific marketing objectives (reach, authority, proof, or inquiry conversion) rather than random vanity posting.',
      role: 'Content Strategist & Copywriter',
      process: [
        'Content Pillar Definition: Categorized client messaging into 4 core pillars: Results & Achievements (Proof), Programs & Offerings (Authority), Faculty / Behind-the-Scenes (Human Connection), and Admissions / Urgency (Conversion).',
        'Deliverable Mapping: Structured a monthly cadence (e.g. 12 monthly deliverables for SITJEE: 6 static educational cards, 6 concept reels) balancing production effort against audience frequency.',
        'Scripting & Narrative Carousel Design: Scripted the 8-part "Run for Fizal: A Story in Motion" narrative carousel and authored 8-part wellness articles for Tamara Wellness.',
        'Caption Copywriting & CTA Alignment: Formulated problem-first hooks and low-friction calls to action directed to WhatsApp consultation pathways.'
      ],
      tools: ['Notion', 'ChatGPT', 'Google Sheets', 'Canva'],
      deliverables: [
        'SITJEE 12-Deliverables Monthly Content Creation Roadmap and Weekly Calendar',
        'Run for Fizal 8-Slide Storytelling Carousel Series',
        'Bethel Express B2B logistics content schedule & published Father’s Day post',
        'Tamara Wellness 8-part article series & copy assets'
      ],
      badge: 'Verified Content Proposals & Deliverables',
      results: 'Completed and approved content roadmaps and calendar systems. Proved that establishing fixed weekly content categories eliminates creative block for small teams while ensuring a healthy 60/40 balance between educational value and commercial lead generation.'
    },

    'logo-design': {
      title: 'Brand Identity Concepts & Poster Design',
      subtitle: 'Backbone Media (6 Vector Directions), Krita Renewables & Bethel Logistics',
      category: 'Brand Identity & Graphic Design',
      type: 'Client Brand Explorations & Vector Guides',
      context: 'Designed comprehensive vector brand identity systems and commercial posters for agency branding (Backbone Media), renewable energy clients (Krita Renewables), and logistics providers (Bethel Express).',
      objective: 'Create distinct, vector-accurate identity systems complete with typography rules, color palettes, and production-ready exports across print, digital, and video watermarks.',
      role: 'Brand Identity Designer',
      process: [
        'Concept Ideation & Slogan Mapping: Built 6 distinct identity concepts for Backbone Media tied to the positioning line "We don\'t just create content. We create content that turns attention into enquiries." (01 Intersection, 02 The Pivot K, 03 Portrait Cut, 04 Keystone, 05 The Masthead, 06 Block).',
        'Vector Outline Construction: Generated pure vector SVGs for primary horizontal, stacked, symbol-only, and 9:16 video watermark variants in color, black, and white.',
        'Typographic Specification: Defined exact font pairings using editorial serifs (Instrument Serif) and modern grotesque sans-serifs (Manrope, Archivo Expanded, Plus Jakarta Sans, Space Grotesk).',
        'Commercial Poster Production: Created promotional cargo solution posters for Bethel Express & Impex and solar branding explorations for Krita Renewables.'
      ],
      tools: ['Adobe Illustrator', 'SVG Vector Spec', 'Midjourney AI', 'Canva'],
      deliverables: [
        'Backbone Media 6-Concept Vector Brand Asset Guide & SVG Packages',
        'Krita Renewables 4-Concept Solar Energy Logo Explorations',
        'Bethel Express B2B Cargo Logistics Poster Series',
        'Social profile avatar lockups and video watermark overlays'
      ],
      badge: 'Verified Vector Brand Guides & Assets',
      results: 'Delivered production-ready SVG and PDF asset packages with exact hex color specifications and typography rules. Key takeaway: A brand mark succeeds when it encapsulates a clear commercial narrative—such as an intersection representing attention meeting structure.'
    },

    'camera-production': {
      title: 'Camera Handling & Video Production',
      subtitle: 'Sony Alpha ILCE-6100 mirrorless operation, shot framing, B-roll capture & shoot planning',
      category: 'Video Production & Camera Operation',
      type: 'Hands-on Production & Field Shooting',
      context: 'Practical on-location camera handling and video production experience across outdoor field shoots and commercial social media pre-production. Focuses on capturing intentional, well-composed raw footage tailored for post-production editing pipelines.',
      objective: 'Master foundational mirrorless camera operation (Sony Alpha a6100), understand optical framing and lighting control, execute structured shot lists, and prepare raw footage for efficient video editing.',
      role: 'Camera Operator & Production Coordinator',
      process: [
        'Camera Operation & Configuration: Configured Sony Alpha ILCE-6100 settings for video capture: balanced shutter speed to frame rate (180-degree rule), managed aperture for selective depth-of-field, and selected 50p/100p high-frame-rate modes for smooth slow-motion B-roll playback.',
        'Framing, Composition & Shot Selection: Applied rule-of-thirds, eye-level alignment, leading lines, and natural environmental framing. Captured multiple shot angles per subject (wide establishing, medium action, tight macro detail) to give editors dynamic cutting options.',
        'Lighting & Natural Exposure Control: Worked with natural outdoor sunlight, positioning subjects to leverage golden-hour side lighting and avoiding harsh overhead shadows.',
        'Pre-Shoot Shot Planning: Authored structured shot lists and storyboard notes (e.g. ALCAS client video proposals) detailing shot type, movement (pan/tilt/tracking), lens focal length, and target duration before rolling camera.',
        'Footage Ingestion & Editing Hand-off: Logged clip metadata, sorted takes, trimmed unusable heads/tails, and structured asset bins in Premiere Pro / CapCut to ensure seamless transitions into editing.'
      ],
      tools: ['Sony Alpha ILCE-6100', 'E-mount Lenses', 'Tripod & Mobile Rigs', 'Premiere Pro', 'Shot Lists & Storyboards'],
      deliverables: [
        'Raw High-Frame-Rate Video Footage (1080p 100fps Sony AVC MP4)',
        'Curated 24MP Outdoor Beach Photography & Composition Suite',
        'Pre-Production Shoot Coordination Guides and Shot Lists (The Label Ritika & ABN tasks)',
        'Structured Raw-to-Edit Footage Ingestion Taxonomy'
      ],
      badge: 'Verified Camera Operation & Field Assets',
      results: 'Captured authentic high-frame-rate mirrorless footage and composed photography assets. Clarified skill boundary: Focuses on practical foundational camera handling, framing, and shoot planning; distinguished from advanced cinematography or multi-camera broadcast production.'
    },

    'video-editing': {
      title: 'Short-Form Video Editing & Kinetic Motion',
      subtitle: 'Instagram Fashion Reel & Kinetic Typography Sequence',
      category: 'Video Editing & Post-Production',
      type: 'Practical Social Media Video Edits',
      context: 'Edited vertical video assets for Instagram Reels focusing on fast-paced rhythm cuts, product framing, and kinetic text animation to sustain audience retention.',
      objective: 'Master vertical video pacing (9:16), beat-synced trimming, on-screen caption synchronization, and audio-visual hook design.',
      role: 'Video Editor & Motion Designer',
      process: [
        'Footage Curation & Assembly: Selected dynamic clips emphasizing movement and product texture.',
        'Pacing & Beat-Syncing: Aligned cuts with audio downbeats to create an energetic, modern viewing rhythm.',
        'Kinetic Typography: Animated dynamic text reveals timed to speech/audio beats to maximize silent-viewing engagement.',
        'Format Optimization: Rendered 1080x1920 (9:16) MP4s optimized for mobile Instagram Reel compression.'
      ],
      tools: ['Premiere Pro', 'CapCut', 'Motion Design Tools'],
      deliverables: [
        'Instagram Fashion Reel Edit (5.2 MB vertical MP4)',
        'Kinetic Typography Sequence Test (1.2 MB vertical MP4)'
      ],
      badge: 'Verified Video Deliverables',
      results: 'Practical editing deliverables focusing on first-3-second retention. Proved that kinetic on-screen text and rhythm-based pacing double watch time compared to static video loops. Distinct from camera shooting: focuses strictly on post-production cutting, pacing, and retention.'
    },

    'ugc-ads': {
      title: 'UGC-Style AI Performance Ad Creatives',
      subtitle: 'Pomelli / ReelForge AI · 9:16 Vertical Video Creative',
      category: 'Performance Creative & UGC',
      type: 'Meta Ads Experimentation Asset',
      context: 'Designed and produced high-retention vertical video creatives tested as part of the Meta Ads campaign build for ReelForge AI.',
      objective: 'Create an authentic, user-generated-style performance ad that captures attention within 3 seconds, articulates the content friction, and drives website visits.',
      role: 'Creative Strategist & Video Producer',
      process: [
        'Creative Hook Formulation: Tested problem-aware openers ("Still manually analyzing competitor reels?") to capture target creator attention.',
        'Native Social Aesthetics: Formatted footage with native TikTok/Reels font styles, organic screen recordings, and natural conversational cadence.',
        'AI Voiceover Synchronization: Timed voiceover narration to rapid UI screen captures demonstrating competitive research in seconds.',
        'Call-to-Action Pacing: Concluded with a low-friction invitation to explore the live web tool.'
      ],
      tools: ['CapCut', 'Premiere Pro', 'AI Voice Tools', 'Meta Ads Manager'],
      deliverables: [
        '9:16 Vertical Promotional Video Creative (pomelli_creative_video_9_16_1021.mp4)',
        'High-resolution video poster frame (video_poster.jpg)',
        'Meta Ads creative testing variant documentation'
      ],
      badge: 'Verified Ad Creative & Test Asset',
      results: 'Produced authentic 9:16 creative asset integrated into the Meta Ads case study. Key learning: Native UGC styling outperforms overly polished corporate ads on Meta feeds by reducing banner blindness.'
    },

    'aval-short-film': {
      title: '"Aval" (அவள்) — Short Film Visual Pre-Production & Storyboards',
      subtitle: 'Narrative Concept, Character Model Sheets & Paris Scene Storyboard Art',
      category: 'Narrative Filmmaking & Visual Direction',
      type: 'Short Film Pre-Production Project',
      context: 'Visual pre-production development for "Aval" (அவள் - She), a Tamil drama short film following Muruga traveling from his traditional family home in Chennai across to a freezing, snowy Paris in search of Janaki.',
      objective: 'Establish a consistent cinematic visual language, character reference model sheets, environmental mood contrasts, and shot-by-shot storyboards before production.',
      role: 'Concept Artist, Visual Strategist & Storyboard Continuity Designer',
      process: [
        'Narrative Arc & Scene Beat Mapping: Developed scene-by-scene script beats contrasting warm Chennai familial roots with cold, foreign isolation in Paris.',
        'Character Reference Sheet Engineering: Prompt-engineered and refined multi-angle character model sheets (Muruga, Janaki, Savithri, Santosh) to maintain facial recognition, hair styling, and wardrobe consistency across scenes.',
        'Environmental Mood Prompts: Crafted contrasting lighting environments: warm interior lantern glow in traditional Tamil homes vs desaturated, snowy nighttime Paris streetscapes.',
        'Storyboard Strip Assembly: Formatted cinematic 16:9 storyboards detailing camera angles (airplane window reflection, motorcycle braking at signal, kneeling in snow, answering phone call indoors).',
        'Scene Assembly Preview: Assembled audio-visual scene preview combining storyboard stills with dialogue and Foley audio.'
      ],
      tools: ['Midjourney AI', 'Adobe Photoshop', 'PyTorch/Diffusers', 'Premiere Pro'],
      deliverables: [
        '8+ Detailed Character Reference Sheets (Savithri, Santosh, Muruga, Janaki)',
        '20+ Scene Storyboard Frames across Paris and Chennai environments',
        'Audio-Visual Scene Preview (aval_scene_muruga_call.mp4)',
        'Cinematic color palette and visual continuity guide'
      ],
      badge: 'Verified Concept Art & Storyboard Deliverables',
      results: 'Comprehensive visual pre-production package establishing complete scene continuity. Clarified contribution: Manova led narrative visualization, AI-assisted character modeling, and storyboard continuity; live-action shooting and cast performance were collaborative team efforts.'
    },

    'leadgen-playbook': {
      title: 'B2B Lead Generation & Outreach Playbook',
      subtitle: 'Prospect Research, Permission Cold Calling, Objection Playbook & CRM Pipeline',
      category: 'Business Development & Outbound Sales',
      type: 'Agency Sales Internship (ALCAS)',
      context: 'Comprehensive outbound prospecting and business development executed during ALCAS agency internship. Sourced prospects via Apify, conducted pre-call audits, executed phone/email/DM cadences, and managed the pipeline in Notion CRM.',
      objective: 'Build a disciplined, non-spammy outbound appointment generation system that converts cold local business owners into qualified discovery meetings.',
      role: 'Business Development & Lead Generation Specialist',
      process: [
        'Prospect Sourcing & Data Verification: Used Apify to scrape local business directories; verified phone lines and business decision-maker names via Google Search and social registries.',
        'Pre-Call Social & Website Audit: Spent 5 minutes reviewing target brand Instagram profiles to identify specific conversion leakage (e.g. lack of pre-selling funnel, product cataloging) prior to dialing.',
        'Permission-Based Cold Calling: Delivered a 30-second respectful opener acknowledging the prospect\'s busy schedule, sharing a specific observation, and offering a free 1-page gap analysis.',
        'Objection Handling & Reframing: Deployed calm, consultative reframing for common objections ("Already have an agency", "Just email pricing", "Not looking right now").',
        'Multi-Touch Cadence & CRM Logging: Maintained a 9-day follow-up cadence across Phone, Email, and WhatsApp; recorded call dispositions and scheduled Google Meet appointments in Notion CRM.'
      ],
      tools: ['Apify', 'Notion CRM', 'Google Search', 'LinkedIn', 'WhatsApp Business', 'Gmail'],
      deliverables: [
        'The 30-Second Permission-Based Cold Calling Script (Verified: booked The Label Ritika founder meeting)',
        'Objection-Handling Playbook for 4 core business responses',
        '4-Touchpoint follow-up sequence and audit-led cold email template',
        'Notion-based CRM sales pipeline tracking database',
        'Daily cold calling activity reports (60+ calls, 70+ emails, 19+ DMs)'
      ],
      badge: 'Verified Agency Outbound Workflow & Records',
      results: 'Logged 60+ cold calls, 70+ cold emails, 19+ DMs, and successfully scheduled a qualified Google Meet meeting with the founder of The Label Ritika for agency leadership. Proved that consultative, audit-led outreach builds trust where generic cold pitch calls fail.'
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
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
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

  // --- 6. BEFORE / AFTER COMPARATIVE GRID VIEWER ---
  const baBtns = document.querySelectorAll('.ba-btn');
  const baImage = document.getElementById('baImage');
  if (baBtns.length && baImage) {
    baBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        baBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const newSrc = btn.getAttribute('data-img');
        if (newSrc && baImage.getAttribute('src') !== newSrc) {
          baImage.style.transition = 'opacity 0.15s ease';
          baImage.style.opacity = '0.2';
          setTimeout(() => {
            baImage.src = newSrc;
            baImage.alt = btn.textContent.trim() + " transformation showcase";
            baImage.style.opacity = '1';
          }, 150);
        }
      });
    });
  }

  // --- 7. OBJECTION ACCORDION TOGGLE ---
  const objectionTriggers = document.querySelectorAll('.objection-trigger');
  objectionTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = trigger.closest('.objection-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');
      const icon = trigger.querySelector('.mono:last-child') || trigger.querySelector('span:last-child');
      
      if (isOpen) {
        item.classList.remove('open');
        if (icon) icon.textContent = '+';
      } else {
        item.classList.add('open');
        if (icon) icon.textContent = '−';
      }
    });
  });

  // --- 8. VIDEO PLAYBACK SINGLE-STREAM COORDINATION ---
  const allVideos = document.querySelectorAll('video');
  allVideos.forEach(v => {
    v.addEventListener('play', () => {
      allVideos.forEach(other => {
        if (other !== v && !other.paused) {
          other.pause();
        }
      });
    });
  });
});
