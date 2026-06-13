var app = angular.module('urexcoreApp', []);

app.controller('MainController', function($scope, $interval) {
    // Services Data
    $scope.services = [
        {
            title: "EV Scooter Lead Verification & Customer Support",
            description: "Dedicated support for emerging EV scooter companies.",
            features: [
                "Customer Onboarding",
                "Lead Verification",
                "Service Follow-up",
                "Warranty Support",
                "Dealer Coordination Calls"
            ]
        },
        {
            title: "Women Loan Verification Process",
            description: "Specialized tele-verification for women-centric loan programs.",
            features: [
                "Tele-verification Services",
                "KYC Verification",
                "Document Confirmation",
                "Repayment Reminder Calls",
                "Customer Support"
            ]
        },
        {
            title: "Third-Party Contact Center Operations",
            description: "Scalable and efficient high-volume communication services.",
            features: [
                "Customer Verification",
                "Lead Qualification",
                "Welcome Calling",
                "Customer Satisfaction Surveys",
                "Collection Reminder Calls",
                "Service Activation Confirmation",
                "Dealer and Partner Support Desk"
            ]
        }
    ];

    $scope.reasons = [
        {
            title: "Industry Expertise",
            description: "Specialized in EV mobility and microfinance sectors."
        },
        {
            title: "Scalable Volume",
            description: "Capable of handling high-volume inbound and outbound communications seamlessly."
        },
        {
            title: "Data Security",
            description: "Strict adherence to KYC and document confirmation protocols."
        },
        {
            title: "Premium Quality",
            description: "Ensuring customer satisfaction and high-quality onboarding experiences."
        }
    ];

    $scope.testimonials = [
        {
            name: "Rajesh Kumar",
            role: "Operations Head, EV Mobility Startup",
            quote: "Urexcore transformed our lead verification process. Their team handles thousands of onboarding calls monthly with remarkable accuracy and professionalism.",
            rating: 5
        },
        {
            name: "Priya Sharma",
            role: "Director, Microfinance Institution",
            quote: "The KYC verification and tele-verification services have significantly reduced our loan processing time. Their attention to compliance is outstanding.",
            rating: 5
        },
        {
            name: "Amit Patel",
            role: "CEO, Electric Scooter Distributor",
            quote: "From dealer coordination to warranty support calls, Urexcore has become an extension of our customer service team. Highly recommended for EV companies.",
            rating: 5
        },
        {
            name: "Sneha Reddy",
            role: "Head of Customer Success, FinTech",
            quote: "We partnered with Urexcore for welcome calling and customer satisfaction surveys. The quality of interactions consistently exceeds our expectations.",
            rating: 5
        },
        {
            name: "Vikram Singh",
            role: "Regional Manager, Women Loan Program",
            quote: "Their specialized approach to women-centric loan verification is sensitive, thorough, and efficient. Our approval rates improved while maintaining strict KYC standards.",
            rating: 5
        },
        {
            name: "Ananya Desai",
            role: "VP Operations, Contact Center Outsourcing",
            quote: "Scalable, reliable, and transparent reporting — Urexcore delivers on every promise. Their high-volume outbound capabilities are best-in-class.",
            rating: 5
        },
        {
            name: "Mohit Agarwal",
            role: "Founder, EV Rental Platform",
            quote: "Service follow-up and activation confirmation calls handled by Urexcore helped us reduce churn by 30%. Their team truly understands the EV mobility space.",
            rating: 5
        },
        {
            name: "Kavita Nair",
            role: "Compliance Officer, NBFC",
            quote: "Document confirmation and repayment reminder calls are executed with precision. Urexcore maintains the data security standards our industry demands.",
            rating: 5
        }
    ];

    $scope.testimonialIndex = 0;
    $scope.visibleCount = 3;
    $scope.slideStep = 33.333;
    var slideInterval;

    function updateVisibleCount() {
        if (window.innerWidth < 768) {
            $scope.visibleCount = 1;
            $scope.slideStep = 100;
        } else if (window.innerWidth < 992) {
            $scope.visibleCount = 2;
            $scope.slideStep = 50;
        } else {
            $scope.visibleCount = 3;
            $scope.slideStep = 33.333;
        }

        $scope.slideMaxIndex = Math.max(0, $scope.testimonials.length - $scope.visibleCount);
        if ($scope.testimonialIndex > $scope.slideMaxIndex) {
            $scope.testimonialIndex = 0;
        }
    }

    $scope.nextTestimonial = function() {
        if ($scope.testimonialIndex >= $scope.slideMaxIndex) {
            $scope.testimonialIndex = 0;
        } else {
            $scope.testimonialIndex += 1;
        }
    };

    $scope.prevTestimonial = function() {
        if ($scope.testimonialIndex <= 0) {
            $scope.testimonialIndex = $scope.slideMaxIndex;
        } else {
            $scope.testimonialIndex -= 1;
        }
    };

    $scope.goToTestimonial = function(index) {
        if (index >= 0 && index <= $scope.slideMaxIndex) {
            $scope.testimonialIndex = index;
        }
    };

    function startCarousel() {
        slideInterval = $interval(function() {
            $scope.nextTestimonial();
        }, 3000);
    }

    updateVisibleCount();
    window.addEventListener('resize', function() {
        $scope.$applyAsync(updateVisibleCount);
    });

    $scope.pauseCarousel = function() {
        if (slideInterval) {
            $interval.cancel(slideInterval);
            slideInterval = null;
        }
    };

    $scope.resumeCarousel = function() {
        if (!slideInterval) {
            startCarousel();
        }
    };

    startCarousel();

    $scope.$on('$destroy', function() {
        if (slideInterval) {
            $interval.cancel(slideInterval);
        }
    });
});
