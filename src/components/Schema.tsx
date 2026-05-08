"use client";

import React from 'react';

export default function Schema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AdventurePark",
    "name": "G5 Adventure Mint",
    "alternateName": "G5 Adventure Rishikesh",
    "url": "https://rishikeshriverrafting.in",
    "logo": "https://rishikeshriverrafting.in/images/logo.png",
    "image": [
      "https://rishikeshriverrafting.in/images/hero.png",
      "https://rishikeshriverrafting.in/images/rafting-main.png"
    ],
    "description": "G5 Adventure Mint is India's premier high-octane adventure hub in Rishikesh, specializing in white water rafting, highest bungee jumping, and specialized tactical basecamps.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1002, Avas Vikas Colony",
      "addressLocality": "Rishikesh",
      "addressRegion": "Uttarakhand",
      "postalCode": "249201",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.1033,
      "longitude": 78.2948
    },
    "telephone": "+919639377776",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/g5adventure",
      "https://www.instagram.com/g5adventure"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Adventure Packages",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "River Rafting",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "16KM Rafting Expedition"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "26KM Extreme Rafting"
              }
            }
          ]
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best time for river rafting in Rishikesh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best time for river rafting in Rishikesh is from September to mid-November and from March to June when the weather is pleasant and water levels are optimal."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the G5 Adventure Mint camp located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "G5 Adventure Mint has multiple strategic locations including Kodiyala (High Octane) and Shivpuri (Strategic Base), offering both riverside beach and jungle immersion stays."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
