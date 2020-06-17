<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        @auth
            @include('layouts.topbar')
        @endauth
        <div class="container-fluid">
            <div class="row">
                @auth
                    @include('layouts.sidebar')
                @endauth
                <div class="col">
                    <main class="">
                        <!-- @yield('content') -->
                        <router-view></router-view>
                    </main>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
