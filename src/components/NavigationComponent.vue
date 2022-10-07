<template>
    <nav class="navbar fixed-top top-nav-collapse">
            <div class="container sm:px-4 lg:pr-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
                
                <a class="inline-block py-0.5  mt-5 text-xl whitespace-nowrap hover:no-underline focus:no-underline" href="/">
                   Wealthy Muslimah
                </a>

                <button class="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400" type="button" data-toggle="offcanvas">
                    <span class="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
                </button>

                <div class="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center" id="navbarsExampleDefault">
                    <ul class="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
                        <li>
                            <a class="nav-link page-scroll " href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
        
                    </ul>
                    
                </div> 
            </div>
        </nav>
</template>

<script>
export default {
  name: 'NavigationComponent',
  mounted() {},
}
</script>

