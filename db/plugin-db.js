// db/plugin-db.js

const PLUGIN_DB = {
  // === Page Builders ===
  elementor: {
    name: "Elementor",
    icon: "icons/plugins/elementor.png",
    category: "Page Builder",
  },
  "elementor-pro": {
    name: "Elementor Pro",
    icon: "icons/plugins/elementor.png",
    category: "Page Builder",
  },
  js_composer: {
    name: "WPBakery Page Builder",
    icon: "icons/plugins/wpbakery.png",
    category: "Page Builder",
  },
  "bb-plugin": {
    name: "Beaver Builder",
    icon: "icons/plugins/beaver-builder.png",
    category: "Page Builder",
  },
  "divi-builder": {
    name: "Divi Builder",
    icon: "icons/plugins/divi-builder.png",
    category: "Page Builder",
  },
  oxygen: {
    name: "Oxygen Builder",
    icon: "icons/plugins/oxygen.png",
    category: "Page Builder",
  },
  brizy: {
    name: "Brizy",
    icon: "icons/plugins/brizy.png",
    category: "Page Builder",
  },
  "siteorigin-panels": {
    name: "SiteOrigin Page Builder",
    icon: "icons/plugins/siteorigin.png",
    category: "Page Builder",
  },
  "themify-builder": {
    name: "Themify Builder",
    icon: "icons/plugins/themify-builder.png",
    category: "Page Builder",
  },
  zionbuilder: {
    name: "Zion Builder",
    icon: "icons/plugins/zionbuilder.png",
    category: "Page Builder",
  },
  "live-composer-page-builder": {
    name: "Live Composer",
    icon: "icons/plugins/live-composer.png",
    category: "Page Builder",
  },
  "brizy-pro": {
    name: "Brizy Pro",
    icon: "icons/plugins/brizy.png",
    category: "Page Builder",
  },
  "powerpack-lite-for-elementor": {
    name: "PowerPack for Elementor",
    icon: "icons/plugins/powerpack.png",
    category: "Elementor Addons",
  },
  "ultimate-addons-for-elementor": {
    name: "Ultimate Addons for Elementor",
    icon: "icons/plugins/uae.png",
    category: "Elementor Addons",
  },
  "qi-addons-for-elementor": {
    name: "Qi Addons",
    icon: "icons/plugins/qi-addons.webp",
    category: "Elementor Addons",
  },
  "master-addons": {
    name: "Master Addons for Elementor",
    icon: "icons/plugins/master-addons.png",
    category: "Elementor Addons",
  },
  "exclusive-addons-for-elementor": {
    name: "Exclusive Addons for Elementor",
    icon: "icons/plugins/exclusive-addons.png",
    category: "Elementor Addons",
  },

  // === Forms & Addons ===
  "contact-form-7": {
    name: "Contact Form 7",
    icon: "icons/plugins/contact-form-7.png",
    category: "Forms",
  },
  "wpforms-lite": {
    name: "WPForms",
    icon: "icons/plugins/wpforms.svg",
    category: "Forms",
  },
  gravityforms: {
    name: "Gravity Forms",
    icon: "icons/plugins/gravity-forms.png",
    category: "Forms",
  },
  "ninja-forms": {
    name: "Ninja Forms",
    icon: "icons/plugins/ninja-forms.png",
    category: "Forms",
  },
  fluentform: {
    name: "Fluent Forms",
    icon: "icons/plugins/fluentform.webp",
    category: "Forms",
  },
  formidable: {
    name: "Formidable Forms",
    icon: "icons/plugins/formidable-forms.png",
    category: "Forms",
  },
  "caldera-forms": {
    name: "Caldera Forms",
    icon: "icons/plugins/caldera-forms.png",
    category: "Forms",
  },
  "everest-forms": {
    name: "Everest Forms",
    icon: "icons/plugins/everest-forms.png",
    category: "Forms",
  },
  forminator: {
    name: "Forminator",
    icon: "icons/plugins/forminator.png",
    category: "Forms",
  },
  happyforms: {
    name: "HappyForms",
    icon: "icons/plugins/happyforms.png",
    category: "Forms",
  },
  weforms: {
    name: "weForms",
    icon: "icons/plugins/weforms.png",
    category: "Forms",
  },
  "arforms-lite": {
    name: "ARForms Lite",
    icon: "icons/plugins/arforms.png",
    category: "Forms",
  },
  quform: {
    name: "Quform",
    icon: "icons/plugins/quform.png",
    category: "Forms",
  },
  "fluent-smtp": {
    name: "FluentSMTP",
    icon: "icons/plugins/fluent-smtp.png",
    category: "Utilities",
  },

  // === SEO Addons & Niche ===
  "squirrly-seo": {
    name: "Squirrly SEO",
    icon: "icons/plugins/squirrly-seo.png",
    category: "SEO",
  },
  smartcrawl: {
    name: "SmartCrawl SEO",
    icon: "icons/plugins/smartcrawl.png",
    category: "SEO",
  },
  "slim-seo": {
    name: "Slim SEO",
    icon: "icons/plugins/slim-seo.png",
    category: "SEO",
  },
  "schema-pro": {
    name: "Schema Pro",
    icon: "icons/plugins/schema-pro.png",
    category: "SEO",
  },
  "wp-schema": {
    name: "WP Schema",
    icon: "icons/plugins/wp-schema.png",
    category: "SEO",
  },

  "wordpress-seo": {
    name: "Yoast SEO",
    icon: "icons/plugins/yoast-seo.png",
    category: "SEO",
  },
  "all-in-one-seo-pack": {
    name: "All in One SEO",
    icon: "icons/plugins/all-in-one-seo-pack.svg",
    category: "SEO",
  },
  "seo-by-rank-math": {
    name: "Rank Math SEO",
    icon: "icons/plugins/rank-math.png",
    category: "SEO",
  },
  "wp-seopress": {
    name: "SEOPress",
    icon: "icons/plugins/seopress.png",
    category: "SEO",
  },
  "the-seo-framework": {
    name: "The SEO Framework",
    icon: "icons/plugins/seo-framework.png",
    category: "SEO",
  },

  // === Ecommerce ===
  woocommerce: {
    name: "WooCommerce",
    icon: "icons/plugins/woocommerce.svg",
    category: "Ecommerce",
  },
  "easy-digital-downloads": {
    name: "Easy Digital Downloads",
    icon: "icons/plugins/easy-digital-downloads.png",
    category: "Ecommerce",
  },
  cartflows: {
    name: "CartFlows",
    icon: "icons/plugins/cartflows.png",
    category: "Ecommerce",
  },
  "dokan-lite": {
    name: "Dokan Multivendor",
    icon: "icons/plugins/dokan.webp",
    category: "Ecommerce",
  },
  "wc-vendors": {
    name: "WC Vendors",
    icon: "icons/plugins/wc-vendors.png",
    category: "Ecommerce",
  },
  "yith-woocommerce-wishlist": {
    name: "YITH WooCommerce Wishlist",
    icon: "icons/plugins/yith.png",
    category: "Ecommerce",
  },

  // === Membership & LMS ===
  memberpress: {
    name: "MemberPress",
    icon: "icons/plugins/memberpress.png",
    category: "Membership",
  },
  "paid-memberships-pro": {
    name: "Paid Memberships Pro",
    icon: "icons/plugins/pmpro.png",
    category: "Membership",
  },
  "sfwd-lms": {
    name: "LearnDash",
    icon: "icons/plugins/learndash.png",
    category: "LMS",
  },
  tutor: {
    name: "Tutor LMS",
    icon: "icons/plugins/tutor-lms.webp",
    category: "LMS",
  },
  lifterlms: {
    name: "LifterLMS",
    icon: "icons/plugins/lifterlms.png",
    category: "LMS",
  },

  // === Performance & Caching ===
  "wp-rocket": {
    name: "WP Rocket",
    icon: "icons/plugins/WP-Rocket.png",
    category: "Performance & Caching",
  },
  "w3-total-cache": {
    name: "W3 Total Cache",
    icon: "icons/plugins/w3-total-cache.png",
    category: "Performance & Caching",
  },
  "wp-super-cache": {
    name: "WP Super Cache",
    icon: "icons/plugins/wp-super-cache.png",
    category: "Performance & Caching",
  },
  "litespeed-cache": {
    name: "LiteSpeed Cache",
    icon: "icons/plugins/litespeed-cache.png",
    category: "Performance & Caching",
  },
  autoptimize: {
    name: "Autoptimize",
    icon: "icons/plugins/autoptimize.png",
    category: "Performance & Caching",
  },
  perfmatters: {
    name: "Perfmatters",
    icon: "icons/plugins/perfmatters.png",
    category: "Performance & Caching",
  },
  "wp-optimize": {
    name: "WP-Optimize",
    icon: "icons/plugins/wp-optimize.png",
    category: "Performance & Caching",
  },
  "hummingbird-performance": {
    name: "Hummingbird",
    icon: "icons/plugins/hummingbird.png",
    category: "Performance & Caching",
  },
  "sg-optimizer": {
    name: "SG Optimizer",
    icon: "icons/plugins/sg-optimizer.png",
    category: "Performance & Caching",
  },

  // === Security ===
  wordfence: {
    name: "Wordfence Security",
    icon: "icons/plugins/wordfence.png",
    category: "Security",
  },
  "better-wp-security": {
    name: "Solid Security (iThemes)",
    icon: "icons/plugins/ithemes-security.png",
    category: "Security",
  },
  "sucuri-scanner": {
    name: "Sucuri Security",
    icon: "icons/plugins/sucuri.png",
    category: "Security",
  },
  "all-in-one-wp-security-and-firewall": {
    name: "All-In-One WP Security",
    icon: "icons/plugins/aiowps.png",
    category: "Security",
  },
  "malcare-security": {
    name: "MalCare Security",
    icon: "icons/plugins/malcare.png",
    category: "Security",
  },
  "wp-cerber": {
    name: "WP Cerber Security",
    icon: "icons/plugins/wp-cerber.png",
    category: "Security",
  },
  ninjafirewall: {
    name: "NinjaFirewall",
    icon: "icons/plugins/ninjafirewall.png",
    category: "Security",
  },

  // === Sliders ===
  revslider: {
    name: "Slider Revolution",
    icon: "icons/plugins/slider-revolution.png",
    category: "Widgets & Sliders",
  },
  layerslider: {
    name: "LayerSlider",
    icon: "icons/plugins/layerslider.webp",
    category: "Widgets & Sliders",
  },
  "smart-slider-3": {
    name: "Smart Slider 3",
    icon: "icons/plugins/smart-slider-3.png",
    category: "Widgets & Sliders",
  },
  "ml-slider": {
    name: "MetaSlider",
    icon: "icons/plugins/metaslider.png",
    category: "Widgets & Sliders",
  },

  // === Backups & Migration ===
  updraftplus: {
    name: "UpdraftPlus",
    icon: "icons/plugins/updraftplus.png",
    category: "Backups & Migration",
  },
  duplicator: {
    name: "Duplicator",
    icon: "icons/plugins/duplicator.png",
    category: "Backups & Migration",
  },
  "all-in-one-wp-migration": {
    name: "All-in-One WP Migration",
    icon: "icons/plugins/all-in-one-wp-migration.png",
    category: "Backups & Migration",
  },
  backupbuddy: {
    name: "BackupBuddy",
    icon: "icons/plugins/backupbuddy.png",
    category: "Backups & Migration",
  },
  "wpvivid-backuprestore": {
    name: "WPvivid Backup",
    icon: "icons/plugins/wpvivid.png",
    category: "Backups & Migration",
  },
  "blogvault-real-time-backup": {
    name: "BlogVault",
    icon: "icons/plugins/blogvault.png",
    category: "Backups & Migration",
  },

  // === Image Optimization ===
  "wp-smushit": {
    name: "Smush",
    icon: "icons/plugins/smush.png",
    category: "Image Optimization",
  },
  "shortpixel-image-optimiser": {
    name: "ShortPixel",
    icon: "icons/plugins/shortpixel.png",
    category: "Image Optimization",
  },
  imagify: {
    name: "Imagify",
    icon: "icons/plugins/imagify.png",
    category: "Image Optimization",
  },
  "ewww-image-optimizer": {
    name: "EWWW Image Optimizer",
    icon: "icons/plugins/ewww.png",
    category: "Image Optimization",
  },

  // === Utilities & Others ===
  "advanced-custom-fields": {
    name: "Advanced Custom Fields",
    icon: "icons/plugins/acf.png",
    category: "Utilities",
  },
  "acf-pro": {
    name: "ACF Pro",
    icon: "icons/plugins/acf.png",
    category: "Utilities",
  },
  "classic-editor": {
    name: "Classic Editor",
    icon: "icons/plugins/classic-editor.png",
    category: "Utilities",
  },
  akismet: {
    name: "Akismet Anti-Spam",
    icon: "icons/plugins/Akismet.png",
    category: "Utilities",
  },
  jetpack: {
    name: "Jetpack",
    icon: "icons/plugins/jetpack.png",
    category: "Utilities",
  },
  redirection: {
    name: "Redirection",
    icon: "icons/plugins/redirection.png",
    category: "Utilities",
  },
  "really-simple-ssl": {
    name: "Really Simple SSL",
    icon: "icons/plugins/really-simple-ssl.png",
    category: "Utilities",
  },
  "wp-mail-smtp": {
    name: "WP Mail SMTP",
    icon: "icons/plugins/wp-mail-smtp.png",
    category: "Utilities",
  },
  tablepress: {
    name: "TablePress",
    icon: "icons/plugins/tablepress.png",
    category: "Utilities",
  },
  "user-role-editor": {
    name: "User Role Editor",
    icon: "icons/plugins/user-role-editor.png",
    category: "Utilities",
  },
  "broken-link-checker": {
    name: "Broken Link Checker",
    icon: "icons/plugins/broken-link-checker.png",
    category: "Utilities",
  },
  "woo-currency": {
    name: "WBW Currency Switcher",
    icon: "icons/plugins/woo-currency.png",
    category: "Currency",
  },

  // === Elementor Addons ===
  "essential-addons-for-elementor-lite": {
    name: "Essential Addons",
    icon: "icons/plugins/essential-ddons.webp",
    category: "Elementor Addons",
  },
  "happy-elementor-addons": {
    name: "Happy Addons",
    icon: "icons/plugins/happy-addons.png",
    category: "Elementor Addons",
  },
  "premium-addons-for-elementor": {
    name: "Premium Addons",
    icon: "icons/plugins/premium-addons.png",
    category: "Elementor Addons",
  },
  "astra-sites": {
    name: "Starter Templates",
    icon: "icons/plugins/starter-templates.gif",
    category: "Astra Addons",
  },
  "elementskit-lite": {
    name: "ElementsKit",
    icon: "icons/plugins/elementskit.gif",
    category: "Elementor Addons",
  },
  elementskit: {
    name: "ElementsKit Pro",
    icon: "icons/plugins/elementskit.gif",
    category: "Elementor Addons",
  },
  "pro-elements": {
    name: "Pro Elements",
    icon: "icons/plugins/pro-elements.webp",
    category: "Elementor Addons",
  },
  "jet-elements": {
    name: "Crocoblock (JetPlugins)",
    icon: "icons/plugins/crocoblock.png",
    category: "Elementor Addons",
  },
  templately: {
    name: "Templately",
    icon: "icons/plugins/templately.gif",
    category: "Template Library",
  },

  // === Marketing & Analytics ===
  "google-analytics-for-wordpress": {
    name: "MonsterInsights",
    icon: "icons/plugins/google-analytics-for-wordpress.svg",
    category: "Marketing & Analytics",
  },
  "google-site-kit": {
    name: "Site Kit by Google",
    icon: "icons/plugins/google-site-kit.png",
    category: "Marketing & Analytics",
  },
  "mailchimp-for-wp": {
    name: "Mailchimp for WordPress",
    icon: "icons/plugins/mailchimp-for-wp.png",
    category: "Marketing & Analytics",
  },
  leadin: {
    name: "HubSpot",
    icon: "icons/plugins/hubspot.png",
    category: "Marketing & Analytics",
  },
  optinmonster: {
    name: "OptinMonster",
    icon: "icons/plugins/optinmonster.png",
    category: "Marketing & Analytics",
  },
  "pretty-link": {
    name: "Pretty Links",
    icon: "icons/plugins/pretty-links.png",
    category: "Marketing & Analytics",
  },

  // === Social & Community ===
  bbpress: {
    name: "bbPress",
    icon: "icons/plugins/bbpress.png",
    category: "Social & Community",
  },
  buddypress: {
    name: "BuddyPress",
    icon: "icons/plugins/buddypress.png",
    category: "Social & Community",
  },
  "ultimate-member": {
    name: "Ultimate Member",
    icon: "icons/plugins/ultimate-member.png",
    category: "Social & Community",
  },

  // === Translation ===
  "sitepress-multilingual-cms": {
    name: "WPML",
    icon: "icons/plugins/wpml.png",
    category: "Translation",
  },
  polylang: {
    name: "Polylang",
    icon: "icons/plugins/polylang.png",
    category: "Translation",
  },
  "translatepress-multilingual": {
    name: "TranslatePress",
    icon: "icons/plugins/translatepress.png",
    category: "Translation",
  },
  "loco-translate": {
    name: "Loco Translate",
    icon: "icons/plugins/loco-translate.png",
    category: "Translation",
  },

  // === Events ===
  "the-events-calendar": {
    name: "The Events Calendar",
    icon: "icons/plugins/the-events-calendar.png",
    category: "Events",
  },
  // === WooCommerce Addons ===
  "yith-woocommerce-compare": {
    name: "YITH WooCommerce Compare",
    icon: "icons/plugins/yith.png",
    category: "Ecommerce",
  },
  "woocommerce-pdf-invoices-packing-slips": {
    name: "WooCommerce PDF Invoices",
    icon: "icons/plugins/pdf-invoices.png",
    category: "Ecommerce",
  },
  "advanced-shipment-tracking-for-woocommerce": {
    name: "Advanced Shipment Tracking",
    icon: "icons/plugins/ast.png",
    category: "Ecommerce",
  },
  "woo-variation-swatches": {
    name: "Variation Swatches for WooCommerce",
    icon: "icons/plugins/woo-variation-swatches.gif",
    category: "Ecommerce",
  },
  "perfect-brands-for-woocommerce": {
    name: "Perfect Brands for WooCommerce",
    icon: "icons/plugins/perfect-brands.png",
    category: "Ecommerce",
  },
  "fly-cart-for-woocommerce": {
    name: "Fly Cart for WooCommerce",
    icon: "icons/plugins/fly-cart.png",
    category: "Ecommerce",
  },
  FiboSearch: {
    name: "FiboSearch - AJAX Search for WooCommerce",
    icon: "icons/plugins/fibosearch.png",
    category: "Ecommerce",
  },

  // === Utilities ===
  "enable-media-replace": {
    name: "Enable Media Replace",
    icon: "icons/plugins/enable-media-replace.png",
    category: "Utilities",
  },
  "wp-sweep": {
    name: "WP-Sweep",
    icon: "icons/plugins/wp-sweep.png",
    category: "Utilities",
  },
  "wp-file-manager": {
    name: "File Manager",
    icon: "icons/plugins/file-manager.png",
    category: "Utilities",
  },
  "query-monitor": {
    name: "Query Monitor",
    icon: "icons/plugins/query-monitor.png",
    category: "Utilities",
  },
  "advanced-database-cleaner": {
    name: "Advanced Database Cleaner",
    icon: "icons/plugins/advanced-db-cleaner.png",
    category: "Utilities",
  },
  "code-snippets": {
    name: "Code Snippets",
    icon: "icons/plugins/code-snippets.png",
    category: "Utilities",
  },
  "cookie-law-info": {
    name: "CookieYes",
    icon: "icons/plugins/cookieyes.svg",
    category: "Utilities",
  },
  "wp-reset": {
    name: "WP Reset",
    icon: "icons/plugins/wp-reset.png",
    category: "Utilities",
  },
  "simple-history": {
    name: "Simple History",
    icon: "icons/plugins/simple-history.png",
    category: "Utilities",
  },
  "post-types-order": {
    name: "Post Types Order",
    icon: "icons/plugins/post-types-order.png",
    category: "Utilities",
  },
  "safe-svg": {
    name: "Safe SVG",
    icon: "icons/plugins/safe-svg.png",
    category: "Utilities",
  },
  "wp-crontrol": {
    name: "WP Crontrol",
    icon: "icons/plugins/wp-crontrol.png",
    category: "Utilities",
  },
  "duplicate-page": {
    name: "Duplicate Page",
    icon: "icons/plugins/duplicate-page.png",
    category: "Utilities",
  },

  // === Content & Media ===
  "envira-gallery-lite": {
    name: "Envira Gallery",
    icon: "icons/plugins/envira-gallery.png",
    category: "Media",
  },
  "the-grid": {
    name: "The Grid",
    icon: "icons/plugins/the-grid.png",
    category: "Media",
  },
  "essential-grid": {
    name: "Essential Grid",
    icon: "icons/plugins/essential-grid.png",
    category: "Media",
  },
  foogallery: {
    name: "FooGallery",
    icon: "icons/plugins/foogallery.png",
    category: "Media",
  },
  "modula-image-gallery": {
    name: "Modula Image Gallery",
    icon: "icons/plugins/modula.png",
    category: "Media",
  },
  "media-library-assistant": {
    name: "Media Library Assistant",
    icon: "icons/plugins/media-library-assistant.png",
    category: "Media",
  },
  "real-media-library": {
    name: "Real Media Library",
    icon: "icons/plugins/real-media-library.png",
    category: "Media",
  },
  "wp-media-folder": {
    name: "WP Media Folder",
    icon: "icons/plugins/wp-media-folder.png",
    category: "Media",
  },

  // === Social Media ===
  "social-warfare": {
    name: "Social Warfare",
    icon: "icons/plugins/social-warfare.png",
    category: "Social & Community",
  },
  mashsharer: {
    name: "MashShare",
    icon: "icons/plugins/mashshare.png",
    category: "Social & Community",
  },
  "sharethis-share-buttons": {
    name: "ShareThis",
    icon: "icons/plugins/sharethis-share-buttons.gif",
    category: "Social & Community",
  },
  "instagram-feed": {
    name: "Smash Balloon Instagram Feed",
    icon: "icons/plugins/smash-balloon.png",
    category: "Social & Community",
  },
  "custom-facebook-feed": {
    name: "Smash Balloon Facebook Feed",
    icon: "icons/plugins/smash-balloon.png",
    category: "Social & Community",
  },
  "better-click-to-tweet": {
    name: "Better Click to Tweet",
    icon: "icons/plugins/click-to-tweet.png",
    category: "Social & Community",
  },
  "revive-old-post": {
    name: "Revive Old Posts",
    icon: "icons/plugins/revive-old-post.png",
    category: "Social & Community",
  },

  // === Booking & Calendars ===
  ameliabooking: {
    name: "Amelia",
    icon: "icons/plugins/amelia.png",
    category: "Booking",
  },
  "bookly-responsive-appointment-booking-tool": {
    name: "Bookly",
    icon: "icons/plugins/bookly.png",
    category: "Booking",
  },
  "modern-events-calendar-lite": {
    name: "Modern Events Calendar",
    icon: "icons/plugins/mec.png",
    category: "Events",
  },
  "wp-sms": {
    name: "WP SMS",
    icon: "icons/plugins/wp-sms.svg",
    category: "SMS",
  },
  "events-manager": {
    name: "Events Manager",
    icon: "icons/plugins/events-manager.png",
    category: "Events",
  },
  "booking-ultra-pro": {
    name: "Booking Ultra Pro",
    icon: "icons/plugins/booking-ultra-pro.png",
    category: "Booking",
  },
  "appointment-hour-booking": {
    name: "Appointment Hour Booking",
    icon: "icons/plugins/appointment-hour-booking.png",
    category: "Booking",
  },

  // === Optimization ===
  "asset-cleanup-page-speed-booster": {
    name: "Asset CleanUp",
    icon: "icons/plugins/asset-cleanup.png",
    category: "Performance & Caching",
  },
  omgf: {
    name: "OMGF | Host Google Fonts Locally",
    icon: "icons/plugins/omgf.png",
    category: "Performance & Caching",
  },
  "fastest-cache": {
    name: "WP Fastest Cache",
    icon: "icons/plugins/wp-fastest-cache.png",
    category: "Performance & Caching",
  },
  "query-strings-remover": {
    name: "Query Strings Remover",
    icon: "icons/plugins/query-strings-remover.png",
    category: "Performance & Caching",
  },
  "wp-smush-pro": {
    name: "Smush Pro",
    icon: "icons/plugins/smush.png",
    category: "Image Optimization",
  },
  "tinypng-compress-images": {
    name: "TinyPNG",
    icon: "icons/plugins/tinypng.png",
    category: "Image Optimization",
  },

  // === Migration ===
  "migrate-guru": {
    name: "Migrate Guru",
    icon: "icons/plugins/migrate-guru.png",
    category: "Backups & Migration",
  },
  "wp-migrate-db": {
    name: "WP Migrate DB",
    icon: "icons/plugins/wp-migrate-db.png",
    category: "Backups & Migration",
  },

  // === Misc Niche Plugins ===
  give: {
    name: "GiveWP",
    icon: "icons/plugins/givewp.png",
    category: "Donations",
  },
  "wp-job-manager": {
    name: "WP Job Manager",
    icon: "icons/plugins/wp-job-manager.png",
    category: "Jobs",
  },
  "simple-job-board": {
    name: "Simple Job Board",
    icon: "icons/plugins/simple-job-board.png",
    category: "Jobs",
  },
  "ultimate-faq-plugin": {
    name: "Ultimate FAQ",
    icon: "icons/plugins/ultimate-faq.png",
    category: "Content",
  },
  "wp-google-maps": {
    name: "WP Go Maps",
    icon: "icons/plugins/wp-google-maps.png",
    category: "Maps",
  },
  "cm-tooltip-glossary": {
    name: "CM Tooltip Glossary",
    icon: "icons/plugins/cm-tooltip.png",
    category: "Content",
  },
  "disqus-comment-system": {
    name: "Disqus Comment System",
    icon: "icons/plugins/disqus.png",
    category: "Social & Community",
  },
  icegram: {
    name: "Icegram",
    icon: "icons/plugins/icegram.png",
    category: "Marketing & Analytics",
  },
  "hello-bar": {
    name: "Hello Bar",
    icon: "icons/plugins/hello-bar.png",
    category: "Marketing & Analytics",
  },
  geodirectory: {
    name: "GeoDirectory",
    icon: "icons/plugins/geodirectory.png",
    category: "Directory",
  },
  "nextgen-gallery": {
    name: "NextGEN Gallery",
    icon: "icons/plugins/nextgen-gallery.png",
    category: "Media",
  },
  "wp-maintenance-mode": {
    name: "WP Maintenance Mode",
    icon: "icons/plugins/wp-maintenance-mode.png",
    category: "Utilities",
  },
  "coming-soon": {
    name: "Coming Soon Page by SeedProd",
    icon: "icons/plugins/seedprod.png",
    category: "Utilities",
  },
  "header-footer-code-manager": {
    name: "Header Footer Code Manager",
    icon: "icons/plugins/hfcm.png",
    category: "Utilities",
  },
  "to-top": {
    name: "To Top",
    icon: "icons/plugins/to-top.png",
    category: "Utilities",
  },
  "advanced-gutenberg": {
    name: "Advanced Gutenberg",
    icon: "icons/plugins/advanced-gutenberg.png",
    category: "Content",
  },
  "ultimate-blocks": {
    name: "Ultimate Blocks",
    icon: "icons/plugins/ultimate-blocks.png",
    category: "Content",
  },
  "easy-table-of-contents": {
    name: "Easy Table of Contents",
    icon: "icons/plugins/easy-toc.png",
    category: "Content",
  },
  tablepress: {
    name: "TablePress",
    icon: "icons/plugins/tablepress.svg",
    category: "Content",
  },
  gtranslate: {
    name: "GTranslate",
    icon: "icons/plugins/GTranslate.png",
    category: "Translation",
  },
  "wordpress-popular-posts": {
    name: "WordPress Popular Posts",
    icon: "icons/plugins/wpp.png",
    category: "Content",
  },

  // === Gutenberg & Block Editor Addons ===
  "kadence-blocks": {
    name: "Kadence Blocks",
    icon: "icons/plugins/kadence-blocks.png",
    category: "Block Editor",
  },
  generateblocks: {
    name: "GenerateBlocks",
    icon: "icons/plugins/generateblocks.png",
    category: "Block Editor",
  },
  "ultimate-addons-for-gutenberg": {
    name: "Spectra (Ultimate Addons for Gutenberg)",
    icon: "icons/plugins/spectra.png",
    category: "Block Editor",
  },
  "ultimate-blocks": {
    name: "Ultimate Blocks",
    icon: "icons/plugins/ultimate-blocks.png",
    category: "Block Editor",
  },
  qubely: {
    name: "Qubely",
    icon: "icons/plugins/qubely.png",
    category: "Block Editor",
  },
  "stackable-ultimate-gutenberg-blocks": {
    name: "Stackable",
    icon: "icons/plugins/stackable.png",
    category: "Block Editor",
  },
  getwid: {
    name: "Getwid",
    icon: "icons/plugins/getwid.png",
    category: "Block Editor",
  },

  // === Elementor Addons (Batch 2) ===
  "ultimate-addons-for-elementor": {
    name: "Ultimate Addons for Elementor",
    icon: "icons/plugins/uae.png",
    category: "Elementor Addons",
  },
  "powerpack-lite-for-elementor": {
    name: "PowerPack for Elementor",
    icon: "icons/plugins/powerpack.png",
    category: "Elementor Addons",
  },
  "master-addons": {
    name: "Master Addons for Elementor",
    icon: "icons/plugins/master-addons.png",
    category: "Elementor Addons",
  },

  // === WooCommerce Addons ===
  "woocommerce-pdf-invoices-packing-slips": {
    name: "WooCommerce PDF Invoices",
    icon: "icons/plugins/pdf-invoices.png",
    category: "WooCommerce Addons",
  },
  "woo-variation-swatches": {
    name: "Variation Swatches for WooCommerce",
    icon: "icons/plugins/variation-swatches.png",
    category: "WooCommerce Addons",
  },
  "advanced-shipment-tracking-for-woocommerce": {
    name: "Advanced Shipment Tracking",
    icon: "icons/plugins/ast.png",
    category: "WooCommerce Addons",
  },
  FiboSearch: {
    name: "FiboSearch - AJAX Search",
    icon: "icons/plugins/fibosearch.png",
    category: "WooCommerce Addons",
  },
  "perfect-brands-for-woocommerce": {
    name: "Perfect Brands for WooCommerce",
    icon: "icons/plugins/perfect-brands.png",
    category: "WooCommerce Addons",
  },
  "booster-for-woocommerce": {
    name: "Booster for WooCommerce",
    icon: "icons/plugins/booster.png",
    category: "WooCommerce Addons",
  },
  "yith-woocommerce-compare": {
    name: "YITH WooCommerce Compare",
    icon: "icons/plugins/yith.png",
    category: "WooCommerce Addons",
  },
  "checkout-field-editor-for-woocommerce": {
    name: "WooCommerce Checkout Field Editor",
    icon: "icons/plugins/checkout-field-editor.png",
    category: "WooCommerce Addons",
  },

  // === Utilities & Admin Tools ===
  "wp-file-manager": {
    name: "File Manager",
    icon: "icons/plugins/file-manager.png",
    category: "Utilities",
  },
  "wp-sweep": {
    name: "WP-Sweep",
    icon: "icons/plugins/wp-sweep.png",
    category: "Utilities",
  },
  "advanced-database-cleaner": {
    name: "Advanced Database Cleaner",
    icon: "icons/plugins/advanced-db-cleaner.png",
    category: "Utilities",
  },
  "code-snippets": {
    name: "Code Snippets",
    icon: "icons/plugins/code-snippets.png",
    category: "Utilities",
  },
  "simple-history": {
    name: "Simple History",
    icon: "icons/plugins/simple-history.png",
    category: "Utilities",
  },
  "wp-crontrol": {
    name: "WP Crontrol",
    icon: "icons/plugins/wp-crontrol.png",
    category: "Utilities",
  },
  "enable-media-replace": {
    name: "Enable Media Replace",
    icon: "icons/plugins/enable-media-replace.png",
    category: "Utilities",
  },
  "post-types-order": {
    name: "Post Types Order",
    icon: "icons/plugins/post-types-order.png",
    category: "Utilities",
  },
  "safe-svg": {
    name: "Safe SVG",
    icon: "icons/plugins/safe-svg.png",
    category: "Utilities",
  },
  "wp-reset": {
    name: "WP Reset",
    icon: "icons/plugins/wp-reset.png",
    category: "Utilities",
  },
  "wp-optimize": {
    name: "WP-Optimize",
    icon: "icons/plugins/wp-optimize.png",
    category: "Performance & Caching",
  },

  // === Media & Galleries ===
  "envira-gallery-lite": {
    name: "Envira Gallery",
    icon: "icons/plugins/envira-gallery.png",
    category: "Media",
  },
  foogallery: {
    name: "FooGallery",
    icon: "icons/plugins/foogallery.png",
    category: "Media",
  },
  "modula-image-gallery": {
    name: "Modula Image Gallery",
    icon: "icons/plugins/modula.png",
    category: "Media",
  },
  "the-grid": {
    name: "The Grid",
    icon: "icons/plugins/the-grid.png",
    category: "Media",
  },
  "essential-grid": {
    name: "Essential Grid",
    icon: "icons/plugins/essential-grid.png",
    category: "Media",
  },
  "real-media-library": {
    name: "Real Media Library",
    icon: "icons/plugins/real-media-library.png",
    category: "Media",
  },
  "wp-media-folder": {
    name: "WP Media Folder",
    icon: "icons/plugins/wp-media-folder.png",
    category: "Media",
  },
  "happyfiles-pro": {
    name: "HappyFiles Pro",
    icon: "icons/plugins/happyfiles.png",
    category: "Media",
  },

  // === Social Media & Marketing ===
  "instagram-feed": {
    name: "Smash Balloon Instagram Feed",
    icon: "icons/plugins/smash-balloon.png",
    category: "Social Media",
  },
  "custom-facebook-feed": {
    name: "Smash Balloon Facebook Feed",
    icon: "icons/plugins/smash-balloon.png",
    category: "Social Media",
  },
  "social-warfare": {
    name: "Social Warfare",
    icon: "icons/plugins/social-warfare.png",
    category: "Social Media",
  },
  mashsharer: {
    name: "MashShare",
    icon: "icons/plugins/mashshare.png",
    category: "Social Media",
  },
  "revive-old-post": {
    name: "Revive Old Posts",
    icon: "icons/plugins/revive-old-post.png",
    category: "Social Media",
  },
  "fluent-crm": {
    name: "FluentCRM",
    icon: "icons/plugins/fluentcrm.png",
    category: "Marketing",
  },
  newsletter: {
    name: "Newsletter",
    icon: "icons/plugins/newsletter.png",
    category: "Marketing",
  },
  mailpoet: {
    name: "MailPoet",
    icon: "icons/plugins/mailpoet.png",
    category: "Marketing",
  },

  // === Booking & Calendars ===
  ameliabooking: {
    name: "Amelia",
    icon: "icons/plugins/amelia.png",
    category: "Booking",
  },
  "bookly-responsive-appointment-booking-tool": {
    name: "Bookly",
    icon: "icons/plugins/bookly.png",
    category: "Booking",
  },
  "modern-events-calendar-lite": {
    name: "Modern Events Calendar",
    icon: "icons/plugins/mec.png",
    category: "Events",
  },
  "events-manager": {
    name: "Events Manager",
    icon: "icons/plugins/events-manager.png",
    category: "Events",
  },
  booked: {
    name: "Booked",
    icon: "icons/plugins/booked.png",
    category: "Booking",
  },

  // === Industry Specific ===
  "wp-job-manager": {
    name: "WP Job Manager",
    icon: "icons/plugins/wp-job-manager.png",
    category: "Jobs",
  },
  give: {
    name: "GiveWP",
    icon: "icons/plugins/givewp.png",
    category: "Donations",
  },
  "wp-google-maps": {
    name: "WP Go Maps",
    icon: "icons/plugins/wp-google-maps.png",
    category: "Maps",
  },
  "ultimate-faq-plugin": {
    name: "Ultimate FAQ",
    icon: "icons/plugins/ultimate-faq.png",
    category: "Content",
  },

  // === Content & SEO ===
  "easy-table-of-contents": {
    name: "Easy Table of Contents",
    icon: "icons/plugins/easy-toc.png",
    category: "Content",
  },
  "wordpress-popular-posts": {
    name: "WordPress Popular Posts",
    icon: "icons/plugins/wpp.png",
    category: "Content",
  },
  "schema-pro": {
    name: "Schema Pro",
    icon: "icons/plugins/schema-pro.png",
    category: "SEO",
  },
  "slim-seo": {
    name: "Slim SEO",
    icon: "icons/plugins/slim-seo.png",
    category: "SEO",
  },
  "internal-link-juicer": {
    name: "Internal Link Juicer",
    icon: "icons/plugins/internal-link-juicer.png",
    category: "SEO",
  },

  // === Maintenance & Security ===
  "wp-maintenance-mode": {
    name: "WP Maintenance Mode",
    icon: "icons/plugins/wp-maintenance-mode.png",
    category: "Utilities",
  },
  "coming-soon": {
    name: "Coming Soon Page by SeedProd",
    icon: "icons/plugins/seedprod.png",
    category: "Utilities",
  },
  "limit-login-attempts-reloaded": {
    name: "Limit Login Attempts",
    icon: "icons/plugins/limit-login.png",
    category: "Security",
  },
  "login-lockdown": {
    name: "Login Lockdown",
    icon: "icons/plugins/login-lockdown.png",
    category: "Security",
  },

  // === Miscellaneous ===
  "header-footer-code-manager": {
    name: "Header Footer Code Manager",
    icon: "icons/plugins/hfcm.png",
    category: "Utilities",
  },
  "disqus-comment-system": {
    name: "Disqus Comment System",
    icon: "icons/plugins/disqus.png",
    category: "Social & Community",
  },
  gtranslate: {
    name: "GTranslate",
    icon: "icons/plugins/gtranslate.png",
    category: "Translation",
  },
  "query-monitor": {
    name: "Query Monitor",
    icon: "icons/plugins/query-monitor.png",
    category: "Utilities",
  },
};
