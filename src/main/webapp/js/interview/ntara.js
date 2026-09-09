const descriptions = {
    erp: {
        title: "ERP ",
        body: `<p><strong>Role:</strong> System of record for product master data</p>
             <ul>
               <li>Owns SKUs and product-item specifications</li>
               <li>Owns inventory levels and availability</li>
               <li>Publishes create / update / status / inventory events</li>
             </ul>
             <p><strong>Flow:</strong> ERP → PIM  Can be pushed on an Event basis or by batch</p>`
    },
    dam: {
        title: "DAM (Digital Asset Management)",
        body: `<p><strong>Role:</strong> System of record for digital assets (images, videos, documents).</p>
             <ul>
               <li>Stores binary files and versions</li>
               <li>Maintains metadata, rights and usage information</li>
               <li>Exposes an http API endpoint for retrieval and events</li>
             </ul>
             <p><strong>Flow:</strong> DAM → Event Broker → PIM (PIM stores references and links assets to products).</p>`
    },
    pim: {
        title: "PIM (Product Information Management)",
        body: `<p><strong>Role:</strong> Central hub for product content, taxonomy and syndication.</p>
             <ul>
               <li>SKU ingestion from ERP</li>
               <li>Taxonomy ownership</li>
               <li>Marketing content and enhanced attributes</li>
               <li>Completeness workflows</li>
               <li>Syndication data structures for downstream channels</li>
             </ul>
             <p>Single source of truth for enriched product content. Publishes approved records to downstream channels. In this diagram, Commerce Cloud, AEM, and other channels</p>`
    },
    broker: {
        title: "Event Broker (Optional)",
        body: `<p><strong>Role:</strong> Central pub/sub and webhook handler.</p>
             <ul>
               <li>Receives webhooks/events from ERP, DAM and PIM</li>
               <li>Publishes topics (e.g. erp product updated, dam asset published, pim product approved)</li>
               <li>Allows for decoupling of systems - multiple consumers without point-to-point direct connection</li>
             </ul>`
    },
    aem: {
        title: "Adobe AEM (CMS)",
        body: `<p><strong>Role:</strong> Content management system for design and delivery of digital experiences.</p>
             <ul>
               <li>Consumes taxonomy, marketing descriptions and asset references from PIM</li>
               <li>Powers marketing sites, landing pages and brand experiences</li>
               <li>Does not own core product master data or inventory</li>
             </ul>`
    },
    sfcc: {
        title: "Salesforce Commerce Cloud",
        body: `<p><strong>Role:</strong> Ecommerce storefront platform.</p>
             <ul>
               <li>Receives full product catalog, enriched content, taxonomy, and asset links from PIM</li>
               <li>Handles cart, checkout and customer-facing presentation</li>
             </ul>`
    },
    other: {
        title: "Other Channels",
        body: `<p><strong>Role:</strong> Additional distribution points</p>
             <ul>
               <li>Subscribe to the same validated product events published by PIM</li>
               <li>Receive syndication payloads</li>
             </ul>`
    },
    "flow-erp-pim": {
        title: "Data Flow: ERP → PIM",
        body: `<p><strong>Carries:</strong> ERP is the source of all SKU attributes and specifications</p>
             <ul>
               <li>One way only; PIM intakes SKUs</li>
               <li>Scheduled batch delivery with event-driven optionally available possible</li>
               <li>SKUs preferrably delivered in JSON</li>
             </ul>
             <p>Contains SKU in its original form prior to any enrichment or structured taxonomy.</p>`
    },
    "flow-dam-pim": {
        title: "Data Flow: DAM → PIM",
        body: `<p><strong>Carries:</strong> Digital asset references and metadata (image/video links, rights, usage tags).</p>
             <ul>
               <li>PIM stores links to assets, not the binary files themselves</li>
               <li>Event-driven: fires when an asset is published or updated in the DAM</li>
               <li>Associates assets to the matching product/SKU already ingested from ERP</li>
             </ul>`
    },
    "flow-cloud-dam": {
        title: "Data Flow: API Endpoint ↔ DAM",
        body: `<p><strong>Carries:</strong> External access to DAM assets and metadata.</p>
             <p>Crud operations to update assets</p>`
    },
    "flow-pim-aem": {
        title: "Data Flow: PIM → Adobe AEM",
        body: `<p><strong>Carries:</strong> Approved marketing content, taxonomy, and asset references for ecommerce design.</p>
             <ul>
               <li>Only validated complete product records are syndicated</li>
               <li>API and/or event-driven publish</li>
               <li>Powers marketing pages and digital experiences</li>
             </ul>`
    },
    "flow-pim-sfcc": {
        title: "Data Flow: PIM → Salesforce Commerce Cloud",
        body: `<p><strong>Carries:</strong> Enriched catalog — taxonomy, marketing content, asset links, and inventory data.</p>
             <ul>
               <li>Feeds the live storefront</li>
               <li>Event-driven for updates, with scheduled full syncs as a safety net</li>
               <li>May receive limited feedback events</li>
             </ul>`
    },
    "flow-pim-other": {
        title: "Data Flow: PIM → Other Channels",
        body: `<p><strong>Carries:</strong> Filtered or transformed syndication payloads for marketplaces, apps, and partner feeds.</p>
             <ul>
               <li>Recieves structured syndication catalogs like AEM and SFCC</li>
               <li>Payload shape is adapted per channel's requirements</li>
             </ul>`
    }
};

const popup      = document.getElementById('hoverPopup');
const popupArrow = document.getElementById('popupArrow');
const popupTitle = document.getElementById('popupTitle');
const popupBody  = document.getElementById('popupBody');

const GAP = 14; // distance the popup is offset outside the hovered box
let hideTimer = null;

function showPopup(el) {
    const data = descriptions[el.dataset.component];
    if (!data) return;
    clearTimeout(hideTimer);

    popupTitle.textContent = data.title;
    popupBody.innerHTML = data.body;

    const rect    = el.getBoundingClientRect();
    const scrollX = window.scrollX || document.documentElement.scrollLeft;
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Measure after content is set (popup is visibility:hidden, not display:none,
    // so it still lays out and reports real dimensions).
    const popupW = popup.offsetWidth;
    const popupH = popup.offsetHeight;

    // Decide whether the popup sits below or above the box, based on which half
    // of the viewport the box is in, so it always has room and stays outside it.
    const viewportH = window.innerHeight;
    const boxCenterY = rect.top + rect.height / 2;
    const placeBelow = boxCenterY < viewportH / 2;

    const top = placeBelow
        ? rect.bottom + scrollY + GAP
        : rect.top + scrollY - popupH - GAP;

    let left = rect.left + scrollX + rect.width / 2 - popupW / 2;
    const minLeft = scrollX + 12;
    const maxLeft = scrollX + document.documentElement.clientWidth - popupW - 12;
    left = Math.max(minLeft, Math.min(left, maxLeft));

    popup.style.top  = top + 'px';
    popup.style.left = left + 'px';

    // Keep the arrow pointing at the box's horizontal center even after clamping.
    const boxCenterX = rect.left + scrollX + rect.width / 2;
    let arrowLeft = boxCenterX - left - 7;
    arrowLeft = Math.max(14, Math.min(arrowLeft, popupW - 28));
    popupArrow.style.left = arrowLeft + 'px';

    popup.classList.remove('arrow-top', 'arrow-bottom');
    popup.classList.add(placeBelow ? 'arrow-top' : 'arrow-bottom');
    popup.classList.add('visible');
}

function hidePopup() {
    hideTimer = setTimeout(() => popup.classList.remove('visible'), 60);
}

document.querySelectorAll('.hotspot').forEach(el => {
    el.addEventListener('mouseenter', () => showPopup(el));
    el.addEventListener('mouseleave', hidePopup);
    el.addEventListener('focus', () => showPopup(el));
    el.addEventListener('blur', hidePopup);
    // Tap support for touch devices, which have no hover state.
    el.addEventListener('click', () => showPopup(el));
});

document.addEventListener('click', e => {
    if (!e.target.closest('.hotspot') && !e.target.closest('.hover-popup')) {
        popup.classList.remove('visible');
    }
});