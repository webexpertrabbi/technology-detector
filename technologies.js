// technologies.js

if (typeof window.TECHNOLOGIES_DB === "undefined") {
  window.TECHNOLOGIES_DB = {
    wordpress: {
      name: "WordPress",
      category: "CMS",
      icon: "icons/tech/wordpress.png",
      rules: {
        meta: { generator: /WordPress/i },
        scripts: [/\/wp-content\//i, /\/wp-includes\//i],
      },
    },
    joomla: {
      name: "Joomla!",
      category: "CMS",
      icon: "icons/tech/joomla.png",
      rules: {
        meta: { generator: /Joomla!/i },
      },
    },
    shopify: {
      name: "Shopify",
      category: "Ecommerce",
      icon: "icons/tech/shopify.png",
      rules: {
        dom: { Shopify: { exists: true } },
      },
    },
    react: {
      name: "React",
      category: "JavaScript Frameworks",
      icon: "icons/tech/react.png",
      rules: {
        dom: { React: { exists: true } },
        html: [/ data-reactroot/i],
      },
    },
    jquery: {
      name: "jQuery",
      category: "JavaScript Libraries",
      icon: "icons/tech/jquery.webp",
      rules: {
        scripts: [/jquery\.js/i, /jquery\.min\.js/i],
        dom: { jQuery: { exists: true } },
      },
    },
    drupal: {
      name: "Drupal",
      category: "CMS",
      icon: "icons/tech/drupal.png",
      rules: {
        meta: { generator: /Drupal/i },
        scripts: [/drupal.js/i],
      },
    },
    "facebook-pixel": {
      name: "Facebook Pixel",
      category: "Analytics", // সঠিক ক্যাটাগরি
      icon: "icons/tech/facebook-pixel.webp",
      rules: {
        scripts: [/connect\.facebook\.net/i],
        dom: { fbq: { exists: true } },
      },
    },
    "google-tag-manager": {
      name: "Google Tag Manager",
      category: "Tag Managers", // সঠিক ক্যাটাগরি
      icon: "icons/tech/gtm.png",
      rules: {
        scripts: [/googletagmanager\.com\/gtm\.js/i],
      },
    },
    "google-adsense": {
      name: "Google AdSense",
      category: "Advertising", // সঠিক ক্যাটাগরি
      icon: "icons/tech/adsense.png",
      rules: {
        scripts: [/adsbygoogle\.js/i],
      },
    },

    // === JavaScript Frameworks ===
    "next-js": {
      name: "Next.js",
      category: "Web Frameworks", // Next.js একটি ফ্রেমওয়ার্ক
      icon: "icons/tech/nextjs.png",
      rules: {
        dom: { __NEXT_DATA__: { exists: true } },
        html: [/<script id="__NEXT_DATA__"/i],
      },
    },
    "vue-js": {
      name: "Vue.js",
      category: "JavaScript Frameworks",
      icon: "icons/tech/vuejs.png",
      rules: {
        dom: { Vue: { exists: true } },
      },
    },
    angular: {
      name: "Angular",
      category: "JavaScript Frameworks",
      icon: "icons/tech/angular.png",
      rules: {
        dom: { ng: { exists: true } },
      },
    },

    // === Marketing Automation & CRM ===
    hubspot: {
      name: "HubSpot",
      category: "Marketing Automation", // সঠিক ক্যাটাগরি
      icon: "icons/tech/hubspot.png",
      rules: {
        scripts: [/js\.hs-scripts\.com/i],
      },
    },
    salesforce: {
      name: "Salesforce",
      category: "CRM",
      icon: "icons/tech/salesforce.png",
      rules: {
        scripts: [/salesforce\.com/i, /force\.com/i],
      },
    },

    // === Web Servers ===
    nginx: {
      name: "Nginx",
      category: "Web Servers",
      icon: "icons/tech/nginx.png",
      rules: {
        headers: { server: /nginx/i },
      },
    },
    apache: {
      name: "Apache",
      category: "Web Servers",
      icon: "icons/tech/apache.png",
      rules: {
        headers: { server: /apache/i },
      },
    },
    litespeed: {
      name: "LiteSpeed",
      category: "Web Servers",
      icon: "icons/tech/litespeed.png",
      rules: {
        headers: { server: /litespeed/i },
      },
    },

    // === CDN ===
    "amazon-cloudfront": {
      name: "Amazon CloudFront",
      category: "CDN",
      icon: "icons/tech/cloudfront.png",
      rules: {
        headers: {
          "x-cache": /cloudfront/i,
          via: /cloudfront/i,
        },
      },
    },
    bunnycdn: {
      name: "Bunny CDN",
      category: "CDN",
      icon: "icons/tech/bunnycdn.png",
      rules: {
        scripts: [/b-cdn\.net/i],
      },
    },

    // === UI Frameworks ===
    bootstrap: {
      name: "Bootstrap",
      category: "UI Frameworks",
      icon: "icons/tech/bootstrap.png",
      rules: {
        scripts: [/bootstrap\.js/i, /bootstrap\.min\.js/i],
      },
    },
    tailwindcss: {
      name: "Tailwind CSS",
      category: "UI Frameworks",
      icon: "icons/tech/tailwindcss.png",
      rules: {
        // Tailwind সনাক্ত করা কঠিন, তবে এই ক্লাসগুলো একটি ভালো নির্দেশক
        html: [' class="[^"]*(lg:|md:|sm:)[^"]*'],
      },
    },

    // === CMS ===
    drupal: {
      name: "Drupal",
      category: "CMS",
      icon: "icons/tech/drupal.png",
      rules: { meta: { generator: /Drupal/i }, scripts: [/drupal\.js/i] },
    },
    ghost: {
      name: "Ghost",
      category: "CMS",
      icon: "icons/tech/ghost.png",
      rules: { meta: { generator: /Ghost/i } },
    },
    magento: {
      name: "Magento",
      category: "Ecommerce",
      icon: "icons/tech/magento.png",
      rules: {
        dom: { Mage: { exists: true } },
        scripts: [/mage\//, /magento\.js/],
      },
    },
    prestashop: {
      name: "PrestaShop",
      category: "Ecommerce",
      icon: "icons/tech/prestashop.png",
      rules: { dom: { prestashop: { exists: true } } },
    },
    opencart: {
      name: "OpenCart",
      category: "Ecommerce",
      icon: "icons/tech/opencart.png",
      rules: { dom: { occart: { exists: true } } },
    },
    squarespace: {
      name: "Squarespace",
      category: "Website Builder",
      icon: "icons/tech/squarespace.png",
      rules: { dom: { Squarespace: { exists: true } } },
    },
    wix: {
      name: "Wix",
      category: "Website Builder",
      icon: "icons/tech/wix.png",
      rules: { dom: { wixBiSession: { exists: true } } },
    },
    typo3: {
      name: "TYPO3",
      category: "CMS",
      icon: "icons/tech/typo3.png",
      rules: { meta: { generator: /TYPO3/i } },
    },
    bitrix: {
      name: "Bitrix",
      category: "CMS",
      icon: "icons/tech/bitrix.png",
      rules: { scripts: [/bitrix/i] },
    },
    "craft-cms": {
      name: "Craft CMS",
      category: "CMS",
      icon: "icons/tech/craft-cms.png",
      rules: { headers: { "x-powered-by": /Craft CMS/i } },
    },
    webflow: {
      name: "Webflow",
      category: "Website Builder",
      icon: "icons/tech/webflow.png",
      rules: { html: [/data-wf-page/i] },
    },
    contentful: {
      name: "Contentful",
      category: "Headless CMS",
      icon: "icons/tech/contentful.png",
      rules: { scripts: [/contentful\.js/i] },
    },
    strapi: {
      name: "Strapi",
      category: "Headless CMS",
      icon: "icons/tech/strapi.png",
      rules: { dom: { strapi: { exists: true } } },
    },

    // === JavaScript Frameworks & Libraries ===
    svelte: {
      name: "Svelte",
      category: "JavaScript Frameworks",
      icon: "icons/tech/svelte.png",
      rules: { dom: { __svelte__: { exists: true } } },
    },
    "ember-js": {
      name: "Ember.js",
      category: "JavaScript Frameworks",
      icon: "icons/tech/ember.png",
      rules: { dom: { Ember: { exists: true } } },
    },
    "backbone-js": {
      name: "Backbone.js",
      category: "JavaScript Frameworks",
      icon: "icons/tech/backbone.png",
      rules: { dom: { Backbone: { exists: true } } },
    },
    "alpine-js": {
      name: "Alpine.js",
      category: "JavaScript Frameworks",
      icon: "icons/tech/alpinejs.png",
      rules: { html: [/x-data/i] },
    },
    "moment-js": {
      name: "Moment.js",
      category: "JavaScript Libraries",
      icon: "icons/tech/momentjs.png",
      rules: { dom: { moment: { exists: true } } },
    },
    lodash: {
      name: "Lodash",
      category: "JavaScript Libraries",
      icon: "icons/tech/lodash.png",
      rules: { dom: { _: { property: "VERSION" } } },
    },
    gsap: {
      name: "GSAP",
      category: "JavaScript Libraries",
      icon: "icons/tech/gsap.png",
      rules: { dom: { gsap: { exists: true } } },
    },
    "three-js": {
      name: "Three.js",
      category: "JavaScript Libraries",
      icon: "icons/tech/threejs.png",
      rules: { dom: { THREE: { exists: true } } },
    },
    "d3-js": {
      name: "D3.js",
      category: "JavaScript Libraries",
      icon: "icons/tech/d3.png",
      rules: { dom: { d3: { exists: true } } },
    },
    "chart-js": {
      name: "Chart.js",
      category: "JavaScript Libraries",
      icon: "icons/tech/chartjs.png",
      rules: { dom: { Chart: { exists: true } } },
    },
    axios: {
      name: "Axios",
      category: "JavaScript Libraries",
      icon: "icons/tech/axios.png",
      rules: { dom: { axios: { exists: true } } },
    },
    requirejs: {
      name: "RequireJS",
      category: "JavaScript Libraries",
      icon: "icons/tech/requirejs.png",
      rules: { dom: { requirejs: { exists: true } } },
    },
    handlebars: {
      name: "Handlebars",
      category: "JavaScript Libraries",
      icon: "icons/tech/handlebars.png",
      rules: { dom: { Handlebars: { exists: true } } },
    },
    "mustache-js": {
      name: "Mustache.js",
      category: "JavaScript Libraries",
      icon: "icons/tech/mustache.png",
      rules: { dom: { Mustache: { exists: true } } },
    },
    "anime-js": {
      name: "Anime.js",
      category: "JavaScript Libraries",
      icon: "icons/tech/animejs.png",
      rules: { dom: { anime: { exists: true } } },
    },
    "jquery-ui": {
      name: "jQuery UI",
      category: "JavaScript Libraries",
      icon: "icons/tech/jQuery-ui.webp",
      rules: {
        scripts: [/jquery-ui\.js/, /jquery-ui\.min\.js/],
        dom: { "jQuery.ui": { exists: true } },
      },
    },
    slick: {
      name: "Slick",
      category: "JavaScript Libraries",
      icon: "icons/tech/slick.png",
      rules: { dom: { "jQuery.fn.slick": { exists: true } } },
    },

    // === Web Frameworks (Backend) ===
    laravel: {
      name: "Laravel",
      category: "Web Frameworks",
      icon: "icons/tech/laravel.png",
      rules: { headers: { "set-cookie": /laravel_session/i } },
    },
    symfony: {
      name: "Symfony",
      category: "Web Frameworks",
      icon: "icons/tech/symfony.png",
      rules: { headers: { "x-symfony-cache": /.*/ } },
    },
    codeigniter: {
      name: "CodeIgniter",
      category: "Web Frameworks",
      icon: "icons/tech/codeigniter.png",
      rules: { headers: { "set-cookie": /ci_session/i } },
    },
    django: {
      name: "Django",
      category: "Web Frameworks",
      icon: "icons/tech/django.png",
      rules: { headers: { "set-cookie": /csrftoken/i } },
    },
    flask: {
      name: "Flask",
      category: "Web Frameworks",
      icon: "icons/tech/flask.png",
      rules: { headers: { server: /Werkzeug/i } },
    },
    "ruby-on-rails": {
      name: "Ruby on Rails",
      category: "Web Frameworks",
      icon: "icons/tech/rails.png",
      rules: { meta: { "csrf-param": /authenticity_token/i } },
    },
    express: {
      name: "Express",
      category: "Web Frameworks",
      icon: "icons/tech/express.png",
      rules: { headers: { "x-powered-by": /Express/i } },
    },
    spring: {
      name: "Spring",
      category: "Web Frameworks",
      icon: "icons/tech/spring.png",
      rules: { headers: { "x-application-context": /.*/ } },
    },
    "asp-net": {
      name: "ASP.NET",
      category: "Web Frameworks",
      icon: "icons/tech/aspnet.png",
      rules: { headers: { "x-aspnet-version": /.*/ }, html: [/__VIEWSTATE/] },
    },

    // === Analytics & Tracking ===
    matomo: {
      name: "Matomo",
      category: "Analytics",
      icon: "icons/tech/matomo.png",
      rules: { scripts: [/matomo\.js/, /piwik\.js/] },
    },
    hotjar: {
      name: "Hotjar",
      category: "Analytics",
      icon: "icons/tech/hotjar.png",
      rules: { scripts: [/hotjar-\.js/i] },
    },
    mixpanel: {
      name: "Mixpanel",
      category: "Analytics",
      icon: "icons/tech/mixpanel.png",
      rules: { dom: { mixpanel: { exists: true } } },
    },
    amplitude: {
      name: "Amplitude",
      category: "Analytics",
      icon: "icons/tech/amplitude.png",
      rules: { dom: { amplitude: { exists: true } } },
    },
    "crazy-egg": {
      name: "Crazy Egg",
      category: "Analytics",
      icon: "icons/tech/crazyegg.png",
      rules: { scripts: [/script\.crazyegg\.com/i] },
    },
    "yandex-metrika": {
      name: "Yandex.Metrika",
      category: "Analytics",
      icon: "icons/tech/yandex.png",
      rules: { dom: { "Ya.Metrika": { exists: true } } },
    },
    "google-analytics": {
      name: "Google Analytics",
      category: "Analytics", // সঠিক ক্যাটাগরি
      icon: "icons/tech/google-analytics.webp",
      rules: {
        dom: { gaGlobal: { exists: true }, dataLayer: { exists: true } },
        scripts: [
          /googletagmanager\.com\/gtag\/js/i,
          /google-analytics\.com\/ga\.js/,
        ],
      },
    },

    // === Marketing & Advertising ===
    klaviyo: {
      name: "Klaviyo",
      category: "Marketing Automation",
      icon: "icons/tech/klaviyo.png",
      rules: { scripts: [/klaviyo\.com/i] },
    },
    activecampaign: {
      name: "ActiveCampaign",
      category: "Marketing Automation",
      icon: "icons/tech/activecampaign.png",
      rules: { dom: { vgo: { exists: true } } },
    },
    intercom: {
      name: "Intercom",
      category: "Live Chat",
      icon: "icons/tech/intercom.png",
      rules: { dom: { Intercom: { exists: true } } },
    },
    drift: {
      name: "Drift",
      category: "Live Chat",
      icon: "icons/tech/drift.png",
      rules: { dom: { drift: { exists: true } } },
    },
    pardot: {
      name: "Pardot",
      category: "Marketing Automation",
      icon: "icons/tech/pardot.png",
      rules: { html: [/piHostname = 'pi\.pardot\.com'/i] },
    },
    taboola: {
      name: "Taboola",
      category: "Advertising",
      icon: "icons/tech/taboola.png",
      rules: { dom: { _taboola: { exists: true } } },
    },
    outbrain: {
      name: "Outbrain",
      category: "Advertising",
      icon: "icons/tech/outbrain.png",
      rules: { dom: { Outbrain: { exists: true } } },
    },
    criteo: {
      name: "Criteo",
      category: "Advertising",
      icon: "icons/tech/criteo.png",
      rules: { dom: { criteo_pubtag: { exists: true } } },
    },

    // === Fonts & Icons ===
    "google-fonts": {
      name: "Google Fonts",
      category: "Fonts",
      icon: "icons/tech/google-fonts.png",
      rules: { html: [/<link[^>]+href="[^"]*fonts\.googleapis\.com/i] },
    },
    "adobe-fonts": {
      name: "Adobe Fonts",
      category: "Fonts",
      icon: "icons/tech/adobe-fonts.png",
      rules: { scripts: [/use\.typekit\.net/i] },
    },
    "font-awesome": {
      name: "Font Awesome",
      category: "Icons",
      icon: "icons/tech/fontawesome.png",
      rules: {
        html: [
          /<link[^>]+href="[^"]*fontawesome\.com/i,
          /<script[^>]+src="[^"]*fontawesome\.com/i,
        ],
      },
    },

    // === Build Tools & Servers ===
    webpack: {
      name: "Webpack",
      category: "Build Tools",
      icon: "icons/tech/webpack.png",
      rules: { dom: { webpackJsonp: { exists: true } } },
    },
    "microsoft-iis": {
      name: "Microsoft-IIS",
      category: "Web Servers",
      icon: "icons/tech/iis.png",
      rules: { headers: { server: /microsoft-iis/i } },
    },
    openresty: {
      name: "OpenResty",
      category: "Web Servers",
      icon: "icons/tech/openresty.png",
      rules: { headers: { server: /openresty/i } },
    },

    // === Video & Audio ===
    youtube: {
      name: "YouTube",
      category: "Video Players",
      icon: "icons/tech/youtube.png",
      rules: { html: [/<iframe[^>]+src="[^"]*youtube\.com/i] },
    },
    vimeo: {
      name: "Vimeo",
      category: "Video Players",
      icon: "icons/tech/vimeo.png",
      rules: { html: [/<iframe[^>]+src="[^"]*player\.vimeo\.com/i] },
    },
    "video-js": {
      name: "Video.js",
      category: "Video Players",
      icon: "icons/tech/videojs.png",
      rules: { dom: { videojs: { exists: true } } },
    },
    "jw-player": {
      name: "JW Player",
      category: "Video Players",
      icon: "icons/tech/jwplayer.png",
      rules: { dom: { jwplayer: { exists: true } } },
    },
    soundcloud: {
      name: "SoundCloud",
      category: "Audio Players",
      icon: "icons/tech/soundcloud.png",
      rules: { html: [/<iframe[^>]+src="[^"]*soundcloud\.com/i] },
    },

    // === Payment & Security ===
    stripe: {
      name: "Stripe",
      category: "Payment Processors",
      icon: "icons/tech/stripe.png",
      rules: {
        dom: { Stripe: { exists: true } },
        scripts: [/js\.stripe\.com/i],
      },
    },
    paypal: {
      name: "PayPal",
      category: "Payment Processors",
      icon: "icons/tech/paypal.png",
      rules: {
        dom: { paypal: { exists: true } },
        scripts: [/paypal\.com\/sdk\/js/],
      },
    },
    braintree: {
      name: "Braintree",
      category: "Payment Processors",
      icon: "icons/tech/braintree.png",
      rules: { scripts: [/js\.braintreegateway\.com/i] },
    },
    recaptcha: {
      name: "reCAPTCHA",
      category: "Security",
      icon: "icons/tech/recaptcha.png",
      rules: { scripts: [/recaptcha\/api\.js/i] },
    },
    hcaptcha: {
      name: "hCaptcha",
      category: "Security",
      icon: "icons/tech/hcaptcha.png",
      rules: { scripts: [/hcaptcha\.com\/1/i] },
    },

    // === Static Site Generators ===
    gatsby: {
      name: "Gatsby",
      category: "Static Site Generators",
      icon: "icons/tech/gatsby.png",
      rules: {
        dom: { ___emitter: { exists: true } },
        meta: { generator: /Gatsby/i },
      },
    },
    hugo: {
      name: "Hugo",
      category: "Static Site Generators",
      icon: "icons/tech/hugo.png",
      rules: { meta: { generator: /Hugo/i } },
    },
    jekyll: {
      name: "Jekyll",
      category: "Static Site Generators",
      icon: "icons/tech/jekyll.png",
      rules: { meta: { generator: /Jekyll/i } },
    },
    eleventy: {
      name: "Eleventy",
      category: "Static Site Generators",
      icon: "icons/tech/eleventy.png",
      rules: { meta: { generator: /Eleventy/i } },
    },
    "next-js-ssg": {
      name: "Next.js (SSG)",
      category: "Static Site Generators",
      icon: "icons/tech/nextjs.png",
      rules: { dom: { __NEXT_DATA__: { exists: true } } },
    }, // Same as framework, often used as SSG
    "nuxt-js": {
      name: "Nuxt.js",
      category: "Web Frameworks",
      icon: "icons/tech/nuxt.png",
      rules: { dom: { __NUXT__: { exists: true } } },
    },

    // === Miscellaneous ===
    disqus: {
      name: "Disqus",
      category: "Comments",
      icon: "icons/tech/disqus.png",
      rules: { dom: { DISQUS: { exists: true } } },
    },
    auth0: {
      name: "Auth0",
      category: "Authentication",
      icon: "icons/tech/auth0.png",
      rules: { scripts: [/cdn\.auth0\.com/i] },
    },
    algolia: {
      name: "Algolia",
      category: "Search",
      icon: "icons/tech/algolia.png",
      rules: { dom: { algoliasearch: { exists: true } } },
    },
    graphql: {
      name: "GraphQL",
      category: "APIs",
      icon: "icons/tech/graphql.png",
      rules: { dom: { __APOLLO_CLIENT__: { exists: true } } },
    },
    firebase: {
      name: "Firebase",
      category: "Backend Services",
      icon: "icons/tech/firebase.png",
      rules: { dom: { firebase: { exists: true } } },
    },
    sendgrid: {
      name: "SendGrid",
      category: "Transactional Email",
      icon: "icons/tech/sendgrid.png",
      rules: { scripts: [/sendgrid\.com/i] },
    },
    mailgun: {
      name: "Mailgun",
      category: "Transactional Email",
      icon: "icons/tech/mailgun.png",
      rules: { html: [/mailgun_validator/i] },
    },
    pwa: {
      name: "PWA",
      category: "Mobile",
      icon: "icons/tech/pwa.png",
      rules: { html: [/<link[^>]+rel="manifest"/i] },
    },
    "open-graph": {
      name: "Open Graph",
      category: "SEO",
      icon: "icons/tech/opengraph.png",
      rules: { meta: { property: /^og:/i } },
    },
    webassembly: {
      name: "WebAssembly",
      category: "Programming Languages",
      icon: "icons/tech/wasm.png",
      rules: { scripts: [/\.wasm$/i] },
    },

    // === Analytics & A/B Testing ===
    segment: {
      name: "Segment",
      category: "Analytics",
      icon: "icons/tech/segment.png",
      rules: { scripts: [/cdn\.segment\.com/i] },
    },
    heap: {
      name: "Heap",
      category: "Analytics",
      icon: "icons/tech/heap.png",
      rules: { dom: { heap: { exists: true } } },
    },
    kissmetrics: {
      name: "Kissmetrics",
      category: "Analytics",
      icon: "icons/tech/kissmetrics.png",
      rules: { scripts: [/i\.kissmetrics\.com/i] },
    },
    optimizely: {
      name: "Optimizely",
      category: "A/B Testing",
      icon: "icons/tech/optimizely.png",
      rules: { dom: { optimizely: { exists: true } } },
    },
    vwo: {
      name: "VWO",
      category: "A/B Testing",
      icon: "icons/tech/vwo.png",
      rules: { dom: { _vwo_code: { exists: true } } },
    },
    plausible: {
      name: "Plausible",
      category: "Analytics",
      icon: "icons/tech/plausible.png",
      rules: { scripts: [/plausible\.io\/js\/plausible\.js/i] },
    },

    // === Customer Support & Live Chat ===
    "zendesk-chat": {
      name: "Zendesk Chat",
      category: "Live Chat",
      icon: "icons/tech/zendesk.png",
      rules: { scripts: [/v2\.zopim\.com/i] },
    },
    "tawk-to": {
      name: "Tawk.to",
      category: "Live Chat",
      icon: "icons/tech/twak-to.webp",
      rules: { scripts: [/embed\.tawk\.to/i] },
    },
    livechat: {
      name: "LiveChat",
      category: "Live Chat",
      icon: "icons/tech/livechat.png",
      rules: { dom: { __livechat: { exists: true } } },
    },
    freshdesk: {
      name: "Freshdesk",
      category: "Customer Support",
      icon: "icons/tech/freshdesk.png",
      rules: { scripts: [/euc-widget\.freshworks\.com\/widgets/i] },
    },

    // === Email Marketing ===
    mailerlite: {
      name: "MailerLite",
      category: "Email Marketing",
      icon: "icons/tech/mailerlite.png",
      rules: { scripts: [/static\.mailerlite\.com/i] },
    },
    sendinblue: {
      name: "Brevo (Sendinblue)",
      category: "Email Marketing",
      icon: "icons/tech/brevo.png",
      rules: { dom: { Sendinblue: { exists: true } } },
    },
    convertkit: {
      name: "ConvertKit",
      category: "Email Marketing",
      icon: "icons/tech/convertkit.png",
      rules: { scripts: [/f\.convertkit\.com/i] },
    },
    postmark: {
      name: "Postmark",
      category: "Transactional Email",
      icon: "icons/tech/postmark.png",
      rules: { headers: { server: /Postmark/i } },
    },

    // === JavaScript Libraries (Niche) ===
    "fabric-js": {
      name: "Fabric.js",
      category: "JavaScript Libraries",
      icon: "icons/tech/fabricjs.png",
      rules: { dom: { fabric: { exists: true } } },
    },
    "paper-js": {
      name: "Paper.js",
      category: "JavaScript Libraries",
      icon: "icons/tech/paperjs.png",
      rules: { dom: { paper: { exists: true } } },
    },
    "pixi-js": {
      name: "PixiJS",
      category: "JavaScript Libraries",
      icon: "icons/tech/pixijs.png",
      rules: { dom: { PIXI: { exists: true } } },
    },
    rxjs: {
      name: "RxJS",
      category: "JavaScript Libraries",
      icon: "icons/tech/rxjs.png",
      rules: { dom: { rxjs: { exists: true } } },
    },
    "date-fns": {
      name: "date-fns",
      category: "JavaScript Libraries",
      icon: "icons/tech/date-fns.png",
      rules: { dom: { dateFns: { exists: true } } },
    },
    "day-js": {
      name: "Day.js",
      category: "JavaScript Libraries",
      icon: "icons/tech/dayjs.png",
      rules: { dom: { dayjs: { exists: true } } },
    },
    formik: {
      name: "Formik",
      category: "JavaScript Libraries",
      icon: "icons/tech/formik.png",
      rules: { html: [/formik/i] },
    },

    // === UI Frameworks & CSS-in-JS ===
    bulma: {
      name: "Bulma",
      category: "UI Frameworks",
      icon: "icons/tech/bulma.png",
      rules: { html: [/<link[^>]+href="[^"]*bulma\.min\.css/i] },
    },
    foundation: {
      name: "Foundation",
      category: "UI Frameworks",
      icon: "icons/tech/foundation.png",
      rules: { html: [/<div [^>]*class="[^"]*row/i, /foundation\.css/i] },
    },
    "semantic-ui": {
      name: "Semantic UI",
      category: "UI Frameworks",
      icon: "icons/tech/semantic-ui.png",
      rules: { html: [/semantic\.min\.css/i] },
    },
    "styled-components": {
      name: "styled-components",
      category: "CSS-in-JS",
      icon: "icons/tech/styled-components.png",
      rules: { html: [/data-styled-version/i] },
    },
    emotion: {
      name: "Emotion",
      category: "CSS-in-JS",
      icon: "icons/tech/emotion.png",
      rules: { html: [/data-emotion/i] },
    },

    // === Databases ===
    mongodb: {
      name: "MongoDB",
      category: "Databases",
      icon: "icons/tech/mongodb.png",
      rules: { dom: { Meteor: { exists: true } } },
    }, // Often used with Meteor
    redis: {
      name: "Redis",
      category: "Databases",
      icon: "icons/tech/redis.png",
      rules: { headers: { "x-powered-by": /Redis/i } },
    },
    mariadb: {
      name: "MariaDB",
      category: "Databases",
      icon: "icons/tech/mariadb.png",
      rules: { headers: { server: /MariaDB/i } },
    },
    elasticsearch: {
      name: "Elasticsearch",
      category: "Databases",
      icon: "icons/tech/elasticsearch.png",
      rules: { dom: { elastic: { exists: true } } },
    },

    // === Web Servers & Platforms ===
    caddy: {
      name: "Caddy",
      category: "Web Servers",
      icon: "icons/tech/caddy.png",
      rules: { headers: { server: /Caddy/i } },
    },
    openlitespeed: {
      name: "OpenLiteSpeed",
      category: "Web Servers",
      icon: "icons/tech/openlitespeed.png",
      rules: { headers: { server: /OpenLiteSpeed/i } },
    },
    nodejs: {
      name: "Node.js",
      category: "Web Platforms",
      icon: "icons/tech/nodejs.png",
      rules: { headers: { "x-powered-by": /node/i } },
    },
    docker: {
      name: "Docker",
      category: "DevOps",
      icon: "icons/tech/docker.png",
      rules: { headers: { server: /Docker/i } },
    },
    kubernetes: {
      name: "Kubernetes",
      category: "DevOps",
      icon: "icons/tech/kubernetes.png",
      rules: { headers: { server: /Kubernetes/i } },
    },

    // === Advertising Networks ===
    "the-trade-desk": {
      name: "The Trade Desk",
      category: "Advertising",
      icon: "icons/tech/thetradedesk.png",
      rules: { scripts: [/insight\.adsrvr\.org/i] },
    },
    appnexus: {
      name: "AppNexus",
      category: "Advertising",
      icon: "icons/tech/appnexus.png",
      rules: { scripts: [/acdn\.adnxs\.com/i] },
    },
    "rubicon-project": {
      name: "Rubicon Project",
      category: "Advertising",
      icon: "icons/tech/rubicon.png",
      rules: { scripts: [/rubiconproject\.com/i] },
    },
    pubmatic: {
      name: "PubMatic",
      category: "Advertising",
      icon: "icons/tech/pubmatic.png",
      rules: { scripts: [/ads\.pubmatic\.com/i] },
    },

    // === Headless CMS ===
    sanity: {
      name: "Sanity",
      category: "Headless CMS",
      icon: "icons/tech/sanity.png",
      rules: { scripts: [/cdn\.sanity\.io/i] },
    },
    datocms: {
      name: "DatoCMS",
      category: "Headless CMS",
      icon: "icons/tech/datocms.png",
      rules: { meta: { generator: /DatoCMS/i } },
    },
    prismic: {
      name: "Prismic",
      category: "Headless CMS",
      icon: "icons/tech/prismic.png",
      rules: { dom: { prismic: { exists: true } } },
    },

    // === Authentication & Identity ===
    okta: {
      name: "Okta",
      category: "Authentication",
      icon: "icons/tech/okta.png",
      rules: { scripts: [/oktacdn\.com/i] },
    },
    "firebase-auth": {
      name: "Firebase Authentication",
      category: "Authentication",
      icon: "icons/tech/firebase.png",
      rules: { dom: { "firebase.auth": { exists: true } } },
    },

    // === Static Site Generators ===
    vuepress: {
      name: "VuePress",
      category: "Static Site Generators",
      icon: "icons/tech/vuepress.png",
      rules: { meta: { generator: /VuePress/i } },
    },
    docusaurus: {
      name: "Docusaurus",
      category: "Static Site Generators",
      icon: "icons/tech/docusaurus.png",
      rules: { meta: { generator: /Docusaurus/i } },
    },
    gridsome: {
      name: "Gridsome",
      category: "Static Site Generators",
      icon: "icons/tech/gridsome.png",
      rules: { meta: { generator: /Gridsome/i } },
    },

    // === Programming Languages & OS (from headers) ===
    php: {
      name: "PHP",
      category: "Programming Languages",
      icon: "icons/tech/php.png",
      rules: { headers: { "x-powered-by": /PHP/i } },
    },
    go: {
      name: "Go",
      category: "Programming Languages",
      icon: "icons/tech/go.png",
      rules: { headers: { server: /Go/i } },
    },
    ubuntu: {
      name: "Ubuntu",
      category: "Operating Systems",
      icon: "icons/tech/ubuntu.png",
      rules: { headers: { server: /Ubuntu/i } },
    },
    debian: {
      name: "Debian",
      category: "Operating Systems",
      icon: "icons/tech/debian.png",
      rules: { headers: { server: /Debian/i } },
    },
    centos: {
      name: "CentOS",
      category: "Operating Systems",
      icon: "icons/tech/centos.png",
      rules: { headers: { server: /CentOS/i } },
    },

    // === Push Notifications ===
    onesignal: {
      name: "OneSignal",
      category: "Push Notifications",
      icon: "icons/tech/onesignal.png",
      rules: { dom: { OneSignal: { exists: true } } },
    },
    pushengage: {
      name: "PushEngage",
      category: "Push Notifications",
      icon: "icons/tech/pushengage.png",
      rules: { dom: { _pe: { exists: true } } },
    },

    // === Accessibility ===
    userway: {
      name: "UserWay",
      category: "Accessibility",
      icon: "icons/tech/userway.png",
      rules: { dom: { _userway_config: { exists: true } } },
    },
    accessibe: {
      name: "AccessiBe",
      category: "Accessibility",
      icon: "icons/tech/accessibe.png",
      rules: { dom: { acsbState: { exists: true } } },
    },

    // === Other Technologies ===
    webrtc: {
      name: "WebRTC",
      category: "Web Technologies",
      icon: "icons/tech/webrtc.png",
      rules: { dom: { RTCPeerConnection: { exists: true } } },
    },
    amp: {
      name: "AMP",
      category: "Mobile",
      icon: "icons/tech/amp.png",
      rules: { html: [/<html[^>]+(amp|⚡)/i] },
    },
    mathjax: {
      name: "MathJax",
      category: "Web Technologies",
      icon: "icons/tech/mathjax.png",
      rules: { dom: { MathJax: { exists: true } } },
    },
    requirejs: {
      name: "RequireJS",
      category: "JavaScript Libraries",
      icon: "icons/tech/requirejs.png",
      rules: { dom: { requirejs: { exists: true } } },
    },
  };
}
