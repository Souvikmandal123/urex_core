var app = angular.module('urexcoreApp', []);

app.controller('MainController', function($scope) {
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
});
