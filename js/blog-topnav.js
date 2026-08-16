/* 给 skip_render 的桌游页注入和 Fluid 顶栏同结构的导航 */
(function () {
  if (window.__blogTopnav) return;
  window.__blogTopnav = true;

  var LABELS = {
    home: "首页",
    archive: "归档",
    category: "分类",
    tag: "标签",
    about: "关于",
    links: "友链",
    gdc: "gdc"
  };

  var MENU = [
    { key: "home", href: "/", icon: "iconfont icon-home-fill" },
    { key: "archive", href: "/archives/", icon: "iconfont icon-archive-fill" },
    { key: "category", href: "/categories/", icon: "iconfont icon-category-fill" },
    { key: "tag", href: "/tags/", icon: "iconfont icon-tags-fill" },
    { key: "about", href: "/about/", icon: "iconfont icon-user-fill" },
    { key: "links", href: "/links/", icon: "iconfont icon-link-fill" },
    {
      key: "书影音",
      icon: "iconfont icon-douban-fill",
      children: [
        { key: "读过", href: "/books/" },
        { key: "看过", href: "/movies/" },
        { key: "玩过", href: "/games/" },
        { key: "桌游", href: "/boardgames/" }
      ]
    },
    { key: "gdc", href: "/gdc/", icon: "iconfont icon-xbox-fill" },
    {
      key: "自我记录",
      icon: "iconfont icon-bookmark",
      children: [
        { key: "现实游戏化", href: "/life/#game" },
        { key: "杂想日记", href: "/life/#notes" }
      ]
    },
    {
      key: "桌游生成器",
      icon: "iconfont icon-xbox-fill",
      children: [
        { key: "猜来猜趣", href: "/boardgame/guess/" },
        { key: "瞎掰王", href: "/boardgame/bluff/" },
        { key: "土狼在笑你", href: "/boardgame/coyote/" },
        { key: "多数派", href: "/boardgame/GreenTeamWins/" },
        { key: "独家专辑", href: "/boardgame/discCover/" }
      ]
    }
  ];

  function addCss(href) {
    if (document.querySelector('link[href="' + href + '"]')) return;
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }

  function labelOf(item) {
    return LABELS[item.key] || item.key;
  }

  function isOn(href) {
    if (!href) return false;
    var path = location.pathname.replace(/index\.html$/, "");
    var target = href.split("#")[0];
    return path.indexOf(target) === 0 && target.length > 1
      ? path.indexOf(target) === 0
      : path === target || path === target.replace(/\/$/, "") + "/";
  }

  function itemOn(item) {
    if (item.href && isOn(item.href)) return true;
    if (item.children) {
      for (var i = 0; i < item.children.length; i++) {
        if (isOn(item.children[i].href)) return true;
      }
    }
    return false;
  }

  function renderItem(item) {
    var on = itemOn(item) ? " is-on" : "";
    if (item.children) {
      var kids = item.children.map(function (child) {
        return '<a href="' + child.href + '">' + child.key + "</a>";
      }).join("");
      return (
        '<li class="blog-topnav__item">' +
          '<a class="blog-topnav__link' + on + '" href="javascript:;">' +
            (item.icon ? '<i class="' + item.icon + '"></i>' : "") +
            "<span>" + labelOf(item) + "</span>" +
          "</a>" +
          '<div class="blog-topnav__drop">' + kids + "</div>" +
        "</li>"
      );
    }
    return (
      '<li class="blog-topnav__item">' +
        '<a class="blog-topnav__link' + on + '" href="' + item.href + '">' +
          (item.icon ? '<i class="' + item.icon + '"></i>' : "") +
          "<span>" + labelOf(item) + "</span>" +
        "</a>" +
      "</li>"
    );
  }

  function mount() {
    addCss("//at.alicdn.com/t/font_1749284_hj8rtnfg7um.css");
    addCss("//at.alicdn.com/t/font_1736178_lbnruvf0jn.css");
    addCss("/css/blog-topnav.css");

    var nav = document.createElement("nav");
    nav.className = "blog-topnav";
    nav.id = "blogTopnav";
    nav.innerHTML =
      '<div class="blog-topnav__inner">' +
        '<a class="blog-topnav__brand" href="/">R君的秘密基地</a>' +
        '<button type="button" class="blog-topnav__toggle" aria-label="打开菜单"><span></span><span></span><span></span></button>' +
        '<ul class="blog-topnav__menu">' + MENU.map(renderItem).join("") + "</ul>" +
      "</div>";

    document.documentElement.classList.add("blog-topnav-on");
    document.body.classList.add("blog-topnav-on");
    document.body.insertBefore(nav, document.body.firstChild);

    var toggle = nav.querySelector(".blog-topnav__toggle");
    toggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
    });

    nav.querySelectorAll(".blog-topnav__item").forEach(function (item) {
      var drop = item.querySelector(".blog-topnav__drop");
      if (!drop) return;
      item.querySelector(".blog-topnav__link").addEventListener("click", function (e) {
        if (window.matchMedia("(max-width: 980px)").matches) {
          e.preventDefault();
          item.classList.toggle("is-open");
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
