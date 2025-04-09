const difyChatbotConfig = {
  token: "IGIgXSCrqqjpnUIS",
  baseUrl: "http://14.29.70.194:53005",
};

export function createChatbot() {
  const n = "difyChatbotConfig";
  const a = "dify-chatbot-bubble-button";
  const c = "dify-chatbot-bubble-window";
  const p = difyChatbotConfig;
  const h = {
    open: `<svg id="openIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.7586 2L16.2412 2C17.0462 1.99999 17.7105 1.99998 18.2517 2.04419C18.8138 2.09012 19.3305 2.18868 19.8159 2.43598C20.5685 2.81947 21.1804 3.43139 21.5639 4.18404C21.8112 4.66937 21.9098 5.18608 21.9557 5.74818C21.9999 6.28937 21.9999 6.95373 21.9999 7.7587L22 14.1376C22.0004 14.933 22.0007 15.5236 21.8636 16.0353C21.4937 17.4156 20.4155 18.4938 19.0352 18.8637C18.7277 18.9461 18.3917 18.9789 17.9999 18.9918L17.9999 20.371C18 20.6062 18 20.846 17.9822 21.0425C17.9651 21.2305 17.9199 21.5852 17.6722 21.8955C17.3872 22.2525 16.9551 22.4602 16.4983 22.4597C16.1013 22.4593 15.7961 22.273 15.6386 22.1689C15.474 22.06 15.2868 21.9102 15.1031 21.7632L12.69 19.8327C12.1714 19.4178 12.0174 19.3007 11.8575 19.219C11.697 19.137 11.5262 19.0771 11.3496 19.0408C11.1737 19.0047 10.9803 19 10.3162 19H7.75858C6.95362 19 6.28927 19 5.74808 18.9558C5.18598 18.9099 4.66928 18.8113 4.18394 18.564C3.43129 18.1805 2.81937 17.5686 2.43588 16.816C2.18859 16.3306 2.09002 15.8139 2.0441 15.2518C1.99988 14.7106 1.99989 14.0463 1.9999 13.2413V7.75868C1.99989 6.95372 1.99988 6.28936 2.0441 5.74818C2.09002 5.18608 2.18859 4.66937 2.43588 4.18404C2.81937 3.43139 3.43129 2.81947 4.18394 2.43598C4.66928 2.18868 5.18598 2.09012 5.74808 2.04419C6.28927 1.99998 6.95364 1.99999 7.7586 2ZM10.5073 7.5C10.5073 6.67157 9.83575 6 9.00732 6C8.1789 6 7.50732 6.67157 7.50732 7.5C7.50732 8.32843 8.1789 9 9.00732 9C9.83575 9 10.5073 8.32843 10.5073 7.5ZM16.6073 11.7001C16.1669 11.3697 15.5426 11.4577 15.2105 11.8959C15.1488 11.9746 15.081 12.0486 15.0119 12.1207C14.8646 12.2744 14.6432 12.4829 14.3566 12.6913C13.7796 13.111 12.9818 13.5001 12.0073 13.5001C11.0328 13.5001 10.235 13.111 9.65799 12.6913C9.37138 12.4829 9.15004 12.2744 9.00274 12.1207C8.93366 12.0486 8.86581 11.9745 8.80418 11.8959C8.472 11.4577 7.84775 11.3697 7.40732 11.7001C6.96549 12.0314 6.87595 12.6582 7.20732 13.1001C7.20479 13.0968 7.21072 13.1043 7.22094 13.1171C7.24532 13.1478 7.29407 13.2091 7.31068 13.2289C7.36932 13.2987 7.45232 13.3934 7.55877 13.5045C7.77084 13.7258 8.08075 14.0172 8.48165 14.3088C9.27958 14.8891 10.4818 15.5001 12.0073 15.5001C13.5328 15.5001 14.735 14.8891 15.533 14.3088C15.9339 14.0172 16.2438 13.7258 16.4559 13.5045C16.5623 13.3934 16.6453 13.2987 16.704 13.2289C16.7333 13.1939 16.7567 13.165 16.7739 13.1432C17.1193 12.6969 17.0729 12.0493 16.6073 11.7001ZM15.0073 6C15.8358 6 16.5073 6.67157 16.5073 7.5C16.5073 8.32843 15.8358 9 15.0073 9C14.1789 9 13.5073 8.32843 13.5073 7.5C13.5073 6.67157 14.1789 6 15.0073 6Z" fill="white"/>
  </svg>`,
    close: `<svg id="closeIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 18L6 6M6 18L18 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  };
  async function e() {
    if (p && p.token) {
      var e = new URLSearchParams(
        await (async function () {
          var e = p?.inputs || {};
          const n = {};
          return (
            await Promise.all(
              Object.entries(e).map(async ([e, t]) => {
                n[e] =
                  ((e = t),
                  (e = new TextEncoder().encode(e)),
                  (e = new Response(
                    new Blob([e]).stream().pipeThrough(new CompressionStream("gzip")),
                  ).arrayBuffer()),
                  (e = new Uint8Array(await e)),
                  await btoa(String.fromCharCode(...e)));
              }),
            ),
            n
          );
        })(),
      );
      const i =
        `${p.baseUrl || `http://${p.isDev ? "dev." : ""}udify.app`}/chatbot/${p.token}?` + e;
      function o() {
        var e, t;
        window.innerWidth <= 640 ||
          ((e = document.getElementById(c)),
          (t = document.getElementById(a)),
          e &&
            t &&
            ((t = t.getBoundingClientRect()).top - 5 > e.clientHeight
              ? ((e.style.bottom = t.height + 5 + "px"), (e.style.top = "unset"))
              : ((e.style.bottom = "unset"), (e.style.top = t.height + 5 + "px")),
            t.right > e.clientWidth
              ? ((e.style.right = "0"), (e.style.left = "unset"))
              : ((e.style.right = "unset"), (e.style.left = 0))));
      }
      function t() {
        const n = document.createElement("div");
        Object.entries(p.containerProps || {}).forEach(([e, t]) => {
          "className" === e
            ? n.classList.add(...t.split(" "))
            : "style" === e
              ? "object" == typeof t
                ? Object.assign(n.style, t)
                : (n.style.cssText = t)
              : "function" == typeof t
                ? n.addEventListener(e.replace(/^on/, "").toLowerCase(), t)
                : (n[e] = t);
        }),
          (n.id = a);
        var e = document.createElement("style");
        document.head.appendChild(e),
          e.sheet.insertRule(`
      #${n.id} {
        position: fixed;
        bottom: var(--${n.id}-bottom, 1rem);
        right: var(--${n.id}-right, 1rem);
        left: var(--${n.id}-left, unset);
        top: var(--${n.id}-top, unset);
        width: var(--${n.id}-width, 50px);
        height: var(--${n.id}-height, 50px);
        border-radius: var(--${n.id}-border-radius, 25px);
        background-color: var(--${n.id}-bg-color, #155EEF);
        box-shadow: var(--${n.id}-box-shadow, rgba(0, 0, 0, 0.2) 0px 4px 8px 0px);
        cursor: pointer;
        z-index: 2147483647;
      }
    `);
        const t = document.createElement("div");
        if (
          ((t.style.cssText =
            "display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; z-index: 2147483647;"),
          (t.innerHTML = h.open),
          n.appendChild(t),
          document.body.appendChild(n),
          n.addEventListener("click", function () {
            var e = document.getElementById(c);
            e
              ? ((e.style.display = "none" === e.style.display ? "block" : "none"),
                (t.innerHTML = "none" === e.style.display ? h.open : h.close),
                "none" === e.style.display
                  ? document.removeEventListener("keydown", d)
                  : document.addEventListener("keydown", d),
                o())
              : (n.appendChild(
                  (((e = document.createElement("iframe")).allow = "fullscreen;microphone"),
                  (e.title = "dify chatbot bubble window"),
                  (e.id = c),
                  (e.src = i),
                  (e.style.cssText = `
      border: none; position: absolute; flex-direction: column; justify-content: space-between;
      box-shadow: rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px;
      bottom: 55px; right: 0; width: 24rem; max-width: calc(100vw - 2rem); height: 40rem;
      max-height: calc(100vh - 6rem); border-radius: 0.75rem; display: flex; z-index: 2147483647;
      overflow: hidden; left: unset; background-color: #F3F4F6;user-select: none;
    `),
                  e),
                ),
                o(),
                (this.title = "Exit (ESC)"),
                (t.innerHTML = h.close),
                document.addEventListener("keydown", d));
          }),
          p.draggable)
        ) {
          var s = n;
          var l = p.dragAxis || "both";
          let i = !1,
            d,
            r;
          s.addEventListener("mousedown", function (e) {
            (i = !0), (d = e.clientX - s.offsetLeft), (r = e.clientY - s.offsetTop);
          }),
            document.addEventListener("mousemove", function (e) {
              var t, n, o;
              i &&
                ((s.style.transition = "none"),
                (s.style.cursor = "grabbing"),
                (t = document.getElementById(c)) &&
                  ((t.style.display = "none"), (s.querySelector("div").innerHTML = h.open)),
                (t = e.clientX - d),
                (e = window.innerHeight - e.clientY - r),
                (o = s.getBoundingClientRect()),
                (n = window.innerWidth - o.width),
                (o = window.innerHeight - o.height),
                ("x" !== l && "both" !== l) ||
                  s.style.setProperty(`--${a}-left`, Math.max(0, Math.min(t, n)) + "px"),
                ("y" !== l && "both" !== l) ||
                  s.style.setProperty(`--${a}-bottom`, Math.max(0, Math.min(e, o)) + "px"));
            }),
            document.addEventListener("mouseup", function () {
              (i = !1), (s.style.transition = ""), (s.style.cursor = "pointer");
            });
        }
      }
      2048 < i.length &&
        console.error(
          "The URL is too long, please reduce the number of inputs to prevent the bot from failing to load",
        ),
        document.getElementById(a) || t();
    } else console.error(n + " is empty or token is not provided");
  }
  function d(e) {
    var t;
    "Escape" === e.key &&
      ((e = document.getElementById(c)), (t = document.getElementById(a)), e) &&
      "none" !== e.style.display &&
      ((e.style.display = "none"), (t.querySelector("div").innerHTML = h.open));
  }
  document.addEventListener("keydown", d),
    // p?.dynamicScript ? e() : document.body.onload = e
    e();
}
