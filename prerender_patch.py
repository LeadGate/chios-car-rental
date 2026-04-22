"""Post-build HTML patcher for chios-car-rental.com.

Applies golden rules #156, #166, #179, #136, #112:
- Overrides prerender.mjs slug-derived titles with SEOHead-grade titles.
- Upserts per-route description, canonical, og:*, twitter:* tags.
- Injects FAQPage JSON-LD schema into /chios-car-rental-faq/index.html.
- Injects Article JSON-LD schema into guide routes (airport, driving, day-trips, parking).
- Copies og-image.jpg -> og-image.png so any stale references resolve.
- Removes Netlify 301 line from _redirects (CF Pages / Vercel target).

Run after `npm run build`, before `wrangler pages deploy` / `vercel --prod`.
"""

import json
import re
import shutil
from pathlib import Path

DIST = Path(__file__).parent / "dist"
PUBLIC = Path(__file__).parent / "public"
DOMAIN = "chios-car-rental.com"
BRAND = "Chios Car Rental"

# Map route -> (title<=60, description<=160)
ROUTES = {
    "": (
        "Chios Car Rental | Compare Local & JKH Airport Deals",
        "Chios car rental comparison. Off-peak rates from €22/day, JKH airport pickup, mastic villages routes, and Greek Law 5209/2025 driving updates.",
    ),
    "chios-airport-car-rental": (
        "JKH Airport Car Rental Pickup | Chios Car Rental",
        "How Chios Island National Airport (JKH / Omiros) rental pickup works: HCAA-run terminal, Arrivals Hall desks, SMART 400m lot, EL.IN refuel stop.",
    ),
    "driving-in-chios": (
        "Driving in Chios: 2026 Rules & Fines | Chios Car Rental",
        "Chios driving essentials under Greek Law 5209/2025: 30 km/h urban limit, €350 phone fines, IDP exemptions (Law 4850/2021), and road-by-road cautions.",
    ),
    "day-trips-from-chios": (
        "Chios Mastic Villages Driving Itinerary | Chios Car Rental",
        "Mastic villages road trip from Chios Town: Pyrgi (28 km), Mesta (35 km), Olympi, Anavatos. Parking outside walls, Mastic Museum €8, full-day loop.",
    ),
    "parking-and-fuel-guide": (
        "Chios Parking & Fuel Guide 2026 | Chios Car Rental",
        "Where locals park in Chios Town (Farkaina, Ramnis, Evodos) and which Chios petrol station is cheapest: EL.IN €1.939 vs Leoforos Enoseos €2.099.",
    ),
    "chios-car-rental-faq": (
        "Chios Car Rental FAQ | Chios Car Rental",
        "Ten answers for Chios rental: IDP rules, 30 km/h limit, Çeşme ferry, CDW excess, minimum age, debit cards, mastic-village parking, and fine payment.",
    ),
    "about": (
        "About Chios Car Rental — Our Sources & Methods",
        "How Chios Car Rental researches Greek Law 4850/2021, Law 5209/2025, HCAA airport operations, local fuel prices, and operator policies.",
    ),
    "contact": (
        "Contact Chios Car Rental | Chios Car Rental",
        "Questions about renting a car on Chios? Email info@chios-car-rental.com or read our FAQ and driving essentials before your trip.",
    ),
    "privacy": (
        "Privacy Policy | Chios Car Rental",
        "Privacy policy for chios-car-rental.com: what data we collect, affiliate cookies, and reader rights under GDPR.",
    ),
}

# Routes that should carry Article schema
ARTICLE_ROUTES = {
    "chios-airport-car-rental": "JKH Airport Car Rental Pickup",
    "driving-in-chios": "Driving in Chios: 2026 Rules & Fines",
    "day-trips-from-chios": "Chios Mastic Villages Driving Itinerary",
    "parking-and-fuel-guide": "Chios Parking & Fuel Guide 2026",
}


def replace_or_insert(html: str, pattern: str, replacement: str, insert_before: str = "</head>") -> str:
    if re.search(pattern, html):
        return re.sub(pattern, replacement, html, count=1)
    return html.replace(insert_before, f"{replacement}\n  {insert_before}", 1)


def patch_head(html: str, slug: str, title: str, description: str) -> str:
    canonical = f"https://{DOMAIN}/{slug}" if slug else f"https://{DOMAIN}/"

    # title
    html = re.sub(r"<title>[^<]*</title>", f"<title>{title}</title>", html, count=1)

    # description
    html = replace_or_insert(
        html,
        r'<meta name="description" content="[^"]*"\s*/?>',
        f'<meta name="description" content="{description}" />',
    )

    # canonical
    html = replace_or_insert(
        html,
        r'<link rel="canonical" href="[^"]*"\s*/?>',
        f'<link rel="canonical" href="{canonical}" />',
    )

    # og:title
    html = replace_or_insert(
        html,
        r'<meta property="og:title" content="[^"]*"\s*/?>',
        f'<meta property="og:title" content="{title}" />',
    )
    # og:description
    html = replace_or_insert(
        html,
        r'<meta property="og:description" content="[^"]*"\s*/?>',
        f'<meta property="og:description" content="{description}" />',
    )
    # og:url
    html = replace_or_insert(
        html,
        r'<meta property="og:url" content="[^"]*"\s*/?>',
        f'<meta property="og:url" content="{canonical}" />',
    )
    # og:image — enforce og-image.jpg
    html = re.sub(
        r'<meta property="og:image" content="[^"]*"\s*/?>',
        f'<meta property="og:image" content="https://{DOMAIN}/og-image.jpg" />',
        html,
        count=1,
    )
    # twitter:title / twitter:description
    html = replace_or_insert(
        html,
        r'<meta name="twitter:title" content="[^"]*"\s*/?>',
        f'<meta name="twitter:title" content="{title}" />',
    )
    html = replace_or_insert(
        html,
        r'<meta name="twitter:description" content="[^"]*"\s*/?>',
        f'<meta name="twitter:description" content="{description}" />',
    )

    return html


def inject_article_schema(html: str, slug: str, headline: str, description: str) -> str:
    schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": headline,
        "description": description,
        "url": f"https://{DOMAIN}/{slug}",
        "mainEntityOfPage": {"@type": "WebPage", "@id": f"https://{DOMAIN}/{slug}"},
        "author": {"@type": "Organization", "name": BRAND, "url": f"https://{DOMAIN}"},
        "publisher": {
            "@type": "Organization",
            "name": BRAND,
            "url": f"https://{DOMAIN}",
            "logo": {"@type": "ImageObject", "url": f"https://{DOMAIN}/favicon-512.png"},
        },
        "datePublished": "2026-04-22",
        "dateModified": "2026-04-22",
        "inLanguage": "en",
    }
    tag = f'<script type="application/ld+json">{json.dumps(schema, ensure_ascii=False)}</script>'
    if "application/ld+json" in html and "Article" in html and '"@type": "Article"' in html:
        return html  # already present
    return html.replace("</head>", f"  {tag}\n  </head>", 1)


def load_faq_items_from_tsx() -> list[dict]:
    """Parse faqItems array out of FAQ.tsx source."""
    tsx = (Path(__file__).parent / "src" / "pages" / "FAQ.tsx").read_text(encoding="utf-8")
    # match: { question: "...", answer: "..." }
    items = []
    for m in re.finditer(
        r'\{\s*question:\s*"((?:\\.|[^"\\])*)"\s*,\s*answer:\s*"((?:\\.|[^"\\])*)"\s*\}',
        tsx,
    ):
        q = m.group(1).replace('\\"', '"')
        a = m.group(2).replace('\\"', '"')
        # strip HTML tags from answer for schema text
        a_clean = re.sub(r"<[^>]+>", "", a)
        if len(a_clean) > 500:
            a_clean = a_clean[:497] + "..."
        # skip the "Useful planning links" / "FAQ extras" stitch items
        if len(a_clean.strip()) < 50:
            continue
        items.append({"question": q, "answer": a_clean})
    return items


def inject_faq_schema(html: str, faq_items: list[dict]) -> str:
    schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": item["question"],
                "acceptedAnswer": {"@type": "Answer", "text": item["answer"]},
            }
            for item in faq_items
        ],
    }
    tag = f'<script type="application/ld+json">{json.dumps(schema, ensure_ascii=False)}</script>'
    return html.replace("</head>", f"  {tag}\n  </head>", 1)


def fix_redirects():
    """Strip Netlify 301 line from _redirects if deploying to CF Pages / Vercel (rule #181)."""
    for p in [PUBLIC / "_redirects", DIST / "_redirects"]:
        if not p.exists():
            continue
        txt = p.read_text(encoding="utf-8")
        new = "\n".join(line for line in txt.splitlines() if ".netlify.app" not in line)
        if new != txt:
            p.write_text(new, encoding="utf-8")
            print(f"  stripped Netlify 301 from {p.name}")


def main():
    # 1. Root index.html + every route/index.html
    for slug, (title, desc) in ROUTES.items():
        idx = DIST / (slug if slug else "") / "index.html"
        if not idx.exists():
            print(f"  skip (missing): /{slug}")
            continue
        html = idx.read_text(encoding="utf-8")
        html = patch_head(html, slug, title, desc)

        # Article schema for guide routes
        if slug in ARTICLE_ROUTES:
            html = inject_article_schema(html, slug, title, desc)

        idx.write_text(html, encoding="utf-8")
        print(f"  patched: /{slug if slug else ''}")

    # 2. FAQPage schema into /chios-car-rental-faq/index.html
    faq_idx = DIST / "chios-car-rental-faq" / "index.html"
    if faq_idx.exists():
        items = load_faq_items_from_tsx()
        if items:
            html = faq_idx.read_text(encoding="utf-8")
            html = inject_faq_schema(html, items)
            faq_idx.write_text(html, encoding="utf-8")
            print(f"  injected FAQPage schema ({len(items)} items)")

    # 3. og-image.jpg -> og-image.png (rule: index.html may reference .png)
    src = PUBLIC / "og-image.jpg"
    for dst in [PUBLIC / "og-image.png", DIST / "og-image.png", DIST / "og-image.jpg"]:
        if src.exists() and (not dst.exists() or dst.stat().st_size != src.stat().st_size):
            shutil.copy(src, dst)
            print(f"  copied og-image -> {dst.relative_to(Path(__file__).parent)}")

    # 4. Netlify artifact strip (rule #181)
    fix_redirects()

    print("Done.")


if __name__ == "__main__":
    main()
