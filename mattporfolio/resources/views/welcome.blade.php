@extends('layouts.template')
<!-- About Section -->
@section("import-css")
    <link href="{{ URL::asset('css/custom/index.css')}}" rel="stylesheet">

@endsection
@section("content")


    <section id="about" class="about-section text-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <h2 class="text-white mb-4">This WebPage has been built with Laravel and Bootstrap 4</h2>

                </div>
            </div>
            <img src="{{ URL::asset('img/template/ipad.png')}}" class="img-fluid" alt="">
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects-section bg-light">
        <div class="container">

            <!-- Featured Project Row -->
            <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                <div class="col-xl-8 col-lg-7">
                    <img class="img-fluid mb-3 mb-lg-0" src="{{ URL::asset('img/template/demo-image-01.jpg')}}" alt="">
                </div>
                <div class="col-xl-4 col-lg-5">
                    <div class="featured-text text-center text-lg-left">
                        <h4>WebPages</h4>
                        <p class="text-black-50 mb-0">Making Responsive Webpages using the best frameworks in the
                            market!</p>
                    </div>
                </div>
            </div>

            <!-- Project One Row -->
            <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                <div class="col-lg-6">
                    <img class="img-fluid" src="{{ URL::asset('img/template/demo-image-02.jpg')}}" alt="">
                </div>
                <div class="col-lg-6">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                <h4 class="text-white">Mobile Applications</h4>
                                <p class="mb-0 text-white-50">Knowledge in Android and IOS (Native Development).</p>
                                <hr class="d-none d-lg-block mb-0 ml-0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Project Two Row -->
            <div class="row justify-content-center no-gutters">
                <div class="col-lg-6">
                    <img class="img-fluid" src="{{ URL::asset('img/template/experience.jpg')}}" alt="">
                </div>
                <div class="col-lg-6 order-lg-first">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-right">
                                <h4 class="text-white">Experience!</h4>
                                <p class="mb-0 text-white-50">Worked in different kind of companies.</p>
                                <hr class="d-none d-lg-block mb-0 mr-0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
@endsection
@section("import-js")
    <script src="{{URL::asset('js/custom/snow.js')}}"></script>

    <script src="{{URL::asset('js/custom/index.js')}}"></script>
@endsection
