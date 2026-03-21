# Odoo Version Support Policy& Impact on User License Pricing (2026)

## 1. The Core Policy Shift
Historically, Odoo followed an "N-3" support rule, meaning they only provided bug fixes and security patches for the three most recent major versions.

Starting in July 2025, Odoo officially changed its terms to support all versions (from Odoo 9.0 up to the current Odoo 19.x) indefinitely. This means even if you are on an ancient version, Odoo’s support team will no longer tell you "we cannot help until you upgrade." However, this extended support is now funded by a new fee structure.

## 2. The "3-Version" Threshold & Legacy Surcharge
The term "versions older than 3" refers to any release that falls outside the window of the three most recently released major versions.

Covered Versions (Current): Odoo 19, Odoo 18, and Odoo 17. These versions are charged at the Standard Subscription Rate.

Legacy Versions: Odoo 16, 15, 14, and older. These versions are subject to a 25% Legacy Support Surcharge.

## 3. Financial Impact on User License Fees
The impact is significant for businesses on older systems. The 25% surcharge is calculated based on your entire annual subscription cost, not just individual modules.

Example Calculation:

Users: 50

Annual License Cost: $15,000 (standard rate)

Legacy Surcharge (25%): $3,750

Total New Annual Cost: $18,750

## 4. Critical Deadlines for 2026
April 2026 (The "Go-Live" for Invoicing): While the policy was announced in 2025, Odoo provided a grace period. April 2026 is the first month that legacy surcharges will actually appear on invoices for users who have not yet upgraded to Odoo 17+.

October 31, 2026: This is the hard "Kill Date" for Odoo 14 on Odoo.sh. While Odoo supports the code indefinitely, the hosting platform (Odoo.sh) will decommission version 14 on this date due to underlying OS (Ubuntu) and Python incompatibility.

## 5. Hosting-Specific Impacts
Odoo Online (SaaS): Exempt. Users are automatically upgraded to the latest version, so they never incur the 25% surcharge.

Odoo.sh & On-Premise: Affected. These users must manually initiate upgrades. If they choose to stay on a version older than v17, the 25% fee applies.

## Official Reference Summary
Odoo Enterprise Subscription Agreement (Updated July 2025): Section on "Maintenance of Older Versions" defines the 25% surcharge.

Founder Announcement (Fabien Pinckaers): Detailed the shift from EOL to Perpetual Support to reduce the "pressure of forced upgrades."

Odoo.sh Lifecycle Policy: Lists the 6-year hosting limit for individual versions on the .sh platform.

## 20-Point FAQ: What Odoo Users Should Know
Does Odoo still have "End of Life" (EOL) versions? No, technically all Enterprise versions are now supported, provided you pay the surcharge.

What is the "Legacy Surcharge"? A 25% additional fee on your annual subscription for using a version older than the three most recent ones.

Which versions are currently "Covered" (No extra fee)? Odoo 17, 18, and 19.

When do I start paying the 25% fee? On your first renewal after April 2026 if you are on Odoo 16 or older.

Can I avoid the fee by upgrading? Yes. If you upgrade to v17, v18, or v19 before your renewal, the fee is waived.

Does this apply to Odoo Community? No. Community is free, but it receives zero official bug fixes or security patches from Odoo SA.

What if I am mid-migration in April 2026? You should contact your Account Manager; Odoo may grant a 1-2 month waiver if proof of an active migration is provided.

Is Odoo 16 still supported? Yes, but as a "Legacy Version" requiring the surcharge.

What happens to Odoo 14 on Odoo.sh in October 2026? It will be blocked from production use. You must move to a newer version or move to On-Premise.

Why did Odoo make this change? To fund the maintenance of security patches for very old codebases while allowing businesses more time to upgrade.

Does the fee apply to Monthly subscriptions? Yes, the monthly rate will increase by 25%.

Is there a surcharge for Odoo Online users? No. Upgrades are automatic and included in the base price.

Will Odoo still fix bugs in Version 12? Yes, if reported by an Enterprise customer paying the surcharge.

What about custom modules? The surcharge covers Odoo standard code. Support for your custom modules remains your responsibility or your partner's.

Is the 25% fee one-time? No, it is recurring annually until you upgrade to a covered version.

Does this affect the "One App Free" plan? No, as that plan is only available on Odoo Online, which is exempt.

What version should I upgrade to now? Odoo 19 is recommended for the longest support runway.

Can I stay on a legacy version forever? Theoretically yes on-premise, but third-party integrations (banks, carriers) may eventually break due to API changes.

Does the 25% fee apply to the hosting cost of Odoo.sh? No, it only applies to the user license portion of the subscription.

Is there a "grace version"? Currently, Odoo 17 is the oldest "Covered Version." When Odoo 20 is released (expected late 2026), Odoo 17 will become "Legacy."