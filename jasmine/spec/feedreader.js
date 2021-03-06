/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('should be defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('should have a URL and should not be empty', function() {
            // Use for each to check each url in allFeeds array of
            // objects
            allFeeds.forEach(function(feed) {
                // now check that the url is present
                expect(feed.url).toBeDefined();
                // by checking that the url is truthy we guarantee that a value is present since an emply string is falsy
                expect(feed.url).toBeTruthy();
            });
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should have a name and should not be empty', function() {
            allFeeds.forEach(function(feed) {
                // test that the name key of the allFeeds array
                // of objs is defined
                expect(feed.name).toBeDefined();
                // by checking that the url is truthy we guarantee that a value is present since an emply string is falsy
                expect(feed.name).toBeTruthy();
            });
        });
    });
    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('should be hidden by default', function() {
            // test that the body tag has the class .menu-hidden
            expect($('body').attr('class')).toContain('menu-hidden');
        });
        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('should change visibility when clicked', function() {
            var menuIcon = $('.menu-icon-link');
            // click the menu
            menuIcon.click();
            // does the menu display when clicked
            expect($('body').is('menu-hidden')).toBeFalsy();
            // click the menu
            menuIcon.click();
            // does it hide when clicked again
            expect($('body').attr('class')).toContain('menu-hidden');
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        // test for a single .entry elem in the .feed container.
        it('should have one or more .entry element(s) in .feed container', function(done) {
            // jQuery string traverses dom from the feed class to the containing articles.
            // chaining hasClass then returns a boolean.
            var entryElements = $('.feed a article').hasClass('entry');
            // the test fails if not explicitly true
            expect(entryElements).toBe(true);
            // call done to signal this test relies on async fn in before each
            done();
        });
        /* TODO: Write a new test suite named "New Feed Selection" */
        describe('New Feed Selection', function() {
            /* TODO: Write a test that ensures when a new feed is loaded
             * by the loadFeed function that the content actually changes.
             * Remember, loadFeed() is asynchronous.
             */
            // variable to hold the HTML from .feed.
            var firstHTML;
            // before each test get the HTML of .feed
            beforeEach(function (done) {
                loadFeed(0, done);
                var loadedHTML = $('.feed').html();
            });
            // test should guarantee that html is loaded and content has changed.
            it('should change content', function() {
                //loadFeeds
                expect($('.feed').html()).not.toBe(firstHTML);
            });
        });
    });
    /*This is a test suite to make sure that variables are defined*/
    describe('Variables', function() {
        /*test that variables are defined.*/
        it('should be defined', function() {
            // setup an undefined variable


        });
    });
    /*This is a test suite to make sure that array access is in bounds*/
    describe('Arrays', function() {
        it('should maintain in-bounds-access', function() {

        });
    });
}());