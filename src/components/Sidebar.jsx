import React from 'react';

const Sidebar = () => {
  return (
    <div>
      <main class="flex">
        <div class="h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-60 ">
          <h2 class="px-5 text-lg font-medium text-gray-800 ">Contacts</h2>
          <div class="mt-8 space-y-4">
            <button class="flex items-center w-full px-5 py-2 transition-colors duration-200  gap-x-2 hover:bg-gray-100 focus:outline-none">
              <img
                class="object-cover w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
                alt=""
              />

              <div class="text-left rtl:text-right">
                <h1 class="text-sm font-medium text-gray-700 capitalize ">
                  Mia John
                </h1>

                <p class="text-xs text-gray-500 ">11.2 Followers</p>
              </div>
            </button>

            <button class="flex items-center w-full px-5 py-2 transition-colors duration-200  gap-x-2 hover:bg-gray-100 focus:outline-none">
              <img
                class="object-cover w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80"
                alt=""
              />

              <div class="text-left rtl:text-right">
                <h1 class="text-sm font-medium text-gray-700 capitalize ">
                  arthur melo
                </h1>

                <p class="text-xs text-gray-500 ">1.2 Followers</p>
              </div>
            </button>

            <button class="flex items-center w-full px-5 py-2 transition-colors duration-200 bg-gray-100  gap-x-2 focus:outline-none">
              <div class="relative">
                <img
                  class="object-cover w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100"
                  alt=""
                />
                <span class="h-2 w-2 rounded-full bg-emerald-500 absolute right-0.5 ring-1 ring-white bottom-0"></span>
              </div>

              <div class="text-left rtl:text-right">
                <h1 class="text-sm font-medium text-gray-700 capitalize ">
                  Jane Doe
                </h1>

                <p class="text-xs text-gray-500 ">15.6 Followers</p>
              </div>
            </button>

            <button class="flex items-center w-full px-5 py-2 transition-colors duration-200  gap-x-2 hover:bg-gray-100 focus:outline-none">
              <img
                class="object-cover w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=80"
                alt=""
              />

              <div class="text-left rtl:text-right">
                <h1 class="text-sm font-medium text-gray-700 capitalize ">
                  Amelia. Anderson
                </h1>

                <p class="text-xs text-gray-500 ">32.9 Followers</p>
              </div>
            </button>

            <button class="flex items-center w-full px-5 py-2 transition-colors duration-200  gap-x-2 hover:bg-gray-100 focus:outline-none">
              <img
                class="object-cover w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=687&q=80"
                alt=""
              />

              <div class="text-left rtl:text-right">
                <h1 class="text-sm font-medium text-gray-700 capitalize ">
                  Joseph Gonzalez
                </h1>

                <p class="text-xs text-gray-500 ">100.2 Followers</p>
              </div>
            </button>

            <button class="flex items-center w-full px-5 py-2 transition-colors duration-200 hover:bg-gray-100  gap-x-2 focus:outline-none">
              <div class="relative">
                <img
                  class="object-cover w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&h=1470&q=80"
                  alt=""
                />
                <span class="h-2 w-2 rounded-full bg-emerald-500 absolute right-0.5 ring-1 ring-white bottom-0"></span>
              </div>

              <div class="text-left rtl:text-right">
                <h1 class="text-sm font-medium text-gray-700 capitalize ">
                  Olivia Wathan
                </h1>

                <p class="text-xs text-gray-500 ">8.6 Followers</p>
              </div>
            </button>

            <button class="flex items-center w-full px-5 py-2 transition-colors duration-200 hover:bg-gray-100  gap-x-2 focus:outline-none">
              <div class="relative">
                <img
                  class="object-cover w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1608174386344-80898cec6beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=687&q=80"
                  alt=""
                />
                <span class="h-2 w-2 rounded-full bg-emerald-500 absolute right-0.5 ring-1 ring-white bottom-0"></span>
              </div>

              <div class="text-left rtl:text-right">
                <h1 class="text-sm font-medium text-gray-700 capitalize ">
                  Junior REIS
                </h1>

                <p class="text-xs text-gray-500 ">56.6 Followers</p>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
