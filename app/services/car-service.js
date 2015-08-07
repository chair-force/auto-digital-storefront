'use strict';

angular.module('myApp.services', [])
    .service('carService', function() {
        return {
                car: 'coupes',
            getCars: function() {
                return {
                "types": [
                        {
                    "sedans": [
                        {
                            "model": "A3",
                            "price": 29900,
                            "year": "2015",
                            "imageName": "sedan-a3"
                        },
                        {
                            "model": "S3",
                            "price": 41100,
                            "year": "2015",
                            "imageName":"sedan-s3"
                        },
                        {
                            "model": "A4",
                            "price": 29000,
                            "year": "2015",
                            "imageName":"sedan-a4"
                        },
                        {
                            "model": "S4",
                            "price": 48400,
                            "year": "2015",
                            "imageName":"sedan-s4"
                        },
                        {
                            "model": "A8",
                            "price": 77400,
                            "year": "2015",
                            "imageName":"sedan-a8"
                        },
                        {
                            "model": "S8",
                            "price": 114900,
                            "year": "2015",
                            "imageName":"sedan-s8"
                        },
                        {
                            "model": "A8 L",
                            "price": 81400,
                            "year": "2015",
                            "imageName":"sedan-a8-l"
                        },
                        {
                            "model": "A8 L W12",
                            "price": 137900,
                            "year": "2015",
                            "imageName":"sedan-a8-l-w12"
                        }
                    ]
                        },
                        {
                            "suvs": [
                                {
                                    "model": "All Road",
                                    "price": 29000,
                                    "year": "2015",
                                    "imageName": "suv-allroad"
                                },
                                {
                                    "model": "Q5",
                                    "price": 39300,
                                    "year": "2015",
                                    "imageName": "suv-q5"
                                },
                                {
                                    "model": "SQ5",
                                    "price": 52700,
                                    "year": "2015",
                                    "imageName": "suv-sq5"
                                },
                                {
                                    "model": "Q7",
                                    "price": 48300,
                                    "year": "2015",
                                    "imageName": "suv-q7"
                                }
                            ]
                        },
                        {
                            "coupes": [
                                {
                                    "model": "R8",
                                    "price": 115900,
                                    "year": "2015",
                                    "imageName": "coupe-r8"
                                },
                                {
                                    "model": "A5",
                                    "price": 40000,
                                    "year": "2015",
                                    "imageName": "coupe-a5"
                                },
                                {
                                    "model": "S5",
                                    "price": 52500,
                                    "year": "2015",
                                    "imageName": "coupe-r5"
                                },
                                {
                                    "model": "RS 5",
                                    "price": 70900,
                                    "year": "2015",
                                    "imageName": "coupe-rs-5"
                                }
                            ]
                        },
                        {
                            "convertibles": [
                                {
                                    "model": "A3 Cabriolet",
                                    "price": 35600,
                                    "year": "2015",
                                    "imageName": "convertible-a3-cabriolet"
                                },
                                {
                                    "model": "A5 Cabriolet",
                                    "price": 47600,
                                    "year": "2015",
                                    "imageName": "convertible-a5-cabriolet"
                                },
                                {
                                    "model": "S5 Cabriolet",
                                    "price": 60900,
                                    "year": "2015",
                                    "imageName": "convertible-s5-cabriolet"
                                },
                                {
                                    "model": "RS 5 Cabriolet",
                                    "price": 79750,
                                    "year": "2015",
                                    "imageName": "convertible-rs-5-cabriolet"
                                },
                                {
                                    "model": "R8 Spyder",
                                    "price": 129400,
                                    "year": "2015",
                                    "imageName": "convertible-r8-spyder"
                                }
                            ]
                        }
                    ]
                };
            }
        }
    });