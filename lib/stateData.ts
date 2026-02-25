export interface StateData {
  abbr: string;          // "CA"
  name: string;          // "California"
  slug: string;          // "california"
  stateTaxRate: number;  // 0.093
  noTax: boolean;        // true for TX, FL, etc.
  topCity: string;       // "Los Angeles"
  blurb: string;         // 1-sentence state-specific context
}

export const STATE_DATA: StateData[] = [
  { abbr: "AL", name: "Alabama",         slug: "alabama",          stateTaxRate: 0.050,  noTax: false, topCity: "Birmingham",    blurb: "Alabama freelancers pay a 5% state income tax with no local tax in most counties." },
  { abbr: "AK", name: "Alaska",          slug: "alaska",           stateTaxRate: 0.000,  noTax: true,  topCity: "Anchorage",     blurb: "Alaska has no state income tax, making it one of the most tax-friendly states for freelancers." },
  { abbr: "AZ", name: "Arizona",         slug: "arizona",          stateTaxRate: 0.025,  noTax: false, topCity: "Phoenix",       blurb: "Arizona's flat 2.5% income tax rate is one of the lowest in the country for freelancers." },
  { abbr: "AR", name: "Arkansas",        slug: "arkansas",         stateTaxRate: 0.047,  noTax: false, topCity: "Little Rock",   blurb: "Arkansas freelancers pay a top marginal rate of 4.7% on self-employment income." },
  { abbr: "CA", name: "California",      slug: "california",       stateTaxRate: 0.093,  noTax: false, topCity: "Los Angeles",   blurb: "California has the highest state income tax in the US at 9.3%+ for most freelancers, plus a 1% Mental Health Services surcharge above $1M." },
  { abbr: "CO", name: "Colorado",        slug: "colorado",         stateTaxRate: 0.044,  noTax: false, topCity: "Denver",        blurb: "Colorado's flat 4.4% income tax is straightforward for freelancers with predictable tax planning." },
  { abbr: "CT", name: "Connecticut",     slug: "connecticut",      stateTaxRate: 0.065,  noTax: false, topCity: "Hartford",      blurb: "Connecticut freelancers face a 6.5% marginal state rate plus no requirement to pay estimated taxes if you owe under $1,000." },
  { abbr: "DE", name: "Delaware",        slug: "delaware",         stateTaxRate: 0.066,  noTax: false, topCity: "Wilmington",    blurb: "Delaware has a 6.6% top state tax rate and no sales tax, making it popular for freelance business registration." },
  { abbr: "FL", name: "Florida",         slug: "florida",          stateTaxRate: 0.000,  noTax: true,  topCity: "Miami",         blurb: "Florida has no state income tax, saving the average freelancer $3,000–$8,000 per year compared to high-tax states." },
  { abbr: "GA", name: "Georgia",         slug: "georgia",          stateTaxRate: 0.055,  noTax: false, topCity: "Atlanta",       blurb: "Georgia's 5.5% flat income tax applies to all freelance income after deductions." },
  { abbr: "HI", name: "Hawaii",          slug: "hawaii",           stateTaxRate: 0.110,  noTax: false, topCity: "Honolulu",      blurb: "Hawaii has the highest top marginal state tax at 11%, making tax planning critical for freelancers there." },
  { abbr: "ID", name: "Idaho",           slug: "idaho",            stateTaxRate: 0.058,  noTax: false, topCity: "Boise",         blurb: "Idaho freelancers pay a 5.8% flat state income tax on net self-employment earnings." },
  { abbr: "IL", name: "Illinois",        slug: "illinois",         stateTaxRate: 0.0495, noTax: false, topCity: "Chicago",       blurb: "Illinois has a flat 4.95% income tax — freelancers in Chicago also pay city tax, so total state+local burden can be higher." },
  { abbr: "IN", name: "Indiana",         slug: "indiana",          stateTaxRate: 0.0305, noTax: false, topCity: "Indianapolis",  blurb: "Indiana's low 3.05% flat income tax makes it one of the more affordable states for freelancers in the Midwest." },
  { abbr: "IA", name: "Iowa",            slug: "iowa",             stateTaxRate: 0.060,  noTax: false, topCity: "Des Moines",    blurb: "Iowa's 6% top marginal rate applies to freelance income after the state's standard deduction." },
  { abbr: "KS", name: "Kansas",          slug: "kansas",           stateTaxRate: 0.057,  noTax: false, topCity: "Wichita",       blurb: "Kansas freelancers pay up to 5.7% in state income tax on self-employment earnings." },
  { abbr: "KY", name: "Kentucky",        slug: "kentucky",         stateTaxRate: 0.040,  noTax: false, topCity: "Louisville",    blurb: "Kentucky's flat 4.0% income tax is simple and predictable for freelancers." },
  { abbr: "LA", name: "Louisiana",       slug: "louisiana",        stateTaxRate: 0.060,  noTax: false, topCity: "New Orleans",   blurb: "Louisiana freelancers pay up to 6% in state income tax, with a relatively generous personal exemption." },
  { abbr: "ME", name: "Maine",           slug: "maine",            stateTaxRate: 0.075,  noTax: false, topCity: "Portland",      blurb: "Maine's 7.5% top marginal rate means freelancers must set aside more for state taxes alongside federal SE tax." },
  { abbr: "MD", name: "Maryland",        slug: "maryland",         stateTaxRate: 0.0575, noTax: false, topCity: "Baltimore",     blurb: "Maryland freelancers pay 5.75% in state tax plus county income taxes that vary by location." },
  { abbr: "MA", name: "Massachusetts",   slug: "massachusetts",    stateTaxRate: 0.090,  noTax: false, topCity: "Boston",        blurb: "Massachusetts charges 9% on income above $1M (\"Millionaire's Tax\") and 5% for most freelancers — one of the higher rates in the Northeast." },
  { abbr: "MI", name: "Michigan",        slug: "michigan",         stateTaxRate: 0.0425, noTax: false, topCity: "Detroit",       blurb: "Michigan's 4.25% flat income tax makes tax planning straightforward for freelancers statewide." },
  { abbr: "MN", name: "Minnesota",       slug: "minnesota",        stateTaxRate: 0.0985, noTax: false, topCity: "Minneapolis",   blurb: "Minnesota has one of the highest state income tax rates at 9.85%, requiring careful quarterly tax planning for freelancers." },
  { abbr: "MS", name: "Mississippi",     slug: "mississippi",      stateTaxRate: 0.050,  noTax: false, topCity: "Jackson",       blurb: "Mississippi freelancers pay a 5% flat state income tax after the first $10,000 of income." },
  { abbr: "MO", name: "Missouri",        slug: "missouri",         stateTaxRate: 0.047,  noTax: false, topCity: "Kansas City",   blurb: "Missouri's 4.7% top marginal rate is moderate, helping freelancers keep more of their self-employment income." },
  { abbr: "MT", name: "Montana",         slug: "montana",          stateTaxRate: 0.069,  noTax: false, topCity: "Billings",      blurb: "Montana freelancers pay up to 6.9% in state income tax with no sales tax to offset the burden." },
  { abbr: "NE", name: "Nebraska",        slug: "nebraska",         stateTaxRate: 0.0684, noTax: false, topCity: "Omaha",         blurb: "Nebraska's 6.84% top marginal rate applies to most mid-to-high earner freelancers in the state." },
  { abbr: "NV", name: "Nevada",          slug: "nevada",           stateTaxRate: 0.000,  noTax: true,  topCity: "Las Vegas",     blurb: "Nevada has no state income tax, making it highly attractive for remote freelancers relocating from high-tax states." },
  { abbr: "NH", name: "New Hampshire",   slug: "new-hampshire",    stateTaxRate: 0.000,  noTax: true,  topCity: "Manchester",    blurb: "New Hampshire does not tax earned income or self-employment income, offering significant savings for freelancers." },
  { abbr: "NJ", name: "New Jersey",      slug: "new-jersey",       stateTaxRate: 0.0637, noTax: false, topCity: "Newark",        blurb: "New Jersey's 6.37% marginal rate and high property taxes make overall tax planning essential for freelancers." },
  { abbr: "NM", name: "New Mexico",      slug: "new-mexico",       stateTaxRate: 0.059,  noTax: false, topCity: "Albuquerque",   blurb: "New Mexico freelancers pay up to 5.9% in state income tax on self-employment earnings." },
  { abbr: "NY", name: "New York",        slug: "new-york",         stateTaxRate: 0.0685, noTax: false, topCity: "New York City", blurb: "New York freelancers face a 6.85% state rate — NYC-based freelancers also pay city tax (3.876%), pushing combined rates near 15%." },
  { abbr: "NC", name: "North Carolina",  slug: "north-carolina",   stateTaxRate: 0.0475, noTax: false, topCity: "Charlotte",     blurb: "North Carolina's flat 4.75% income tax is one of the more competitive rates in the Southeast for freelancers." },
  { abbr: "ND", name: "North Dakota",    slug: "north-dakota",     stateTaxRate: 0.025,  noTax: false, topCity: "Fargo",         blurb: "North Dakota's low 2.5% flat rate makes it one of the most affordable Midwestern states for freelance income." },
  { abbr: "OH", name: "Ohio",            slug: "ohio",             stateTaxRate: 0.040,  noTax: false, topCity: "Columbus",      blurb: "Ohio freelancers pay a 4% state income tax, with some municipalities adding additional local income taxes." },
  { abbr: "OK", name: "Oklahoma",        slug: "oklahoma",         stateTaxRate: 0.050,  noTax: false, topCity: "Oklahoma City", blurb: "Oklahoma's 5% top marginal rate is moderate and applies to net self-employment income after deductions." },
  { abbr: "OR", name: "Oregon",          slug: "oregon",           stateTaxRate: 0.099,  noTax: false, topCity: "Portland",      blurb: "Oregon has one of the highest state income tax rates at 9.9%, but no sales tax — freelancers must plan carefully for state taxes." },
  { abbr: "PA", name: "Pennsylvania",    slug: "pennsylvania",     stateTaxRate: 0.0307, noTax: false, topCity: "Philadelphia",  blurb: "Pennsylvania's flat 3.07% income tax is among the lowest in the Northeast, though Philadelphia adds a city wage tax." },
  { abbr: "RI", name: "Rhode Island",    slug: "rhode-island",     stateTaxRate: 0.0599, noTax: false, topCity: "Providence",    blurb: "Rhode Island freelancers pay up to 5.99% in state income tax on self-employment earnings." },
  { abbr: "SC", name: "South Carolina",  slug: "south-carolina",   stateTaxRate: 0.070,  noTax: false, topCity: "Charleston",    blurb: "South Carolina's 7% top marginal rate means mid-to-high earner freelancers should plan quarterly payments carefully." },
  { abbr: "SD", name: "South Dakota",    slug: "south-dakota",     stateTaxRate: 0.000,  noTax: true,  topCity: "Sioux Falls",   blurb: "South Dakota has no state income tax and low cost of living, making it ideal for freelancers seeking tax efficiency." },
  { abbr: "TN", name: "Tennessee",       slug: "tennessee",        stateTaxRate: 0.000,  noTax: true,  topCity: "Nashville",     blurb: "Tennessee eliminated its Hall Tax on investment income in 2021 — freelancers pay zero state income tax." },
  { abbr: "TX", name: "Texas",           slug: "texas",            stateTaxRate: 0.000,  noTax: true,  topCity: "Austin",        blurb: "Texas has no state income tax, making it one of the top destinations for freelancers looking to reduce their tax burden." },
  { abbr: "UT", name: "Utah",            slug: "utah",             stateTaxRate: 0.0485, noTax: false, topCity: "Salt Lake City", blurb: "Utah's flat 4.85% income tax is competitive and applies uniformly to all freelance self-employment income." },
  { abbr: "VT", name: "Vermont",         slug: "vermont",          stateTaxRate: 0.0875, noTax: false, topCity: "Burlington",    blurb: "Vermont's 8.75% top marginal rate is among the highest in New England — quarterly tax planning is essential." },
  { abbr: "VA", name: "Virginia",        slug: "virginia",         stateTaxRate: 0.0575, noTax: false, topCity: "Richmond",      blurb: "Virginia freelancers pay a 5.75% top marginal state rate and are required to make quarterly estimated payments." },
  { abbr: "WA", name: "Washington",      slug: "washington",       stateTaxRate: 0.000,  noTax: true,  topCity: "Seattle",       blurb: "Washington state has no income tax — high-earning Seattle freelancers save tens of thousands compared to neighboring Oregon." },
  { abbr: "WV", name: "West Virginia",   slug: "west-virginia",    stateTaxRate: 0.065,  noTax: false, topCity: "Charleston",    blurb: "West Virginia freelancers pay up to 6.5% in state income tax on self-employment income." },
  { abbr: "WI", name: "Wisconsin",       slug: "wisconsin",        stateTaxRate: 0.0765, noTax: false, topCity: "Milwaukee",     blurb: "Wisconsin's 7.65% top marginal rate is one of the higher Midwestern rates for freelancers." },
  { abbr: "WY", name: "Wyoming",         slug: "wyoming",          stateTaxRate: 0.000,  noTax: true,  topCity: "Cheyenne",      blurb: "Wyoming has no state income tax and no corporate income tax, making it extremely tax-friendly for freelancers." },
  { abbr: "DC", name: "Washington D.C.", slug: "washington-dc",    stateTaxRate: 0.085,  noTax: false, topCity: "Washington",    blurb: "Washington D.C. freelancers pay up to 8.5% in district income tax — one of the highest rates on the East Coast." },
];

export function getStateBySlug(slug: string): StateData | undefined {
  return STATE_DATA.find((s) => s.slug === slug);
}

export function getStateParams() {
  return STATE_DATA.map((s) => ({ state: s.slug }));
}
