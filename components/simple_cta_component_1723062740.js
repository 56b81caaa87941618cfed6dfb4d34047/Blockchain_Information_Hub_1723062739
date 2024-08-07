/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1723062740", {
    template: `
    <section id="cta-component" class="bg-white flex-1 flex">
        <div class="flex-1">
            <nav class="bg-gray-50 p-4">
                <ul class="flex space-x-4">
                    <li><a href="#home" class="text-black">Home</a></li>
                    <li><a href="#about" class="text-black">About</a></li>
                    <li><a href="#contact" class="text-black">Contact</a></li>
                </ul>
            </nav>
        </div>
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 flex-1 bg-gray-50">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-black">Discover the Latest in Blockchain Innovation</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-700 md:text-lg">Stay ahead of the curve with real-time updates on emerging blockchain technologies, projects, and trends.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 shadow-lg">Explore Blockchain Insights</a>
                </div>
            </div>
        </div>
        </div>
        <div class="flex-1 bg-gray-50 p-4">
            <nav>
                <ul>
                    <li class="mb-2"><a href="#home" class="text-black">Home</a></li>
                    <li class="mb-2"><a href="#about" class="text-black">About</a></li>
                    <li class="mb-2"><a href="#contact" class="text-black">Contact</a></li>
                </ul>
            </nav>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
