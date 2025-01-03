import {
  ElProgress,
  ElSlider
} from "./chunk-WMQUZUT2.js";
import "./chunk-O3YQPVDG.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  normalizeClass,
  onMounted,
  openBlock,
  ref,
  renderList,
  toDisplayString,
  unref,
  vShow,
  watchEffect,
  withDirectives
} from "./chunk-SSSTV3QS.js";
import "./chunk-G3PMV62Z.js";

// node_modules/@escook/vitepress-theme/dist/chunk/EscookMusicBall-BkDBnoZh.js
import { useData as f } from "vitepress";
var X = "data:image/gif;base64,R0lGODlhSABIAPfCAP/1+f9vn//i7P/7/P9rnf+Yuv94pf/6+/9xoP9rnP/9/v/o8P/m7v90ov/u9P/o7/+Ksf/8/f9zof9qnP/x9v+gwP9xof/+/v/0+P/n7//p8f/s8v95pf/7/f+qxv98p/+pxv/Q3/+rx//9/f9nmv9yof/4+//u8//z9//v9P/t8/+80v9pm//m7/+Zu/+dvf+80/9un/+Yu/9tnf9unv9nmf/d6P9tnv93pf+Gr/95pv/w9f9woP90o//y9v/c6P+Os//q8f/r8f+JsP9zov91o/+Rtf+hwf+vyv99qP+Aqv+Aq//k7f/p8P9+qf/K3P/5+//3+v/3+f/d6f/2+f/r8v+Frv/v9f+Drf/6/P9qm/92pP+Ir/+40P/f6f99qf/U4/+Jsf/P3/+VuP9om//S4f/L3f/W5P96p/+St/+Msv98qP+90//O3v/b5//T4f/T4v/R4P/h6/9wn/9omv/l7v/C1v+IsP+1zf/g6//4+v+jwf/y9/+50f+wy/+fv//e6f+Ptf+yzP/X5P/W4//E1/+bvf/a5v/I2v+CrP/C1//x9f+UuP++1P+pxf+Qtf+tyP/L3P+Frf+Ns//f6v/Z5v/A1f9snf+PtP/D1/+lw//B1f+nxP+kw/+Grv+DrP/M3f/J2//U4v+mw//l7f+gv/+hwP/c5/+2zv+evv/j7f+tyf/j7P/G2f+Rtv/1+P+mxP/Z5f+Hr//O3/96pv+Lsf/s8/+2z/+jwv/g6v+Ut//a5/+Vuf9/qv/H2v9/qf+Erf9mmf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTczRTY3QTRGODczMTFFQkI0RjFFNzNEMDE1NTkzOUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTczRTY3QTVGODczMTFFQkI0RjFFNzNEMDE1NTkzOUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NzNFNjdBMkY4NzMxMUVCQjRGMUU3M0QwMTU1OTM5QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NzNFNjdBM0Y4NzMxMUVCQjRGMUU3M0QwMTU1OTM5QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2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";
var q = ["src", "autoplay", "loop"];
var b = ["src", "autoplay"];
var P = { class: "escook-music-ball__inner" };
var z = { class: "escook-play-pause" };
var _ = { class: "iconfont icon-playfill" };
var $ = { class: "iconfont icon-pause" };
var AA = { class: "escook-time" };
var QA = { class: "escook-duration" };
var CA = { class: "escook-volume" };
var lA = createBaseVNode("span", { class: "iconfont icon-music_list" }, null, -1);
var BA = [
  lA
];
var oA = {
  key: 2,
  class: "escook-music-list"
};
var EA = ["onClick"];
var IA = {
  key: 0,
  src: X,
  alt: "",
  class: "image-live"
};
var eA = createBaseVNode("div", { class: "escook-music-list-sep" }, null, -1);
var iA = defineComponent({
  __name: "EscookMusicBall",
  setup(aA) {
    const { site: V } = f(), E = V.value.themeConfig.musicBall, C = ref(null), c = ref(0), D = ref(0), k = ref(0), I = ref(false), J = ref(50), e = ref(false), w = ref(0), U = ref(!!E.autoplay), i = ref(false), h = computed(() => {
      var A;
      return E.src || ((A = E.list) == null ? void 0 : A.length) === 1;
    }), m = computed(() => {
      var A, Q;
      return E.src || ((Q = (A = E.list) == null ? void 0 : A[0]) == null ? void 0 : Q.src);
    }), Y = computed(() => E.list || []), G = computed({
      get() {
        return k.value / c.value * 100 || 0;
      },
      set(A) {
        D.value = c.value * A / 100, !I.value && C.value && (C.value.currentTime = D.value);
      }
    }), x = computed(() => u(c.value)), d = computed(() => u(k.value));
    watchEffect(() => {
      C.value && (e.value = false, C.value.volume = J.value / 100);
    }), watchEffect(() => {
      C.value && (C.value.muted = e.value);
    }), onMounted(() => {
      const A = C.value;
      A == null || A.addEventListener("play", () => {
        I.value = true;
      }), A == null || A.addEventListener("pause", () => {
        I.value = false;
      }), A == null || A.addEventListener("timeupdate", () => {
        c.value = A.duration, k.value = A.currentTime;
      }), A == null || A.addEventListener("canplay", () => {
        c.value = A.duration;
      }), A == null || A.addEventListener("ended", () => {
        w.value + 1 > Y.value.length - 1 ? w.value = 0 : w.value++;
      });
    });
    const N = () => {
      var A, Q;
      I.value = !I.value, I.value ? (A = C.value) == null || A.play() : (Q = C.value) == null || Q.pause(), !h.value && !U.value && (U.value = true);
    }, j = () => {
      C.value && (C.value.currentTime = D.value);
    }, y = (A) => {
      U.value = true, w.value = A;
    }, r = () => {
      i.value = false;
    };
    function u(A) {
      A = Number(A);
      var Q = Math.floor(A % 3600 / 60) || 0, B = Math.floor(A % 3600 % 60) || 0;
      return `${Q}:${B.toString().padStart(2, "0")}`;
    }
    return (A, Q) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["escook-music-ball", i.value ? "active" : ""]),
      onMouseleave: r
    }, [
      h.value ? (openBlock(), createElementBlock("audio", {
        key: 0,
        class: "audio",
        src: m.value,
        autoplay: unref(E).autoplay,
        loop: unref(E).loop,
        style: { display: "none" },
        ref_key: "audioRef",
        ref: C
      }, null, 8, q)) : (openBlock(), createElementBlock("audio", {
        key: 1,
        class: "audio",
        src: Y.value[w.value].src,
        autoplay: U.value,
        style: { display: "none" },
        ref_key: "audioRef",
        ref: C
      }, null, 8, b)),
      createBaseVNode("div", P, [
        createBaseVNode("div", z, [
          withDirectives(createBaseVNode("span", _, null, 512), [
            [vShow, !I.value]
          ]),
          withDirectives(createBaseVNode("span", $, null, 512), [
            [vShow, I.value]
          ])
        ]),
        createBaseVNode("div", AA, toDisplayString(x.value) + " / " + toDisplayString(d.value), 1),
        createBaseVNode("div", QA, [
          createVNode(unref(ElSlider), {
            style: { width: "100%" },
            "show-tooltip": false,
            modelValue: G.value,
            "onUpdate:modelValue": Q[0] || (Q[0] = (B) => G.value = B),
            onChange: j
          }, null, 8, ["modelValue"])
        ]),
        createBaseVNode("div", CA, [
          createVNode(unref(ElSlider), {
            style: { width: "100%" },
            "show-tooltip": false,
            modelValue: J.value,
            "onUpdate:modelValue": Q[1] || (Q[1] = (B) => J.value = B)
          }, null, 8, ["modelValue"]),
          withDirectives(createBaseVNode("span", {
            class: "iconfont icon-ic_volume_off",
            onClick: Q[2] || (Q[2] = (B) => e.value = !e.value)
          }, null, 512), [
            [vShow, e.value]
          ]),
          withDirectives(createBaseVNode("span", {
            class: "iconfont icon-ic_volume_up",
            onClick: Q[3] || (Q[3] = (B) => e.value = !e.value)
          }, null, 512), [
            [vShow, !e.value]
          ])
        ]),
        h.value ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
          key: 0,
          class: "escook-music-list-button",
          onClick: Q[4] || (Q[4] = (B) => i.value = !i.value)
        }, BA))
      ]),
      createVNode(unref(ElProgress), {
        type: "circle",
        percentage: G.value,
        width: 50,
        "show-text": false,
        "stroke-width": 4,
        onClick: N
      }, null, 8, ["percentage"]),
      i.value ? (openBlock(), createElementBlock("div", oA, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(Y.value, (B, t) => (openBlock(), createElementBlock("div", {
          class: normalizeClass(["escook-music-list-item", w.value === t ? "active" : ""]),
          key: t,
          onClick: (gA) => y(t)
        }, [
          w.value === t ? (openBlock(), createElementBlock("img", IA)) : createCommentVNode("", true),
          createBaseVNode("span", null, toDisplayString(B.name), 1)
        ], 10, EA))), 128)),
        eA
      ])) : createCommentVNode("", true)
    ], 34));
  }
});
export {
  iA as default
};
//# sourceMappingURL=EscookMusicBall-BkDBnoZh-ZLZMD7CT.js.map