/**
 * MANOVA — Digital Marketing Portfolio
 * Run for Fizal Interactive Carousel Controller
 */

(function () {
  'use strict';

  // Verified slide data for both carousels
  const carouselData = {
    v14: [
      {
        src: 'assets/images/run-for-fizal/v14-realphotos/RFZ_Carousel_01.png',
        title: 'The Narrative Hook <em>“Bro was just trying to run…”</em>',
        desc: 'Opening hook slide framing an individual runner’s journey before the unexpected plot twist: an everyday road runner whose recovery journey transformed into an authentic community movement across Chennai racing circuits.'
      },
      {
        src: 'assets/images/run-for-fizal/v14-realphotos/RFZ_Carousel_02.png',
        title: 'The Person Behind the Bib <em>“Runner. Friend. Medal collector.”</em>',
        desc: 'Features authentic photography of Fizal holding his finisher medal and 5K race bib (IA 417). Establishes his personal connection to the running community as someone always down for one more race.'
      },
      {
        src: 'assets/images/run-for-fizal/v14-realphotos/RFZ_Carousel_03.png',
        title: 'Verifiable Pace & Dedicated Miles <em>“10K in 53:12 (5:19 / km)”</em>',
        desc: 'Validates his athletic commitment through genuine GPS tracking data: 10K clocked in 53 minutes 12 seconds. Demonstrates real sweat and measurable progress rather than superficial social posing.'
      },
      {
        src: 'assets/images/run-for-fizal/v14-realphotos/RFZ_Carousel_04.png',
        title: 'The Turning Point: Authentic MRI Findings <em>“Then his knee said: I’m out, bro.”</em>',
        desc: 'Unfiltered transparency presenting actual clinical scan findings: Medial meniscus tear, large parameniscal cyst, and mild knee joint effusion (with intact ACL). Shifts the narrative into human vulnerability.'
      },
      {
        src: 'assets/images/run-for-fizal/v14-realphotos/RFZ_Carousel_05.png',
        title: 'The Emotional Reality <em>“No race. No starting line. No running with the boys.”</em>',
        desc: 'Addresses the silent psychological struggle familiar to dedicated endurance athletes when sudden injury forces complete physical rest while their teammates continue training.'
      },
      {
        src: 'assets/images/run-for-fizal/v14-realphotos/RFZ_Carousel_06.png',
        title: 'The Crew Rally <em>“Runners don’t leave their own behind.”</em>',
        desc: 'Authentic group photograph of the running crew standing shoulder-to-shoulder before dawn. The turning point of the campaign: “Friendship: 1, Knee: 0.”'
      },
      {
        src: 'assets/images/run-for-fizal/v14-realphotos/RFZ_Carousel_07.png',
        title: 'The Movement on the Track <em>“Every kilometre carries his name.”</em>',
        desc: 'Real race photo showing a teammate competing on the open track wearing the custom RFZ 031026 bib pinned to his running jersey. Same roads, same crew, different reason.'
      },
      {
        src: 'assets/images/run-for-fizal/v14-realphotos/RFZ_Carousel_08.png',
        title: 'The Pledge & Est. 03.10.2026 <em>“Until we’re back at the starting line together.”</em>',
        desc: 'Closing community pledge: “One of us can’t run right now. So we run for him. Runners · Friends · One Cause.” Establishing the ongoing movement milestone date.'
      }
    ],
    pin3: [
      {
        src: 'assets/images/run-for-fizal/pin3-graphicled/RFL_Pin3_01.png',
        title: 'The Profile Manifesto <em>“This is just the beginning.”</em>',
        desc: 'Slide 1 of the permanent Instagram Pin 3 grid asset. Establishes the profile’s forward-looking manifesto: races, people, and real miles that continue moving forward.'
      },
      {
        src: 'assets/images/run-for-fizal/pin3-graphicled/RFL_Pin3_02.png',
        title: 'The Next Chapter <em>“One reel is not the whole story.”</em>',
        desc: 'Bridges the 26-second viral video reel into ongoing long-term community participation. Piques viewer interest in subsequent race days and group routes.'
      },
      {
        src: 'assets/images/run-for-fizal/pin3-graphicled/RFL_Pin3_03.png',
        title: 'The Signature Bib <em>“One bib, race after race (RFZ 031026).”</em>',
        desc: 'Visual focus on the dedicated RFZ race bib: the official physical artifact that travels with the crew across state marathons and club training mornings.'
      },
      {
        src: 'assets/images/run-for-fizal/pin3-graphicled/RFL_Pin3_04.png',
        title: 'Race Day Reality <em>“The morning, the start line, the finish.”</em>',
        desc: 'Establishes the documentary pacing of upcoming race days, committing to sharing unvarnished early-morning moments as they unfold.'
      },
      {
        src: 'assets/images/run-for-fizal/pin3-graphicled/RFL_Pin3_05.png',
        title: 'No Made-Up Totals <em>“Just real runs, dedicated.”</em>',
        desc: 'A direct commitment to honesty: refusing fabricated mileage counters or simulated engagement, promising only genuine dedicated runs on genuine roads.'
      },
      {
        src: 'assets/images/run-for-fizal/pin3-graphicled/RFL_Pin3_06.png',
        title: 'Community Roots <em>“Friends first. One runner at a time.”</em>',
        desc: 'Illustrates how grassroots movements grow outward from a tight-knit core of authentic friendships into open invitations for wider clubs.'
      },
      {
        src: 'assets/images/run-for-fizal/pin3-graphicled/RFL_Pin3_07.png',
        title: 'The Direct Call to Action <em>“Who would you run for?”</em>',
        desc: 'The viral engagement catalyst: inviting the audience to reflect on a friend, teammate, or mentor who showed up for them, and tag them to keep the story moving.'
      },
      {
        src: 'assets/images/run-for-fizal/pin3-graphicled/RFL_Pin3_08.png',
        title: 'Follow the Journey <em>“Every race. Every kilometre. For Fizal.”</em>',
        desc: 'Final CTA anchor for profile visitors: following the journey as the crew races through the season toward Fizal’s eventual return.'
      }
    ]
  };

  let currentTab = 'v14';
  let currentIndex = 0;

  function initCarousel() {
    const tabBtns = document.querySelectorAll('.rfz-tab-btn');
    const prevBtn = document.getElementById('rfzPrevBtn');
    const nextBtn = document.getElementById('rfzNextBtn');
    const slideImg = document.getElementById('rfzSlideImg');
    const slideCounter = document.getElementById('rfzSlideCounter');
    const slideTitle = document.getElementById('rfzSlideTitle');
    const slideDesc = document.getElementById('rfzSlideDesc');
    const thumbContainer = document.getElementById('rfzThumbStrip');

    if (!slideImg || !tabBtns.length) return;

    function renderSlide(index) {
      const set = carouselData[currentTab];
      if (!set || !set[index]) return;

      currentIndex = index;
      const item = set[index];

      // Update slide visual and text
      slideImg.src = item.src;
      slideImg.alt = `${currentTab.toUpperCase()} Slide ${index + 1}`;
      slideCounter.textContent = `SLIDE 0${index + 1} / 0${set.length}`;
      slideTitle.innerHTML = item.title;
      slideDesc.textContent = item.desc;

      // Update nav button states
      if (prevBtn) prevBtn.disabled = (currentIndex === 0);
      if (nextBtn) nextBtn.disabled = (currentIndex === set.length - 1);

      // Update thumbnail active state
      if (thumbContainer) {
        const thumbs = thumbContainer.querySelectorAll('.rfz-thumb-item');
        thumbs.forEach((th, i) => {
          if (i === currentIndex) {
            th.classList.add('active');
          } else {
            th.classList.remove('active');
          }
        });
      }
    }

    function buildThumbnails() {
      if (!thumbContainer) return;
      thumbContainer.innerHTML = '';
      const set = carouselData[currentTab];

      set.forEach((item, idx) => {
        const thumb = document.createElement('div');
        thumb.className = `rfz-thumb-item ${idx === currentIndex ? 'active' : ''}`;
        thumb.setAttribute('role', 'button');
        thumb.setAttribute('tabindex', '0');
        thumb.setAttribute('aria-label', `View Slide ${idx + 1}`);

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = `Thumbnail ${idx + 1}`;
        img.className = 'rfz-thumb-img';
        img.loading = 'lazy';

        thumb.appendChild(img);

        thumb.addEventListener('click', () => {
          renderSlide(idx);
        });

        thumb.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            renderSlide(idx);
          }
        });

        thumbContainer.appendChild(thumb);
      });
    }

    // Tab buttons event listeners
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        if (targetTab === currentTab) return;

        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentTab = targetTab;
        currentIndex = 0;
        buildThumbnails();
        renderSlide(0);
      });
    });

    // Nav buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) renderSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const set = carouselData[currentTab];
        if (currentIndex < set.length - 1) renderSlide(currentIndex + 1);
      });
    }

    // Keyboard navigation when viewer container is active
    const viewer = document.querySelector('.rfz-carousel-section');
    if (viewer) {
      viewer.addEventListener('keydown', (e) => {
        const set = carouselData[currentTab];
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
          e.preventDefault();
          renderSlide(currentIndex - 1);
        } else if (e.key === 'ArrowRight' && currentIndex < set.length - 1) {
          e.preventDefault();
          renderSlide(currentIndex + 1);
        }
      });
    }

    // Initial render
    buildThumbnails();
    renderSlide(0);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }
})();
