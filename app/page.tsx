const capabilities = [
  {
    number: "01",
    title: "Web development",
    description:
      "Responsive, reliable websites that feel considered on every screen and are built to grow with the people who use them.",
    icon: "↗",
  },
  {
    number: "02",
    title: "Product interfaces",
    description:
      "Clear, accessible interfaces that turn complicated workflows into straightforward, enjoyable experiences.",
    icon: "✳",
  },
  {
    number: "03",
    title: "End-to-end thinking",
    description:
      "From the first sketch to the last detail, I enjoy connecting good ideas to thoughtful, working software.",
    icon: "⌘",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Digital products",
    detail: "Useful tools, thoughtfully made",
    className: "focus-card--product",
  },
  {
    number: "02",
    title: "Web experiences",
    detail: "Fast, expressive, and responsive",
    className: "focus-card--web",
  },
  {
    number: "03",
    title: "Design systems",
    detail: "Consistent details that scale",
    className: "focus-card--systems",
  },
];

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML & CSS",
  "Node.js",
  "Git",
  "REST APIs",
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" aria-label="Emmanuel Isiaho, home">
            <span>EMMANUEL ISIAHO</span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#focus">Focus</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-cta" href="#contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-inner content-width">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                SOFTWARE DEVELOPER
              </p>
              <h1>
                I&apos;M EMMANUEL
                <br />
                ISIAHO
                <br />
                <span className="accent-text">&amp; I BUILD FOR</span>
                <br />
                <span className="accent-text">THE WEB.</span>
              </h1>
              <p className="hero-description">
                I turn thoughtful ideas into useful digital experiences—with
                clean code, a curious mind, and care for the details.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#focus">
                  Explore what I do <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#about">
                  A little about me <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="hero-note">
                <span className="note-line" />
                <span>Curious by nature. Developer by choice.</span>
              </div>
            </div>

            <div className="hero-art" aria-label="Decorative code editor illustration">
              <div className="art-orbit art-orbit-one" />
              <div className="art-orbit art-orbit-two" />
              <div className="art-sticker sticker-top">
                <span className="sticker-star">✳</span> BUILD WITH INTENTION
              </div>
              <div className="editor-window">
                <div className="editor-topbar">
                  <div className="window-dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                  <span>emmanuel.tsx</span>
                  <span className="editor-menu" aria-hidden="true">•••</span>
                </div>
                <div className="editor-content">
                  <div className="editor-line">
                    <span className="line-number">01</span>
                    <span><b>const</b> developer = {"{"}</span>
                  </div>
                  <div className="editor-line">
                    <span className="line-number">02</span>
                    <span className="indent"><em>name</em>: <strong>&quot;Emmanuel&quot;</strong>,</span>
                  </div>
                  <div className="editor-line">
                    <span className="line-number">03</span>
                    <span className="indent"><em>craft</em>: <strong>&quot;software&quot;</strong>,</span>
                  </div>
                  <div className="editor-line">
                    <span className="line-number">04</span>
                    <span className="indent"><em>mindset</em>: <strong>&quot;always curious&quot;</strong>,</span>
                  </div>
                  <div className="editor-line">
                    <span className="line-number">05</span>
                    <span>{"}"}</span>
                  </div>
                  <div className="editor-divider" />
                  <div className="editor-line">
                    <span className="line-number">06</span>
                    <span><b>function</b> <em>makeItMatter</em>() {"{"}</span>
                  </div>
                  <div className="editor-line">
                    <span className="line-number">07</span>
                    <span className="indent"><b>return</b> <strong>&quot;ideas → impact&quot;</strong>;</span>
                  </div>
                  <div className="editor-line">
                    <span className="line-number">08</span>
                    <span>{"}"}</span>
                  </div>
                  <div className="editor-cursor" aria-hidden="true" />
                </div>
                <div className="editor-status">
                  <span><i /> READY TO BUILD</span>
                  <span>UTF-8&nbsp;&nbsp; TSX</span>
                </div>
              </div>
              <div className="art-sticker sticker-bottom">
                <span aria-hidden="true">✦</span> MADE FOR PEOPLE
              </div>
              <span className="art-coordinate">06° 27&apos; N&nbsp; / &nbsp;07° 30&apos; E</span>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span className="scroll-cue-line" />
            SCROLL TO EXPLORE
          </a>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="content-width intro-grid">
            <div>
              <p className="section-kicker">01 — A LITTLE INTRO</p>
              <h2 className="section-heading">
                Thoughtful code.
                <br />
                <span className="accent-text">Human experiences.</span>
              </h2>
            </div>
            <div className="intro-copy">
              <p>
                I&apos;m Emmanuel Isiaho, a developer who believes the best
                technology feels simple to the people using it. I enjoy taking
                ideas from rough sketches to polished, working experiences.
              </p>
              <p>
                My approach pairs practical problem-solving with an eye for
                detail—because how something works and how it feels should go
                hand in hand.
              </p>
              <a className="underlined-link" href="#contact">
                Have something in mind? <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="expertise-section section-pad" id="expertise">
          <div className="content-width">
            <div className="section-topline">
              <div>
                <p className="section-kicker">02 — WHAT I BRING</p>
                <h2 className="section-heading">A little bit of <span className="accent-text">everything.</span></h2>
              </div>
              <p className="section-aside">
                Good work lives where solid engineering meets a genuine
                understanding of people.
              </p>
            </div>
            <div className="capability-grid">
              {capabilities.map((capability) => (
                <article className="capability-card" key={capability.number}>
                  <div className="capability-meta">
                    <span>{capability.number}</span>
                    <span className="capability-icon" aria-hidden="true">{capability.icon}</span>
                  </div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <span className="card-bottom-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="focus-section section-pad" id="focus">
          <div className="content-width">
            <div className="section-topline focus-heading">
              <div>
                <p className="section-kicker">03 — WHAT I LOVE TO BUILD</p>
                <h2 className="section-heading">
                  Good ideas, made <span className="accent-text">real.</span>
                </h2>
              </div>
              <p className="section-aside">
                The kind of challenges I&apos;m always excited to take on.
              </p>
            </div>
            <div className="focus-grid">
              {focusAreas.map((area) => (
                <article className={`focus-card ${area.className}`} key={area.number}>
                  <div className="focus-card-top">
                    <span className="focus-number">{area.number}</span>
                    <span className="focus-arrow" aria-hidden="true">↗</span>
                  </div>
                  <div className="focus-art" aria-hidden="true">
                    {area.number === "01" && (
                      <div className="product-preview">
                        <div className="preview-sidebar"><i /><i /><i /><i /></div>
                        <div className="preview-main">
                          <span className="preview-label">YOUR WORKSPACE</span>
                          <span className="preview-title" />
                          <div className="preview-panels"><i /><i /><i /></div>
                          <span className="preview-chart"><i /><i /><i /><i /><i /><i /><i /></span>
                        </div>
                      </div>
                    )}
                    {area.number === "02" && (
                      <div className="web-preview">
                        <div className="web-preview-nav"><i /><span /><span /></div>
                        <div className="web-preview-content">
                          <span className="web-preview-pill" />
                          <span className="web-preview-heading" />
                          <span className="web-preview-heading web-preview-heading-short" />
                          <span className="web-preview-copy" />
                          <span className="web-preview-button" />
                        </div>
                        <div className="web-preview-sun" />
                      </div>
                    )}
                    {area.number === "03" && (
                      <div className="system-preview">
                        <span className="system-swatch swatch-lilac" />
                        <span className="system-swatch swatch-dark" />
                        <span className="system-swatch swatch-cream" />
                        <span className="system-type">Aa</span>
                        <span className="system-chip">BUTTON</span>
                        <span className="system-lines"><i /><i /><i /></span>
                      </div>
                    )}
                  </div>
                  <div className="focus-card-copy">
                    <div>
                      <h3>{area.title}</h3>
                      <p>{area.detail}</p>
                    </div>
                    <span className="focus-explore">EXPLORE <span aria-hidden="true">↗</span></span>
                  </div>
                </article>
              ))}
            </div>
            <div className="tech-strip">
              <p className="section-kicker">TOOLS IN MY TOOLKIT</p>
              <div className="tech-list">
                {technologies.map((technology) => (
                  <span className="tech-pill" key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="approach-section section-pad">
          <div className="content-width approach-grid">
            <div className="approach-intro">
              <p className="section-kicker">04 — HOW I WORK</p>
              <h2 className="section-heading">
                From first thought
                <br />
                to <span className="accent-text">finished thing.</span>
              </h2>
            </div>
            <div className="approach-steps">
              <article className="approach-step">
                <span className="step-number">01</span>
                <div><h3>Listen &amp; learn</h3><p>Start with the people, the problem, and what success should feel like.</p></div>
                <span className="step-symbol" aria-hidden="true">↘</span>
              </article>
              <article className="approach-step">
                <span className="step-number">02</span>
                <div><h3>Shape the idea</h3><p>Find the clearest path forward and give the important details room to shine.</p></div>
                <span className="step-symbol" aria-hidden="true">⌁</span>
              </article>
              <article className="approach-step">
                <span className="step-number">03</span>
                <div><h3>Build with care</h3><p>Make it real, test what matters, and keep improving as we learn.</p></div>
                <span className="step-symbol" aria-hidden="true">✳</span>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="content-width contact-inner">
            <div className="contact-copy">
              <p className="section-kicker">05 — YOUR TURN</p>
              <h2>
                Have a good idea?
                <br />
                <span>Let&apos;s make it happen.</span>
              </h2>
              <p>
                Have a project, a question, or just want to talk about what&apos;s
                possible? I&apos;d love to hear from you.
              </p>
            </div>
            <a className="contact-button" href="mailto:" aria-label="Start an email">
              <span>Start a conversation</span>
              <span className="contact-button-arrow" aria-hidden="true">↗</span>
            </a>
            <div className="contact-footer">
              <a className="wordmark wordmark-light" href="#home">
                <span>EMMANUEL ISIAHO</span>
              </a>
              <span>DESIGNED WITH INTENTION. BUILT WITH CARE.</span>
              <a href="#home" className="back-to-top">BACK TO TOP ↑</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
