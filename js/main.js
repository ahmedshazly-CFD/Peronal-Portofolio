/* ============================================================
   main.js — renders everything from window.SITE (site.config.js)
   ============================================================ */
(function () {
  "use strict";
  var S = window.SITE;
  if (!S) { console.error("site.config.js missing"); return; }

  var $ = function (id) { return document.getElementById(id); };
  var el = function (tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  /* ---------- document head ---------- */
  document.title = S.meta.name + " — " + S.meta.role;
  var ogTitle = document.querySelector('meta[property="og:title"]');
  var ogUrl = document.querySelector('meta[property="og:url"]');
  var ogImg = document.querySelector('meta[property="og:image"]');
  if (ogTitle) ogTitle.content = S.meta.name + " — " + S.meta.role;
  if (ogUrl) ogUrl.content = S.meta.siteUrl;
  if (ogImg) ogImg.content = S.meta.siteUrl + "/" + S.meta.ogImage;
  var ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: S.meta.name,
    jobTitle: S.meta.role,
    email: S.links.email,
    telephone: S.links.phone,
    address: { "@type": "PostalAddress", addressLocality: S.links.location },
    sameAs: [S.links.linkedin]
  });
  document.head.appendChild(ld);

  /* ---------- hero ---------- */
  $("heroEyebrow").textContent = S.hero.eyebrow;
  $("heroTitle").textContent = S.hero.title;
  $("heroHeadline").textContent = S.hero.headline;
  $("heroIntro").textContent = S.hero.intro;
  if (S.hero.portrait) $("heroPortrait").src = S.hero.portrait;

  var ctas = $("heroCtas");
  S.hero.ctas.forEach(function (c) {
    var a = el("a", c.primary ? "btn btn-primary" : "btn btn-ghost", esc(c.label));
    a.href = c.href;
    if (c.download) a.setAttribute("download", "");
    ctas.appendChild(a);
  });

  var facts = $("heroFacts");
  S.hero.facts.forEach(function (f) {
    facts.appendChild(el("dt", "", esc(f.label)));
    facts.appendChild(el("dd", "", esc(f.value)));
  });

  /* ---------- about ---------- */
  $("aboutHeading").textContent = S.about.heading;
  var aboutText = $("aboutText");
  S.about.paragraphs.forEach(function (p) { aboutText.appendChild(el("p", "", esc(p))); });
  var aboutFacts = $("aboutFacts");
  S.about.facts.forEach(function (f) {
    aboutFacts.appendChild(el("dt", "", esc(f.label)));
    aboutFacts.appendChild(el("dd", "", esc(f.value)));
  });

  /* ---------- projects + filters ---------- */
  $("projectsHeading").textContent = S.projects.heading;
  $("projectsIntro").textContent = S.projects.intro;

  var allTags = [];
  S.projects.items.forEach(function (p) {
    (p.tags || []).forEach(function (t) { if (allTags.indexOf(t) < 0) allTags.push(t); });
  });

  var cardsWrap = $("cards");
  var filtersWrap = $("filters");
  var active = "All";

  function renderCards() {
    cardsWrap.innerHTML = "";
    S.projects.items.forEach(function (p) {
      if (active !== "All" && (p.tags || []).indexOf(active) < 0) return;
      var card = el("article", "card");
      var cover = el("div", "card-cover");
      cover.innerHTML =
        '<img src="' + esc(p.cover) + '" alt="' + esc(p.title) + '" loading="lazy">' +
        '<span class="card-year">' + esc(p.year) + "</span>";
      card.appendChild(cover);

      var body = el("div", "card-body");
      body.innerHTML =
        '<p class="card-org">' + esc(p.org) + "</p>" +
        "<h3>" + esc(p.title) + "</h3>" +
        '<p class="card-role">' + esc(p.role) + "</p>" +
        '<p class="card-summary">' + esc(p.summary) + "</p>" +
        '<ul class="card-highlights">' +
        (p.highlights || []).map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") +
        "</ul>";

      var tags = el("div", "card-tags");
      (p.tags || []).forEach(function (t) { tags.appendChild(el("span", "tag", esc(t))); });
      body.appendChild(tags);

      if (p.links && p.links.length) {
        var links = el("div", "card-links");
        p.links.forEach(function (l) {
          var a = el("a", "", esc(l.label));
          a.href = l.url;
          a.target = "_blank";
          a.rel = "noopener";
          links.appendChild(a);
        });
        body.appendChild(links);
      }
      card.appendChild(body);
      cardsWrap.appendChild(card);
    });
  }

  ["All"].concat(allTags).forEach(function (t) {
    var b = el("button", "filter" + (t === active ? " active" : ""), esc(t));
    b.type = "button";
    b.addEventListener("click", function () {
      active = t;
      Array.prototype.forEach.call(filtersWrap.children, function (c) {
        c.classList.toggle("active", c.textContent === t);
      });
      renderCards();
    });
    filtersWrap.appendChild(b);
  });
  renderCards();

  /* ---------- skills ---------- */
  $("skillsHeading").textContent = S.skills.heading;
  $("skillsIntro").textContent = S.skills.intro;
  var skillGrid = $("skillGrid");
  S.skills.groups.forEach(function (g) {
    var c = el("div", "skill-card");
    c.innerHTML = "<h3>" + esc(g.name) + "</h3><ul>" +
      g.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
    skillGrid.appendChild(c);
  });

  /* ---------- timeline ---------- */
  $("timelineHeading").textContent = S.timeline.heading;
  var tl = $("timeline");
  S.timeline.items.forEach(function (t) {
    var item = el("div", "tl-item" + (t.kind === "education" ? " edu" : ""));
    var link = "";
    if (t.link) {
      link = '<a class="tl-link" href="' + esc(t.link.url) + '" target="_blank" rel="noopener">' +
        esc(t.link.label) + " ↗</a>";
    }
    item.innerHTML =
      '<span class="tl-dot"></span>' +
      '<p class="tl-period">' + esc(t.period) + "</p>" +
      '<h3 class="tl-title">' + esc(t.title) + "</h3>" +
      '<p class="tl-org">' + esc(t.org) + "</p>" +
      '<p class="tl-detail">' + esc(t.detail) + "</p>" + link;
    tl.appendChild(item);
  });

  /* ---------- badges ---------- */
  var badgeGrid = $("badgeGrid");
  (S.badges || []).forEach(function (b) {
    var c = el("div", "badge-card");
    var items = b.items.map(function (i) {
      var name = i.url
        ? '<a href="' + esc(i.url) + '" target="_blank" rel="noopener">' + esc(i.name) + "</a>"
        : esc(i.name);
      return "<li><span class=\"badge-name\">" + name + "</span>" +
        '<span class="badge-detail">' + esc(i.detail || "") + "</span></li>";
    }).join("");
    c.innerHTML = "<h3>" + esc(b.title) + "</h3>" +
      (b.note ? '<p class="badge-note">' + esc(b.note) + "</p>" : '<div style="height:14px"></div>') +
      '<ul class="badge-list">' + items + "</ul>";
    badgeGrid.appendChild(c);
  });

  /* ---------- contact ---------- */
  $("contactHeading").textContent = S.contact.heading;
  $("contactIntro").textContent = S.contact.intro;
  var actions = $("contactActions");
  var links = S.links;

  function outlineBtn(label, href, opts) {
    var a = el("a", "btn btn-outline", esc(label));
    a.href = href;
    if (opts && opts.download) a.setAttribute("download", "");
    if (opts && opts.external) { a.target = "_blank"; a.rel = "noopener"; }
    actions.appendChild(a);
    return a;
  }
  outlineBtn("Email me", "mailto:" + links.email);
  outlineBtn(links.phoneDisplay, "tel:" + links.phone.replace(/\s/g, ""));
  outlineBtn("LinkedIn", links.linkedin, { external: true });
  outlineBtn("Download CV", links.cv, { download: true });

  if (S.contact.note) {
    var note = el("div", "", "");
    note.className = "contact-note";
    note.textContent = "● " + S.contact.note;
    actions.appendChild(note);
  }

  /* ---------- share ---------- */
  var share = $("share");
  share.appendChild(el("span", "share-label", "Share"));

  function shareUrl() {
    var l = location.href;
    if (location.protocol === "file:") return S.meta.siteUrl;
    return l;
  }
  function copyLink() {
    var url = shareUrl();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(flash);
    } else {
      var t = document.createElement("textarea");
      t.value = url; document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); flash(); } catch (e) {}
      document.body.removeChild(t);
    }
  }
  function flash() {
    var b = $("copyBtn"); if (!b) return;
    var old = b.textContent;
    b.textContent = "✓ Copied";
    setTimeout(function () { b.textContent = old; }, 1600);
  }

  var liBtn = el("button", "share-btn", "Share on LinkedIn");
  liBtn.type = "button";
  liBtn.addEventListener("click", function () {
    window.open("https://www.linkedin.com/sharing/share-offsite/?url=" +
      encodeURIComponent(shareUrl()), "_blank", "noopener");
  });
  share.appendChild(liBtn);

  var waBtn = el("a", "share-btn", "WhatsApp");
  waBtn.href = "https://wa.me/?text=" + encodeURIComponent(S.meta.name + " — " + S.meta.role + " " + shareUrl());
  waBtn.target = "_blank"; waBtn.rel = "noopener";
  share.appendChild(waBtn);

  var copyBtn = el("button", "share-btn", "Copy link");
  copyBtn.id = "copyBtn"; copyBtn.type = "button";
  copyBtn.addEventListener("click", copyLink);
  share.appendChild(copyBtn);

  /* ---------- nav ---------- */
  var nav = $("nav");
  var navLinks = $("navLinks");
  $("navCv").href = links.cv;
  $("navCv").setAttribute("download", "");

  $("navToggle").addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") navLinks.classList.remove("open");
  });
  window.addEventListener("scroll", function () {
    nav.classList.toggle("solid", window.scrollY > window.innerHeight - 120);
  }, { passive: true });

  /* ---------- footer ---------- */
  $("footerName").textContent = S.meta.name;
  var fl = $("footerLinks");
  var year = new Date().getFullYear();
  fl.innerHTML =
    '<a href="mailto:' + esc(links.email) + '">Email</a>' +
    '<a href="' + esc(links.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>' +
    '<a href="' + esc(links.cv) + '" download>CV</a>';
  $("footerNote").textContent = "© " + year + " " + S.meta.name + " · Cairo, Egypt";

  /* ---------- streamlines (decorative CFD background) ---------- */
  var svg = $("streamlines");
  if (svg) {
    var NS = "http://www.w3.org/2000/svg";
    var W = 1440, H = 760, N = 16;
    for (var i = 0; i < N; i++) {
      var y0 = 40 + (i * (H - 80)) / (N - 1);
      var amp = 16 + 26 * Math.sin((i / N) * Math.PI);
      var phase = i * 0.55;
      var d = "M -60 " + y0.toFixed(1);
      for (var x = 0; x <= W + 60; x += 40) {
        var t = x / W;
        var y = y0 + amp * Math.sin(6.2 * t + phase) * (0.35 + 0.65 * t);
        d += " L " + x + " " + y.toFixed(1);
      }
      var path = document.createElementNS(NS, "path");
      path.setAttribute("d", d);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", i % 3 === 0 ? "#06b6d4" : "#3b82f6");
      path.setAttribute("stroke-width", i % 4 === 0 ? 1.6 : 1);
      path.setAttribute("opacity", (0.14 + 0.2 * (i % 5)).toFixed(2));
      path.setAttribute("stroke-linecap", "round");
      path.style.animation = "flowShift " + (14 + (i % 5) * 3) + "s ease-in-out " +
        (i * 0.35).toFixed(1) + "s infinite alternate";
      svg.appendChild(path);
    }
    var style = document.createElementNS(NS, "style");
    style.textContent =
      "@keyframes flowShift { from { transform: translateX(0); } to { transform: translateX(-26px); } }";
    svg.appendChild(style);

    // a few particle dots riding the streamlines
    for (var j = 0; j < 22; j++) {
      var cy = 50 + Math.random() * (H - 100);
      var c = document.createElementNS(NS, "circle");
      c.setAttribute("cx", (Math.random() * W).toFixed(0));
      c.setAttribute("cy", cy.toFixed(0));
      c.setAttribute("r", (1.2 + Math.random() * 1.8).toFixed(1));
      c.setAttribute("fill", Math.random() > 0.4 ? "#67e8f9" : "#93c5fd");
      c.setAttribute("opacity", (0.25 + Math.random() * 0.5).toFixed(2));
      c.style.animation = "flowShift " + (10 + Math.random() * 14).toFixed(0) +
        "s ease-in-out " + (Math.random() * 6).toFixed(1) + "s infinite alternate";
      svg.appendChild(c);
    }
  }
})();
