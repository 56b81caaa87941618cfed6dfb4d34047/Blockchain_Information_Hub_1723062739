/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1723062740", {
    template: `
    <header id="navbar-section" class="flex-1 bg-white shadow-md p-4">
        <nav id="navbar-container" class="max-w-screen-xl mx-auto flex justify-between items-center">
            <div id="navbar-logo" class="flex items-center">
                <img src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                <span class="text-2xl font-semibold text-black">BlockScan</span>
            </div>
            <div id="navbar-links" class="flex space-x-4">
                <a href="#" class="text-black hover:text-purple-500">Home</a>
                <a href="#" class="text-black hover:text-purple-500">About</a>
                <a href="#" class="text-black hover:text-purple-500">Contact</a>
            </div>
        </nav>

    <aside id="sidebar-section" class="w-64 h-full bg-gray-800 text-white fixed">
        <div id="sidebar-container" class="p-4">
            <nav id="sidebar-links" class="space-y-4">
                <a href="#" class="block text-white hover:text-purple-500">Home</a>
                <a href="#" class="block text-white hover:text-purple-500">About</a>
                <a href="#" class="block text-white hover:text-purple-500">Contact</a>
            </nav>
        </div>
    </aside>


    <footer id="footer-section" class="flex-1 bg-white">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
            <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                    <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-black">
                            <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            BlockScan: Blockchain Discovery Hub
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-gray-500">
                        © 2023 BlockScan. Empowering users with real-time blockchain insights. Stay informed, stay ahead.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
