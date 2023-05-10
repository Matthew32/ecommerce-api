<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Matt Tavern</title>

    <!-- Bootstrap core CSS -->
    <link href="{{ URL::asset('js/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="{{ URL::asset('js/fontawesome-free/css/all.min.css')}}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="{{ URL::asset('css/grayscale.css')}}" rel="stylesheet">
    @yield("import-css")
</head>

<body id="page-top">
<canvas id="snowCanvas"></canvas>
@include('layouts.navbar')


@include('layouts.header')

@yield('content')

@include('layouts.subscribe')

@include('layouts.footer')
@yield("import-js")

</body>

</html>
