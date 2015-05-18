jQuery(function($) {
    var $mobileNavToggle = $('<div id="mobile-nav-toggle"></div>');
    $('<span class="line" /><span class="line" /><span class="line" />').appendTo($mobileNavToggle);
    var $menuCon = $(".menu-comp");
    var $userCon = $(".logout");

    $("#header-wc-0").append($mobileNavToggle);

    var CSS_OPENED = 'open';
    var CSS_ACTIVE = 'mi-active';
    var CSS_PARENT_MENU = 'mi-parent';
    var CSS_MENU_OPENED_CLASS = 'menu_open';
    var BREAKPOINT_WIDTH_TOUCH = 767;
    var RESIZE_THROTTLE_TIME = 200;

    var resizeThrottleId;
    var windowWidth = 0;

    var menuShown = false;
    var $window = $(window);

    var isTouch = Modernizr && Modernizr.touch;


    $menuCon.find("> .menu > .mi").each(function(idx, item) {
        var $item = $(item);
        if ($item.find("ul.menu, #menu_cats").length) {
            $item.prepend('<span class="collapse"><span /></span>');
        }
        else {
            $item.prepend('<span class="go"><span /></span>')
        }
    });

    $menuCon.find(".account-links").each(function(idx, item) {
        var $acctCon = $(item);
        var $logoutLink = $acctCon.find(".logout");
        var $dropdown = $acctCon.find(".menu.profile");
        $dropdown.find("ul").append('<li class="mi logout"></li>');
        $dropdown.find("li.logout").append($logoutLink.find(".logout-url"));
        $logoutLink.append($dropdown);
    });

    $mobileNavToggle.on("click", function(evt) {
        menuShown = !menuShown;
        $menuCon.toggleClass(CSS_MENU_OPENED_CLASS).trigger('rza:header-nav-toggle');
    });


    $(document).on('rza:header-nav-toggle', initNav);

    function initNav() {
        $menuCon.find(".menu").each(function() {
            var $con = $(this);
            var $initialActive = $con.find('.mi_active');
            var $tier1MenuItems = $con.find('> .mi');

            function addHoverEvents() {
                $con.on('mouseover', '.mi', function(evt) {
                    if (isTouch && windowWidth <= BREAKPOINT_WIDTH_TOUCH) {
                        return;
                    }

                    $(this).addClass(CSS_OPENED).siblings().removeClass(CSS_ACTIVE);
                });

                $con.on('mouseout', '.mi', function(evt) {
                    var $mi = $(this);

                    if (isTouch && windowWidth <= BREAKPOINT_WIDTH_TOUCH) {
                        return;
                    }

                    $mi.removeClass(CSS_OPENED);

                    if ($initialActive.is($mi)) {
                        $mi.addClass(CSS_ACTIVE);
                    }

                    $mi.siblings().filter($initialActive).addClass(CSS_ACTIVE);
                });
            }

            function addTouchEvents() {
                $menuCon.on('rza:header-nav-toggle', function(evt) {
                    if (!$menuCon.hasClass(CSS_OPENED)) {
                        $tier1MenuItems.removeClass(CSS_OPENED);
                        $initialActive.addClass(CSS_OPENED);
                    }
                });

                $tier1MenuItems.on('click', function(evt) {
                    var $link = $(this);
                    var $mi = $link.closest('.mi');

                    if (windowWidth > BREAKPOINT_WIDTH_TOUCH) {
                        return;
                    }

                    if ($mi.hasClass(CSS_PARENT_MENU) && !$link.hasClass(CSS_OPENED)) {
                        evt.preventDefault();

                        $tier1MenuItems.removeClass(CSS_OPENED);
                        $mi.addClass(CSS_OPENED);
                    }
                });


                $tier1MenuItems.on("click", ".collapse", function(evt) {
                    var $toggle = $(this);
                    var $parent = $toggle.closest(".mi");
                    if ($parent.hasClass(CSS_OPENED)) {
                        evt.stopPropagation();

                        if ($parent.hasClass(CSS_OPENED)) {
                            evt.preventDefault();

                            $tier1MenuItems.removeClass(CSS_OPENED);
                            $parent.removeClass(CSS_OPENED);
                        }
                    }

                });
            }

            function updateWindowWidth() {
                windowWidth = $window.width();
            }

            function addResizeWatcher() {
                $window.on('resize', function() {
                    clearTimeout(resizeThrottleId);
                    resizeThrottleId = setTimeout(function() {
                        updateWindowWidth();
                    }, RESIZE_THROTTLE_TIME);
                });
            }

            if ($con.data('init')) {
                return;
            }

            $con.data('init', true);

            updateWindowWidth();

            if (isTouch) {
                addTouchEvents();
                addHoverEvents();
                addResizeWatcher();
            } else {
                addHoverEvents();
            }
        });
    }

    initNav();


});
