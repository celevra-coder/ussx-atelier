<script lang="ts">
        import './layout.css';

        let { children } = $props();
</script>

<svelte:head>
        <title>USSX | STEM ???????, 3D ?????, ??????? ??????? ? ?????? ??????????</title>

        <meta
                name="description"
                content="USSX ? ?????? ?? STEM ??????? ?? ????, 3D ?????, ????????? ???????????, ??????? ??????? ? ???????? ?? ?????? ?????????? ? ????????."
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://uss-x.bg/" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="USSX" />
        <meta property="og:title" content="USSX | STEM ???????, 3D ????? ? ?????? ??????????" />
        <meta
                property="og:description"
                content="??????????? STEM ??????? ?? ????, 3D ?????, ????????? ???????????, ??????? ??????? ? ???????? ?? ?????? ??????????."
        />
        <meta property="og:url" content="https://uss-x.bg/" />
        <meta property="og:image" content="https://uss-x.bg/images/solar-split-banner.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="USSX | STEM ???????, 3D ????? ? ?????? ??????????" />
        <meta
                name="twitter:description"
                content="STEM ??????? ?? ????, 3D ?????, ????????? ???????????, ??????? ??????? ? ????????."
        />
        <meta name="twitter:image" content="https://uss-x.bg/images/solar-split-banner.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <!-- Schema.org structured data -->
        <script type="application/ld+json">
{
        "@context": "https://schema.org",
        "@graph": [
                {
                        "@type": "Organization",
                        "@id": "https://uss-x.bg/#organization",
                        "name": "USSX",
                        "url": "https://uss-x.bg/",
                        "description": "Ателие за STEM кръжоци, 3D печат, креативно инженерство, соларни решения и зелени технологии.",
                        "sameAs": [
                                "https://www.facebook.com/profile.php?id=61591372162296"
                        ],
                        "areaServed": {
                                "@type": "Country",
                                "name": "България"
                        },
                        "knowsAbout": [
                                "STEM кръжоци за деца",
                                "3D печат",
                                "3D моделиране",
                                "роботика",
                                "соларни решения",
                                "фотоволтаични системи",
                                "креативно инженерство",
                                "зелени технологии"
                        ]
                },
                {
                        "@type": "WebSite",
                        "@id": "https://uss-x.bg/#website",
                        "url": "https://uss-x.bg/",
                        "name": "USSX",
                        "publisher": {
                                "@id": "https://uss-x.bg/#organization"
                        },
                        "inLanguage": "bg-BG"
                },
                {
                        "@type": "EducationalOrganization",
                        "@id": "https://uss-x.bg/#educational-organization",
                        "name": "USSX",
                        "url": "https://uss-x.bg/",
                        "description": "Практически STEM кръжоци за деца, соларни обучения, 3D печат и инженерни проекти.",
                        "parentOrganization": {
                                "@id": "https://uss-x.bg/#organization"
                        }
                }
        ]
}
        </script>

</svelte:head>

{@render children()}
