

window.sr = ScrollReveal();
sr.reveal('.foo');
sr.reveal('.bar');

window.sr = ScrollReveal({ reset: true });

sr.reveal('.foo', { duration: 200 }, { opacy: 0},);
